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
        delay: 10000,
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

  const secondTitle = {
    color: "var(--color-pink)",
  };

  return (
    <>
      <h2 style={title}>3 Reasons Why:</h2>
      <swiper-container style={swiperContainer} ref={swiperRef} init="false">
        <swiper-slide style={slideContent}>
          <p style={text}>
            <b style={secondTitle}>Deep dive into the world of fragrances</b>
            <br></br> enjoy a guided tour led by a passionate perfume expert who
            will provide insights into the world of perfumery, enhancing your
            knowledge and appreciation of fine fragrances
          </p>
        </swiper-slide>
        <swiper-slide style={slideContent}>
          <p style={text}>
            <b style={secondTitle}>Discover Hidden Gems</b>
            <br></br> visit hidden perfumery boutiques in historical Parisian
            districts, offering a unique experience that goes beyond typical
            tourist paths
          </p>
        </swiper-slide>
        <swiper-slide style={slideContent}>
          <p style={text}>
            <b style={secondTitle}>Customized Perfume</b>
            <br></br> experience Receive personalized attention and
            recommendations tailored to your scent preferences, ensuring a
            memorable and unique fragrance discovery journey.
          </p>
        </swiper-slide>
      </swiper-container>
    </>
  );
}
