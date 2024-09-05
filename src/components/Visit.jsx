import styled from "styled-components";
import AirbnbLogo from "../media/airbnb.svg";

export default function Visit({ title, text, photo }) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Photo src={photo}></Photo>
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

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 0.5rem;
`;

const Title = styled.h2`
  font-size: clamp(1.5rem, 4vw + 1rem, 3rem);
  font-weight: 1000;
`;

const Photo = styled.img`
  object-fit: cover;
  padding: 0 8px 8px 0;
`;

const Text = styled.p`
  padding: 8px 8px 0 0;
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
