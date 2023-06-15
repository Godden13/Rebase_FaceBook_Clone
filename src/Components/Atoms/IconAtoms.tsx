"use client";
import styled from "@emotion/styled";
import { FcCalendar, FcAdvertising, FcCloseUpMode } from "react-icons/fc";
import {
  FaUserFriends,
  FaCaretDown,
  FaLock,
  FaGlobeEurope,
  FaChevronDown,
} from "react-icons/fa";
import { AiFillRead, AiFillCamera } from "react-icons/ai";
import { ImBookmark } from "react-icons/im";
import { MdOndemandVideo, MdModeEdit } from "react-icons/md";
import { FcGallery } from "react-icons/fc";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import {
  BiDotsHorizontalRounded,
  BiLike,
  BiMessageDetail,BiCloudUpload,
} from "react-icons/bi";
import { RiShareForwardLine, RiChatSmile3Fill } from "react-icons/ri";
import {
  RiBarChart2Fill,
  RiArrowDropDownLine,
  RiArrowDropUpLine,
} from "react-icons/ri";
import {
  MdFlag,
  MdGroups2,
  MdOutlineWatchLater,
  MdSmartphone,
} from "react-icons/md";
import { GiDogHouse } from "react-icons/gi";
import { GrPower } from "react-icons/gr";
import { CgGames } from "react-icons/cg";
import {
  BsLaptopFill,
  BsFillHeartFill,
  BsMessenger,
  BsFillCreditCardFill,
  BsFillCalendar2RangeFill,
} from "react-icons/bs";

import { FiX } from "react-icons/fi";

export const Read = styled(AiFillRead)`
  font-size: 24px;
  color: blue;
`;

export const Reels = styled(MdOndemandVideo)`
  font-size: 24px;
  color: red;
`;

export const DropdownIcon = styled(RiArrowDropDownLine)`
  color: black;
  font-size: 25px;
`;

export const DropupIcon = styled(RiArrowDropUpLine)`
  color: black;
  font-size: 25px;
`;

export const Activity = styled(BsFillCalendar2RangeFill)`
  color: #00b2ff;
  font-size: 28px;
`;

export const Game = styled(CgGames)`
  color: #00b2ff;
  font-size: 28px;
`;

export const Card = styled(BsFillCreditCardFill)`
  color: #040d44;
  transform: rotate(-54deg);
  font-size: 28px;
`;

export const Messenger = styled(BsMessenger)`
  color: #00b2ff;
  font-size: 28px;
`;

export const Heart = styled(BsFillHeartFill)`
  color: pink;
  font-size: 25px;
  padding: 3px;
  background-color: yellow;
  border-radius: 50%;
`;

export const Power = styled(GrPower)`
  font-size: 28px;
  color: #00b2ff;
`;

export const Speaker = styled(FcAdvertising)`
  font-size: 28px;
`;

export const Flower = styled(FcCloseUpMode)`
  font-size: 28px;
`;

export const Friends = styled(FaUserFriends)`
  font-size: 28px;
  color: #00b2ff;
`;
export const Calender = styled(FcCalendar)`
  font-size: 28px;
  color: #1357d5e3;
`;
export const BookMark = styled(ImBookmark)`
  font-size: 28px;
  color: #e32549;
`;
export const BarChart = styled(RiBarChart2Fill)`
  font-size: 28px;
  color: #00b2ff;
`;
export const Flag = styled(MdFlag)`
  font-size: 28px;
  color: #eb0a0a;
`;
export const House = styled(GiDogHouse)`
  font-size: 28px;
  color: #00b2ff;
`;
export const Group = styled(MdGroups2)`
  font-size: 28px;
  color: #00b2ff;
`;
export const WatchLater = styled(MdOutlineWatchLater)`
  font-size: 28px;
  color: #00b2ff;
`;
export const Laptop = styled(BsLaptopFill)`
  font-size: 28px;
  color: #00b2ff;
`;

export const Dropdown = styled.button`
  background-color: #c9c9c9db;
  border: 1px solid #c9c9c9db;
  color: black;
  border-radius: 50%;
  padding: 2px;
`;

export const Whappy = styled(HiOutlineEmojiHappy)`
  font-size: 20px;
`;

export const LikedPost = styled(BiLike)`
  font-size: 20px;
  color: gray;
  cursor: pointer;
`;

export const Bac = styled(FcGallery)`
  font-size: small;
`;

export const Downarrow = styled(FaCaretDown)`
  font-size: small;
`;

export const Lock = styled(FaLock)`
  font-size: large;
`;

export const Globe = styled(FaGlobeEurope)`
  font-size: small;
  color: gray;
`;

export const Dots = styled(BiDotsHorizontalRounded)`
  color: black;
  font-size: 15px;
`;

export const Comments = styled(BiMessageDetail)`
  color: gray;
  font-size: small;
`;

export const SharePost = styled(RiShareForwardLine)`
  color: gray;
  font-size: small;
`;
export const Xmarker = styled(FiX)`
  font-size: 18px;
  color: black;
`;

export const EditSmile = styled(RiChatSmile3Fill)`
  font-size: 25px;
  color: lightGray;
`;

export const EditPhoto = styled(AiFillCamera)`
  font-size: 25px;
  color: lightGray;
`;

export const EditProf = styled(MdModeEdit)`
  font-size: 14px;
`;
export const Suggesteddrop__friends = styled(FaChevronDown)`
  font-size: 14px;
`;
export const Plike__container = styled.div`
width: 100px
display: flex;
align-items: center;
justify-content: center;
gap: 1%;
`;

export const UploadFile__phone = styled(MdSmartphone)`
  font-size: 13px;
  color: black;
`;

export const UploadIcon = styled(BiCloudUpload)`
  font-size: 22px;
`;
