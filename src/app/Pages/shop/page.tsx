import { initFirebase } from "@/firebase/config";
import { getAuth, signOut } from "@firebase/auth";

export default function Shop() {
  const app = initFirebase();

  // const auth = getAuth();
  // const handleClick = () => {
  //   signOut(auth)
  //     .then(() => {
  //       console.log("Success");
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  return (
    <main>
      <h1>girl</h1>
      {/* <button onClick={handleClick}></button> */}
    </main>
  );
}
