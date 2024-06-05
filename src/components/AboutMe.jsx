import styled from "styled-components";
import natImage from "../img/Nat.jpg";

export default function AboutMe() {
  return (
    <Div>
      <Title>About Me</Title>
      <Container>
        <Image src={natImage} alt="aboutme" />
        <Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
          distinctio, reprehenderit cum molestiae odio sit adipisci amet
          delectus, est commodi id voluptatibus, quibusdam harum! Sapiente
          aliquid aliquam fugit expedita laboriosam.
        </Text>
      </Container>
    </Div>
  );
}

const Div = styled.div`
  background-color: var(--color-light-green);
`;

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
