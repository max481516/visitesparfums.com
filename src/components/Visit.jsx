import styled from "styled-components";
import AirbnbLogo from "../media/airbnb.svg";
import PhotoCarousel from "./PhotoCarousel";
import { FONT_STYLES } from "../constants";

export default function Visit({ title, text, images }) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <PhotoCarousel images={images} />
      <Text>{text}</Text>
      <BookContainer
        a
        href="https://www.airbnb.fr/experiences/4431379?guests=1&adults=1&s=67&unique_share_id=95ddc40a-121e-49a6-8d7b-14de1e847235"
      >
        <BookText>Cliquez ici pour reserver sur:</BookText>
        <BookButton src={AirbnbLogo} />
      </BookContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 0.5rem;
`;

const Title = styled.h2`
  font-size: ${FONT_STYLES.primaryTitles.size};
  font-weight: ${FONT_STYLES.primaryTitles.weight};
`;

const Text = styled.p`
  font-size: ${FONT_STYLES.texts.size};
  padding: 8px;
  text-align: start;
`;

const BookContainer = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  text-decoration: none;
  color: black;
`;

const BookText = styled.p`
  font-weight: 700;
`;

const BookButton = styled.img`
  width: 35%;
  cursor: pointer;
  margin: 1rem 0;
`;
