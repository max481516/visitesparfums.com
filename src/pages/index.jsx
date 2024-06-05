import AboutMe from "../components/AboutMe";
import Carousel from "../components/Carousel";
import Decoration from "../components/Decoration";
import Header from "../components/Header";
import ReasonsWhy from "../components/ReasonsWhy";
import Reviews from "../components/Reviews";

export default function Home() {
  return (
    <>
      <Header />
      <Carousel />
      <Decoration />
      <ReasonsWhy />
      <AboutMe />
    </>
  );
}
