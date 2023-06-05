"use client";

import Home from "@/app/page";
import {
  Circle,
  FootButton,
  NewInput,
  Line2,
  Minor,
  Ptag,
  Row,
  Row3,
  SmallHeading,
  SmallLoginButton,
  ForgotAccount,
} from "@/Components/Atoms/Atoms";
import { FootHolder, LeftAttr, RightAttr } from "@/Components/Molecules";
import { Foot, ForgotNav, ForgotTemplate } from "@/Components/Organism";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Shop from "../shop/page";

export default function Page() {
  const [email, setEmail] = useState('')
  const [noEmail, setNoEmail] = useState(false)
  const { resetPassword } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(email)
    await resetPassword(email).then(()=>router.push("/"))

  }
  return (
    <div>
      <ForgotNav>
        <LeftAttr>
          <SmallHeading>facebook</SmallHeading>
        </LeftAttr>
        <RightAttr>
          <NewInput placeholder="Email or Phone" />
          <NewInput placeholder="Password" />
          <SmallLoginButton>Log in</SmallLoginButton>
          <ForgotAccount>Forgot Account?</ForgotAccount>
        </RightAttr>
      </ForgotNav>

      <ForgotTemplate onSubmit={handleSubmit}>
        {noEmail && <div className="noEmail">Enter an email</div>}
        <h2>Find your account</h2>
        <hr />
        <p>
          Please enter your email or mobile number to search for your account.
        </p>
        <NewInput
          placeholder="Email or mobile number"
          required
          onChange={(e) => {
            setEmail(e.target.value);
            console.log(email);
          }}
        />
        <div className="resetBtns">
          <SmallLoginButton
            onClick={() => {
              {
                router.push("/");
              }
            }}
          >
            Cancel
          </SmallLoginButton>
          <SmallLoginButton type="submit">Reset</SmallLoginButton>
        </div>
      </ForgotTemplate>

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
    </div>
  );
}

