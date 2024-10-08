import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Index from "./pages/";
import About from "./pages/About";
import Booking from "./pages/Booking";
import Footer from "./components/Footer";
import "./i18n/i18n";
import ContactModal from "./components/ContactModal";
import ContactForm from "./components/ContactForm";
import useFavicon from "./hooks/useFavicon";
import { Helmet } from "react-helmet-async";

function App() {
  useFavicon();

  return (
    <main>
      <Helmet>
        {/* Google Analytics (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-EE119JD8TQ"
        ></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EE119JD8TQ');
          `}
        </script>
      </Helmet>
      <Router>
        <Navbar />
        <ContactModal>
          {/* to ensure that modal opens on every page */}
          <ContactForm />
        </ContactModal>
        <Routes>
          <Route path="/" exact element={<Index />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/booking" exact element={<Booking />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}

export default App;
