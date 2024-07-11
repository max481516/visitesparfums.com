import { useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";
register();

export default function ReasonsWhyCarousel() {
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiperContainer = swiperRef.current;
    const params = {
      autoHeight: true,
      slidesPerView: 1,
      loop: true,
      pagination: {
        clickable: true,
        type: "fraction",
      },
      autoplay: {
        delay: 6000,
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

          .swiper-pagination-fraction {
            position: absolute;
            text-align: end;
            font-size: calc(14rem / 16);
            opacity: 0.6;
            left: -16px;
            bottom: 0px;
          }

        `,
      ],
    };

    Object.assign(swiperContainer, params);
    swiperContainer.initialize();
  }, []);

  const swiperContainer = {
    marginBottom: "1rem",
  };

  const slideContent = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "start",
    padding: "8px 16px 0",
  };

  const title = {
    textAlign: "start",
    fontSize: "calc(20rem / 16)",
    fontWeight: "800",
    padding: "0.2rem 0 0 1rem",
  };

  const text = {
    lineHeight: "1.3",
    marginBottom: "1rem",
  };

  return (
    <>
      <h2 style={title}>Why Book A Visit:</h2>
      <swiper-container style={swiperContainer} ref={swiperRef} init="false">
        <swiper-slide style={slideContent}>
          <p style={text}>
            Discover rare and exclusive fragrances with expert guides who unveil
            the hidden gems of Parisian perfumery.
          </p>
        </swiper-slide>
        <swiper-slide style={slideContent}>
          Experience personalized scent journeys tailored to your unique
          preferences and olfactory senses.
          <p style={text}></p>
        </swiper-slide>
        <swiper-slide style={slideContent}>
          Gain insider knowledge on the art of perfume making and the history
          behind Paris's most esteemed niche perfumeries.
          <p style={text}></p>
        </swiper-slide>
      </swiper-container>
    </>
  );
}
