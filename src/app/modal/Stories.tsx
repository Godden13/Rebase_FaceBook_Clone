import { Story } from "@/Components/Organism";
import {
  Stories__1container,
  StoriesIcon__container,
  Reel__container,
  Cardstories__container,
  Carousel__stories,
  First__card,
} from "@/Components/Molecules";

import { Read, Reels } from "@/Components/atoms/IconsAtoms";

import MappedImages from "../../assets/2.jpg";

import Image from "next/image";
import { Key, useState } from "react";

import styled from "@emotion/styled";
import image from "next/image";

import { imageStyles } from "@/Components/atoms/Atoms";

interface ImageCarouselProps {
  images: any;
  alt: string;
}

const imagesC = [
  ,
  {
    title: "James Smith",
    src: MappedImages,
  },
  {
    title: "James Smith",
    src: MappedImages,
  },
  {
    title: "James Smith",
    src: MappedImages,
  },
  {
    title: "James Smith",
    src: MappedImages,
  },
  {
    title: "James Smith",
    src: MappedImages,
  },
  {
    title: "James Smith",
    src: MappedImages,
  },
  {
    title: "James Smith",
    src: MappedImages,
  },
  {
    title: "James Smith",
    src: MappedImages,
  },
  {
    title: "James Smith",
    src: MappedImages,
  },
  {
    title: "James Smith",
    src: MappedImages,
  },
  {
    title: "James Smith",
    src: MappedImages,
  },
  {
    title: "James Smith",
    src: MappedImages,
  },
];

let prev = 0,
  next = 0;

const Stories = () => {
  const [prev, setPrev] = useState(0);
  const [trans, setTrans] = useState<number>(0);

  // imagesC.forEach((object: any) => {
  //   console.log(object?.src);
  //   if (next > object.src.length - 1) {
  //     next += 0;
  //     console.log(next);
  //   } else if (next < 0) {
  //     object.src.length - 1;
  //     console.log(prev);
  //   }
  // });

  const scrollBack = () => {
    setTrans((prev) => prev + 124.5 * 5);

    console.clear();
  };

  const scrollForward = () => {
    setTrans((next) => next + 124.5 * -5);

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
        <button onClick={scrollBack}>&lt;</button>

        <Carousel__stories>
          {imagesC.map((image: any, index: Key) => (
            <First__card key={index} trans={trans}>
              <>
                {index}
                <Image
                  key={index}
                  src={image.src}
                  alt="kjk"
                  object-fit
                  style={imageStyles}
                />
              </>
            </First__card>
          ))}
        </Carousel__stories>

        <button onClick={scrollForward}>&gt;</button>
      </Cardstories__container>
    </Story>
  );
};

export default Stories;
