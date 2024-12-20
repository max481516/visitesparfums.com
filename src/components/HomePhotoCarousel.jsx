import { useRef } from "react";
import { register } from "swiper/element/bundle";
import { useLayoutEffect as useIsomorphicLayoutEffect } from "react";
import styled from "styled-components";
import { BREAKPOINTS } from "../constants";

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
      1500: {
        slidesPerView: 2,
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

  //we use this hook to remove slides per view bug on resize
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

  const swiperContainer = {
    width: "100vw",
    marginLeft: "calc(-50vw + 50%)",
    height: "75dvh",
  };

  const swiperSlide = {
    height: "100%",
  };

  const swiperImages = {
    objectFit: "cover",
    width: "100%",
    height: "75dvh",
  };

  return (
    <swiper-container style={swiperContainer} ref={swiperRef} init="false">
      <swiper-slide style={swiperSlide}>
        <picture>
          <source
            srcSet="
              https://res.cloudinary.com/dqs3mkxnr/image/upload/w_1600,f_auto,q_auto/v1726752161/HomeCarouselPhoto1_ss6dm9.jpg 1600w,
              https://res.cloudinary.com/dqs3mkxnr/image/upload/w_1100,f_auto,q_auto/v1726752161/HomeCarouselPhoto1_ss6dm9.jpg 1100w,
              https://res.cloudinary.com/dqs3mkxnr/image/upload/w_770,f_auto,q_auto/v1726752161/HomeCarouselPhoto1_ss6dm9.jpg 770w,
              https://res.cloudinary.com/dqs3mkxnr/image/upload/w_550,f_auto,q_auto/v1726752161/HomeCarouselPhoto1_ss6dm9.jpg 550w
            "
            sizes="
              (min-width: ${BREAKPOINTS.desktopMin}px) 1500px,
              (min-width: ${BREAKPOINTS.laptopMin}px) 1100px,
              (min-width: ${BREAKPOINTS.bigTabletMin}px) 770px,
              (min-width: ${BREAKPOINTS.tabletMin}px) 550px,
              100vw
            "
            type="image/webp"
          />
          <img
            style={swiperImages}
            width="1600"
            height="900"
            src="https://res.cloudinary.com/dqs3mkxnr/image/upload/w_800/v1726752161/HomeCarouselPhoto1_ss6dm9.jpg"
            alt="A Visites Parfums Paris tour participant smelling a perfume in a niche Parisian perfume shop"
          />
        </picture>
      </swiper-slide>

      <swiper-slide>
        <picture>
          <source
            srcSet="
              https://res.cloudinary.com/dqs3mkxnr/image/upload/w_1600,f_auto,q_auto/v1726752163/HomeCarouselPhoto2_ybwgrm.jpg 1600w,
              https://res.cloudinary.com/dqs3mkxnr/image/upload/w_1100,f_auto,q_auto/v1726752163/HomeCarouselPhoto2_ybwgrm.jpg 1100w,
              https://res.cloudinary.com/dqs3mkxnr/image/upload/w_770,f_auto,q_auto/v1726752163/HomeCarouselPhoto2_ybwgrm.jpg 770w,
              https://res.cloudinary.com/dqs3mkxnr/image/upload/w_550,f_auto,q_auto/v1726752163/HomeCarouselPhoto2_ybwgrm.jpg 550w
            "
            sizes="
              (min-width: ${BREAKPOINTS.desktopMin}px) 1500px,
              (min-width: ${BREAKPOINTS.laptopMin}px) 1100px,
              (min-width: ${BREAKPOINTS.bigTabletMin}px) 770px,
              (min-width: ${BREAKPOINTS.tabletMin}px) 550px,
              100vw
            "
            type="image/webp"
          />
          <Picture2
            style={swiperImages}
            width="1600"
            height="900"
            src="https://res.cloudinary.com/dqs3mkxnr/image/upload/w_800/v1726752163/HomeCarouselPhoto2_ybwgrm.jpg"
            loading="lazy"
            alt="A group of Visites Parfums Paris participants posing with Natacha Pascalis, perfumery expert and creator of the guided tours, in a passageway on rue des Francs Bourgeois in the Marais"
          ></Picture2>
        </picture>
      </swiper-slide>

      <swiper-slide>
        <picture>
          <source
            srcSet="
              https://res.cloudinary.com/dqs3mkxnr/image/upload/w_1600,f_auto,q_auto/v1726752165/HomeCarouselPhoto3_ffeyww.jpg 1600w,
              https://res.cloudinary.com/dqs3mkxnr/image/upload/w_1100,f_auto,q_auto/v1726752165/HomeCarouselPhoto3_ffeyww.jpg 1100w,
              https://res.cloudinary.com/dqs3mkxnr/image/upload/w_770,f_auto,q_auto/v1726752165/HomeCarouselPhoto3_ffeyww.jpg 770w,
              https://res.cloudinary.com/dqs3mkxnr/image/upload/w_550,f_auto,q_auto/v1726752165/HomeCarouselPhoto3_ffeyww.jpg 550w
            "
            sizes="
              (min-width: ${BREAKPOINTS.desktopMin}px) 1500px,
              (min-width: ${BREAKPOINTS.laptopMin}px) 1100px,
              (min-width: ${BREAKPOINTS.bigTabletMin}px) 770px,
              (min-width: ${BREAKPOINTS.tabletMin}px) 550px,
              100vw
            "
            type="image/webp"
          />
          <img
            style={swiperImages}
            width="1600"
            height="900"
            src="https://res.cloudinary.com/dqs3mkxnr/image/upload/w_800/v1726752165/HomeCarouselPhoto3_ffeyww.jpg"
            loading="lazy"
            alt="A Visites Parfums Paris tour participant inspecting a beauty product in a niche Parisian perfume shop"
          />
        </picture>
      </swiper-slide>

      <swiper-slide>
        <picture>
          <source
            srcSet="
              https://res.cloudinary.com/dqs3mkxnr/image/upload/w_1600,f_auto,q_auto/v1726752168/HomeCarouselPhoto4_ghotpg.jpg 1600w,
              https://res.cloudinary.com/dqs3mkxnr/image/upload/w_1100,f_auto,q_auto/v1726752168/HomeCarouselPhoto4_ghotpg.jpg 1100w,
              https://res.cloudinary.com/dqs3mkxnr/image/upload/w_770,f_auto,q_auto/v1726752168/HomeCarouselPhoto4_ghotpg.jpg 770w,
              https://res.cloudinary.com/dqs3mkxnr/image/upload/w_550,f_auto,q_auto/v1726752168/HomeCarouselPhoto4_ghotpg.jpg 550w
            "
            sizes="
              (min-width: ${BREAKPOINTS.desktopMin}px) 1500px,
              (min-width: ${BREAKPOINTS.laptopMin}px) 1100px,
              (min-width: ${BREAKPOINTS.bigTabletMin}px) 770px,
              (min-width: ${BREAKPOINTS.tabletMin}px) 550px,
              100vw
            "
            type="image/webp"
          />
          <img
            style={swiperImages}
            width="1600"
            height="900"
            src="https://res.cloudinary.com/dqs3mkxnr/image/upload/w_800/v1726752168/HomeCarouselPhoto4_ghotpg.jpg"
            loading="lazy"
            alt="A Visites Parfums Paris participant inspecting a perfume bottle display in a niche Parisian shop"
          />
        </picture>
      </swiper-slide>

      <swiper-slide>
        <picture>
          <source
            srcSet="
              https://res.cloudinary.com/dqs3mkxnr/image/upload/w_1600,f_auto,q_auto/v1726752159/HomeCarouselPhoto5_znhvyp.jpg 1600w,
              https://res.cloudinary.com/dqs3mkxnr/image/upload/w_1100,f_auto,q_auto/v1726752159/HomeCarouselPhoto5_znhvyp.jpg 1100w,
              https://res.cloudinary.com/dqs3mkxnr/image/upload/w_770,f_auto,q_auto/v1726752159/HomeCarouselPhoto5_znhvyp.jpg 770w,
              https://res.cloudinary.com/dqs3mkxnr/image/upload/w_550,f_auto,q_auto/v1726752159/HomeCarouselPhoto5_znhvyp.jpg 550w
            "
            sizes="
              (min-width: ${BREAKPOINTS.desktopMin}px) 1500px,
              (min-width: ${BREAKPOINTS.laptopMin}px) 1100px,
              (min-width: ${BREAKPOINTS.bigTabletMin}px) 770px,
              (min-width: ${BREAKPOINTS.tabletMin}px) 550px,
              100vw
            "
            type="image/webp"
          />
          <Picture4
            style={swiperImages}
            width="1600"
            height="900"
            src="https://res.cloudinary.com/dqs3mkxnr/image/upload/w_800/v1726752159/HomeCarouselPhoto5_znhvyp.jpg"
            loading="lazy"
            alt="A group of Visites Parfums Paris participants posing with Natacha Pascalis, perfumery expert and creator of the guided tours, in front of a historic entrance door in central Paris"
          ></Picture4>
        </picture>
      </swiper-slide>
    </swiper-container>
  );
}

const Picture2 = styled.img`
  @media ${BREAKPOINTS.bigtabletAndUp} {
    object-position: 0% 35%;
  }
`;

const Picture4 = styled.img`
  @media ${BREAKPOINTS.bigtabletAndUp} {
    object-position: 0% 30%;
  }
`;
