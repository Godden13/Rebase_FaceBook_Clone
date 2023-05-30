import { FeedCards } from "@/Components/Organism";
import ProfilePicture from "../../assets/rylie.jpg";
import Snoop from "../../assets/pop.jpg";

const ProfilePis = {
  borderRadius: "50%",
  width: "50px",
  height: "50px",
};

const MainPis = {
  borderRadius: "1%",
  width: "99%",
  height: "470px",
  marginTop: "20px",
  objectFit: "cover"
};

import {
  FeedPost__wrapper,
  FeedPostTop,
  PostImg,
  PostTopLeft,
  FeedPost__action,
  Feedpost__message,
  FeedMainImg,
  FeedPost__bottom,
  PostBottom
} from "@/Components/Molecules";

import Image from "next/image";

import { Globe, Dots } from "@/Components/atoms/Atoms";

interface ImgProps {
  width: any;
  height: any;
}
FeedMainImg
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
        <FeedMainImg >
          <Image src={Snoop} alt="snoop"  style={MainPis}/>
        </FeedMainImg>
        <FeedPost__bottom>
          <PostBottom>
            <p>jknr</p>
          </PostBottom>
          <div>oierioj</div>
        </FeedPost__bottom>
      </FeedPost__wrapper>
    </FeedCards>
  );
}

export default FeedCard;
