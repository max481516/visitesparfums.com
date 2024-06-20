import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaAirbnb } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";

export default function ContactUs() {
  return (
    <Wrapper>
      <Book to="/booking">
        <FaAirbnb size={50} />
        <Title>Book Now!</Title>
      </Book>
      <FollowUs href="https://www.instagram.com/visitesparfumsparis/">
        <FaInstagram size={50} />
        <Title>Follow me!</Title>
      </FollowUs>
      <ContactForm>
        <AiOutlineMessage size={50} />
        <Title>Any questions?</Title>
      </ContactForm>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  gap: 2rem;
`;

const Title = styled.h2`
  font-size: 1rem;
  font-weight: 500;
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

const ContactForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
  color: black;
`;
