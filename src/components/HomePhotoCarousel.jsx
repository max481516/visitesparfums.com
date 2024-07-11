import {
  HomeCarouselPhoto1,
  HomeCarouselPhoto2,
  HomeCarouselPhoto3,
  HomeCarouselPhoto4,
} from "../media/HomeCarousel/HomeCarouselPhotos.js";
import { useRef } from "react";
import { register } from "swiper/element/bundle";
import { useLayoutEffect as useIsomorphicLayoutEffect } from "react";
register();

export default function HomePhotoCarousel() {
  const swiperRef = useRef(null);

  const params = {
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 6000,
    },
    breakpoints: {
      770: {
        slidesPerView: 2,
      },
      1100: {
        slidesPerView: 3,
      },
    },
    navigation: true,
    pagination: {
      clickable: true,
    },
    injectStyles: [
      `
        .swiper-button-next,
        .swiper-button-prev {
          cursor: pointer;
          transition: color 0.6s ease;
          --swiper-navigation-color: white;
        }

        .swiper-button-next:hover,
        .swiper-button-prev:hover {
           --swiper-navigation-color: hsl(0, 0%, 70%);
        }

        .swiper-pagination-bullet{
          cursor: pointer;
          transition: background-color 0.3s ease;
          --swiper-pagination-bullet-horizontal-gap: 6px;
          --swiper-pagination-color: white;
          --swiper-pagination-bullet-inactive-opacity: 0.7;
        }

        @media (hover: none) {
          .swiper-button-next,
          .swiper-button-prev {
            color: white;
          }
    `,
    ],
  };

  //using useIsomorphicLayoutEffect to remove breakpoints bug
  useIsomorphicLayoutEffect(() => {
    if (swiperRef.current) {
      if (swiperRef.current?.swiper?.currentBreakpoint) {
        swiperRef.current.swiper.currentBreakpoint = null;
      }
      Object.assign(swiperRef.current, params);
    }
  }, [params]);

  useIsomorphicLayoutEffect(() => {
    swiperRef.current.initialize();
  }, []);

  return (
    <swiper-container ref={swiperRef} init="false">
      <swiper-slide>
        <img src={HomeCarouselPhoto1} alt="" />
      </swiper-slide>
      <swiper-slide>
        <img src={HomeCarouselPhoto2} alt="" />
      </swiper-slide>
      <swiper-slide>
        <img src={HomeCarouselPhoto3} alt="" />
      </swiper-slide>
      <swiper-slide>
        <img src={HomeCarouselPhoto4} alt="" />
      </swiper-slide>
    </swiper-container>
  );
}
