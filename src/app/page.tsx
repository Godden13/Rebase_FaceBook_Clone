
"use client"
import { Foot, Main, Middle } from '../Components/Organism'
import { LeftHolder, RightForm, RightHolder } from '../Components/Molecules'
import {Heading2, Heading, Input, LogInButton, Link, SignUpButton, Line, SmallP, Row, Link2, Field} from '../Components/Atoms'
import Register from './page/register/page'
import { useState } from 'react'




export default function Home() {
const [see, setSee] = useState(false)

  return (
    <Main>
     {see && <Register/>}
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
      <Field>
      <Link2>forgot password?</Link2>
      </Field>
      <Line/>
      <Field>
      <SignUpButton onClick={() => setSee(!see) }>create new account</SignUpButton>
      </Field>
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
