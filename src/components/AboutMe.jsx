import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { QUERIES, BREAKPOINTS } from "../constants.js";

export default function AboutMe() {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Title>{t("AboutMe.AboutMeMainTitle")}</Title>

      <ItemContainer>
        <ImageContainer>
          <picture>
            <source
              srcSet="
                https://res.cloudinary.com/dqs3mkxnr/image/upload/w_1600,f_auto,q_auto/v1726692273/AboutMePhoto1_jjbcvd.jpg 1600w,
                https://res.cloudinary.com/dqs3mkxnr/image/upload/w_1100,f_auto,q_auto/v1726692273/AboutMePhoto1_jjbcvd.jpg 1100w,
                https://res.cloudinary.com/dqs3mkxnr/image/upload/w_770,f_auto,q_auto/v1726692273/AboutMePhoto1_jjbcvd.jpg 770w,
                https://res.cloudinary.com/dqs3mkxnr/image/upload/w_550,f_auto,q_auto/v1726692273/AboutMePhoto1_jjbcvd.jpg 550w
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
            <StyledImage
              src="https://res.cloudinary.com/dqs3mkxnr/image/upload/w_800/v1726692273/AboutMePhoto1_jjbcvd.jpg"
              loading="lazy"
              alt="Portrait of Natacha Pascalis, perfumery expert and creator of Visites Parfums Paris perfume guided tours"
            />
          </picture>
        </ImageContainer>
        <TextContainer>
          <ItemTitle>{t("AboutMe.AboutMeTitle1")}</ItemTitle>
          <Text>{t("AboutMe.AboutMe1")}</Text>
        </TextContainer>
      </ItemContainer>

      <ItemContainer>
        <ImageContainer>
          <picture>
            <source
              srcSet="
                https://res.cloudinary.com/dqs3mkxnr/image/upload/w_1600,f_auto,q_auto/v1726692278/AboutMePhoto3_tggvz1.jpg 1600w,
                https://res.cloudinary.com/dqs3mkxnr/image/upload/w_1100,f_auto,q_auto/v1726692278/AboutMePhoto3_tggvz1.jpg 1100w,
                https://res.cloudinary.com/dqs3mkxnr/image/upload/w_770,f_auto,q_auto/v1726692278/AboutMePhoto3_tggvz1.jpg 770w,
                https://res.cloudinary.com/dqs3mkxnr/image/upload/w_550,f_auto,q_auto/v1726692278/AboutMePhoto3_tggvz1.jpg 550w
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
            <StyledImage
              src="https://res.cloudinary.com/dqs3mkxnr/image/upload/w_800/v1726692278/AboutMePhoto3_tggvz1.jpg"
              loading="lazy"
              alt="Visites Parfums Paris guide, Natacha Pascalis, in front of a historic Parisian building on 1, rue des Ursins in the 4th arrondissement"
            />
          </picture>
        </ImageContainer>
        <TextContainer>
          <ItemTitle>{t("AboutMe.AboutMeTitle2")}</ItemTitle>
          <Text>{t("AboutMe.AboutMe2")}</Text>
        </TextContainer>
      </ItemContainer>

      <ItemContainer>
        <ImageContainer>
          <picture>
            <source
              srcSet="
                https://res.cloudinary.com/dqs3mkxnr/image/upload/w_1600,f_auto,q_auto/v1726692276/AboutMePhoto2_ngtuwe.jpg 1600w,
                https://res.cloudinary.com/dqs3mkxnr/image/upload/w_1100,f_auto,q_auto/v1726692276/AboutMePhoto2_ngtuwe.jpg 1100w,
                https://res.cloudinary.com/dqs3mkxnr/image/upload/w_770,f_auto,q_auto/v1726692276/AboutMePhoto2_ngtuwe.jpg 770w,
                https://res.cloudinary.com/dqs3mkxnr/image/upload/w_550,f_auto,q_auto/v1726692276/AboutMePhoto2_ngtuwe.jpg 550w
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
            <StyledImage
              src="https://res.cloudinary.com/dqs3mkxnr/image/upload/w_800/v1726692276/AboutMePhoto2_ngtuwe.jpg"
              loading="lazy"
              alt="Perfume expert and guide of Visites Parfums Paris, Natacha Pascalis, holding a scented paper blotter in front of a historic Parisian front door"
            />
          </picture>
        </ImageContainer>
        <TextContainer>
          <ItemTitle>{t("AboutMe.AboutMeTitle3")}</ItemTitle>
          <Text>{t("AboutMe.AboutMe3")}</Text>
        </TextContainer>
      </ItemContainer>

      <ItemContainer>
        <ImageContainer>
          <picture>
            <source
              srcSet="
                https://res.cloudinary.com/dqs3mkxnr/image/upload/w_1600,f_auto,q_auto/v1726692278/AboutMePhoto4_qmml4s.jpg 1600w,
                https://res.cloudinary.com/dqs3mkxnr/image/upload/w_1100,f_auto,q_auto/v1726692278/AboutMePhoto4_qmml4s.jpg 1100w,
                https://res.cloudinary.com/dqs3mkxnr/image/upload/w_770,f_auto,q_auto/v1726692278/AboutMePhoto4_qmml4s.jpg 770w,
                https://res.cloudinary.com/dqs3mkxnr/image/upload/w_550,f_auto,q_auto/v1726692278/AboutMePhoto4_qmml4s.jpg 550w
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
            <StyledImage
              src="https://res.cloudinary.com/dqs3mkxnr/image/upload/w_800/v1726692278/AboutMePhoto4_qmml4s.jpg"
              loading="lazy"
              alt="Natacha Pascalis, creator of Visites Parfums Paris, standing in front of a historic Parisian entrance door, holding a bouquet of sunflowers"
            />
          </picture>
        </ImageContainer>
        <TextContainer>
          <ItemTitle>{t("AboutMe.AboutMeTitle4")}</ItemTitle>
          <Text>{t("AboutMe.AboutMe4")}</Text>
          <Conclusion>
            {t("AboutMe.Conclusion")}{" "}
            <BookLink to="/booking">{t("AboutMe.BookLink")}</BookLink>
          </Conclusion>
        </TextContainer>
      </ItemContainer>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 16px;

  @media ${QUERIES.laptopAndUp} {
    flex-direction: row;
    flex-wrap: wrap;
    padding: 0 128px 48px;
  }
`;

const Title = styled.h2`
  text-align: start;
  font-size: clamp(1.5rem, 4vw + 1rem, 3rem);
  font-weight: 1000;
  text-transform: uppercase;

  @media ${QUERIES.laptopAndUp} {
    padding: 3rem 8px 4rem;
  }
`;

const ItemContainer = styled.div`
  @media ${QUERIES.laptopAndUp} {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 3rem;

    &:nth-of-type(2) {
      flex-direction: row-reverse;
    }

    &:nth-of-type(4) {
      flex-direction: row-reverse;
    }
  }
`;

const TextContainer = styled.div`
  flex: 1;
  @media ${QUERIES.laptopAndUp} {
    width: 50%;
  }
`;

const ImageContainer = styled.div`
  @media ${QUERIES.laptopAndUp} {
    flex: 1;
  }
`;

const StyledImage = styled.img`
  object-fit: cover;
  width: 100%;
  padding: 0.5rem 0;

  @media ${QUERIES.tabletAndUp} {
    height: 500px;
  }
`;

const ItemTitle = styled.h3`
  font-size: clamp(1.2rem, 4vw + 1rem, 1.5rem);
  font-weight: 800;
  line-height: 1.2;
`;

const Text = styled.p`
  padding: 0.5rem 0;
  text-align: justify;
  line-height: 1.4;
`;

const Conclusion = styled.p`
  padding: 0.5rem 0;
  min-width: 75%;
  font-weight: 700;
  line-height: 1.2;
  font-size: calc(18rem / 16);

  @media ${QUERIES.laptopAndUp} {
    font-size: calc(17rem / 16);
  }
`;

const BookLink = styled(Link)`
  color: var(--color-dark-green);
  cursor: pointer;

  &:hover {
    color: var(--color-green);
  }
`;
