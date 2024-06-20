import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import useSidebar from "../hooks/useSidebar";
import Sidebar from "./Sidebar";
import logo from "../img/logo.svg";

export default function Navbar() {
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
          <NavItem to="/about">{t("About")}</NavItem>
          <NavItem to="/services">{t("Services")}</NavItem>
          <NavItem to="/contact-us">{t("Contact Us")}</NavItem>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/booking">{t("Book Now!")}</NavBtnLink>
        </NavBtn>
      </Nav>
      <Sidebar isOpen={isOpen} toggle={toggle} />
    </>
  );
}

const Nav = styled.nav`
  background: var(--color-brown);
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
`;

const LogoLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;

  height: 100%;
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
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:hover {
    color: var(--color-green);
    transition: all 0.2s ease-in-out;
  }
`;

const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
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
    background: #fff;
    color: #010606;
  }
`;
