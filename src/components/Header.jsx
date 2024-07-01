import styled from "styled-components";
import { FONT_STYLES } from "../constants.js";

export default function Header() {
  return (
    <>
      <Title>Exclusive perfume guided boutiques tours in Paris</Title>
    </>
  );
}

const Title = styled.h1`
  text-align: start;
  font-size: ${FONT_STYLES.primaryTitles.size};
  font-weight: ${FONT_STYLES.primaryTitles.weight};
  padding: 0.5rem;
  margin: 2rem 0;
`;
