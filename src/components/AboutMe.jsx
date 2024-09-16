import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { QUERIES } from "../constants.js";
import {
  AboutMePhoto1,
  AboutMePhoto2,
  AboutMePhoto3,
  AboutMePhoto4,
} from "../media/AboutMe/AboutMePhotos.js";

export default function AboutMe() {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Title>{t("AboutMe.AboutMeMainTitle")}</Title>
      <ItemContainer>
        <ImageContainer>
          <Image src={AboutMePhoto1} alt="aboutme" />
        </ImageContainer>
        <TextContainer>
          <ItemTitle>{t("AboutMe.AboutMeTitle1")}</ItemTitle>
          <Text>{t("AboutMe.AboutMe1")}</Text>
        </TextContainer>
      </ItemContainer>
      <ItemContainer>
        <ImageContainer>
          <Image src={AboutMePhoto3} alt="aboutme" />
        </ImageContainer>
        <TextContainer>
          <ItemTitle>{t("AboutMe.AboutMeTitle2")}</ItemTitle>
          <Text>{t("AboutMe.AboutMe2")}</Text>
        </TextContainer>
      </ItemContainer>
      <ItemContainer>
        <ImageContainer>
          <Image src={AboutMePhoto2} alt="aboutme" />
        </ImageContainer>
        <TextContainer>
          <ItemTitle>{t("AboutMe.AboutMeTitle3")}</ItemTitle>
          <Text>{t("AboutMe.AboutMe3")}</Text>
        </TextContainer>
      </ItemContainer>
      <ItemContainer>
        <ImageContainer>
          <Image4 src={AboutMePhoto4} alt="aboutme" />
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

  @media ${QUERIES.laptopAndUp} {
    flex-direction: row;
    flex-wrap: wrap;
    padding: 0 128px;
  }
`;

const Title = styled.h2`
  text-align: start;
  font-size: clamp(1.5rem, 4vw + 1rem, 3rem);
  font-weight: 1000;
  text-transform: uppercase;
  padding: 0 16px;

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

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  padding: 0.5rem 16px;

  @media ${QUERIES.tabletAndUp} {
    height: 500px;
  }
`;

const Image4 = styled(Image)`
  object-position: left top;
`;

const ItemTitle = styled.h3`
  font-size: clamp(1.2rem, 4vw + 1rem, 1.5rem);
  font-weight: 800;
  padding: 0 16px;
  line-height: 1.2;
`;

const Text = styled.p`
  padding: 0.5rem 16px;
  text-align: justify;
  line-height: 1.2;
`;

const Conclusion = styled.p`
  padding: 0.5rem 16px;
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
