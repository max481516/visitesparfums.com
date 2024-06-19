import styled from "styled-components";

export default function Decoration() {
  return (
    <Wrapper>
      <Rectangle></Rectangle>
      <Rectangle></Rectangle>
      <Rectangle></Rectangle>
      <Rectangle></Rectangle>
      <Rectangle></Rectangle>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  gap: 5px;
  margin-top: calc(20rem / 16);
`;

const Rectangle = styled.div`
  width: 65px;
  height: 35px;

  &:nth-child(1) {
    background-color: var(--color-brown);
  }
  &:nth-child(2) {
    background-color: var(--color-yellow);
  }
  &:nth-child(3) {
    background-color: var(--color-pink);
  }
  &:nth-child(4) {
    background-color: var(--color-blue);
  }
  &:nth-child(5) {
    background-color: var(--color-green);
  }
`;
