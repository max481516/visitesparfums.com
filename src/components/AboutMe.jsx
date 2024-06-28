import styled from "styled-components";
import natImage from "../media/Nat.jpg";
import { useTranslation } from "react-i18next";

export default function AboutMe() {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Title>{t("About Me")}</Title>
      <Container>
        <Image src={natImage} alt="aboutme" />
        <Text>{t("aboutMeDescription")}</Text>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const Title = styled.h2`
  text-align: center;
  font-size: 2rem;
  font-weight: 500;
  margin: 2rem 0;
`;

const Container = styled.div`
  display: flex;
`;

const Image = styled.img`
  object-fit: cover;
  min-width: 50%;
  height: auto;
  padding: 8px;
`;

const Text = styled.p`
  padding: 8px;
`;
