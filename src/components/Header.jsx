import styled from "styled-components";

export default function Header() {
  return (
    <>
      <Title>Exclusive Paris Perfume Tours</Title>
    </>
  );
}

const Title = styled.h1`
  text-align: start;
  text-transform: uppercase;
  font-size: clamp(1.5rem, 4vw + 1rem, 3rem);
  font-weight: 1000;
  line-height: 1.1;
  padding: 0.5rem 16px;
`;
