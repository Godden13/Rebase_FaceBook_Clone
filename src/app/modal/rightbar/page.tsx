"use client";

import {
  Circle,
  Describe,
  Name1,
  PageLink,
  RightHeaders,
} from "@/Components/Atoms/Atoms";
import {
  ContactInfos,
  GroupInfos,
  HeadIcon,
  ProfilField1,
  SponsInfos,
  Sponsor,
  TrIcon,
} from "@/Components/Molecules";
import { RightBar, RightSide } from "@/Components/Organism";
import Card1 from "../../../assets/images/beauty.jpeg";
import Card2 from "../../../assets/images/animal.jpg";
import Logo from "../../../assets/images/car.jpg";
import avatar from "../../../assets/images/yves.jpg";
import avatar1 from "../../../assets/images/gentiny.jpg";
import avatar2 from "../../../assets/images/sylvestre.jpg";
import avatar3 from "../../../assets/images/salman.jpg";
import avatar4 from "../../../assets/images/camara.jpeg";
import avatar5 from "../../../assets/images/remy.jpg";
import Image from "next/image";
import {
  Call,
  Options,
  PluSign,
  SearchIcon1,
} from "@/Components/Atoms/IconsAtoms";

export default function page() {
  return (
    <RightSide>
      <RightBar>
        <SponsInfos>
        <RightHeaders>Sponsored</RightHeaders>
          <Sponsor>
            <Image
              src={Card1}
              alt="logo"
              height="100"
              width="100"
              style={{ borderRadius: "5px" }}
            />
            <Describe>How I Got My Life Back</Describe>
            <PageLink>hope.net</PageLink>
          </Sponsor>
          <Sponsor>
            <Image
              src={Card2}
              alt="logo"
              height="80"
              width="100"
              style={{ borderRadius: "5px" }}
            />
            <Describe>Be proud of nature's life</Describe>
            <PageLink>beautyofnature.com</PageLink>
          </Sponsor>
        </SponsInfos>
        <ContactInfos>
          <HeadIcon>
            <RightHeaders>Contacts</RightHeaders>
            <TrIcon>
              <Call />
              <SearchIcon1 />
              <Options />
            </TrIcon>
          </HeadIcon>
          <ProfilField1>
            <Image
              src={Logo}
              alt="logo"
              height="25"
              width="25"
              style={{ borderRadius: "50px" }}
            />
            <Name1>Nathanael Mesmer</Name1>
          </ProfilField1>
          <ProfilField1>
            <Image
              src={avatar}
              alt="logo"
              height="25"
              width="25"
              style={{ borderRadius: "50px" }}
            />
            <Name1>Yves Michel Fotso</Name1>
          </ProfilField1>
          <ProfilField1>
            <Image
              src={avatar1}
              alt="logo"
              height="25"
              width="25"
              style={{ borderRadius: "50px" }}
            />
            <Name1>Gentiny Ngobila</Name1>
          </ProfilField1>
          <ProfilField1>
            <Image
              src={avatar2}
              alt="logo"
              height="25"
              width="25"
              style={{ borderRadius: "50px" }}
            />
            <Name1>Ngouchinghe Sylvestre</Name1>
          </ProfilField1>
          <ProfilField1>
            <Image
              src={avatar3}
              alt="logo"
              height="25"
              width="25"
              style={{ borderRadius: "50px" }}
            />
            <Name1>Edou Le Sahodien</Name1>
          </ProfilField1>
          <ProfilField1>
            <Image
              src={Logo}
              alt="logo"
              height="25"
              width="25"
              style={{ borderRadius: "50px" }}
            />
            <Name1>Julien Gatien Lembembe</Name1>
          </ProfilField1>
          <ProfilField1>
            <Image
              src={Logo}
              alt="logo"
              height="25"
              width="25"
              style={{ borderRadius: "50px" }}
            />
            <Name1>James Olombiono</Name1>
          </ProfilField1>
          <ProfilField1>
            <Image
              src={avatar4}
              alt="logo"
              height="25"
              width="25"
              style={{ borderRadius: "50px" }}
            />
            <Name1>Camara Laye</Name1>
          </ProfilField1>
          <ProfilField1>
            <Image
              src={avatar5}
              alt="logo"
              height="25"
              width="25"
              style={{ borderRadius: "50px" }}
            />
            <Name1>Remy Ngono</Name1>
          </ProfilField1>
          <ProfilField1>
            <Image
              src={Logo}
              alt="logo"
              height="25"
              width="25"
              style={{ borderRadius: "50px" }}
            />
            <Name1>Alan Kadji</Name1>
          </ProfilField1>
        </ContactInfos>
        <GroupInfos>
          <RightHeaders>Group Conversations</RightHeaders>
          <ProfilField1>
            <Circle>
              <PluSign />
            </Circle>
            <Name1>Create new group</Name1>
          </ProfilField1>
        </GroupInfos>
      </RightBar>
    </RightSide>
  );
}
