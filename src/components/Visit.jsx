import styled from "styled-components";
import { useTranslation, Trans } from "react-i18next";
import { QUERIES } from "../constants.js";

export default function Visit({ title, text, photo, className, variant }) {
  const { t } = useTranslation();

  return (
    <Wrapper className={className} $variant={variant}>
      <Photo src={photo} loading="lazy"></Photo>
      <Text>
        <Title>{title}</Title>
        <Trans
          i18nKey={text}
          components={{
            bold: <Bold />,
            colored: <ColoredText />,
          }}
        />
        <BookButton
          $variant={variant}
          href="https://www.airbnb.fr/experiences/4431379?guests=1&adults=1&s=67&unique_share_id=95ddc40a-121e-49a6-8d7b-14de1e847235"
        >
          {t("Nav.BookNow")}
        </BookButton>
      </Text>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  align-items: center;
  padding-top: 1rem;

  @media ${QUERIES.laptopAndUp} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    grid-gap: 1rem;

    ${(props) =>
      props.$variant === "first" &&
      `
    grid-template-areas: 
    "photo text"
    "book .";
  `}

    ${(props) =>
      props.$variant === "second" &&
      `
    grid-template-areas: 
    "text photo"
    ". book";
  `}
  }
`;

const Title = styled.h2`
  font-size: clamp(1.25rem, 3vw + 0.8rem, 2.5rem);
  font-weight: 1000;
`;

const Photo = styled.img`
  object-fit: cover;
  width: 100%;
  height: auto;
  grid-area: photo;
  height: 500px;
`;

const Text = styled.p`
  padding: 0 8px 8px 0;
  text-align: start;
  grid-area: text;
`;

const BookButton = styled.a`
  display: block;
  width: 125px;
  border-radius: 4px;
  background: var(--color-green);
  padding: 10px 22px;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  ${(props) =>
    props.$variant === "first" &&
    `
      margin-top: 1rem;
  `}

  ${(props) =>
    props.$variant === "second" &&
    `
      margin-top: calc(-8rem / 16);
      margin-bottom: 1rem; 
  `}

  &:hover {
    transition: all 0.2s ease-in-out;
    background: var(--color-dark-green);
  }
`;

//Styling of JSON i18n text

const Bold = styled.span`
  font-weight: bold;
`;

const ColoredText = styled.span`
  color: var(--color-dark-green);
`;
