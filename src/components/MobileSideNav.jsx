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
      <MobileLanguageSelector />
    </SidebarContainer>
  );
}

const FollowUs = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 10dvh;
  min-width: 25%;
  margin: 0 auto;
  gap: 0.5rem;
  color: white;
  margin-top: -0.5rem;
`;

const Title = styled.h2`
  font-weight: 500;
  font-size: calc(20rem / 16);
`;

const SidebarContainer = styled.aside`
  position: fixed;
  width: 100%;
  height: 100%;
  background: var(--color-brown);
  top: 0;
  transition: 0.3s ease-in-out;
  right: ${({ isOpen }) => (isOpen ? "0" : "-1000px")};
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
  color: #fff;
  cursor: pointer;
  margin: 1rem 0;
  font-size: 2rem;
  text-transform: uppercase;

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

const MobileLanguageSelector = styled(LanguageSelector)`
  position: absolute;
  bottom: 1.5rem;
  min-width: 96px;
  max-width: 104px;
  left: 50%;
  transform: translateX(
    -50%
  ); // This shifts the element to the left by 50% of its own width, effectively centering it horizontally
`;
