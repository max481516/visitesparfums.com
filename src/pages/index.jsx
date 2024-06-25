import PhotoCarousel from "../components/PhotoCarousel";
import Decoration from "../components/Decoration";
import Header from "../components/Header";
import TextCarousel from "../components/TextCarousel";
import ContactUs from "../components/ContactUs";
import AboutVisit from "../components/AboutVisit";
import PhotoGallery from "../components/PhotoGallery";
import HomeCarouselPhoto1 from "../media/HomeCarouselPhotos/HomeCarouselPhoto1.jpeg";
import HomeCarouselPhoto2 from "../media/HomeCarouselPhotos/HomeCarouselPhoto2.jpeg";
import HomeCarouselPhoto3 from "../media/HomeCarouselPhotos/HomeCarouselPhoto3.jpeg";
import HomeCarouselPhoto4 from "../media/HomeCarouselPhotos/HomeCarouselPhoto4.jpeg";

const images = [
  {
    original: HomeCarouselPhoto1,
  },
  {
    original: HomeCarouselPhoto2,
  },
  {
    original: HomeCarouselPhoto3,
  },
  {
    original: HomeCarouselPhoto4,
  },
];

const reasons = [
  {
    description:
      "I love you the more in that I believe you had liked me for my own sake and for nothing else",
    author: "John Keats",
  },
  {
    description:
      "But man is not made for defeat. A man can be destroyed but not defeated.",
    author: "Ernest Hemingway",
  },
  {
    description:
      "I have not failed. I've just found 10,000 ways that won't work.",
    author: "Thomas A. Edison",
  },
];

const reviews = [
  {
    description:
      "My daughter and I enjoyed our perfume walk with Natacha, who lives what she teaches, working in the perfume industry in Paris. We liked hearing about her own personal experiences on top of learning much about the history of perfume in France. We visited several niche perfume shops near Place des Vosges, which fit in nicely with our quest to find a souvenir scent to bring home. We felt some expectation (but no pressure) to make a purchase, but we were not yet ready to choose. This was a unique experience and a lovely way to spend an afternoon in Paris.",
    author: "Tricia",
  },
  {
    description:
      "There were two participants and we met at a beautiful park where Natacha explained the history of perfume, this was very interested. Even though I have this hobby for over 10 years I never got into the history of perfume. We went to 3 stores in the Marais area and smelled some gorgeous en exclusive scents. It was a great time.",
    author: "Lidia",
  },
  {
    description:
      "original activity in an emblematic area of Paris, Natacha showed us perfumeries that we would not have had the idea of visiting and where we enjoyed unprecedented scents. I would recommend it, whatever your knowledge of perfumes.",
    author: "Nathalie",
  },
  {
    description:
      "Natacha is extremely knowledgeable about the fragrances, the industry and traditions, the history. I am truly impressed. The information she provides in the introduction and presentation before going to the makers' shops is surprisingly helpful when considering/smelling the many wonderful. fragrances. I highly recommend this experience.",
    author: "Maya",
  },
  {
    description:
      "The whole experience was wonderful, Natacha is very passionate about the industry and you can see the sparkle in her eyes while she was introducing us to the history of the perfume industry.",
    author: "Nadya",
  },
  {
    description:
      "Great perfume tour with a lot of interesting facts and stories. Love when someone is passionate about what they do! Highly recommend",
    author: "Galina",
  },
  {
    description:
      "I loved this experience! Natacha is truly passionate about the world of perfume making. She was super engaged, well organized and fun to talk to.",
    author: "Asy",
  },
  {
    description:
      "Natacha is extremely knowledgeable and passionate about perfumes! I learned so much from her today. It was a magical experience, and I told all my friends at home about it. I highly recommend this experience!",
    author: "Holly",
  },
  {
    description:
      "Very interesting the host knew a lot about perfumes. You now know what and where niche perfumes are and reasonable priced perfumes. There's more about smells and perfumes than I thought. Definitely recommendable!",
    author: "Sieds",
  },
  {
    description:
      "Natacha offers an insider’s understanding of the perfume world. She gave a thorough history of perfume and then we explored niche perfumery shops in the Marais. Wonderful experience!!",
    author: "Niki",
  },
  {
    description:
      "Definitely an informative tour of some of the top perfumeries in Paris. Took the information I learned from this the following day when I went perfume shopping for my mom. 10/10 would take this class again if I was in Paris.",
    author: "Rochelle",
  },
  {
    description:
      "Natacha was a great guide and is very passionate about perfumes. I enjoyed learning about perfume history and loved all the scents!",
    author: "Carlo",
  },
  {
    description:
      "Ce fut une excellente expérience et je suis heureux d'avoir trouvé la visite de Natacha ! Tout d'abord, vous pouvez toujours y trouver BEAUCOUP d'attractions et d'activités touristiques, mais ce n'est pas un vrai Paris avec son histoire (qui est bien sûr liée à la parfumerie) et son ambiance. Cette visite nous a ouvert les portes de boutiques uniques de marques Niche à Paris, nous avons appris des nouveautés sur l'histoire des parfums et goûté de nombreux parfums. En outre, nous avons trouvé des parfums qui correspondent à notre humeur et à notre caractère. Je recommande donc vivement cette visite si vous voulez passer votre temps de manière significative et avec un grand plaisir.",
    author: "Daria",
  },
];

export default function Home() {
  return (
    <>
      <PhotoCarousel images={images} />
      <Header />
      <Decoration />
      <AboutVisit title="rgew" />
      <TextCarousel title="Why Book a Visit:" data={reasons} />
      <PhotoGallery />
      <TextCarousel title="My Reviews:" data={reviews} />
      <ContactUs />
    </>
  );
}
