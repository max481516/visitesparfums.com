import styled from "styled-components";

export default function AboutVisit() {
  return (
    <>
      <Title>Discover Unique Boutiques and the Art of Olfaction</Title>
      <Text>
        Passionate about the world of fragrances and working within this vibrant
        industry, I invite you to immerse yourself in the sensory universe of
        scents. The objective of Visits Parfums Paris is to uncover the most
        exquisite and unique perfume boutiques in Paris, enrich your knowledge
        of perfumery history, and introduce you to the fundamentals of
        olfaction. These walking tours, lasting no more than two hours per
        session, are conducted by arrondissement, ensuring a personalized and
        in-depth experience of Paris&apos;s fragrant landscape.
      </Text>
    </>
  );
}

const Title = styled.h2`
  text-align: start;
  font-size: calc(20rem / 16);
  font-weight: 800;
  padding: 0.5rem;
`;

const Text = styled.p`
  padding: 8px;
  text-align: start;
`;
