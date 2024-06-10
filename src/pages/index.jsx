import AboutMe from "../components/AboutMe";
import Carousel from "../components/Carousel";
import Decoration from "../components/Decoration";
import Header from "../components/Header";
import ReasonsWhy from "../components/ReasonsWhy";

export default function Home() {
  return (
    <>
      <Header />
      <Carousel />
      <Decoration />
      <ReasonsWhy title="3 Reasons Why:" />
      <AboutMe />
      <ReasonsWhy title="My Reviews:" />
    </>
  );
}
