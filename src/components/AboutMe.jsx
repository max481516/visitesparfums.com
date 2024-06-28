import styled from "styled-components";
import { useTranslation } from "react-i18next";
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
        <ItemTitle>Natacha – From Moscow to Paris</ItemTitle>
        <Text>
          I'm Natacha, a passionate perfume enthusiast based in Paris. Growing
          up in a multicultural environment with dual French-Russian
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
          Over the years, I’ve honed my skills and knowledge, working for
          fragrances brands like Jimmy Choo and fragrance houses such as
          Givaudan, IFF, and Sozio. I am dedicated to elevating the fragrance
          experience for every customer I meet. This world is full of secrets,
          creativity, and curiosity - and I am passionate about sharing it with
          others.
        </Text>
      </ItemContainer>
      <ItemContainer>
        <Image src={AboutMePhoto4} alt="aboutme" />
        <ItemTitle>Let’s Make the Magic Happen</ItemTitle>
        <Text>
          I believe that a fragrance should be as unique as the person wearing
          it. Each scent tells a story, captures a moment, and expresses
          individuality. My goal is to help you discover the perfect scent that
          resonates with your personality and style, making you feel confident
          and inspired every day.
        </Text>
        <Conclusion>
          Ready to dive into the world of fragrances? Reach out and let's book a
          tour!
        </Conclusion>
      </ItemContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
`;

const Title = styled.h2`
  text-align: start;
  font-size: calc(32rem / 16);
  font-weight: 1000;
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
  font-size: calc(24rem / 16);
  padding: 0 0.5rem;
`;

const Text = styled.p`
  font-size: calc(14rem / 16);
  padding: 0.5rem;
  text-align: start;
  line-height: 1.2;
`;

const Conclusion = styled.p`
  padding: 0.5rem;
  font-weight: 700;
`;
