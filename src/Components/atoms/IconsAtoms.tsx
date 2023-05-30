import styled from "@emotion/styled";
import { AiFillRead } from "react-icons/ai";
import { FaLock, FaCaretDown, FaGlobeEurope } from "react-icons/fa";
import { FcGallery } from "react-icons/fc";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { BiDotsHorizontalRounded } from "react-icons/bi";

import { MdOndemandVideo } from "react-icons/md";

export const Read = styled(AiFillRead)`
  font-size: 24px;
  color: blue;
`;

export const Reels = styled(MdOndemandVideo)`
  font-size: 24px;
  color: red;
`;


export const Lock = styled(FaLock)`
  font-size: large;
`;
export const Downarrow = styled(FaCaretDown)`
  font-size: small;
`;

export const Whappy = styled(HiOutlineEmojiHappy)`
  font-size: small;
`;

export const Bac = styled(FcGallery)`
  font-size: small;
`;

export const Globe = styled(FaGlobeEurope)`
  font-size: small;
  color: gray;
`;

export const Dots = styled(BiDotsHorizontalRounded)`
  color: black;
  font-size: 15px;
`;
