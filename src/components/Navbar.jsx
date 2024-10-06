import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import useSidebar from "../hooks/useSidebar";
import MobileSideNav from "./MobileSideNav";
import Logo from "../media/logo.svg?react";
import LanguageSelector from "./LanguageSelector";
import useStores from "../stores/useStores";
import { RxInstagramLogo } from "react-icons/rx";
import { QUERIES } from "../constants";

export default function Navbar() {
  const toggleModal = useStores((state) => state.toggleModal);
  const { t, i18n } = useTranslation();
  const { isOpen, toggle } = useSidebar();

  return (
    <>
      <Nav id="nav">
        <LogoLink to="/">
          <StyledLogo />
        </LogoLink>
        <HamburgerContainer onClick={toggle} isOpen={isOpen}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </HamburgerContainer>
        <NavMenu>
          <NavItem to="/">{t("Nav.Home")}</NavItem>
          <NavItem to="/about">{t("Nav.AboutMe")}</NavItem>
          <AskQuestionBtn onClick={toggleModal}>
            {t("Nav.AskQuestion")}
          </AskQuestionBtn>
        </NavMenu>
        <NavBtn>
          <InstagramLink href="https://www.instagram.com/visitesparfumsparis/">
            <StyledRxInstagramLogo size={35} />
          </InstagramLink>
          <NavBtnBookLink to="/booking">{t("Nav.BookNow")}</NavBtnBookLink>
          <DesktopLanguageSelector lang={i18n.language} />
        </NavBtn>
      </Nav>
      <MobileSideNav isOpen={isOpen} toggle={toggle} />
    </>
  );
}

// Styled Components

const Nav = styled.nav`
  background: var(--color-brown);
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  z-index: 10;
`;

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-left: 16px;
  cursor: pointer;
`;

const StyledLogo = styled(Logo)`
  width: 175px;
  height: 125px;
  color: #fff;
  margin-top: -3px;
  margin-left: -14px;

  @media ${QUERIES.laptopAndUp} {
    margin-left: -8px;
  }
`;

const HamburgerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 25px;
  cursor: pointer;
  z-index: 1002;
  transform: translateX(-25px);

  @media ${QUERIES.bigTabletAndUp} {
    display: none;
  }

  .bar1,
  .bar2,
  .bar3 {
    height: 3px;
    width: 90%;
    background-color: ${({ isOpen }) =>
      isOpen ? "black" : "#fff"}; /* Change color based on state */
    transition: all 0.3s ease-in-out;
  }

  ${({ isOpen }) =>
    isOpen &&
    `
    .bar1 {
      transform: rotate(45deg) translate(10px, 5px);
      transform-origin: center;
    }
    .bar2 {
      opacity: 0;
    }
    .bar3 {
      transform: rotate(-45deg) translate(10px, -5px);
      transform-origin: center;
    }
  `}
`;

const NavMenu = styled.div`
  display: none;

  @media ${QUERIES.bigTabletAndUp} {
    display: flex;
    align-items: center;
  }
`;

const NavItem = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 50%;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    color: var(--color-green);
    transition: all 0.2s ease-in-out;
  }

  &.active {
    color: var(--color-green);
  }

  @media ${QUERIES.laptopAndUp} {
    font-size: calc(20rem / 16);
  }
`;

const AskQuestionBtn = styled.button`
  background: none;
  border: none;
  color: #fff;
  font-size: 1rem;
  padding: 0 1rem;
  cursor: pointer;
  height: 50%;
  display: flex;
  align-items: center;

  &:hover {
    color: var(--color-green);
    transition: all 0.2s ease-in-out;
  }

  &:focus {
    outline: none;
  }

  @media ${QUERIES.laptopAndUp} {
    font-size: calc(20rem / 16);
  }
`;

const NavBtn = styled.nav`
  display: none;

  @media ${QUERIES.bigTabletAndUp} {
    display: flex;
    gap: 16px;
    align-items: center;
    margin-right: 16px;
  }
`;

const InstagramLink = styled.a``;

const StyledRxInstagramLogo = styled(RxInstagramLogo)`
  cursor: pointer;
  color: white;

  &:hover {
    transition: all 0.1s ease-in-out;
    color: var(--color-pink);
  }

  &:focus {
    border: 2px solid var(--color-green);
  }
`;

const NavBtnBookLink = styled(Link)`
  border-radius: 4px;
  background: var(--color-green);
  padding: 10px 22px;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: var(--color-dark-green);
  }
`;

const DesktopLanguageSelector = styled(LanguageSelector)`
  align-items: center;
  font-size: calc(12rem / 16);
  width: 60px;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: var(--color-green);
  }

  &:focus {
    outline: none;
    color: var(--color-green);
  }

  ${({ lang }) =>
    lang === "fr" &&
    `
    width: 66px;
  `}

  ${({ lang }) =>
    lang === "ru" &&
    `
    width: 66px;
  `}
`;
