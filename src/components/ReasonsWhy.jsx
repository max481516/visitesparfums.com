import { useState, useEffect } from "react";
import styled from "styled-components";

import { ChevronRightIcon, ChevronLeftIcon } from "@radix-ui/react-icons";

export default function ReasonsWhy() {
  const [sliderConf, setSliderConf] = useState({
    sliderPointer: 0,
    data: [],
  });
  useEffect(() => {
    setSliderConf({
      ...sliderConf,
      data: [
        {
          description:
            "I love you the more in that I believe you had liked me for my own sake and for nothing else",
          author: "John Keats",
        },
        {
          description:
            "But man is not made for defeat. A man can be destroyed but not defeated.",
          author: "Ernest Hemingway",
        },
        {
          description:
            "I have not failed. I've just found 10,000 ways that won't work.",
          author: "Thomas A. Edison",
        },
      ],
    });
  }, []);
  const nextSlide = () => {
    let { data, sliderPointer } = sliderConf;
    let currentSliderPointer = sliderPointer + 1;
    if (data.length - 1 === sliderPointer) {
      currentSliderPointer = 0;
    }
    setSliderConf({
      ...sliderConf,
      sliderPointer: currentSliderPointer,
    });
  };
  const prevSlide = () => {
    let { data, sliderPointer } = sliderConf;
    let currentSliderPointer = sliderPointer - 1;
    if (sliderPointer === 0) {
      currentSliderPointer = data.length - 1;
    }
    setSliderConf({
      ...sliderConf,
      sliderPointer: currentSliderPointer,
    });
  };
  const { sliderPointer, data } = sliderConf;
  const currentSlide = data[sliderPointer];
  return (
    <>
      <Title>3 reasons why:</Title>
      <Slider>
        {currentSlide ? (
          <SlideContainer>
            <Slides>
              <Text>{currentSlide["description"]}</Text>
            </Slides>
            <Previous onClick={prevSlide}>
              <ChevronLeftIcon width="40" height="40" />
            </Previous>
            <Next onClick={nextSlide}>
              <ChevronRightIcon width="40" height="40" />
            </Next>
          </SlideContainer>
        ) : null}

        <Dots>
          <Dot onClick="currentSlide(0)"></Dot>
          <Dot onClick="currentSlide(1)"></Dot>
          <Dot onClick="currentSlide(2)"></Dot>
        </Dots>
      </Slider>
    </>
  );
}

const Title = styled.h2`
  text-align: center;
  font-size: 2rem;
  font-weight: 500;
  margin: 2rem 0 0 0;
`;

const Slider = styled.div``;

const SlideContainer = styled.div`
  position: relative;
`;

const Slides = styled.div`
  padding: 30px 80px;
  text-align: center;
`;

const Text = styled.p``;

const Previous = styled.button`
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  margin-top: -30px;
  padding: 16px;
  color: #888;
  font-weight: bold;
  font-size: 20px;
  border: none;
  user-select: none;
  background-color: transparent;
`;

const Next = styled.button`
  cursor: pointer;
  position: absolute;
  right: 0;
  top: 50%;
  width: auto;
  margin-top: -30px;
  padding: 16px;
  color: #888;
  font-weight: bold;
  font-size: 20px;
  border: none;
  user-select: none;
  background-color: transparent;
`;

const Dots = styled.div`
  text-align: center;
  padding: 20px;
`;

const Dot = styled.span`
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;

  &:hover {
    background-color: #717171;
  }

  &.active {
    background-color: #717171;
  }
`;
