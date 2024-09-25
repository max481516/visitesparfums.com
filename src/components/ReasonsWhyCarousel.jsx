import { useTranslation } from "react-i18next";
import { useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";
register();

export default function ReasonsWhyCarousel() {
  const { t } = useTranslation();
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
        delay: 5000,
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
    margin: "0 0 2rem",
  };

  const slideContent = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "start",
    padding: "8px 0",
  };

  const title = {
    textAlign: "start",
    fontSize: "clamp(1.25rem, 3vw + 0.8rem, 2.5rem)",
    fontWeight: "800",
    padding: "2rem 0 0",
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
      <h2 style={title}>{t("Home.3ReasonsTitle")}</h2>
      <swiper-container style={swiperContainer} ref={swiperRef} init="false">
        <swiper-slide style={slideContent}>
          <p style={text}>
            <b style={secondTitle}>{t("Home.ReasonTitle1")}</b>
            <br></br> {t("Home.Reason1")}
          </p>
        </swiper-slide>
        <swiper-slide style={slideContent}>
          <p style={text}>
            <b style={secondTitle}>{t("Home.ReasonTitle2")}</b>
            <br></br> {t("Home.Reason2")}
          </p>
        </swiper-slide>
        <swiper-slide style={slideContent}>
          <p style={text}>
            <b style={secondTitle}>{t("Home.ReasonTitle3")}</b>
            <br></br> {t("Home.Reason3")}
          </p>
        </swiper-slide>
      </swiper-container>
    </>
  );
}
