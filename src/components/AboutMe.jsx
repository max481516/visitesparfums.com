import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { QUERIES, FONT_STYLES } from "../constants.js";
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
      <Title>{t("About Me")}</Title>
      <ItemContainer>
        <Image src={AboutMePhoto1} alt="aboutme" />
        <ItemTitle>Natacha - From Moscow to Paris</ItemTitle>
        <Text>
          I&apos;m Natacha, a passionate perfume enthusiast based in Paris.
          Growing up in a multicultural environment with dual French-Russian
          nationality, I have always been inspired by my encounters and life
          experiences, leading me to a creative career. With a strong background
          in olfactory arts, I bring a unique and personalized approach to the
          world of scents.
        </Text>
      </ItemContainer>
      <ItemContainer>
        <Image src={AboutMePhoto2} alt="aboutme" />
        <ItemTitle>From Perfume Lover to Fragrance Nerd</ItemTitle>
        <Text>
          My journey into perfumes began with my mum, who introduced me to niche
          fragrance boutiques, making my encounter with perfumes of Serge Lutens
          and Frederic Malle unfrogettable. As a student, I worked for
          prestigious French brands like Fragonard and Le Labo, appreciating the
          customer interactions and the dialogue about fragrances. I am
          eternally impressed by their ability to evoke emotions and memories.
          Today, I live, breathe, and sleep fragrances.
        </Text>
      </ItemContainer>
      <ItemContainer>
        <Image src={AboutMePhoto3} alt="aboutme" />
        <ItemTitle>My Experience at Your Service</ItemTitle>
        <Text>
          Over the years, I&apos;ve honed my skills and knowledge, working for
          fragrances brands like Jimmy Choo and fragrance houses such as
          Givaudan, IFF, and Sozio. I am dedicated to elevating the fragrance
          experience for every customer I meet. This world is full of secrets,
          creativity, and curiosity - and I am passionate about sharing it with
          others.
        </Text>
      </ItemContainer>
      <ItemContainer>
        <Image src={AboutMePhoto4} alt="aboutme" />
        <ItemTitle>Let&apos;s Make the Magic Happen</ItemTitle>
        <Text>
          I believe that a fragrance should be as unique as the person wearing
          it. Each scent tells a story, captures a moment, and expresses
          individuality. My goal is to help you discover the perfect scent that
          resonates with your personality and style, making you feel confident
          and inspired every day.
        </Text>
        <Conclusion>
          Ready to dive into the world of fragrances? Reach out and let&apos;s{" "}
          <BookLink to="/booking">book a tour!</BookLink>
        </Conclusion>
      </ItemContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;

  @media ${QUERIES.laptopAndUp} {
    flex-direction: row;
    flex: 0;
  }
`;

const Title = styled.h2`
  text-align: start;
  font-size: ${FONT_STYLES.primaryTitles.size};
  font-weight: ${FONT_STYLES.primaryTitles.weight};
  padding: 0 0.5rem;
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  object-fit: cover;
  min-width: 100%;
  height: auto;
  padding: 8px;
`;

const ItemTitle = styled.h3`
  font-size: ${FONT_STYLES.secondaryTitles.size};
  font-weight: ${FONT_STYLES.secondaryTitles.weight};
  padding: 0 0.5rem;
  line-height: 1.2;
`;

const Text = styled.p`
  font-size: ${FONT_STYLES.texts.size};
  font-weight: ${FONT_STYLES.texts.weight};
  padding: 0.5rem;
  text-align: justify;
  line-height: 1.2;
`;

const Conclusion = styled.p`
  padding: 0.5rem;
  width: 75dvw;
  font-weight: 700;
  line-height: 1.2;
`;

const BookLink = styled(Link)`
  color: var(--color-dark-green);
  cursor: pointer;

  &:hover {
    color: var(--color-green);
  }
`;
