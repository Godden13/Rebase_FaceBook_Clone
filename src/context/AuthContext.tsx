import React, { createContext, useContext, useEffect, useState } from "react";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendSignInLinkToEmail,
  signOut,
  sendEmailVerification,
  User
} from "firebase/auth";
import { initFirebase } from "@/firebase/config";
const AuthContext = createContext<any>({});

export const useAuth = () => useContext(AuthContext);
const app = initFirebase()
const auth = getAuth(app);

export const AuthContextPRovider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          uid: user.uid,
          email: user.email,
         displayName: user.displayName, 
        });
      } else {
        setUser(null);
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signUp = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const EmailLink = async (email: string) => {
     await sendSignInLinkToEmail(auth, email, {
      url: "https://rebase-face-book-clone.vercel.app/Pages/shop",
      handleCodeInApp: true,
    });
  };

  const confirmEmail = () => {
    sendEmailVerification(auth.currentUser as User).then(() => {
      console.log("Email sent successfully")
    });
  }

  const login = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = async () => {
    setUser(null);
    await signOut(auth);
  };

  return (
    <AuthContext.Provider value={{ user, signUp, login, EmailLink, confirmEmail, logOut }}>
      {isLoading ? null : children}
    </AuthContext.Provider>
  );
};
