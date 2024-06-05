import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { ChevronRightIcon, ChevronLeftIcon } from "@radix-ui/react-icons";

export default function ReasonsWhy() {
  const [sliderPointer, setSliderPointer] = useState(0);
  const sliderData = useRef([
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
  ]).current;

  useEffect(() => {
    const interval = setInterval(() => {
      setSliderPointer((prevPointer) =>
        prevPointer === sliderData.length - 1 ? 0 : prevPointer + 1
      );
    }, 6000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [sliderData.length]);

  const nextSlide = () => {
    setSliderPointer((prevPointer) =>
      prevPointer === sliderData.length - 1 ? 0 : prevPointer + 1
    );
  };

  const prevSlide = () => {
    setSliderPointer((prevPointer) =>
      prevPointer === 0 ? sliderData.length - 1 : prevPointer - 1
    );
  };

  const goToSlide = (index) => {
    setSliderPointer(index);
  };

  const currentSlide = sliderData[sliderPointer];

  return (
    <>
      <Title>3 reasons why:</Title>
      <Slider>
        {currentSlide && (
          <SlideContainer>
            <Slides>
              <Text>{currentSlide.description}</Text>
              <Author>{currentSlide.author}</Author>
            </Slides>
            <Previous onClick={prevSlide}>
              <ChevronLeftIcon width="42" height="42" />
            </Previous>
            <Next onClick={nextSlide}>
              <ChevronRightIcon width="42" height="42" />
            </Next>
          </SlideContainer>
        )}
        <Dots>
          {sliderData.map((_, index) => (
            <Dot
              key={index}
              onClick={() => goToSlide(index)}
              className={index === sliderPointer ? "active" : ""}
            />
          ))}
        </Dots>
      </Slider>
    </>
  );
}

const Title = styled.h2`
  text-align: center;
  font-size: 2rem;
  font-weight: 500;
  margin: 2rem 0;
`;

const Slider = styled.div``;

const SlideContainer = styled.div`
  position: relative;
`;

const Slides = styled.div`
  padding: 10px 80px;
  text-align: center;
`;

const Text = styled.p``;

const Author = styled.p`
  font-style: italic;
  color: #555;
`;

const Previous = styled.button`
  cursor: pointer;
  position: absolute;
  top: 50%;
  margin-top: -30px;
  padding: 16px;
  color: #888;
  border: none;
  background-color: transparent;
`;

const Next = styled.button`
  cursor: pointer;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -30px;
  padding: 16px;
  color: #888;
  border: none;
  background-color: transparent;
`;

const Dots = styled.div`
  text-align: center;
  padding: 20px 0;
`;

const Dot = styled.span`
  cursor: pointer;
  height: 8px;
  width: 8px;
  margin: 0 4px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;

  &:hover,
  &.active {
    background-color: #717171;
  }
`;
