"use client";
import { PostForm, PostForm__innerContainer } from "@/Components/Organism";
import Image from "next/image";
import {
  Onyourmind,
  Multi__media,
  Multi__media_innercontainer,
  Icons__container,
  Icons__containers,
} from "@/Components/Molecules";

import { Mind__input, Proimg } from "@/Components/Atoms/Atoms";
import ProfilePicture from "@/assets/images/persons/4.jpeg";
import Live from "@/assets/images/icons/live.png";
import Gallery from "@/assets/images/icons/gallerry.png";
import Feel from "@/assets/images/icons/smile.png";
import PostPopForm from "./PostPopForm";
import { useState } from "react";

import { ImageStyle, ImageIcons } from "@/Components/Atoms/Atoms";

const Postbox = () => {
  const [open, setOpen] = useState(false);

  return (
    <PostForm>
      {open && <PostPopForm setOpen={setOpen} />}

      <PostForm__innerContainer>
        <Onyourmind>
          <Proimg>
            <Image
              src={ProfilePicture}
              alt="the user picture"
              style={ImageStyle}
            />
          </Proimg>

          <Mind__input
            onClick={() => setOpen(true)}
            type="text"
            placeholder="What is your mind, Bata?"
          />
        </Onyourmind>
        <Multi__media>
          <Multi__media_innercontainer>
            <Icons__container>
              <Image src={Live} alt="live video" style={ImageIcons} />
              <span>Live Video</span>
            </Icons__container>
            <Icons__container>
              <Image src={Gallery} alt="live video" style={ImageIcons} />
              <span>Photo/video</span>
            </Icons__container>
            <Icons__containers>
              <Image src={Feel} alt="live video" style={ImageIcons} />
              <span>Feeling/activity</span>
            </Icons__containers>
          </Multi__media_innercontainer>
        </Multi__media>
      </PostForm__innerContainer>
    </PostForm>
  );
};

export default Postbox;
