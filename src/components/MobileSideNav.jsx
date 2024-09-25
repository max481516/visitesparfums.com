import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import { NavLink as Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./LanguageSelector";
import useStores from "../stores/useStores";
import { RxInstagramLogo } from "react-icons/rx";
import { QUERIES } from "../constants";

export default function MobileSideNav({ isOpen, toggle }) {
  const toggleModal = useStores((state) => state.toggleModal);

  const { t, i18n } = useTranslation();

  return (
    <SidebarContainer $isOpen={isOpen}>
      {/* transient props with $ to prevent prop passed to DOM */}
      <SideBarLinkClose onClick={toggle}>
        <AiOutlineClose />
      </SideBarLinkClose>
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
      <FollowUs href="https://www.instagram.com/visitesparfumsparis/">
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

const SideBarLinkClose = styled.div`
  display: flex;
  color: black;
  justify-content: flex-end;
  font-size: 2.5rem;
  cursor: pointer;
  padding: 1rem;
`;

const FollowUsTitle = styled.h2`
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
  margin-top: 32px;
  width: 73px;
  color: black;

  ${({ lang }) =>
    lang === "fr" &&
    `
    width: 82px;
  `}

  ${({ lang }) =>
    lang === "ru" &&
    `
    width: 84px;
  `}
`;
