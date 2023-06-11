/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use client";
import { FeedCards } from "@/Components/Organism";
import ProfilePicture from "../assets/images/persons/5.jpeg";
/* import { Post } from "../assets/Dommydata"; */

import Snoop from "../assets/images/persons/6.jpeg";

import {
  CommentInput,
  ProfilePis,
  ProfilePise,
  Submit__commentsbtn,
} from "@/Components/Atoms/Atoms";

interface feedProps {
  width: string;
  height: string;
}

import { MainPis, Timer, Xmark } from "@/Components/Atoms/Atoms";

import {
  FeedPost__wrapper,
  FeedPostTop,
  PostImg,
  PostTopLeft,
  FeedPost__action,
  Feedpost__message,
  FeedMainImg,
  FeedPost__bottom,
  PostBottom,
  Feed__multimedia,
  Multi__smallcontainers,
  Comment__set,
  CommentWrapper,
} from "@/Components/Molecules";

import Image from "next/image";

import {
  Globe,
  Dots,
  LikedPost,
  Comments,
  SharePost,
  Xmarker,
  Whappy,
  Whappys,
} from "@/Components/Atoms/IconAtoms";

import Liked from "../assets/images/like.png";
import Loved from "../assets/images/heart.png";
import { CSSProperties, useEffect, useRef, useState } from "react";
import { Submit__comments } from "@/Components/Atoms/IconsAtoms";
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  setDoc,
} from "firebase/firestore";
import { getInfo } from "@/firebase/config";
import { useAuth } from "@/context/AuthContext";

interface ImgProps {
  width: any;
  height: any;
  style?: CSSProperties;
}
FeedMainImg;
function FeedCard({ getPosts }: any) {
  // function FeedCard() {

  const { user } = useAuth();
  const [likes, setLikes] = useState([]);
  const [liked, setLiked] = useState(false);

  const [comment, setComment] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef();
  const handleClick = () => {
    setComment((prev) => !prev);
  };

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(getInfo, "posts", getPosts[0].id, "likes"),
      (snapshot: any) => setLikes(snapshot.docs)
    );
  }, [getPosts[0].id]);

  useEffect(() => {
    setLiked(
      likes.findIndex((like: { id: any }) => like?.id === user?.uid) !== -1
    );
  }, [likes]);

  const closeComment = () => {
    setComment(false);
  };

  const handleInputChange = (event: any) => {
    setInputValue(event.target.value);
    console.log(inputValue);
  };

  const handlelike = async () => {
    if (liked) {
      await deleteDoc(
        doc(getInfo, "posts", getPosts[0].id, "likes", user?.uid)
      );
    } else {
      await setDoc(doc(getInfo, "posts", getPosts[0].id, "likes", user?.uid), {
        currentUser: user?.displayName,
      });
    }
  };

  return (
    <FeedCards>
      <FeedPost__wrapper>
        <FeedPostTop>
          <PostTopLeft>
            <PostImg>
              <Image
                src={ProfilePicture}
                alt="prof"
                style={ProfilePis}
                margin-rigth="22px"
                border-radius="50%"
              />
            </PostImg>
            <div>
              <p>Snoop Dog</p>
              <Timer>
                10h ago <Globe />
              </Timer>
            </div>
          </PostTopLeft>
          <FeedPost__action>
            <Dots />
            <Xmarker />
          </FeedPost__action>
        </FeedPostTop>
        <Feedpost__message>
          <p>Every moment is a fresh beginning.</p>
        </Feedpost__message>
        <FeedMainImg>
          <img
            src={getPosts[0]?.data()?.fileUrl}
            alt="snoop"
            style={MainPis}
            width={50}
            height={50}
          />
        </FeedMainImg>
        <FeedPost__bottom>
          <PostBottom>
            <Image src={Liked} alt="gh" height={30} width={30} />
            <Image src={Loved} alt="gh" height={30} width={30} />
            <span>{likes}</span>
          </PostBottom>
          <p>45 comments ...</p>
        </FeedPost__bottom>
        <Feed__multimedia>
          <Multi__smallcontainers onClick={() => handlelike()}>
            <p>
              <LikedPost liked={liked} />
              Like
            </p>
          </Multi__smallcontainers>
          <Multi__smallcontainers>
            <Comments onClick={handleClick} />
            <p onClick={handleClick}>Comments</p>
          </Multi__smallcontainers>
          <Multi__smallcontainers>
            <SharePost />
            <p>Share</p>
          </Multi__smallcontainers>
        </Feed__multimedia>

        {comment && (
          <Comment__set>
            <Image
              src={ProfilePicture}
              alt="prof"
              style={ProfilePise}
              margin-rigth="22px"
              border-radius="50%"
            />

            <CommentWrapper>
              <Whappys />
              <CommentInput
                type="text"
                placeholder="Write a public here comment"
              />
            </CommentWrapper>
            <Submit__commentsbtn onClick={handleInputChange}>
              <Submit__comments />
            </Submit__commentsbtn>
          </Comment__set>
        )}
      </FeedPost__wrapper>
    </FeedCards>
  );
}
export default FeedCard;
