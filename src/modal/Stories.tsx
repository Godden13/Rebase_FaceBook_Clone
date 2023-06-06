import { Story } from "@/Components/Organism";
import {
  Stories__1container,
  StoriesIcon__container,
  Reel__container,
  Cardstories__container,
  Carousel__stories,
  First__card,
} from "@/Components/Molecules";

import Man from "@/assets/images/persons/man.jpeg";

import { Read, Reels } from "@/Components/Atoms/IconAtoms";

import Image from "next/image";
import { Key, useState } from "react";


import { imageStyles, NextButton, PrevButton } from "../Components/Atoms/Atoms";

interface ImageCarouselProps {
  images: any;
  alt: string;
}

export const ImagesC = [
  {
    title: "James Smith",
    src: Man,
  },
  {
    title: "James Smith",
    src: Man,
  },
  {
    title: "James Smith",
    src: Man,
  },
  {
    title: "James Smith",
    src: Man,
  },
  {
    title: "James Smith",
    src: Man,
  },
  {
    title: "James Smith",
    src: Man,
  },
  {
    title: "James Smith",
    src: Man,
  },
  {
    title: "James Smith",
    src: Man,
  },
  {
    title: "James Smith",
    src: Man,
  },
  {
    title: "James Smith",
    src: Man,
  },
  {
    title: "James Smith",
    src: Man,
  },
  {
    title: "James Smith",
    src: Man,
  },
];

let prev = 0,
  next = 0;

const Stories = () => {
  const [prev, setPrev] = useState(0);
  const [trans, setTrans] = useState<number>(0);

  const scrollBack = () => {
    setTrans((prev) => prev + 124.5 * 3);

    console.clear();
  };

  const scrollForward = () => {
    setTrans((next) => next + 124.5 * -4);

    console.clear();
  };

  return (
    <Story>
      <Stories__1container>
        <StoriesIcon__container>
          <p>Stories</p>
          <Read />
        </StoriesIcon__container>
        <Reel__container>
          <p>Reels</p>
          <Reels />
        </Reel__container>
      </Stories__1container>
      <Cardstories__container>
        <PrevButton onClick={scrollBack}>&lt;</PrevButton>

        <Carousel__stories>
          {ImagesC.map((image: any, index: Key) => (
            <First__card key={index} trans={trans}>
              <>
                {/* {index} */}
                <Image
                  key={index}
                  src={image.src}
                  alt="kjk"
                  style={imageStyles}
                />
              </>
            </First__card>
          ))}
        </Carousel__stories>

        <NextButton onClick={scrollForward}>&gt;</NextButton>
      </Cardstories__container>
    </Story>
  );
};

export default Stories;
