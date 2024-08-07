import Visit from "../components/Visit";
import Decoration from "../components/Decoration";
import { Helmet } from "react-helmet-async";
import styled from "styled-components";

export default function Booking() {
  return (
    <>
      <Helmet>
        <title>Booking page</title>
        <meta
          name="description"
          content="Information and booking page for perfume tours in Paris."
        />
        <link rel="canonical" href="/booking" />
      </Helmet>

      <Visit
        title="Paris Saint-Honoré"
        text="Passionnée des fragrances et professionnelle dans ce milieu, j'organise des visites des boutiques de parfum les plus uniques de Paris. Le but de @visitesparfumsparis est de vous plonger dans le monde sensoriel des odeurs en vous faisant découvrir l'histoire de la parfumerie, des marques de parfum originales mais aussi vous apprendre les bases de l'olfaction. Les visites se font à pied 2h maximum par séance et par arrondissement de Paris. 
        Elles sont organisées en 3 étapes clé:
        - Introduction à l'histoire de la parfumerie & à l'olfaction
        - Découverte des marques histoire, créateur, ADN
        - Visite des boutiques 3-4 boutiques par visite
        Au choix 3 thèmes:
        - Entre histoire et modernité marques inspirées des parfumeries du 16-18 siècles
        - Pionniers de la parfumerie de Niche
        - Maison de Niche tendances"
      />
      <BookingDecoration />
      <Visit
        title="Visit 2"
        text="Cette visite vous emmènera dans le monde fascinant de la parfumerie parisienne, en explorant les boutiques les plus emblématiques et les plus cachées de la ville. Apprenez l'histoire des parfums, découvrez des marques exclusives et développez votre propre sens olfactif au cours de cette expérience unique."
      />
    </>
  );
}

const BookingDecoration = styled(Decoration)`
  padding-bottom: 2rem;
`;
