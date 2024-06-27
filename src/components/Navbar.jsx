import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import useSidebar from "../hooks/useSidebar";
import MobileSideNav from "./MobileSideNav";
import logo from "../media/logo.svg";
import LanguageSelector from "./LanguageSelector";
import useStores from "../stores/useStores";
import { QUERIES } from "../constants";

export default function Navbar() {
  const toggleModal = useStores((state) => state.toggleModal);
  const { t } = useTranslation();
  const { isOpen, toggle } = useSidebar();

  return (
    <>
      <Nav id="nav">
        <LogoLink to="/">
          <Logo src={logo}></Logo>
        </LogoLink>
        <Bars onClick={toggle} />
        <NavMenu>
          <NavItem to="/">{t("Home")}</NavItem>
          <NavItem to="/about">{t("About me")}</NavItem>
          <NavItem onClick={toggleModal}>{t("Ask a question")}</NavItem>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/booking">{t("Book Now!")}</NavBtnLink>
          <DesktopLanguageSelector />
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
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-left: 16px;
  width: 213px;
  height: 50%;
  cursor: pointer;

  &:hover {
    color: var(--color-green);
    transition: all 0.2s ease-in-out;
  }
`;

const Logo = styled.img`
  width: 130px;
  height: 40px;
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
  text-decoration: none;
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

const NavBtnLink = styled(Link)`
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
  font-size: calc(12rem / 16);
  width: 74px;
  border: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: var(--color-green);
    background-image: url('data:image/svg+xml;charset=US-ASCII,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10"><path fill="%238EB6A5" d="M0 3.5l5 5 5-5z"/></svg>');
  }

  &:focus-visible {
    outline: 2px solid var(--color-green);
  }
`;
