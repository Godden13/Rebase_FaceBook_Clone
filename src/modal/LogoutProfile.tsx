"use client";

import {
  IconField,
  InnerField,
  MenuInfos,
  ProfilField,
  SectionIcons,
} from "@/Components/Molecules";
import { PopUpBox, ProfilPopUp } from "@/Components/Organism";
import Logo from "@/assets/images/car.jpg";
import Image from "next/image";
import { LogOut } from '@/Components/Atoms/IconsAtoms';
import {
  Circle,
  Detail,
  FootPhrase,
  Name,
  Phrase,
} from "@/Components/Atoms/Atoms";
import {
  RightArrow,
  Settings,
  Support,
  Display,
  FeedBack,
} from "@/Components/Atoms/IconsAtoms";

export default function LogoutProfile() {
  return (
      <PopUpBox>
        <InnerField>
          <ProfilField>
            <Image
              src={Logo}
              alt="logo"
              height="40"
              width="40"
              style={{ borderRadius: "50px" }}
            />
            <Name>Nathanael Mesmer</Name>
          </ProfilField>
          <Detail>See all profiles</Detail>
          <SectionIcons>
            <IconField>
              <MenuInfos>
                <Circle>
                  <Settings />
                </Circle>
                <Phrase>Settings & privacy</Phrase>
              </MenuInfos>
              <RightArrow />
            </IconField>
            <IconField>
              <MenuInfos>
                <Circle>
                  <Support />
                </Circle>
                <Phrase>Help & support</Phrase>
              </MenuInfos>
              <RightArrow />
            </IconField>
            <IconField>
              <MenuInfos>
                <Circle>
                  <Display />
                </Circle>
                <Phrase>Display & accessibility</Phrase>
              </MenuInfos>
              <RightArrow />
            </IconField>
            <IconField>
              <MenuInfos>
                <Circle>
                  <FeedBack />
                </Circle>
                <Phrase>Give feedback</Phrase>
              </MenuInfos>
            </IconField>
            <IconField>
              <MenuInfos>
                <Circle>
                  <LogOut />
                </Circle>
                <Phrase>Log Out</Phrase>
              </MenuInfos>
            </IconField>
            <FootPhrase>
              Privacy · Terms · Advertising · Ad Choices · Cookies · More · Meta
              © 2023
            </FootPhrase>
          </SectionIcons>
        </InnerField>
      </PopUpBox>
  );
}
