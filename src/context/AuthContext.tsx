import React, { createContext, useContext, useEffect, useState } from "react";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendSignInLinkToEmail,
  signOut,
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

  const EmailLink = (email: string) => {
    return sendSignInLinkToEmail(auth, email, {
      url: 'http/localhost:3000/login',
      handleCodeInApp: true,
    })
  };

  const login = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = async () => {
    setUser(null);
    await signOut(auth);
  };

  return (
    <AuthContext.Provider value={{ user, signUp, login, EmailLink, logOut }}>
      {isLoading ? null : children}
    </AuthContext.Provider>
  );
};
