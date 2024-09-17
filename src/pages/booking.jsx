import Visit from "../components/Visit";
import Decoration from "../components/Decoration";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { QUERIES } from "../constants.js";
import useStores from "../stores/useStores";
import { useTranslation, Trans } from "react-i18next";
import styled from "styled-components";
import Photo1 from "../media/Visit1.jpg";
import Photo2 from "../media/Visit2.jpg";

export default function Booking() {
  const toggleModal = useStores((state) => state.toggleModal);
  const { t } = useTranslation();

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

      <Wrapper>
        <Title>{t("Booking.Title")}</Title>
        <Intro>
          <Intro>
            <Trans i18nKey="Booking.IntroPart1" />
            <br />
            <br />
            <Trans
              i18nKey="Booking.IntroPart2"
              components={{ bold: <Bold /> }}
            />
            <br />
            <br />
            <Trans
              i18nKey="Booking.IntroPart3"
              components={{
                bold: <Bold />,
                colored: <ColoredText />,
              }}
            />
          </Intro>
        </Intro>

        <Visit
          title="Paris Saint-Honoré"
          photo={Photo1}
          text={t("Booking.Visit1")}
          variant="first"
        />
        <BookingDecoration />
        <VisitMarais
          title="Marais"
          photo={Photo2}
          text={t("Booking.Visit2")}
          variant="second"
        />

        <Message>
          {t("Booking.AnyQuestions")}{" "}
          <MessageLink onClick={toggleModal}>
            {t("Booking.AnyQuestionsLink")}
          </MessageLink>
        </Message>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  padding: 0 16px;
  white-space: pre-line; // to render new lines in the text from JSON

  @media ${QUERIES.laptopAndUp} {
    padding: 0 128px;
  }
`;

const Title = styled.h2`
  font-size: clamp(1.5rem, 4vw + 1rem, 3rem);
  font-weight: 1000;
  padding-top: 8px;
`;

const Intro = styled.p``;

const BookingDecoration = styled(Decoration)`
  padding-bottom: 2rem;

  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const Message = styled.p`
  padding: 0 0 8px;
  min-width: 75%;
  font-weight: 700;
  line-height: 1.2;

  @media ${QUERIES.laptopAndUp} {
    font-size: calc(17rem / 16);
  }
`;

const MessageLink = styled(Link)`
  color: var(--color-dark-green);
  cursor: pointer;

  &:hover {
    color: var(--color-green);
  }
`;

const VisitMarais = styled(Visit)`
  padding-bottom: 0;
`;

// JSON i18n text styling
const Bold = styled.span`
  font-weight: bold;
`;

const ColoredText = styled.span`
  color: var(--color-dark-green);
`;
