import Visit from "../components/Visit";
import styled from "styled-components";
import Photo1 from "../img/Saint Honore.jpeg";
import Photo2 from "../img/Marais.jpeg";

export default function Booking() {
  const images1 = [
    {
      original: Photo1,
    },
    {
      original: Photo2,
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
    },
  ];

  const images2 = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
    },
  ];

  return (
    <>
      <Visit
        title="Visit 1"
        text="Passionnée des fragrances et professionnelle dans ce milieu, j'organise des visites des boutiques de parfum les plus uniques de Paris. Le but de @visitesparfumsparis est de vous plonger dans le monde sensoriel des odeurs en vous faisant découvrir l'histoire de la parfumerie, des marques de parfum originales mais aussi vous apprendre les bases de l'olfaction. Les visites se font à pied 2h maximum par séance et par arrondissement de Paris. 
        Elles sont organisées en 3 étapes clé:
        - Introduction à l'histoire de la parfumerie & à l'olfaction
        - Découverte des marques histoire, créateur, ADN
        - Visite des boutiques 3-4 boutiques par visite
        Au choix 3 thèmes:
        - Entre histoire et modernité marques inspirées des parfumeries du 16-18 siècles
        - Pionniers de la parfumerie de Niche
        - Maison de Niche tendances"
        images={images1}
      />
      <HorizontalLine></HorizontalLine>
      <Visit
        title="Visit 2"
        text="Cette visite vous emmènera dans le monde fascinant de la parfumerie parisienne, en explorant les boutiques les plus emblématiques et les plus cachées de la ville. Apprenez l'histoire des parfums, découvrez des marques exclusives et développez votre propre sens olfactif au cours de cette expérience unique."
        images={images2}
      />
    </>
  );
}

const HorizontalLine = styled.hr`
  width: 90dvw;
  margin-left: auto;
  margin-right: auto;
  border: 0;
  border-top: 1px solid var(--color-brown);
`;
