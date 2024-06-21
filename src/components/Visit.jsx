import styled from "styled-components";
import AirbnbLogo from "../img/airbnb.svg";
import PhotoCarousel from "./PhotoCarousel";

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
  align-items: center;
  padding: 1rem;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2rem;
  font-weight: 500;
  margin: 2rem 0;
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
