import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages";
import About from "./pages/about";
import Booking from "./pages/booking";
import Footer from "./components/Footer";
import "./i18n/i18n";
import ContactModal from "./components/ContactModal";
import ContactForm from "./components/ContactForm";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const darkThemeFavicon32 = "/favicon-dark/favicon-32x32.png";
    const lightThemeFavicon32 = "/favicon-light/favicon-32x32.png";

    const darkThemeFavicon16 = "/favicon-dark/favicon-16x16.png";
    const lightThemeFavicon16 = "/favicon-light/favicon-16x16.png";

    const applyFavicon = (theme) => {
      const existingFavicons = document.querySelectorAll('link[rel="icon"]');
      existingFavicons.forEach((favicon) => favicon.remove());

      const link32 = document.createElement("link");
      link32.rel = "icon";
      link32.type = "image/png";
      link32.sizes = "32x32";
      link32.href = theme === "dark" ? lightThemeFavicon32 : darkThemeFavicon32;

      const link16 = document.createElement("link");
      link16.rel = "icon";
      link16.type = "image/png";
      link16.sizes = "16x16";
      link16.href = theme === "dark" ? lightThemeFavicon16 : darkThemeFavicon16;

      document.head.appendChild(link32);
      document.head.appendChild(link16);
    };

    const setFaviconByTheme = () => {
      const isDarkTheme =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;
      applyFavicon(isDarkTheme ? "dark" : "light");
    };

    setFaviconByTheme(); // Set favicon on load

    // Update favicon if the user changes their theme preference
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", setFaviconByTheme);

    return () => {
      mediaQuery.removeEventListener("change", setFaviconByTheme);
    };
  }, []);

  return (
    <main>
      <Router>
        <Navbar />
        <ContactModal>
          {/* to ensure that modal opens on every page */}
          <ContactForm />
        </ContactModal>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/booking" exact element={<Booking />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}

export default App;
