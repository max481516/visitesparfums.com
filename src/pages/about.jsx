import AboutMe from "../components/AboutMe";
import { Helmet } from "react-helmet-async";

export default function About() {
  return (
    <>
      <Helmet>
        <title>About me</title>
        <meta
          name="description"
          content="Information about Natacha, the founder of Visites Parfums Paris"
        />
        <link rel="canonical" href="/about" />
      </Helmet>
      <AboutMe />;
    </>
  );
}
