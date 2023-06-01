"use client";

import { Describe, Name1, PageLink, RightHeaders } from "@/Components/Atoms/Atoms";
import {
  ContactInfos,
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
import Image from "next/image";
import { Call, Options, SearchIcon1 } from "@/Components/Atoms/IconsAtoms";

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
              height="30"
              width="30"
              style={{ borderRadius: "50px" }}
            />
            <Name1>Nathanael Mesmer</Name1>
          </ProfilField1>
          <ProfilField1>
            <Image
              src={Logo}
              alt="logo"
              height="30"
              width="30"
              style={{ borderRadius: "50px" }}
            />
            <Name1>Yve Michel Fotso</Name1>
          </ProfilField1>
          <ProfilField1>
            <Image
              src={Logo}
              alt="logo"
              height="30"
              width="30"
              style={{ borderRadius: "50px" }}
            />
            <Name1>Gentilin Ngobila</Name1>
          </ProfilField1>
          <ProfilField1>
            <Image
              src={Logo}
              alt="logo"
              height="30"
              width="30"
              style={{ borderRadius: "50px" }}
            />
            <Name1>Julien Gatien Lembembe</Name1>
          </ProfilField1>
          <ProfilField1>
            <Image
              src={Logo}
              alt="logo"
              height="30"
              width="30"
              style={{ borderRadius: "50px" }}
            />
            <Name1>James Olombiono</Name1>
          </ProfilField1>
          <ProfilField1>
            <Image
              src={Logo}
              alt="logo"
              height="30"
              width="30"
              style={{ borderRadius: "50px" }}
            />
            <Name1>Nguchingue Sylvestre</Name1>
          </ProfilField1>
          <ProfilField1>
            <Image
              src={Logo}
              alt="logo"
              height="30"
              width="30"
              style={{ borderRadius: "50px" }}
            />
            <Name1>Edou Le Sahodien</Name1>
          </ProfilField1>
          <ProfilField1>
            <Image
              src={Logo}
              alt="logo"
              height="30"
              width="30"
              style={{ borderRadius: "50px" }}
            />
            <Name1>Camara Line</Name1>
          </ProfilField1>
          <ProfilField1>
            <Image
              src={Logo}
              alt="logo"
              height="30"
              width="30"
              style={{ borderRadius: "50px" }}
            />
            <Name1>Remy Ngono</Name1>
          </ProfilField1>
          <ProfilField1>
            <Image
              src={Logo}
              alt="logo"
              height="30"
              width="30"
              style={{ borderRadius: "50px" }}
            />
            <Name1>Raymond Tchengang</Name1>
          </ProfilField1>
        </ContactInfos>
        <RightHeaders>Group Conversations</RightHeaders>
      </RightBar>
    </RightSide>
  );
}
