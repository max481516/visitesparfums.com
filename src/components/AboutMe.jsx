import styled from "styled-components";
import natImage from "../media/Nat.jpg";
import { useTranslation } from "react-i18next";

export default function AboutMe() {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Title>{t("About Me")}</Title>
      <Container>
        <Image src={natImage} alt="aboutme" />
        <Text>{t("aboutMeDescription")}</Text>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const Title = styled.h2`
  text-align: center;
  font-size: 2rem;
  font-weight: 500;
  margin: 2rem 0;
`;

const Container = styled.div`
  display: flex;
`;

const Image = styled.img`
  object-fit: cover;
  min-width: 50%;
  height: auto;
  padding: 8px;
`;

const Text = styled.p`
  padding: 8px;
`;


Natacha – From Moscow to Paris

I'm Natacha, a passionate perfume enthusiast based in Paris. Growing up in a multicultural environment with dual French-Russian nationality, I have always been inspired by my encounters and life experiences, leading me to a creative career. With a strong background in olfactory arts, I bring a unique and personalized approach to the world of scents.

From Perfume Lover to Fragrance Nerd

My journey into perfumes began with my mum, who introduced me to niche fragrance boutiques, making my encounter with perfumes of Serge Lutens and Frederic Malle unfrogettable. As a student, I worked for prestigious French brands like Fragonard and Le Labo, appreciating the customer interactions and the dialogue about fragrances. I am eternally impressed by their ability to evoke emotions and memories.

Today, I live, breathe, and sleep fragrances.

My Experience at Your Service

Over the years, I’ve honed my skills and knowledge, working for fragrances brands like Jimmy Choo and fragrance houses such as Givaudan, IFF, and Sozio. I am dedicated to elevating the fragrance experience for every customer I meet. This world is full of secrets, creativity, and curiosity - and I am passionate about sharing it with others.

Let’s Make the Magic Happen

I believe that a fragrance should be as unique as the person wearing it. Each scent tells a story, captures a moment, and expresses individuality. My goal is to help you discover the perfect scent that resonates with your personality and style, making you feel confident and inspired every day.

 

Ready to dive into the world of fragrances? Reach out and let's book a tour!