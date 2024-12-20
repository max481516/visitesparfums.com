import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./LanguageSelector";
import useStores from "../stores/useStores";
import { RxInstagramLogo } from "react-icons/rx";
import { QUERIES } from "../constants";
import { useEffect } from "react";

export default function MobileSideNav({ isOpen, toggle }) {
  const toggleModal = useStores((state) => state.toggleModal);

  const { t, i18n } = useTranslation();

  // Use effect to disable page scrolling when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <SidebarContainer $isOpen={isOpen}>
      {/* transient props with $ to prevent prop passed to DOM */}
      <SideBarCloseBtn onClick={toggle} $isOpen={isOpen}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </SideBarCloseBtn>
      <SideMenu>
        <SideBarItem onClick={toggle} to="/">
          {t("Nav.Home")}
        </SideBarItem>
        <SideBarItem onClick={toggle} to="/about">
          {t("Nav.AboutMe")}
        </SideBarItem>
        <SideBarItem as="div" onClick={toggleModal}>
          {t("Nav.AskQuestion")}
        </SideBarItem>
        <SideBarItem onClick={toggle} to="/booking">
          {t("Nav.BookNow")}
        </SideBarItem>
      </SideMenu>
      <FollowUs
        href="https://www.instagram.com/visitesparfumsparis/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <RxInstagramLogo size={50} />
        <FollowUsTitle>{t("Nav.FollowMe")}</FollowUsTitle>
      </FollowUs>
      <MobileLanguageSelector lang={i18n.language} />
    </SidebarContainer>
  );
}

const SidebarContainer = styled.aside`
  position: fixed;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  background: hsla(20, 25%, 89%, 0.98);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.2);
  top: 0;
  transition: 0.3s ease-in-out;
  right: ${({ $isOpen }) => ($isOpen ? "0" : "-1000px")};
  z-index: 990;

  @media ${QUERIES.tabletAndUp} {
    width: 350px;
  }
`;

const SideMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 70px;
  height: 70dvh;
  gap: 1rem;
`;

const SideBarItem = styled(Link)`
  color: black;
  cursor: pointer;
  margin: 1rem 0;
  font-size: 2rem;
  text-transform: capitalize;
  font-weight: 600;
  text-align: center;

  &.active {
    color: var(--color-dark-green);
  }
`;

const SideBarCloseBtn = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  color: ${({ $isOpen }) => ($isOpen ? "black" : "white")};
  font-size: 2.5rem;
  width: 50px;
  height: 50px;
  cursor: pointer;
  z-index: 900;
  padding: 0.5rem;
`;

const FollowUsTitle = styled.h3`
  color: inherit;
  font-weight: 500;
  font-size: calc(20rem / 16);
`;

const FollowUs = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 10dvh;
  min-width: 25%;
  margin: 0 auto;
  gap: 0.5rem;
  color: black;
  margin-top: -0.5rem;
`;

const MobileLanguageSelector = styled(LanguageSelector)`
  margin-left: auto;
  margin-right: auto;
  margin-top: 16px;
  width: 73px;
  color: black;
  background: hsla(20, 25%, 89%, 0.98);

  &.ios-selector {
    width: 85px;
  }

  ${({ lang }) =>
    lang === "fr" &&
    `
    width: 82px;

    &.ios-selector {
    width: 95px;
  }
  `}

  ${({ lang }) =>
    lang === "ru" &&
    `
    width: 84px;

    &.ios-selector {
    width: 95px;
  }
  `}
`;
