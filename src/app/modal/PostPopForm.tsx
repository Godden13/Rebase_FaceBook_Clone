import { useState } from "react";
import { PopForm, MainPop } from "@/Components/Organism";
import {
  CreatePost__title,
  CreatePost__title__innerContianer,
  TittleCreate,
  CreatePost__profile__prefence,
  Profile__holder,
  StatusPreference,
  WriteStatus,
  Styled__backDiv,
  PostDiv,
  List,
} from "@/Components/Molecules";
import {
  ClosepopUp,
  LockedDiv,
  WrtieMind__status,
  List__li,
  Postsub__Button,
} from "@/Components/atoms/Atoms";

import { Whappy, Bac, Lock, Downarrow } from "@/Components/atoms/IconsAtoms";

import Image from "next/image";

import ThemeImoji1 from "../../assets/SATP_Aa_square-2x.png";
import ThemeImoji2 from "../../assets/smile.png";
import GalleryImoji from "../../assets/gallerry.png";
import TagImoji from "../../assets/tag.png";
import GiftImoji from "../../assets/gift.png"; 

import { ThemeStyle, ThemeStyle1, LiStyle } from "@/Components/atoms/Atoms";


const PostPopForm = ({ setOpen }: any) => {
  const [textValue, setTextValue] = useState("");

  const handleTextChange = (e: any) => {
    setTextValue(e.target.value);
  };

  return (
    <>
      <MainPop>
        <PopForm>
          <CreatePost__title>
            <CreatePost__title__innerContianer>
              <TittleCreate>
                <h2>Create Post </h2>
              </TittleCreate>
              <ClosepopUp onClick={() => setOpen(false)}>x</ClosepopUp>
            </CreatePost__title__innerContianer>
          </CreatePost__title>
          <CreatePost__profile__prefence>
            <Profile__holder></Profile__holder>
            <StatusPreference>
              <p>Bata humphrey</p>
              <LockedDiv>
                <Lock />
                only me
                <Downarrow />
              </LockedDiv>
            </StatusPreference>
          </CreatePost__profile__prefence>
          <WriteStatus>
            <WrtieMind__status
              placeholder="What is your mind, Bata?"
              onChange={handleTextChange}
              value={textValue}
            />
          </WriteStatus>
          <Styled__backDiv>
            <Image src={ThemeImoji1} alt="the user" style={ThemeStyle} />
            <Image src={ThemeImoji2} alt="smile" style={ThemeStyle1} />
          </Styled__backDiv>
          <PostDiv>
            <p>Add to your Post</p>
            <List>
              <List__li>
                <Image src={GalleryImoji} alt="alt" style={LiStyle} />
              </List__li>
              <List__li>
                <Image src={TagImoji} alt="alt" style={LiStyle} />
              </List__li>
              <List__li>
                <Image src={ThemeImoji2} alt="alt" style={LiStyle} />
              </List__li>
              <List__li>
                <Image src={GiftImoji} alt="alt" style={LiStyle} />
              </List__li>
              <List__li>
                <Image src={GalleryImoji} alt="alt" style={LiStyle} />
              </List__li>
              <List__li>
                <p>...</p>
              </List__li>
            </List>
          </PostDiv>

          <Postsub__Button type="submit" active={!!textValue}>
            Post
          </Postsub__Button>
        </PopForm>
      </MainPop>
    </>
  );
};

export default PostPopForm;