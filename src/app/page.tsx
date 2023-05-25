
"use client"
import { Foot, Main, Middle } from '../Components/Organism'
import { FootHolder, LeftHolder, RightForm, RightHolder } from '../Components/Molecules'
import { Heading2, Heading, Input, LogInButton, Link, SignUpButton, Line, SmallP, Row, Link2, Field, Minor, Ptag } from '../Components/Atoms'
import { useState } from 'react'
import Register from './modal/Modal'



export default function Home() {
  const [see, setSee] = useState(false)

  function signUp(e:any) {
    e.preventDefault()
    setSee(true)
  }
  

  return (
    <Main>
      {see && <Register />}
      <Middle>
        <LeftHolder>
          <Heading>facebook</Heading>
          <Heading2>Connect with friends and the world around you on Facebook.</Heading2>
        </LeftHolder>
        <RightHolder>
          <RightForm>
            <Input placeholder='Email or phone number'></Input>
            <Input placeholder='Password'></Input>
            <LogInButton><b>Log in</b></LogInButton>
            <Field>
              <Link2>Forgot password?</Link2>
            </Field>
            <Line />
            <Field>
              <SignUpButton onClick={(e) => signUp(e)}> <b>create new account</b></SignUpButton>
            </Field>
          </RightForm>
          <Row>
            <Link><b>Create a Page</b></Link>
            <SmallP>for a celebrity, brand or business.</SmallP>
          </Row>
        </RightHolder>
      </Middle>
      <Foot>

        <FootHolder>
          <Row>
            <Minor>English (us)</Minor> <Minor>Français (France)</Minor>
            <Minor>Fula</Minor> <Minor>Español (España)</Minor>
            <Minor>Deutsch</Minor> <Minor>Bahasa Indonesia</Minor> <Minor>Italiano</Minor>
            <Minor>Português (Brasil)</Minor><Minor>لعربية</Minor> <Minor>हिन्द</Minor><Minor>中文(简体)</Minor>
          </Row>
          <Line />
          <Row>
            <Minor>Sign Up</Minor><Minor>LogIn</Minor>
            <Minor>Messenger</Minor> <Minor>FacebookLite</Minor>
            <Minor>Watch</Minor> <Minor>Places</Minor>
            <Minor>Games</Minor> <Minor>Market place</Minor>
            <Minor>Meta Pay</Minor><Minor>Meta Store</Minor>
            <Minor>Meta Quest</Minor> <Minor>Instagram</Minor>
            <Minor>Fundraisers</Minor><Minor>Services</Minor><Minor>Voting Information Center</Minor>
            <Minor>Privacy Policy</Minor> <Minor>Privacy Center</Minor>
            <Minor>Groups</Minor> <Minor>About</Minor>
            <Minor>CreateAd</Minor> <Minor>Create Page</Minor>
            <Minor>Developers</Minor> <Minor>Careers</Minor>
            <Minor>Cookies</Minor> <Minor>Adchoices</Minor>
            <Minor>Terms</Minor> <Minor>Help</Minor>
            <Minor>Contact Uploading & Non-UsersSettings</Minor>
          </Row>
          <Ptag />

          <Minor>Meta © 2023</Minor>
        </FootHolder>

      </Foot>

    </Main>
  )
}
