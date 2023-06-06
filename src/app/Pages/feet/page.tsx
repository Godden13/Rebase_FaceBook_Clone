"use client";

import { FeetContainer, FeetContent, PostHolder } from "@/Components/Organism";
import { getInfo } from "@/firebase/config";
import AuthGaurd from "@/HOC/AuthGuard";
import FeedCard from "@/modal/FeedCard";
import LeftSideBar from "@/modal/LeftsideBar";
import Navbar from "@/modal/Navbar";
import Postbox from "@/modal/Postbox";
import RightSidebar from "@/modal/RightSidebar";
import Stories from "@/modal/Stories";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";

function Feed({ userInfo }: any) {
  const [getPost, setGetPost] = useState<any>([]);
  useEffect(() => {
    return onSnapshot(
      query(collection(getInfo, "post"), orderBy("id", "desc")),
      (snapshot) => {
        setGetPost(snapshot.docs);
      }
    );
  }, []);

  console.log(getPost);
  return (
    <div>
      <FeetContent>
        <Navbar />
        <LeftSideBar />
        <FeetContainer>
          <PostHolder>
            <Stories />
            <Postbox userInfo={userInfo} />
            <FeedCard />
          </PostHolder>
          <RightSidebar />
        </FeetContainer>
      </FeetContent>
    </div>
  );
}

export default AuthGaurd(Feed);
