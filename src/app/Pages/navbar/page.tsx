"use client";
import {
  Circle,
  Facebook,
  Feeds,
  Groupes,
  Home,
  Menu,
  Messenger,
  NavInput,
  Notifications,
  SearchIcon,
  Shop,
  Video,
} from "@/Components/Atoms";
import { LeftAttr, MiddleAttr, RightAttr } from "@/Components/Molecules";
import { Nav } from "@/Components/Organism";
import NavImg from "../../../assets/images/car.jpg";
import Image from "next/image";

export default function Navbar() {
  return (
    <Nav>
      <LeftAttr>
        <Facebook />
        <SearchIcon />
        <NavInput placeholder="Search Facebook" />
      </LeftAttr>
      <MiddleAttr>
        <Home />
        <Video />
        <Shop />
        <Groupes />
        <Feeds />
      </MiddleAttr>
      <RightAttr>
        <Circle>
          <Menu />
        </Circle>
        <Circle>
          <Messenger />
        </Circle>
        <Circle>
          <Notifications />
        </Circle>
        <Image
          src={NavImg}
          alt="profile icon"
          height="35"
          width="35"
          style={{ borderRadius: "50%", cursor: "pointer" }}
        />
      </RightAttr>
    </Nav>
  );
}
