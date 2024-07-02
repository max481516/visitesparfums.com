import styled from "styled-components";

export default function Header() {
  return (
    <>
      <Title>Exclusive perfume guided boutiques tours in Paris</Title>
    </>
  );
}

const Title = styled.h1`
  text-align: start;
  font-size: clamp(1.5rem, 4vw + 1rem, 3rem);
  font-weight: 1000;
  padding: 0.5rem;
`;
