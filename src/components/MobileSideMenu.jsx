import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import { NavLink as Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./LanguageSelector";
import useStores from "../stores/useStores";
import { RxInstagramLogo } from "react-icons/rx";

export default function Sidebar({ isOpen, toggle }) {
  const toggleModal = useStores((state) => state.toggleModal);

  const { t } = useTranslation();

  return (
    <SidebarContainer isOpen={isOpen}>
      <SideBarLinkClose onClick={toggle}>
        <AiOutlineClose />
      </SideBarLinkClose>
      <SideMenu>
        <SideBarItem onClick={toggle} to="/">
          {t("Home")}
        </SideBarItem>
        <SideBarItem onClick={toggle} to="/about">
          {t("About me")}
        </SideBarItem>
        <SideBarItem as="div" onClick={toggleModal}>
          {t("Ask a question")}
        </SideBarItem>
        <SideBarItem onClick={toggle} to="/booking">
          {t("Book Now!")}
        </SideBarItem>
      </SideMenu>
      <FollowUs href="https://www.instagram.com/visitesparfumsparis/">
        <RxInstagramLogo size={50} />
        <Title>Follow me!</Title>
      </FollowUs>
      <LanguageSelector />
    </SidebarContainer>
  );
}

const FollowUs = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 10dvh;
  width: 25%;
  margin: 0 auto;
  gap: 1rem;
  text-decoration: none;
  color: white;
  margin-top: -1.5rem;
`;

const Title = styled.h2`
  font-weight: 500;
  font-size: calc(20rem / 16);
`;

const SidebarContainer = styled.aside`
  position: fixed;
  width: 350px;
  height: 100%;
  background: var(--color-brown);
  top: 0;
  transition: 0.3s ease-in-out;
  right: ${({ isOpen }) => (isOpen ? "0" : "-1000px")};
  z-index: 990;

  @media screen and (max-width: 550px) {
    width: 100%;
  }
`;

const SideMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70dvh;
  gap: 1rem;
`;

const SideBarItem = styled(Link)`
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
