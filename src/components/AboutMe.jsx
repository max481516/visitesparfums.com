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
      <Title>{t("About Me")}</Title>
      <ItemContainer>
        <Image src={AboutMePhoto1} alt="aboutme" />
        <ItemTextContainer>
          <ItemTitle>Natacha - From Moscow to Paris</ItemTitle>
          <Text>
            I&apos;m Natacha, a passionate perfume enthusiast based in Paris.
            Growing up in a multicultural environment with dual French-Russian
            nationality, I have always been inspired by my encounters and life
            experiences, leading me to a creative career. With a strong
            background in olfactory arts, I bring a unique and personalized
            approach to the world of scents.
          </Text>
        </ItemTextContainer>
      </ItemContainer>
      <ItemContainer>
        <Image src={AboutMePhoto2} alt="aboutme" />
        <ItemTextContainer>
          <ItemTitle>From Perfume Lover to Fragrance Nerd</ItemTitle>
          <Text>
            My journey into perfumes began with my mum, who introduced me to
            niche fragrance boutiques, making my encounter with perfumes of
            Serge Lutens and Frederic Malle unfrogettable. As a student, I
            worked for prestigious French brands like Fragonard and Le Labo,
            appreciating the customer interactions and the dialogue about
            fragrances. I am eternally impressed by their ability to evoke
            emotions and memories. Today, I live, breathe, and sleep fragrances.
          </Text>
        </ItemTextContainer>
      </ItemContainer>
      <ItemContainer>
        <Image src={AboutMePhoto3} alt="aboutme" />
        <ItemTextContainer>
          <ItemTitle>My Experience at Your Service</ItemTitle>
          <Text>
            Over the years, I&apos;ve honed my skills and knowledge, working for
            fragrances brands like Jimmy Choo and fragrance houses such as
            Givaudan, IFF, and Sozio. I am dedicated to elevating the fragrance
            experience for every customer I meet. This world is full of secrets,
            creativity, and curiosity - and I am passionate about sharing it
            with others.
          </Text>
        </ItemTextContainer>
      </ItemContainer>
      <ItemContainer>
        <Image src={AboutMePhoto4} alt="aboutme" />
        <ItemTextContainer>
          <ItemTitle>Let&apos;s Make the Magic Happen</ItemTitle>
          <Text>
            I believe that a fragrance should be as unique as the person wearing
            it. Each scent tells a story, captures a moment, and expresses
            individuality. My goal is to help you discover the perfect scent
            that resonates with your personality and style, making you feel
            confident and inspired every day.
          </Text>
          <Conclusion>
            Ready to dive into the world of fragrances? Reach out and let&apos;s{" "}
            <BookLink to="/booking">book a tour!</BookLink>
          </Conclusion>
        </ItemTextContainer>
      </ItemContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  width: 100%;

  @media ${QUERIES.laptopAndUp} {
    flex-direction: row;
    flex-wrap: wrap;
    padding: 0 64px;
  }
`;

const Title = styled.h2`
  text-align: start;
  font-size: clamp(1.5rem, 4vw + 1rem, 3rem);
  font-weight: 1000;
  text-transform: uppercase;
  padding: 0 8px;

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
  }
`;

const ItemTextContainer = styled.div`
  @media ${QUERIES.laptopAndUp} {
    width: 50%;
  }
`;

const Image = styled.img`
  object-fit: cover;
  min-width: 50%;
  max-width: 100%;
  height: auto;
  padding: 8px;

  @media ${QUERIES.laptopAndUp} {
    max-width: 50%;
    height: 100%;
  }
`;

const ItemTitle = styled.h3`
  font-size: clamp(1.2rem, 4vw + 1rem, 1.5rem);
  font-weight: 800;
  padding: 0 0.5rem;
  line-height: 1.2;
`;

const Text = styled.p`
  padding: 0.5rem;
  text-align: justify;
  line-height: 1.2;
`;

const Conclusion = styled.p`
  padding: 0.5rem;
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
