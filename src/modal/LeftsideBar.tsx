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
  Dropdown
} from "@/Components/Atoms/IconAtoms";
import { Bg ,  Leftside, IconsHolder} from "@/Components/Organism";
import { useState } from "react";

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
