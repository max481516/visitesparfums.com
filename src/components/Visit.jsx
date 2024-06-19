import styled from "styled-components";
import Image from "../img/Saint Honore.jpeg";
import AirbnbLogo from "../img/airbnb.svg";

export default function Visit() {
  return (
    <Container>
      <Title>Example</Title>
      <VisitImage src={Image} alt="aboutme" />
      <Text>
        Passionnée des fragrances et professionnelle dans ce milieu, j'organise
        des visites des boutiques de parfum les plus uniques de Paris. Le but de
        @visitesparfumsparis est de vous plonger dans le monde sensoriel des
        odeurs en vous faisant découvrir l'histoire de la parfumerie, des
        marques de parfum originales mais aussi vous apprendre les bases de
        l'olfaction.Les visites se font à pied 2h maximum par séance et par
        arrondissement de Paris. Elles sont organisées en 3 étapes clé:-
        Introduction à l'histoire de la parfumerie & à l'olfaction- Découverte
        des marques histoire, créateur, ADN- Visite des boutiques 3-4 boutiques
        par visiteAu choix 3 thèmes:- Entre histoire et modernité marques
        inspirées des parfumeries du 16-18 siècles- Pionniers de la parfumerie
        de Niche- Maison de Niche tendances
      </Text>
      <BookContainer
        a
        href="https://www.airbnb.fr/experiences/4431379?guests=1&adults=1&s=67&unique_share_id=95ddc40a-121e-49a6-8d7b-14de1e847235"
      >
        <BookText>Cliquez ici pour reserver sur:</BookText>
        <BookButton src={AirbnbLogo} />
      </BookContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2rem;
  font-weight: 500;
  margin: 2rem 0;
`;

const VisitImage = styled.img`
  object-fit: cover;
  min-width: 50%;
  height: auto;
  padding: 8px;
`;

const Text = styled.p`
  padding: 8px;
  text-align: center;
`;

const BookContainer = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  text-decoration: none;
  color: black;
`;

const BookText = styled.p``;

const BookButton = styled.img`
  width: 35%;
  cursor: pointer;
  margin: 1rem 0;
`;
