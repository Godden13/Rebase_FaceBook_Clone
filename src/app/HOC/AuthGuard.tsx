import { useAuth } from '@/context/AuthContext'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

export default function AuthGuard() {
  const { user } = useAuth()
  const route = useRouter()
  const [userInfo, setUserInfo] = React.useState<any>(false)
  return function guard(props: any){
    if(!user){
      route.push("/")
    }else {
      setUserInfo({
        uid: user.uid,
        email: user.email,
        firstName: user.firstName,
      });
    }
  }


}
