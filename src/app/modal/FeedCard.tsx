import { FeedCards } from "@/Components/Organism";
import ProfilePicture from "../../assets/images/persons/5.jpeg";
import Snoop from "../../assets/images/persons/6.jpeg";

const ProfilePis = {
  borderRadius: "50%",
  width: "50px",
  height: "50px",
};

interface feedProps {
  width: string;
  height: string;
}

import { MainPis } from "@/Components/Atoms/Atoms";

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
} from "@/Components/Molecules";

import Image from "next/image";

import { Globe, Dots } from "@/Components/Atoms/IconAtoms";

import Liked from "../../assets/images/like.png";
import Loved from "../../assets/images/heart.png";

interface ImgProps {
  width: any;
  height: any;
  style: any;
}
FeedMainImg;
function FeedCard() {
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
              />
            </PostImg>
            <div>
              <p>Snoop Dog</p>
              <span>
                10h ago <Globe />
              </span>
            </div>
          </PostTopLeft>
          <FeedPost__action>
            <Dots />
            <p>x</p>
          </FeedPost__action>
        </FeedPostTop>
        <Feedpost__message>
          <p>Every moment is a fresh beginning.</p>
        </Feedpost__message>
        <FeedMainImg>
          <Image src={Snoop} alt="snoop" style={MainPis} />
        </FeedMainImg>
        <FeedPost__bottom>
          <PostBottom>
            <Image src={Liked} alt="gh" />
            <Image src={Loved} alt="gh" />
            <span>145</span>
          </PostBottom>
          <p>45 comments ...</p>
        </FeedPost__bottom>
        <div className="Muitl__actions">
          <div><p>Lkie</p></div>
          <div><p>Comments</p></div>
          <div><p>Share</p></div>
        </div>
      </FeedPost__wrapper>
    </FeedCards>
  );
}

export default FeedCard;
