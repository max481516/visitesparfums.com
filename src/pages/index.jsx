import Decoration from "../components/Decoration";
import Header from "../components/Header";
import ContactUs from "../components/ContactUs";
import AboutVisit from "../components/AboutVisit";
import PhotoGallery from "../components/PhotoGallery";
import styled from "styled-components";
import { Helmet } from "react-helmet-async";
import HomePhotoCarousel from "../components/HomePhotoCarousel.jsx";
import ReviewsCarousel from "../components/ReviewsCarousel.jsx";
import ReasonsWhyCarousel from "../components/ReasonsWhyCarousel.jsx";
import { QUERIES } from "../constants";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Visites Parfums Paris</title>
        <meta
          name="description"
          content="Experience guided tours of Paris's top perfume shops. Discover exquisite fragrances and learn the fascinating history behind each scent."
        />
        <link rel="canonical" href="http://vpparis.fr/" />
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
