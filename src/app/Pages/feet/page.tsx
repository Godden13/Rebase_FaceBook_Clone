"use client";

import { FeetContainer, FeetContent, PostHolder } from "@/Components/Organism";
import FeedCard from "@/modal/FeedCard";
import LeftSideBar from "@/modal/LeftsideBar";
import Navbar from "@/modal/Navbar";
import Postbox from "@/modal/Postbox";
import RightSidebar from "@/modal/RightSidebar";
import Stories from "@/modal/Stories";
import React from "react";

function Feed() {
  return (
    <div>
      <FeetContent>
        <Navbar />
        <LeftSideBar />
        <FeetContainer>
          <PostHolder>
            <Stories />
            <Postbox />
            <FeedCard />
          </PostHolder>
        </FeetContainer>
        <RightSidebar />
      </FeetContent>
    </div>
  );
}

export default Feed;
