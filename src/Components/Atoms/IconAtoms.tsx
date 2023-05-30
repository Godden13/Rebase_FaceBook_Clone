"use client";
import styled from "@emotion/styled";
import { FcCalendar, FcAdvertising, FcCloseUpMode } from "react-icons/fc";
import { FaUserFriends } from "react-icons/fa";
import { ImBookmark } from "react-icons/im";
import {
  RiBarChart2Fill,
  RiArrowDropDownLine,
  RiArrowDropUpLine,
} from "react-icons/ri";
import { MdFlag, MdGroups2, MdOutlineWatchLater } from "react-icons/md";
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