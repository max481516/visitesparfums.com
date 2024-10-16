import styled from "styled-components";
import { Link } from "react-router-dom";
import { RxInstagramLogo } from "react-icons/rx";
import { FaAirbnb } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";
import ContactForm from "./ContactForm";
import ContactModal from "./ContactModal";
import useStores from "../stores/useStores";
import { useTranslation } from "react-i18next";
import { QUERIES } from "../constants";

export default function ContactUs() {
  const showModal = useStores((state) => state.showModal);
  const toggleModal = useStores((state) => state.toggleModal);

  const { t } = useTranslation();

  return (
    <Wrapper>
      <Book to="/booking">
        <FaAirbnb size={50} />
        <Title>{t("Home.BookNowIcon")}</Title>
      </Book>
      <FollowUs
        href="https://www.instagram.com/visitesparfumsparis/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <RxInstagramLogo size={50} />
        <Title>{t("Home.FollowMeIcon")}</Title>
      </FollowUs>
      <ContactFormButton onClick={toggleModal}>
        <AiOutlineMessage size={50} />
        <Title>{t("Home.AnyQuestionIcon")}</Title>
        <ContactModal show={showModal} onClose={toggleModal}>
          <ContactForm />
        </ContactModal>
      </ContactFormButton>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  padding: 0 0 2rem;
  gap: 1rem;
  flex-wrap: wrap;

  @media ${QUERIES.tabletAndUp} {
    gap: 4rem;
  }
`;

const Title = styled.h2`
  width: 95px;
  font-size: 1rem;
  font-weight: 500;
  text-align: center;

  @media ${QUERIES.tabletAndUp} {
    width: 120px;
  }
`;

const Book = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
  color: black;
`;

const FollowUs = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
  color: black;
`;

const ContactFormButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
  color: black;
  cursor: pointer;
  text-decoration: none;
  border: none;
  background: none;

  &:focus-visible {
    outline: 2px solid var(--color-green);
  }
`;
