import styled from "styled-components";
import { useTranslation } from "react-i18next";

export default function AboutVisit() {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Title>{t("Home.AboutVisitTitle")}</Title>
      <Text>{t("Home.AboutVisit")}</Text>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const Title = styled.h2`
  text-align: start;
  font-size: calc(20rem / 16);
  font-weight: 800;
  line-height: 1.2;
  padding: 1rem 0 0.5rem;
`;

const Text = styled.p`
  padding: 0 0 0.5rem;
  line-height: 1.3;
  text-align: start;
`;
