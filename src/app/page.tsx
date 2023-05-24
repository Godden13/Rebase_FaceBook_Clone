
"use client"
import { Foot, Main, Middle } from '../Components/Organism'
import { LeftHolder, RightForm, RightHolder } from '../Components/Molecules'
import {Heading2, Heading, Input, LogInButton, Link, SignUpButton, Line, SmallP, Row, Link2} from '../Components/Atoms'




export default function Home() {
  return (
    <Main>
      <Middle>
      <LeftHolder>
      <Heading>facebook</Heading>
     <Heading2>Connect with friends and the world around you on Facebook.</Heading2>
    </LeftHolder>
    <RightHolder>
    <RightForm>
      <Input placeholder='Email or phone number'></Input>
      <Input placeholder='Password'></Input>
      <LogInButton>Log in</LogInButton>
      <Link2>forgot password?</Link2>
      <Line/>
      <SignUpButton>create new account</SignUpButton>
    </RightForm>
    <Row>
    <Link><b>Create a Page</b></Link> 
    <SmallP>for a celebrity, brand or business.</SmallP>
    </Row>
    </RightHolder>
    </Middle>
    <Foot/>
    </Main>
  )
}
