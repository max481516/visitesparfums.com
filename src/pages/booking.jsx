import Visit from "../components/Visit";
import Decoration from "../components/Decoration";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { QUERIES } from "../constants.js";
import useStores from "../stores/useStores";
import { useTranslation } from "react-i18next";
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

      <Intro>{t("Booking.Intro")}</Intro>
      <Visit
        title="Paris Saint-Honoré"
        photo={Photo1}
        text="Saturday 4pm (or Friday 5pm - to be discussed)
 
Covered themes :
·      Pioneers of Niche Perfumery -
 about the brands that have established the codes of the niche perfumery trend (il faudra rajouter les dates quand on va lancer le site)
·      Trendy Niche brands – currently making the buzz in the fragrance industry (il faudra rajouter les dates quand on va lancer le site)
 "
      />
      <BookingDecoration />
      <Visit
        title="Marais"
        photo={Photo2}
        text="Sunday 4pm  
 
Covered themes :
·       Pioneers of Niche Perfumery – about the brands that have established the codes of the niche perfumery trend (il faudra rajouter les dates quand on va lancer le site)
·       Between History & Modernity – inspired by ancient perfumery of the 18th century, these vintage brands are still making an impact nowadays    


Additional general
information
 
·      If the scheduled time is not convenient for you, it can be adjusted.
·      Note there is a possibility to organize a private group visit or add additional participants"
      />
      <Message>
        {t("Booking.AnyQuestions")}{" "}
        <MessageLink onClick={toggleModal}>
          {t("Booking.AnyQuestionsLink")}
        </MessageLink>
      </Message>
    </>
  );
}

const Intro = styled.p`
  padding: 8px 16px;
`;

const BookingDecoration = styled(Decoration)`
  padding-bottom: 2rem;
`;

const Message = styled.p`
  padding: 8px 16px;
  min-width: 75%;
  font-weight: 700;
  line-height: 1.2;
  font-size: calc(18rem / 16);

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
