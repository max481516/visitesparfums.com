import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { SlSocialInstagram } from "react-icons/sl";
import { FaAirbnb } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";
import ContactForm from "./ContactForm";
import ContactModal from "./ContactModal";

export default function ContactUs() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <Wrapper>
      <Book to="/booking">
        <FaAirbnb size={50} />
        <Title>Book Now!</Title>
      </Book>
      <FollowUs href="https://www.instagram.com/visitesparfumsparis/">
        <SlSocialInstagram size={50} />
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

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem;
  gap: 3rem;
  margin-left: 20px;
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

const ContactFormButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
  color: black;
`;
