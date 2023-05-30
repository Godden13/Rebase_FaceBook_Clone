"use client";
import { Paragraph } from "@/Components/Atoms/Atoms";
import {
  BarChart,
  BookMark,
  Calender,
  Flag,
  Friends,
  Group,
  House,
  Laptop,
  WatchLater,
  DropdownIcon,
  DropupIcon,
  Speaker,
  Flower,
  Messenger,
  Card,
  Heart,
  Game,
  Activity,
} from "@/Components/Atoms/IconAtoms";
import { Bg } from "@/Components/Organism";
import styled from "@emotion/styled";
import { useState } from "react";

export const IconsHolder = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 10px;
  padding: 8px 0 8px 2px; 
  border-radius: 2px;
  &:hover {
    background-color: #bfbbbb5e;
  }
`;

export const Leftside = styled("div")`
display: flex;
flex-direction: column;
padding:40px 0  0 5px ;
align-items: center;
width: 210px;
border: 2px solid red;
height: 100%;
overflow-x: scroll;
`;


export const Leftside2 = styled(Leftside)`
padding: 0;
width: 100%;
border: 2px solid red;
height: 100%;
overflow-x: clip;
`;

export const Dropdown = styled.button`
  background-color: #c9c9c9db;
  border: 1px solid #c9c9c9db;
  color: black;
  border-radius: 50%;
  padding: 2px;
`;


export default function LeftSideBar() {
  const [slide, setSlide] = useState(false);
  const [sliders, setSliders] = useState(true)

  function Longlist() {
    setSlide(true)
    setSliders(false)
  }

  function Shortlist() {
    setSlide(false)
    setSliders(true)
  }


  return (
    <Bg>
      <Leftside>
        <IconsHolder>
          <Friends /> <Paragraph>Friends</Paragraph>
        </IconsHolder>

        <IconsHolder>
          <Group /> <Paragraph>Groups</Paragraph>
        </IconsHolder>

        <IconsHolder>
          <House /> <Paragraph>Marketplace</Paragraph>
        </IconsHolder>

        <IconsHolder>
          <Laptop /> <Paragraph>Watch</Paragraph>
        </IconsHolder>

        <IconsHolder>
          <WatchLater /> <Paragraph>Memories</Paragraph>
        </IconsHolder>

        <IconsHolder>
          <BookMark /> <Paragraph>Saved</Paragraph>
        </IconsHolder>

        <IconsHolder>
          <Flag /> <Paragraph>Pages</Paragraph>
        </IconsHolder>

        <IconsHolder>
          <Calender /> <Paragraph>Events</Paragraph>
        </IconsHolder>

        <IconsHolder>
          <BarChart /> <Paragraph>Add Manager</Paragraph>
        </IconsHolder>
        {sliders && <IconsHolder onClick={() => Longlist()}>
          <Dropdown >
            <DropdownIcon />
          </Dropdown>
          <Paragraph>See more</Paragraph>
        </IconsHolder>}

        {slide && (
          <div>
            <IconsHolder>
              <Speaker /> <Paragraph>Ad center</Paragraph>
            </IconsHolder>

            <IconsHolder>
              <Flower /> <Paragraph>Climate Science Center</Paragraph>
            </IconsHolder>

            <IconsHolder>
              <Heart /> <Paragraph>Fundraisers</Paragraph>
            </IconsHolder>

            <IconsHolder>
              <Messenger /> <Paragraph>Messanger</Paragraph>
            </IconsHolder>

            <IconsHolder>
              <Card /> <Paragraph> orders and Payments</Paragraph>
            </IconsHolder>

            <IconsHolder>
              <Game /> <Paragraph> Play Games</Paragraph>
            </IconsHolder>

            <IconsHolder>
              <Activity /> <Paragraph> Recent and Activity</Paragraph>
            </IconsHolder>

            {!sliders && <IconsHolder onClick={() => Shortlist()}>
              <Dropdown >
                <DropupIcon />
              </Dropdown>
              <Paragraph>See Less</Paragraph>
            </IconsHolder>}
          </div>
        )}
      </Leftside>
    </Bg>
  );
}
