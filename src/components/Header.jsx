import styled from "styled-components";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t } = useTranslation();

  return (
    <>
      <Title>{t("Home.h1")}</Title>
    </>
  );
}

const Title = styled.h1`
  text-align: start;
  text-transform: uppercase;
  font-size: clamp(1.5rem, 4vw + 1rem, 3rem);
  font-weight: 1000;
  line-height: 1.1;
  padding: 0.5rem 0;
`;
