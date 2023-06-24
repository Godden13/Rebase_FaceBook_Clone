"use client";
import { Circle, NavInput } from "@/Components/Atoms/Atoms";
import {
  Facebook,
  Feeds,
  Groupes,
  Home,
  Menu,
  Messenger,
  Notifications,
  SearchIcon,
  Shop,
  Video,
} from "@/Components/Atoms/IconsAtoms";
import { LeftAttr, MiddleAttr, RightAttr } from "@/Components/Molecules";
import { Nav } from "@/Components/Organism";
import NavImg from "@/assets/images/car.jpg";
import Image from "next/image";
export default function Navbar({ setLogout }: any) {
  return (
    <Nav>
      <LeftAttr>
        <Facebook />
        <div style={{ position: "relative" }}>
          <SearchIcon />
          <NavInput placeholder="Search Facebook" />
        </div>
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
          onClick={() => setLogout((prev: any) => !prev)}
        />
      </RightAttr>
    </Nav>
  );
}
