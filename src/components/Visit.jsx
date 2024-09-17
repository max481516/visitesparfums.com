import styled from "styled-components";
import AirbnbLogo from "../media/airbnb.svg";
import { useTranslation, Trans } from "react-i18next";
import { QUERIES } from "../constants.js";

export default function Visit({ title, text, photo, className, variant }) {
  const { t } = useTranslation();

  return (
    <Wrapper className={className} $variant={variant}>
      <Title>{title}</Title>
      <Photo src={photo}></Photo>
      <Text>
        <Trans
          i18nKey={text}
          components={{
            bold: <Bold />,
            colored: <ColoredText />,
          }}
        />
      </Text>
      <BookContainer href="https://www.airbnb.fr/experiences/4431379?guests=1&adults=1&s=67&unique_share_id=95ddc40a-121e-49a6-8d7b-14de1e847235">
        <BookText>{t("Booking.ClickHere")}</BookText>
        <BookButton src={AirbnbLogo} />
      </BookContainer>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  align-items: center;
  padding-top: 1rem;

  @media ${QUERIES.laptopAndUp} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto auto;
    grid-gap: 1rem;

    ${(props) =>
      props.$variant === "first" &&
      `
    grid-template-areas: 
    "title title"
    "photo text"
    "book .";
  `}

    ${(props) =>
      props.$variant === "second" &&
      `
    grid-template-areas: 
    "title title"
    "text photo"
    ". book";
    
    /* Push title to the right in the second column */
    h2 {
      grid-column: 2 / 3;
      text-align: right;
      
    }
  `}
  }
`;

const Title = styled.h2`
  font-size: clamp(1.25rem, 3vw + 0.8rem, 2.5rem);
  font-weight: 1000;

  @media ${QUERIES.laptopAndUp} {
    ${(props) =>
      props.$variant === "second" &&
      `
    /* Push the title to the second column */
    grid-column: 2 / 3;
    grid-row: 1; /* Ensure it stays in the first row */
    text-align: right; /* Align the text to the right if needed */
  `}
  }
`;

const Photo = styled.img`
  object-fit: cover;
  width: 100%;
  height: auto;
  grid-area: photo;
  height: 500px;
`;

const Text = styled.p`
  padding: 8px 8px 0 0;
  text-align: start;
  grid-area: text;
`;

const BookContainer = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  text-decoration: none;
  color: black;
  grid-area: book;
`;

const BookText = styled.p`
  font-weight: 700;
  color: var(--color-dark-green);
`;

const BookButton = styled.img`
  width: 35%;
  cursor: pointer;
  margin: 1rem 0;

  @media ${QUERIES.laptopAndUp} {
    width: 25%;
  }
`;

//Styling of JSON i18n text

const Bold = styled.span`
  font-weight: bold;
`;

const ColoredText = styled.span`
  color: var(--color-dark-green);
`;
