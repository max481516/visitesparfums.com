import styled from "styled-components";
import { useTranslation, Trans } from "react-i18next";
import { QUERIES } from "../constants.js";

export default function Visit({
  title,
  text,
  photo,
  link,
  className,
  variant,
  target = "_self",
  rel = "",
}) {
  const { t, i18n } = useTranslation();

  return (
    <Wrapper className={className} $variant={variant}>
      <PhotoContainer>{photo}</PhotoContainer>
      <Text $variant={variant}>
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
          href={link}
          target={target}
          rel={rel}
          lang={i18n.language}
          id="book-link"
          className="book-link"
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

const PhotoContainer = styled.div`
  grid-area: photo;
  width: 100%;
  height: 500px;
  overflow: hidden;

  @media ${QUERIES.bigTabletAndUp} {
    height: 700px;
  }

  @media ${QUERIES.laptopAndUp} {
    height: 500px;
  }

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

const Text = styled.p`
  padding: 0 8px 8px 0;
  text-align: start;
  grid-area: text;

  @media ${QUERIES.laptopAndUp} {
    ${(props) =>
      props.$variant === "second" &&
      `
    margin-top: -3rem;
  `}
  }
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
  text-align: center;
  margin-right: auto;
  margin-left: auto;

  ${(props) =>
    props.$variant === "first" &&
    `
      margin-top: 2rem;
  `}

  ${(props) =>
    props.$variant === "second" &&
    `
      margin-top: calc(-4rem / 16);
      margin-bottom: 1rem; 
  `}

  &:hover {
    transition: all 0.2s ease-in-out;
    background: var(--color-dark-green);
  }

  ${({ lang }) =>
    lang === "fr" &&
    `
    width: 129px;
  `}

  ${({ lang }) =>
    lang === "ru" &&
    `
    width: 160px;
  `}
`;

//Styling of JSON i18n text

const Bold = styled.span`
  font-weight: bold;
`;

const ColoredText = styled.span`
  color: var(--color-dark-green);
`;
