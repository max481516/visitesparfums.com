import { useEffect, useRef } from "react";
import styled from "styled-components";
import { IoArrowUpSharp } from "react-icons/io5";

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

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  const handleScrollToTop = (e) => {
    e.preventDefault();
    document.getElementById("nav").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <FooterContainer ref={footerRef}>
      <ArrowTop
        href="#nav"
        title="back to top"
        ref={iconRef}
        onClick={handleScrollToTop}
      >
        <IoArrowUpSharp
          style={{
            width: "38px",
            height: "38px",
          }}
        />
      </ArrowTop>
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

const ArrowTop = styled.a`
  position: fixed;
  bottom: calc(12rem / 16);
  left: 4px;
  text-decoration: none;
  transition: color 0.3s ease;
`;

const Copyright = styled.small`
  color: var(--color-blue);
  font-size: calc(11rem / 16);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
