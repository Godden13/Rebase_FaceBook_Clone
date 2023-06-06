import React from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { getInfo } from "@/firebase/config";
import { useRouter } from "next/navigation";

const AuthGaurd = (Component: any) => {
  const auth = getAuth();
  // const router = useRouter()
  return function Gaurd(props: any) {
    const [userInfo, setUserInfo] = React.useState<any>(false);
    React.useEffect((): any => {
      const unsubscribe = onAuthStateChanged(auth, async (user: any) => {
        if (user) {
          const currUser = {
            uid: user.uid,
            email: user.email,
            displayname: user.displayName,
            phoneNumber: user.phoneNumber,
            photoURL: user.photoURL,
            emailVerified: user.emailVerified /* boolean */,
            // ...user,
          };
          const userCollectionRef = collection(getInfo, "users"); // takes only two arguments
          await getDoc(doc(userCollectionRef, `${user.uid}`)).then(
            (docSnap) => {
              setUserInfo({ ...currUser, ...docSnap.data() }); // docSnap returns a complex object but .data() converts it to the actuall stuff.
            }
          );
        } else {
          setUserInfo(null);
          // router.push('/')
        }
        ;
      });

      return () => unsubscribe;
    }, []);
    return typeof userInfo !== "boolean" ? (
      <>
        <Component {...props} userInfo={userInfo} />
      </>
    ) : (
      <p>Loading.....</p>
    );
  };
};
export default AuthGaurd;
