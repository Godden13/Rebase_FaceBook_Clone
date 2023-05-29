"use client";
import { Foot, Main, Middle } from "../Components/Organism";
import {
  FootHolder,
  LeftHolder,
  RightForm,
  RightHolder,
} from "../Components/Molecules";
import {
  Heading2,
  Heading,
  Input,
  LogInButton,
  Link,
  SignUpButton,
  Line,
  SmallP,
  Row,
  Link2,
  Field,
  Minor,
  Ptag,
  Row2,
  Row3,
  Line2,
  FootButton,
} from "../Components/Atoms";
import { useState } from "react";
import { initFirebase } from "@/firebase/config";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword, getAuth } from "@firebase/auth";
import Register from "./modal/Modal";

export default function Home() {
  const app = initFirebase();
  const [see, setSee] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();

  function signUp(e: any) {
    e.preventDefault();
    setSee(!see);
  }

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
      {see && <Register see={see} setSee={setSee} />}
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
          />
          <Input
            placeholder="Password"
            onChange={(e) => {
              setData((prev) => ({ ...prev, password: e.target.value }));
            }}
          />
          <LogInButton type="submit">Log in</LogInButton>
          <Field>
            <Ptag>forgot password?</Ptag>
          </Field>
          <Line />
          <Field>
            <SignUpButton onClick={(e) => signUp(e)}>
              create new account
            </SignUpButton>
          </Field>
        </RightForm>
      </Middle>
      <Foot>
        <FootHolder>
          <Row>
            <Minor>English (us)</Minor> <Minor>Français (France)</Minor>
            <Minor>Fula</Minor> <Minor>Español (España)</Minor>
            <Minor>Deutsch</Minor> <Minor>Bahasa Indonesia</Minor>{" "}
            <Minor>Italiano</Minor>
            <Minor>Português (Brasil)</Minor>
            <Minor>لعربية</Minor> <Minor>हिन्द</Minor>
            <Minor>中文(简体)</Minor>
            <FootButton>+</FootButton>
          </Row>
          <Line2 />
          <Row3>
            <Minor>Sign Up</Minor>
            <Minor>LogIn</Minor>
            <Minor>Messenger</Minor> <Minor>FacebookLite</Minor>
            <Minor>Watch</Minor> <Minor>Places</Minor>
            <Minor>Games</Minor> <Minor>Market place</Minor>
            <Minor>Meta Pay</Minor>
            <Minor>Meta Store</Minor>
            <Minor>Meta Quest</Minor> <Minor>Instagram</Minor>
            <Minor>Fundraisers</Minor>
            <Minor>Services</Minor>
            <Minor>Voting Information Center</Minor>
            <Minor>Privacy Policy</Minor> <Minor>Privacy Center</Minor>
            <Minor>Groups</Minor> <Minor>About</Minor>
            <Minor>CreateAd</Minor> <Minor>Create Page</Minor>
            <Minor>Developers</Minor> <Minor>Careers</Minor>
            <Minor>Cookies</Minor> <Minor>Adchoices</Minor>
            <Minor>Terms</Minor> <Minor>Help</Minor>
            <Minor>Contact Uploading & Non-UsersSettings</Minor>
          </Row3>
          <Ptag />

          <Minor>Meta © 2023</Minor>
        </FootHolder>
      </Foot>
    </Main>
  );
}
