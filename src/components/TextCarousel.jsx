import { useState, useEffect, useRef, useLayoutEffect } from "react";
import styled from "styled-components";
import { ChevronRightIcon, ChevronLeftIcon } from "@radix-ui/react-icons";

export default function TextCarousel({ title, data }) {
  const [sliderPointer, setSliderPointer] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [offset, setOffset] = useState(0);
  const isTransitioning = useRef(false);
  const totalSlides = data.length;
  const touchStartX = useRef(0);
  const slideContainerRef = useRef(null);
  const activeSlideRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning.current) {
        handleNextSlide();
      }
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (sliderPointer < 0) {
      setSliderPointer(totalSlides - 1);
    } else if (sliderPointer >= totalSlides) {
      setSliderPointer(0);
    }

    setIsAnimating(false);
    isTransitioning.current = false;
  }, [sliderPointer, totalSlides]);

  const handleNextSlide = () => {
    if (isTransitioning.current) return;
    setIsAnimating(true);
    isTransitioning.current = true;
    setSliderPointer((prevPointer) => (prevPointer + 1) % totalSlides);
  };

  const handlePrevSlide = () => {
    if (isTransitioning.current) return;
    setIsAnimating(true);
    isTransitioning.current = true;
    setSliderPointer(
      (prevPointer) => (prevPointer - 1 + totalSlides) % totalSlides
    );
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

  useLayoutEffect(() => {
    const setHeight = () => {
      if (activeSlideRef.current && slideContainerRef.current) {
        const activeSlideHeight = activeSlideRef.current.scrollHeight;
        /* console.log("Active Slide Height:", activeSlideHeight); */
        slideContainerRef.current.style.height = `${activeSlideHeight}px`;
      }
    };

    const currentActiveSlide = activeSlideRef.current;
    setHeight();

    const resizeObserver = new ResizeObserver(() => {
      setHeight();
    });

    if (currentActiveSlide) {
      resizeObserver.observe(currentActiveSlide);
    }

    return () => {
      if (currentActiveSlide) {
        resizeObserver.unobserve(currentActiveSlide);
      }
      resizeObserver.disconnect();
    };
  }, [sliderPointer]);

  return (
    <Wrapper>
      <Title>{title}</Title>
      <Slider>
        <SlideContainer
          ref={slideContainerRef}
          sliderPointer={sliderPointer}
          offset={offset}
          isAnimating={isAnimating}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {data.map((slide, index) => (
            <Slide
              key={index}
              ref={index === sliderPointer ? activeSlideRef : null}
            >
              <Text>{slide.description}</Text>
              <Author>{slide.author}</Author>
            </Slide>
          ))}
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
              onClick={() => setSliderPointer(index)}
              className={index === sliderPointer ? "active" : ""}
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
    props.isAnimating
      ? "transform 0.3s ease-in-out, height 0.3s ease-in-out"
      : "none"};
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
