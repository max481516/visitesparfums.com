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
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Visites Parfums Paris",
    url: "https://vpparis.fr",
    logo: "https://vpparis.fr/logo.svg",
    sameAs: [
      "https://www.instagram.com/visitesparfumsparis/",
      "https://www.airbnb.fr/experiences/4256832?_set_bev_on_new_domain=1726611939_EAMmY4MWY5NjRiMj",
      "https://www.airbnb.fr/experiences/4431379?_set_bev_on_new_domain=1726611939_EAMmY4MWY5NjRiMj",
    ],
    description:
      "Discover unique perfume tours in Paris with Visites Parfums Paris. Personalized scent experiences in the heart of the city.",
    founder: {
      "@type": "Person",
      name: "Natacha Pascalis",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Support",
      areaServed: "FR",
      availableLanguage: ["French", "English", "Russian"],
    },
    makesOffer: {
      "@type": "Offer",
      name: "Perfume Tour",
      url: "https://www.airbnb.fr/experiences/4256832?_set_bev_on_new_domain=1726611939_EAMmY4MWY5NjRiMj",
      priceCurrency: "EUR",
      price: "25",
      eligibleRegion: {
        "@type": "Place",
        name: "Paris",
      },
      description:
        "A guided tour exploring exclusive perfume boutiques and discovering unique fragrances.",
    },
  };

  return (
    <>
      <Helmet>
        <title>Visites Parfums Paris</title>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        <meta
          name="description"
          content="Experience guided tours of Paris's top perfume shops with Visites Parfums Paris. Discover exquisite fragrances and learn the fascinating history behind each scent."
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
