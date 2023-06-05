import { useContext, useEffect, useState } from "react";
import { PopForm, MainPop, Bg } from "@/Components/Organism";
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
  Para,
} from "@/Components/Atoms/Atoms";
import {
  Whappy,
  Bac,
  Lock,
  Downarrow,
  Xmarker,
} from "@/Components/Atoms/IconAtoms";
import Postpopupse from "./Postpopupse";

import Image from "next/image";
import Theme from "../assets/images/icons/heme.png";
import ThemeImoji2 from "../assets/images/icons/smile.png";
import GalleryImoji from "../assets/images/icons/gallerry.png";
import TagImoji from "../assets/images/icons/tag.png";
import GiftImoji from "../assets/images/icons/gift.png";
import { ThemeStyle, ThemeStyle1, LiStyle } from "@/Components/Atoms/Atoms";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { getInfo, initFirebase } from "@/firebase/config";
import { useAuth } from "@/context/AuthContext";

const PostPopForm = ({ setOpen }: any) => {
  const [imageList, setImageList] = useState<any>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [imageUpload, setImageUpload] = useState();
  const [textValue, setTextValue] = useState("");
  const [data, setData] = useState({
    title: "",
    fileUrl: imageList,
  });
  const { user } = useAuth();


  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const post = await addDoc(collection(getInfo, "posts"), {
      id: serverTimestamp(),
      title: data.title,
      fileUrl: data.fileUrl,
      createdBy: user.id,
      doc: serverTimestamp(),
      likes: 2,
    });
    console.log(post)
  };

  const handleTextChange = (e: any) => {
    setTextValue(e.target.value);
    setData((prev) => ({ ...prev, title: e.target.value }));
  };

  return (
    <>
      <Bg>
        <PopForm onSubmit={handleSubmit}>
          <CreatePost__title>
            <CreatePost__title__innerContianer>
              <TittleCreate>
                <h2>Create Post </h2>
              </TittleCreate>
              <ClosepopUp onClick={() => setOpen(false)}>
                <Xmarker />
              </ClosepopUp>
            </CreatePost__title__innerContianer>
          </CreatePost__title>
          <CreatePost__profile__prefence>
            <Profile__holder></Profile__holder>
            <StatusPreference>
              <p>{user?.displayName}</p>
              <LockedDiv>
                <Lock />
                only me
                <Downarrow />
              </LockedDiv>
            </StatusPreference>
          </CreatePost__profile__prefence>
          <WriteStatus>
            <WrtieMind__status
              placeholder={`What is your mind, ${user?.displayName}?`}
              onChange={handleTextChange}
            />
            {isOpen && (
              <Postpopupse
                setIsOpen={setIsOpen}
                setImageUpload={setImageUpload}
                imageUpload={imageUpload}
                setImageList={setImageList}
              />
            )}
          </WriteStatus>
          <Styled__backDiv>
            <Image src={Theme} alt="the user" style={ThemeStyle} />
            <Image src={ThemeImoji2} alt="smile" style={ThemeStyle1} />
          </Styled__backDiv>
          <PostDiv>
            <Para>Add to your Post</Para>
            <List>
              <List__li>
                <Image
                  src={GalleryImoji}
                  alt="alt"
                  style={LiStyle}
                  onClick={() => setIsOpen(true)}
                />
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
      </Bg>
    </>
  );
};

export default PostPopForm;
