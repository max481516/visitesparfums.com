import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Nav>
        <NavLink to="/">
          <h1>LOGO</h1>
        </NavLink>
        <Bars onClick={handleToggle} />
        <NavMenu>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/contact-us">Contact Us</NavLink>
          <NavLink to="/sign-up">Sign Up</NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/sign-in">Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
      <Sidebar isOpen={isOpen} toggle={handleToggle}>
        <SideMenu>
          <SideBarLink
            style={{ justifyContent: "flex-end", fontSize: "2.5rem" }}
            onClick={handleToggle}
          >
            <AiOutlineClose />
          </SideBarLink>
          <SideBarLink onClick={handleToggle} to="/about">
            About
          </SideBarLink>
          <SideBarLink to="/services">Services</SideBarLink>
          <SideBarLink to="/contact-us">Contact Us</SideBarLink>
          <SideBarLink to="/sign-up">Sign Up</SideBarLink>
        </SideMenu>
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

  @media screen and (max-width: 550px) {
    width: 100%;
  }
`;

const SideMenu = styled.div`
  display: flex
  align-items: center;
  height: 100%;
`;

const SideBarLink = styled(Link)`
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  cursor: pointer;
  margin: 1rem 0;
  font-size: 1.5rem;

  &.active {
    color: var(--color-green);
  }
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

  &.active {
    color: var(--color-green);
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
  background: #256ce1;
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
`;
