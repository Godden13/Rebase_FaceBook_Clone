import styled from "@emotion/styled";
import { GoSearch } from "react-icons/go";
import { BsFacebook } from "react-icons/bs";
import { AiFillHome, AiOutlineRight } from "react-icons/ai";
import { MdOndemandVideo, MdVideoCall } from "react-icons/md";
import { AiOutlineShop } from "react-icons/ai";
import { HiUserGroup, HiOutlineSearch } from "react-icons/hi";
import { BiCreditCard } from "react-icons/bi";
import { CgMenuGridO } from "react-icons/cg";
import { RiMessengerFill } from "react-icons/ri";
import { IoIosNotifications } from "react-icons/io";
import { RiSettings5Fill, RiFeedbackFill } from "react-icons/ri";
import { MdOutlineHelp } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import { GrLogout } from "react-icons/gr";
import { FiPlus } from "react-icons/fi";
import { SlOptions } from "react-icons/sl";

export const SearchIcon = styled(GoSearch)`
  color: #67656b;
  font-size: 15px;
  left: 5%;
  position: absolute;
  margin: 12px 0 0 -5px;

    @media (max-width: 1024px) {
      margin-left: 8px;
  }
`;

export const Facebook = styled(BsFacebook)`
  color: #1877f2;
  font-size: 40px;
`;

export const Home = styled(AiFillHome)`
  color: #1877f2;
  cursor: pointer;
  font-size: 23px;
  font-weight: 400;
`;

export const Video = styled(MdOndemandVideo)`
  color: #67656b;
  cursor: pointer;
  font-size: 23px;
`;

export const Shop = styled(AiOutlineShop)`
  color: #67656b;
  cursor: pointer;
  font-size: 23px;
`;

export const Groupes = styled(HiUserGroup)`
  color: #67656b;
  cursor: pointer;
  font-size: 23px;
`;

export const Feeds = styled(BiCreditCard)`
  color: #67656b;
  cursor: pointer;
  font-size: 23px;
`;

export const Menu = styled(CgMenuGridO)`
  cursor: pointer;
  font-size: 23px;
`;

export const Messenger = styled(RiMessengerFill)`
  cursor: pointer;
  font-size: 23px;
`;

export const Notifications = styled(IoIosNotifications)`
  cursor: pointer;
  font-size: 23px;
`;

export const Settings = styled(RiSettings5Fill)`
  cursor: pointer;
  font-size: 23px;
`;

export const Support = styled(MdOutlineHelp)`
  cursor: pointer;
  font-size: 23px;
`;

export const Display = styled(FaMoon)`
  cursor: pointer;
  font-size: 23px;
`;

export const FeedBack = styled(RiFeedbackFill)`
  cursor: pointer;
  font-size: 23px;
`;

export const LogOut = styled(GrLogout)`
  color: #67656b;
  cursor: pointer;
  font-size: 20px;
`;

export const PluSign = styled(FiPlus)`
  cursor: pointer;
  font-size: 23px;
`;

export const RightArrow = styled(AiOutlineRight)`
  cursor: pointer;
  font-size: 23px;
`;

export const Call = styled(MdVideoCall)`
  border-radius: 50%;
  color: #67656b;
  cursor: pointer;
  font-size: 25px;
  padding: 3px;

  &:hover {
    background-color: #e4e6eb;
  }
`;

export const SearchIcon1 = styled(HiOutlineSearch)`
  border-radius: 50%;
  color: #67656b;
  cursor: pointer;
  font-size: 25px;
  padding: 3px;

  &:hover {
    background-color: #e4e6eb;
  }
`;

export const Options = styled(SlOptions)`
  border-radius: 50%;
  color: #67656b;
  cursor: pointer;
  font-size: 25px;
  padding: 3px;

  &:hover {
    background-color: #e4e6eb;
  }
`;

