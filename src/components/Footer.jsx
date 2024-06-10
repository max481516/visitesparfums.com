import { useEffect, useRef } from "react";
import styled from "styled-components";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  const iconRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            iconRef.current.style.color = "var(--color-pink)";
          } else {
            iconRef.current.style.color = "var(--color-brown)";
          }
        });
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <FooterContainer ref={footerRef}>
      <SocialIcons
        href="https://www.instagram.com/visitesparfumsparis/"
        ref={iconRef}
      >
        <FaInstagram
          style={{
            opacity: "0.8",
            width: "42px",
            height: "42px",
          }}
        />
      </SocialIcons>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  background-color: var(--color-brown);
  text-align: center;
  width: 100%;
  height: 4rem;
  position: relative;
`;

const SocialIcons = styled.a`
  position: fixed;
  bottom: 6px;
  left: 4px;
  text-decoration: none;
  transition: color 0.3s ease;
`;
