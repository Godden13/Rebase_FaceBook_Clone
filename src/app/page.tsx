"use client";
import { Main, Middle } from "../Components/Organism";
import { LeftHolder, RightForm } from "../Components/Molecules";
import {
  Heading2,
  Heading,
  Input,
  LogInButton,
  Ptag,
  SignUpButton,
  Line,
} from "../Components/Atoms";
import { initFirebase } from "@/firebase/config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPhoneNumber,
} from "@firebase/auth";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const app = initFirebase();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();

  const handleLogin = async (e: any) => {
    e.preventDefault();

    const { email, password } = data;
    const auth = getAuth(app);
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        router.push("/Pages/shop");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);
        // ..
      });
  };
  return (
    <Main>
      <Middle>
        <LeftHolder>
          <Heading>facebook</Heading>
          <Heading2>
            Connect with friends and the world around you on Facebook.
          </Heading2>
        </LeftHolder>
        <RightForm onSubmit={handleLogin}>
          <Input
            placeholder="Email or phone number"
            onChange={(e) => {
              setData((prev) => ({ ...prev, email: e.target.value }));
            }}
          ></Input>
          <Input
            placeholder="Password"
            onChange={(e) => {
              setData((prev) => ({ ...prev, password: e.target.value }));
            }}
          ></Input>
          <LogInButton type="submit">Log in</LogInButton>
          <Ptag>forgot password?</Ptag>
          <Line />
          <SignUpButton type="submit">create new account</SignUpButton>
        </RightForm>
      </Middle>
    </Main>
  );
}
