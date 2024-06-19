import { useState } from "react";
import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./LanguageSelector";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const { t } = useTranslation();

  return (
    <>
      <Nav>
        <NavLink to="/">
          <h1>LOGO</h1>
        </NavLink>
        <Bars onClick={handleToggle} />
        <NavMenu>
          <NavLink to="/about">{t("About")}</NavLink>
          <NavLink to="/services">{t("Services")}</NavLink>
          <NavLink to="/contact-us">{t("Contact Us")}</NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/Booking">{t("Book Now!")}</NavBtnLink>
        </NavBtn>
      </Nav>

      <Sidebar isOpen={isOpen} toggle={handleToggle}>
        <SideBarLinkClose onClick={handleToggle}>
          <AiOutlineClose />
        </SideBarLinkClose>
        <SideMenu>
          <SideBarLink onClick={handleToggle} to="/about">
            {t("About")}
          </SideBarLink>
          <SideBarLink onClick={handleToggle} to="/services">
            {t("Services")}
          </SideBarLink>
          <SideBarLink onClick={handleToggle} to="/contact-us">
            {t("Contact Us")}
          </SideBarLink>
          <SideBarLink onClick={handleToggle} to="/Booking">
            {t("Book Now!")}
          </SideBarLink>
        </SideMenu>
        <LanguageSelector />
      </Sidebar>
    </>
  );
}

const Sidebar = styled.aside`
  position: fixed;
  width: 350px;
  height: 100%;
  background: var(--color-brown);
  top: 0;
  transition: 0.3s ease-in-out;
  right: ${({ isOpen }) => (isOpen ? "0" : "-1000px")};
  z-index: 999;

  @media screen and (max-width: 550px) {
    width: 100%;
  }
`;

const SideMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin-top: -3.5rem;
`;

const SideBarLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  margin: 1rem 0;
  font-size: 2rem;

  &.active {
    color: var(--color-green);
  }
`;

const SideBarLinkClose = styled.div`
  display: flex;
  color: var(--color-green);
  justify-content: flex-end;
  font-size: 2.5rem;
  cursor: pointer;
  padding: 1rem;
`;

const Nav = styled.nav`
  background: var(--color-brown);
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
`;

const NavLink = styled(Link)`
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
