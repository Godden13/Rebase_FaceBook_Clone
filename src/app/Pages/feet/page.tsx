"use client";

import { FeetContainer, FeetContent, PostHolder } from "@/Components/Organism";
import { getInfo } from "@/firebase/config";
import AuthGaurd from "@/HOC/AuthGuard";
import FeedCard from "@/modal/FeedCard";
import LeftSideBar from "@/modal/LeftsideBar";
import LogoutProfile from "@/modal/LogoutProfile";
import Navbar from "@/modal/Navbar";
import Postbox from "@/modal/Postbox";
import RightSidebar from "@/modal/RightSidebar";
import Stories from "@/modal/Stories";
import { collection, onSnapshot, orderBy, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";

function Feed({ userInfo }: any) {
  const [logout, setLogout] = useState<any>(true);
  const [getPosts, setGetPosts] = useState<any>([]);
  const [currentUserInfo, setCurrentUserInfo] = useState<any>(null)
  useEffect(() => {
    return onSnapshot(
      query(collection(getInfo, "posts"), orderBy("id", "desc")),
      (snapshot) => {
        setGetPosts(snapshot.docs);
      }
    );
  }, []);

  useEffect(()=>{
    return onSnapshot(
      query(collection(getInfo, `users/${userInfo?.uid}`)),
      (snapshot)=> {
        setCurrentUserInfo(snapshot.docs)
      }
    );
  }, [userInfo])

  console.log(getPosts);
  return (
    <div>
      <FeetContent>
        <Navbar setLogout={setLogout} />
        {logout && <LogoutProfile />}
        <LeftSideBar />
        <FeetContainer>
          <PostHolder>
            <Stories />
            <Postbox
              userInfo={userInfo}
              getPosts={getPosts}
              currentUserInfo={currentUserInfo}
            />
            <FeedCard getPosts={getPosts} currentUserInfo={currentUserInfo} />
          </PostHolder>
          <RightSidebar />
        </FeetContainer>
      </FeetContent>
    </div>
  );
}

export default AuthGaurd(Feed);
