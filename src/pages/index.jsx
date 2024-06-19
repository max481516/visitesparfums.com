import AboutMe from "../components/AboutMe";
import PhotoCarousel from "../components/PhotoCarousel";
import Decoration from "../components/Decoration";
import Header from "../components/Header";
import ReasonsWhy from "../components/ReasonsWhy";

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <PhotoCarousel images={images} />
      <Decoration />
      <ReasonsWhy title="3 Reasons Why:" />
      <AboutMe />
      <ReasonsWhy title="My Reviews:" />
    </>
  );
}
