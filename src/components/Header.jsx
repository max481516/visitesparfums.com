import styled from "styled-components";

export default function Header() {
  return (
    <HeaderText>
      Lorem ipsum dolor sit amet consectetur. Vulputate sed nascetur sem
      faucibus a narat suscipit risus aliquet viverra sapien. Aliquam mauris
      euismod sit tellus ullamcorper lectus dolor blandit.
    </HeaderText>
  );
}

const HeaderText = styled.header`
  margin: calc(20rem / 16) auto;
  width: 80dvw;
  text-align: center;
`;
