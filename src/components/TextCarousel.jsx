import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { ChevronRightIcon, ChevronLeftIcon } from "@radix-ui/react-icons";

export default function TextCarousel({ title, data }) {
  const [sliderPointer, setSliderPointer] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [offset, setOffset] = useState(0);
  const isTransitioning = useRef(false); // Flag to prevent simultaneous updates
  const totalSlides = data.length;
  const touchStartX = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning.current) {
        handleNextSlide();
      }
    }, 6000); // Change slide every 6 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const handleNextSlide = () => {
    if (isTransitioning.current) return;
    setIsAnimating(true);
    isTransitioning.current = true;
    setSliderPointer((prevPointer) => prevPointer + 1);
  };

  const handlePrevSlide = () => {
    if (isTransitioning.current) return;
    setIsAnimating(true);
    isTransitioning.current = true;
    setSliderPointer((prevPointer) => prevPointer - 1);
  };

  const goToSlide = (index) => {
    if (isTransitioning.current) return;
    setIsAnimating(true);
    isTransitioning.current = true;
    setSliderPointer(index + 1); // Offset by 1 due to the extra slides
  };

  const handleTransitionEnd = () => {
    setIsAnimating(false);
    if (sliderPointer === 0) {
      setSliderPointer(totalSlides);
    } else if (sliderPointer === totalSlides + 1) {
      setSliderPointer(1);
    }
    setOffset(0);
    isTransitioning.current = false;
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    const touchCurrentX = e.targetTouches[0].clientX;
    setOffset(touchCurrentX - touchStartX.current);
  };

  const handleTouchEnd = () => {
    if (offset < -50) {
      handleNextSlide();
    } else if (offset > 50) {
      handlePrevSlide();
    } else {
      setOffset(0);
    }
  };

  return (
    <Wrapper>
      <Title>{title}</Title>
      <Slider>
        <SlideContainer
          sliderPointer={sliderPointer}
          offset={offset}
          isAnimating={isAnimating}
          onTransitionEnd={handleTransitionEnd}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <Slide>
            <Text>{data[totalSlides - 1].description}</Text>
            <Author>{data[totalSlides - 1].author}</Author>
          </Slide>
          {data.map((slide, index) => (
            <Slide key={index}>
              <Text>{slide.description}</Text>
              <Author>{slide.author}</Author>
            </Slide>
          ))}
          <Slide>
            <Text>{data[0].description}</Text>
            <Author>{data[0].author}</Author>
          </Slide>
        </SlideContainer>
        <Previous onClick={handlePrevSlide}>
          <ChevronLeftIcon width="42" height="42" />
        </Previous>
        <Next onClick={handleNextSlide}>
          <ChevronRightIcon width="42" height="42" />
        </Next>
        <Dots>
          {data.map((_, index) => (
            <Dot
              key={index}
              onClick={() => goToSlide(index)}
              className={
                index + 1 === sliderPointer ||
                (index === 0 && sliderPointer === totalSlides + 1)
                  ? "active"
                  : ""
              }
            />
          ))}
        </Dots>
      </Slider>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: hsl(20, 25%, 90%);
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2rem;
  font-weight: 500;
  margin: 2rem 0;
`;

const Slider = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
`;

const SlideContainer = styled.div`
  display: flex;
  transition: ${(props) =>
    props.isAnimating ? "transform 0.3s ease-in-out" : "none"};
  transform: ${(props) =>
    `translateX(calc(-${props.sliderPointer * 100}% + ${props.offset}px))`};
`;

const Slide = styled.div`
  min-width: 100%;
  text-align: center;
  padding: 10px 80px;
`;

const Text = styled.p``;

const Author = styled.p`
  font-style: italic;
  color: #555;
`;

const Previous = styled.button`
  cursor: pointer;
  position: absolute;
  top: 30%;
  left: 2px;
  transform: translateY(-50%);
  color: #888;
  border: none;
  background-color: transparent;
`;

const Next = styled.button`
  cursor: pointer;
  position: absolute;
  top: 30%;
  right: 2px;
  transform: translateY(-50%);
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
