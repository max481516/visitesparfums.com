import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { QUERIES } from "../constants.js";

export default function AboutVisit() {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Title>{t("Home.AboutVisitTitle")}</Title>
      <Text>{t("Home.AboutVisit")}</Text>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  @media ${QUERIES.laptopAndUp} {
    margin-top: 2rem;
  }
`;

const Title = styled.h2`
  text-align: start;
  font-size: clamp(1.25rem, 3vw + 0.8rem, 2.5rem);

  font-weight: 800;
  line-height: 1.2;
  padding: 1rem 0 0.5rem;
`;

const Text = styled.p`
  padding: 0 0 0.5rem;
  line-height: 1.3;
  text-align: start;
`;
