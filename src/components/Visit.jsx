import styled from "styled-components";
import AirbnbLogo from "../media/airbnb.svg";
import { useTranslation } from "react-i18next";

export default function Visit({ title, text, photo, className }) {
  const { t } = useTranslation();

  return (
    <Wrapper className={className}>
      <Title>{title}</Title>
      <Photo src={photo}></Photo>
      <Text>{text}</Text>
      <BookContainer href="https://www.airbnb.fr/experiences/4431379?guests=1&adults=1&s=67&unique_share_id=95ddc40a-121e-49a6-8d7b-14de1e847235">
        <BookText>{t("Booking.ClickHere")}</BookText>
        <BookButton src={AirbnbLogo} />
      </BookContainer>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 0.5rem 0;
`;

const Title = styled.h2`
  font-size: clamp(1.25rem, 3vw + 0.8rem, 2.5rem);
  font-weight: 1000;
`;

const Photo = styled.img`
  object-fit: cover;
  width: 100%;
  height: auto;
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
