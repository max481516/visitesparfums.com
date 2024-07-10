import styled from "styled-components";
import { Link } from "react-router-dom";
import { RxInstagramLogo } from "react-icons/rx";
import { FaAirbnb } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";
import ContactForm from "./ContactForm";
import ContactModal from "./ContactModal";
import useStores from "../stores/useStores";

export default function ContactUs() {
  const showModal = useStores((state) => state.showModal);
  const toggleModal = useStores((state) => state.toggleModal);

  return (
    <Wrapper>
      <Book to="/booking">
        <FaAirbnb size={50} />
        <Title>Book Now!</Title>
      </Book>
      <FollowUs href="https://www.instagram.com/visitesparfumsparis/">
        <RxInstagramLogo size={50} />
        <Title>Follow me!</Title>
      </FollowUs>
      <ContactFormButton onClick={toggleModal}>
        <AiOutlineMessage size={50} />
        <Title>Any questions?</Title>
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
  padding: 2rem;
  gap: 3rem;
`;

const Title = styled.h2`
  font-size: 1rem;
  font-weight: 500;
  text-align: center;
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
