import { useEffect, useRef } from "react";
import styled from "styled-components";
import { IoIosArrowDropup } from "react-icons/io";

export default function Footer() {
  const iconRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            iconRef.current.style.color = "var(--color-green)";
            iconRef.current.style.opacity = "0.9";
          } else {
            iconRef.current.style.color = "var(--color-brown)";
            iconRef.current.style.opacity = "0.2";
          }
        });
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    const currentFooter = footerRef.current;

    if (currentFooter) {
      observer.observe(currentFooter);
    }

    return () => {
      if (currentFooter) {
        observer.unobserve(currentFooter);
      }
    };
  }, []);

  const handleScrollToTop = (e) => {
    e.preventDefault();
    document.getElementById("nav").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <FooterContainer ref={footerRef}>
      <BackToTop
        href="#nav"
        title="back to top"
        ref={iconRef}
        onClick={handleScrollToTop}
      >
        <IoIosArrowDropup size={38} />
      </BackToTop>
      <Copyright>© 2024, VISITES PARFUMS PARIS</Copyright>
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

const BackToTop = styled.a`
  position: fixed;
  bottom: calc(12rem / 16);
  left: 4px;
  text-decoration: none;
  transition: color 0.3s ease;
`;

const Copyright = styled.small`
  color: white;
  font-size: calc(11rem / 16);
  font-weight: 400;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
