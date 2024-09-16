import { useTranslation } from "react-i18next";
import { useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";
register();

export default function ReviewsCarousel() {
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
            bottom: 40px;
          }

        `,
      ],
    };

    Object.assign(swiperContainer, params);
    swiperContainer.initialize();
  }, []);

  const slideContent = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "start",
    padding: "8px 0",
  };

  const title = {
    textAlign: "start",
    fontSize: "calc(20rem / 16)",
    fontWeight: "800",
    padding: "1rem 0 0",
  };

  const text = {
    lineHeight: "1.3",
    marginBottom: "1rem",
  };

  const clientName = {
    fontStyle: "italic",
    color: "#555",
    opacity: "0.6",
    marginBottom: "2.5rem",
  };

  return (
    <>
      <h2 style={title}>{t("Home.ReviewsTitle")}</h2>
      <swiper-container ref={swiperRef} init="false">
        <swiper-slide style={slideContent}>
          <p style={text}>{t("Home.Review1")}</p>
          <cite style={clientName}>{t("Home.ReviewAuthor1")}</cite>
        </swiper-slide>
        <swiper-slide style={slideContent}>
          {t("Home.Review2")}
          <p style={text}></p>
          <cite style={clientName}>{t("Home.ReviewAuthor2")}</cite>
        </swiper-slide>
        <swiper-slide style={slideContent}>
          {t("Home.Review3")}
          <p style={text}></p>
          <cite style={clientName}>{t("Home.ReviewAuthor3")}</cite>
        </swiper-slide>
        <swiper-slide style={slideContent}>
          <p style={text}>{t("Home.Review4")}</p>
          <cite style={clientName}>{t("Home.ReviewAuthor4")}</cite>
        </swiper-slide>
        <swiper-slide style={slideContent}>
          <p style={text}>{t("Home.Review5")}</p>
          <cite style={clientName}>{t("Home.ReviewAuthor5")}</cite>
        </swiper-slide>
        <swiper-slide style={slideContent}>
          <p style={text}>{t("Home.Review6")}</p>
          <cite style={clientName}>{t("Home.ReviewAuthor6")}</cite>
        </swiper-slide>
        <swiper-slide style={slideContent}>
          <p style={text}>{t("Home.Review7")}</p>
          <cite style={clientName}>{t("Home.ReviewAuthor7")}</cite>
        </swiper-slide>
        <swiper-slide style={slideContent}>
          <p style={text}>{t("Home.Review8")}</p>
          <cite style={clientName}>{t("Home.ReviewAuthor8")}</cite>
        </swiper-slide>
        <swiper-slide style={slideContent}>
          <p style={text}>{t("Home.Review9")}</p>
          <cite style={clientName}>{t("Home.ReviewAuthor9")}</cite>
        </swiper-slide>
        <swiper-slide style={slideContent}>
          <p style={text}>{t("Home.Review10")}</p>
          <cite style={clientName}>{t("Home.ReviewAuthor10")}</cite>
        </swiper-slide>
        <swiper-slide style={slideContent}>
          <p style={text}>{t("Home.Review11")}</p>
          <cite style={clientName}>{t("Home.ReviewAuthor11")}</cite>
        </swiper-slide>
        <swiper-slide style={slideContent}>
          <p style={text}>{t("Home.Review12")}</p>
          <cite style={clientName}>{t("Home.ReviewAuthor12")}</cite>
        </swiper-slide>
        <swiper-slide style={slideContent}>
          <p style={text}>{t("Home.Review13")}</p>
          <cite style={clientName}>{t("Home.ReviewAuthor13")}</cite>
        </swiper-slide>
      </swiper-container>
    </>
  );
}
