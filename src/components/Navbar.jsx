import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import useSidebar from "../hooks/useSidebar";
import MobileSideNav from "./MobileSideNav";
import Logo from "../media/logo.svg?react";
import LanguageSelector from "./LanguageSelector";
import useStores from "../stores/useStores";
import { QUERIES } from "../constants";
import { RxInstagramLogo } from "react-icons/rx";

export default function Navbar() {
  const toggleModal = useStores((state) => state.toggleModal);
  const { t, i18n } = useTranslation();
  const { isOpen, toggle } = useSidebar();

  return (
    <>
      <Nav id="nav">
        <LogoLink to="/">
          <StyledLogo></StyledLogo>
        </LogoLink>
        <Bars onClick={toggle} />
        <NavMenu>
          <NavItem to="/">{t("Nav.Home")}</NavItem>
          <NavItem to="/about">{t("Nav.AboutMe")}</NavItem>
          <NavItem onClick={toggleModal}>{t("Nav.AskQuestion")}</NavItem>
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

const Bars = styled(FaBars)`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-100%, 75%);
  font-size: 1.8rem;
  cursor: pointer;
  color: #fff;

  @media ${QUERIES.bigTabletAndUp} {
    display: none;
  }
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
