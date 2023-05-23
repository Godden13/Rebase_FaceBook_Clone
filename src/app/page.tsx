
"use client"
import { Main, Middle } from '../Components/Organism'
import { LeftHolder, RightForm } from '../Components/Molecules'
import {Heading2, Heading, Input, LogInButton, Ptag, SignUpButton, Line} from '../Components/Atoms'

export default function Home() {
  return (
    <Main>
      <Middle>
      <LeftHolder>
      <Heading>facebook</Heading>
     <Heading2>Connect with friends and the world around you on Facebook.</Heading2>
    </LeftHolder>
    <RightForm>
      <Input placeholder='Email or phone number'></Input>
      <Input placeholder='Password'></Input>
      <LogInButton>Log in</LogInButton>
      <Ptag>forgot password?</Ptag>
      <Line/>
      <SignUpButton>create new account</SignUpButton>
    </RightForm>
    </Middle>
    </Main>
  )
}
