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
import { FaCalendar, FaClock, FaUserFriends, FaTag } from "react-icons/fa";

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
              i18nKey="Booking.IntroPart2.Title"
              components={{ bold: <Bold /> }}
            />
            <br />
            <br />

            <IconTextWrapper>
              <StyledIcons as={FaCalendar} />
              <Text>
                <Trans
                  i18nKey="Booking.IntroPart2.When"
                  components={{
                    bold: <Bold />,
                    colored: <ColoredText />,
                  }}
                />
              </Text>
            </IconTextWrapper>

            <IconTextWrapper>
              <StyledIcons as={FaClock} />
              <Text>
                <Trans
                  i18nKey="Booking.IntroPart2.Time"
                  components={{
                    bold: <Bold />,
                    colored: <ColoredText />,
                  }}
                />
              </Text>
            </IconTextWrapper>

            <IconTextWrapper>
              <StyledIcons as={FaUserFriends} />
              <Text>
                <Trans
                  i18nKey="Booking.IntroPart2.Attendees"
                  components={{
                    bold: <Bold />,
                    colored: <ColoredText />,
                  }}
                />
              </Text>
            </IconTextWrapper>

            <IconTextWrapper>
              <StyledIcons as={FaTag} />
              <Text>
                <Trans
                  i18nKey="Booking.IntroPart2.Price"
                  components={{
                    bold: <Bold />,
                    colored: <ColoredText />,
                  }}
                />
              </Text>
            </IconTextWrapper>
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
    padding: 48px 128px;
  }
`;

const Title = styled.h2`
  font-size: clamp(1.5rem, 4vw + 1rem, 3rem);
  font-weight: 1000;
  padding-top: 8px;
`;

const Intro = styled.p`
  margin-bottom: 1rem;
`;

const StyledIcons = styled.span`
  display: flex;
  color: var(--color-green);
  flex-shrink: 0;
  margin-top: 2px;
`;

const Text = styled.span`
  flex-grow: 1;
  word-break: break-word;
`;

const IconTextWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  line-height: 1.3;
`;

const BookingDecoration = styled(Decoration)`
  margin: 1rem 0;

  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const Message = styled.p`
  padding: 0 0 8px;
  font-weight: 700;
  line-height: 1.2;

  @media ${QUERIES.laptopAndUp} {
    font-size: calc(17rem / 16);
    width: 50%;
    margin-top: -86px;
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
