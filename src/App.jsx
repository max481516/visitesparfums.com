import { useEffect } from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages";
import About from "./pages/about";
import Booking from "./pages/booking";
import Footer from "./components/Footer";
import "./i18n/i18n";
import ContactModal from "./components/ContactModal";
import ContactForm from "./components/ContactForm";
import useFavicon from "./hooks/useFavicon";

// This component will track route changes and push events to GTM
function GTMPageViewTracker() {
  const location = useLocation();

  useEffect(() => {
    const sendGtmPageView = () => {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "pageview", // Use a custom event name
        page: location.pathname, // Send current page path
      });
    };
    sendGtmPageView();
  }, [location]); // Re-run every time location (page) changes

  return null; // This component only handles side effects, no need to render anything
}

function App() {
  useFavicon(); //for dynamic favicon

  useEffect(() => {
    // Load Google Tag Manager (GTM)
    const loadGTM = () => {
      const script = document.createElement("script");
      script.src = "https://www.googletagmanager.com/gtm.js?id=GTM-W6BT5MKZ"; // Replace with your GTM ID
      script.async = true;
      document.body.appendChild(script);

      // You can also add the no-script fallback here
      const noscript = document.createElement("noscript");
      noscript.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W6BT5MKZ" height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
      document.body.appendChild(noscript);
    };

    loadGTM();
  }, []);

  return (
    <main>
      <Router>
        <GTMPageViewTracker />
        <Navbar />
        <ContactModal>
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
