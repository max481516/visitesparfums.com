import Visit from "../components/Visit.jsx";
import Decoration from "../components/Decoration.jsx";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { QUERIES } from "../constants.js";
import useStores from "../stores/useStores.js";
import { useTranslation, Trans } from "react-i18next";
import styled from "styled-components";
import { FaCalendar, FaClock, FaUserFriends, FaTag } from "react-icons/fa";

export default function Booking() {
  const toggleModal = useStores((state) => state.toggleModal);
  const { t } = useTranslation();

  const Visit1Picture = (
    <picture>
      <source
        srcSet="
          https://res.cloudinary.com/dqs3mkxnr/image/upload/w_1600,f_auto,q_auto/v1727254937/mathias-reding-8ldNGhGutaM-unsplash_jzqxrn.jpg 1600w,
          https://res.cloudinary.com/dqs3mkxnr/image/upload/w_1100,f_auto,q_auto/v1727254937/mathias-reding-8ldNGhGutaM-unsplash_jzqxrn.jpg 1100w,
          https://res.cloudinary.com/dqs3mkxnr/image/upload/w_770,f_auto,q_auto/v1727254937/mathias-reding-8ldNGhGutaM-unsplash_jzqxrn.jpg 770w,
          https://res.cloudinary.com/dqs3mkxnr/image/upload/w_550,f_auto,q_auto/v1727254937/mathias-reding-8ldNGhGutaM-unsplash_jzqxrn.jpg 550w
        "
        sizes="
          (min-width: ${BREAKPOINTS.desktopMin}px) 1500px,
          (min-width: ${BREAKPOINTS.laptopMin}px) 1100px,
          (min-width: ${BREAKPOINTS.bigTabletMin}px) 770px,
          (min-width: ${BREAKPOINTS.tabletMin}px) 550px,
          100vw
        "
        type="image/webp"
      />
      <img
        width="1600"
        height="900"
        src="https://res.cloudinary.com/dqs3mkxnr/image/upload/v1727254937/mathias-reding-8ldNGhGutaM-unsplash_jzqxrn.jpg"
        loading="lazy"
        alt="A typical haussmannian building in Paris"
      />
    </picture>
  );

  const Visit2Picture = (
    <picture>
      <source
        srcSet="
          https://res.cloudinary.com/dqs3mkxnr/image/upload/w_1600,f_auto,q_auto/v1726691651/Visit1_glokrt.jpg 1600w,
          https://res.cloudinary.com/dqs3mkxnr/image/upload/w_1100,f_auto,q_auto/v1726691651/Visit1_glokrt.jpg 1100w,
          https://res.cloudinary.com/dqs3mkxnr/image/upload/w_770,f_auto,q_auto/v1726691651/Visit1_glokrt.jpg 770w,
          https://res.cloudinary.com/dqs3mkxnr/image/upload/w_550,f_auto,q_auto/v1726691651/Visit1_glokrt.jpg 550w
        "
        sizes="
          (min-width: ${BREAKPOINTS.desktopMin}px) 1500px,
          (min-width: ${BREAKPOINTS.laptopMin}px) 1100px,
          (min-width: ${BREAKPOINTS.bigTabletMin}px) 770px,
          (min-width: ${BREAKPOINTS.tabletMin}px) 550px,
          100vw
        "
        type="image/webp"
      />
      <img
        width="1600"
        height="900"
        src="https://res.cloudinary.com/dqs3mkxnr/image/upload/w_800/v1726691651/Visit1_glokrt.jpg"
        loading="lazy"
        alt="Interior of a niche perfume shop in Paris called Infiniment Coty"
      />
    </picture>
  );

  return (
    <>
      <Helmet>
        <title>Booking Perfume Tours in Paris - Visites Parfums Paris</title>
        <meta
          name="description"
          content="Book your spot for an exclusive perfume tour in Paris with Natacha Pascalis. Discover the art of fragrances and explore hidden perfume boutiques."
        />
        <meta
          property="og:title"
          content="Book Your Perfume Tour in Paris - Visites Parfums Paris"
        />
        <meta
          property="og:description"
          content="Join Natacha Pascalis for an unforgettable perfume tour in Paris. Explore hidden perfume boutiques and discover your personalized fragrance."
        />
        <meta
          property="og:image"
          content="https://vpparis.fr/og-images/BookingOGPhoto.jpg"
        />
        <meta property="og:url" content="https://vpparis.fr/booking" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Visites Parfums Paris" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="fr_FR" />
        <meta property="og:locale:alternate" content="ru_RU" />
        <link rel="canonical" href="https://vpparis.fr/booking" />
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
          photo={Visit1Picture}
          text={t("Booking.Visit1")}
          link="https://www.airbnb.ie/experiences/4431379"
          target="_blank"
          rel="noopener noreferrer"
          variant="first"
        />
        <BookingDecoration />
        <VisitMarais
          title="Marais"
          photo={Visit2Picture}
          text={t("Booking.Visit2")}
          link="https://www.airbnb.fr/experiences/4431379"
          target="_blank"
          rel="noopener noreferrer"
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
    margin-top: -108px;
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
