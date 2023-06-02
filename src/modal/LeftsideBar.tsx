"use client";
import { Name1 } from "@/Components/Atoms/Atoms";
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
  Dropdown,
} from "@/Components/Atoms/IconAtoms";
import { Bg, Leftside, IconsHolder } from "@/Components/Organism";
import { useState } from "react";

export default function LeftSideBar() {
  const [slide, setSlide] = useState(false);
  const [sliders, setSliders] = useState(true);

  function Longlist() {
    setSlide(true);
    setSliders(false);
  }

  function Shortlist() {
    setSlide(false);
    setSliders(true);
  }

  return (
    <div style={{ position: "fixed" }}>
      <Leftside>
        <IconsHolder>
          <Friends /> <Name1>Friends</Name1>
        </IconsHolder>

        <IconsHolder>
          <Group /> <Name1>Groups</Name1>
        </IconsHolder>

        <IconsHolder>
          <House /> <Name1>Marketplace</Name1>
        </IconsHolder>

        <IconsHolder>
          <Laptop /> <Name1>Watch</Name1>
        </IconsHolder>

        <IconsHolder>
          <WatchLater /> <Name1>Memories</Name1>
        </IconsHolder>

        <IconsHolder>
          <BookMark /> <Name1>Saved</Name1>
        </IconsHolder>

        <IconsHolder>
          <Flag /> <Name1>Pages</Name1>
        </IconsHolder>

        <IconsHolder>
          <Calender /> <Name1>Events</Name1>
        </IconsHolder>

        <IconsHolder>
          <BarChart /> <Name1>Add Manager</Name1>
        </IconsHolder>
        {sliders && (
          <IconsHolder onClick={() => Longlist()}>
            <Dropdown>
              <DropdownIcon />
            </Dropdown>
            <Name1>See more</Name1>
          </IconsHolder>
        )}

        {slide && (
          <div style={{ marginLeft: -20 + "px" }}>
            <IconsHolder>
              <Speaker /> <Name1>Ad center</Name1>
            </IconsHolder>

            <IconsHolder>
              <Flower /> <Name1>Climate Science Center</Name1>
            </IconsHolder>

            <IconsHolder>
              <Heart /> <Name1>Fundraisers</Name1>
            </IconsHolder>

            <IconsHolder>
              <Messenger /> <Name1>Messanger</Name1>
            </IconsHolder>

            <IconsHolder>
              <Card /> <Name1> orders and Payments</Name1>
            </IconsHolder>

            <IconsHolder>
              <Game /> <Name1> Play Games</Name1>
            </IconsHolder>

            <IconsHolder>
              <Activity /> <Name1> Recent and Activity</Name1>
            </IconsHolder>

            {!sliders && (
              <IconsHolder onClick={() => Shortlist()}>
                <Dropdown>
                  <DropupIcon />
                </Dropdown>
                <Name1>See Less</Name1>
              </IconsHolder>
            )}
          </div>
        )}
      </Leftside>
    </div>
  );
}
