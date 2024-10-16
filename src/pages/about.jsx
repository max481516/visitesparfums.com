import { useEffect } from "react";
import AboutMe from "../components/AboutMe";
import { Helmet } from "react-helmet-async";

export default function About() {
  useEffect(() => {
    (function (h, o, t, j, a, r) {
      h.hj =
        h.hj ||
        function () {
          (h.hj.q = h.hj.q || []).push(arguments);
        };
      h._hjSettings = { hjid: 5173492, hjsv: 6 };
      a = o.getElementsByTagName("head")[0];
      r = o.createElement("script");
      r.async = 1;
      r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
      a.appendChild(r);
    })(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv=");
  }, []);

  return (
    <>
      <Helmet>
        <title>About Natacha Pascalis - Visites Parfums Paris</title>
        <meta
          name="description"
          content="Learn about Natacha Pascalis, the founder of Visites Parfums Paris, and her deep passion for the world of perfumes. Explore her expertise in fragrances and her dedication to helping others discover their perfect scent."
        />
        {/* <meta
          property="og:title"
          content="About Natacha Pascalis - Visites Parfums Paris"
        />
        <meta
          property="og:description"
          content="Explore Natacha Pascalis's unique path in the world of perfumes, becoming a fragrance expert in Paris. Learn about her passion for scents and her mission to help you discover your perfect fragrance."
        />
        <meta
          property="og:image"
          content="https://vpparis.fr/og-images/AboutMeOGPhoto.jpg"
        />
        <meta property="og:url" content="https://vpparis.fr/about" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Visites Parfums Paris" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="fr_FR" />
        <meta property="og:locale:alternate" content="ru_RU" /> */}
        <link rel="canonical" href="https://vpparis.fr/about" />
      </Helmet>
      <AboutMe />
    </>
  );
}
