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

const MySwiper = () => {
  const swiperRef = useRef(null);

  const params = {
    slidesPerView: 1,
    breakpoints: {
      1100: {
        slidesPerView: 3,
        spaceBetween: 20,
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
          color: var(--color-green);
          transition: color 0.6s ease;
        }

        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          color: hsl(0, 0%, 20%);
        }

        .swiper-pagination-bullet{
          height: 8px;
          width: 8px;
          cursor: pointer;
          background-color: var(--color-pink);
          transition: background-color 0.6s ease;
        }

        .swiper-pagination-bullet:hover {
          background-color: var(--color-dark-green);
        }
    `,
    ],
  };

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
    <swiper-container ref={swiperRef} init="false" auto-height="true">
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
};

export default MySwiper;
