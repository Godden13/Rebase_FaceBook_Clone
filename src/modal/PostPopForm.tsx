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
  ProfilePise,
  ProfilePises,
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
import ProfilePicture from "../assets/images/lady.png"
import AuthGaurd from "@/HOC/AuthGuard";

const PostPopForm = ({ setOpen, currentUserInfo }: any) => {
  const [imageList, setImageList] = useState<any>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [textValue, setTextValue] = useState("");
  const [imgUrl, setImgUrl] = useState<any>(null);
  const [data, setData] = useState({
    title: "",
    fileUrl: imageList,
  });

  console.log(currentUserInfo);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const post = await addDoc(collection(getInfo, "posts"), {
      id: serverTimestamp(),
      title: data.title,
      fileUrl: imgUrl,
      doc: serverTimestamp(),
      postedBy: currentUserInfo?.uid,
      likes: 2,
    });
  };

  const handleTextChange = (e: any) => {
    setTextValue(e.target.value);
    setData((prev) => ({ ...prev, title: e.target.value }));
    e.preventDefault();
  };

  return (
    <>
      <Bg>
        <PopForm>
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
            <Profile__holder>
              <Image
                src={ProfilePicture}
                alt="prof"
                style={ProfilePises}
                margin-rigth="10px"
                border-radius="50%"
              />
            </Profile__holder>
            <StatusPreference>
              <p>{userInfo?.displayName}</p>
              <LockedDiv>
                <Lock />
                only me
                <Downarrow />
              </LockedDiv>
            </StatusPreference>
          </CreatePost__profile__prefence>
          <WriteStatus>
            <WrtieMind__status
              placeholder={`What is your mind, ${userInfo?.displayName}?`}
              onChange={handleTextChange}
            />
            {isOpen && (
              <Postpopupse
                setIsOpen={setIsOpen}
                setImageList={setImageList}
                setImgUrl={setImgUrl}
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
          <Postsub__Button active={!!textValue} onClick={handleSubmit}>
            Post
          </Postsub__Button>
          https://www.youtube.com/watch?v=k4mjF4sPITE&pp=ygUYY2hhdCBhcHAgbmV4dGpzIGZpcmViYXNl
        </PopForm>
      </Bg>
    </>
  );
};

export default PostPopForm;
