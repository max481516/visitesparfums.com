import Decoration from "../components/Decoration.jsx";
import Header from "../components/Header.jsx";
import ContactUs from "../components/ContactUs.jsx";
import AboutVisit from "../components/AboutVisit.jsx";
import PhotoGallery from "../components/PhotoGallery.jsx";
import styled from "styled-components";
import { Helmet } from "react-helmet-async";
import HomePhotoCarousel from "../components/HomePhotoCarousel.jsx";
import ReviewsCarousel from "../components/ReviewsCarousel.jsx";
import ReasonsWhyCarousel from "../components/ReasonsWhyCarousel.jsx";
import { QUERIES } from "../constants.js";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Visites Parfums Paris</title>
        <meta
          name="description"
          content="Experience guided tours of Paris's top perfume shops. Discover exquisite fragrances and learn the fascinating history behind each scent."
        />
        {/*  <meta
          property="og:title"
          content="Exclusive Paris Perfume Tours - Discover the World of Fragrances"
        />
        <meta
          property="og:description"
          content="Experience guided tours of Paris's top perfume shops. Discover exquisite fragrances and learn the fascinating history behind each scent."
        />
        <meta
          property="og:image"
          content="https://vpparis.fr/og-images/HomePageOGPhoto.jpg"
        />
        <meta property="og:url" content="https://vpparis.fr/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Visites Parfums Paris" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="fr_FR" />
        <meta property="og:locale:alternate" content="ru_RU" /> */}
        <link rel="canonical" href="https://vpparis.fr/" />

        <link
          rel="preload"
          as="image"
          href="https://res.cloudinary.com/dqs3mkxnr/image/upload/w_1600,f_auto,q_auto/v1726752161/HomeCarouselPhoto1_ss6dm9.jpg"
        />
      </Helmet>

      <Wrapper>
        <HomePhotoCarousel />
        <Header />
        <ReasonsWhyCarousel />
        <HomeDecoration />
        <AboutVisit title="rgew" />
        <PhotoGallery />
        <ReviewsCarousel />
        <ContactUs />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  padding: 0 16px;

  @media ${QUERIES.laptopAndUp} {
    padding: 0 54px;
  }
`;

const HomeDecoration = styled(Decoration)`
  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;
