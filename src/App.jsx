import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages";
import About from "./pages/about";
import Booking from "./pages/booking";
import Footer from "./components/Footer";
import "./i18n/i18n";
import ContactModal from "./components/ContactModal";
import ContactForm from "./components/ContactForm";
import useFavicon from "./hooks/useFavicon";
import { useEffect } from "react";

function App() {
  useFavicon(); //for dynamic favicon

  useEffect(() => {
    // Load Google Analytics (gtag.js)
    const loadGoogleAnalytics = () => {
      const script = document.createElement("script");
      script.src = "https://www.googletagmanager.com/gtag/js?id=G-EE119JD8TQ";
      script.async = true;
      document.body.appendChild(script);

      const inlineScript = document.createElement("script");
      inlineScript.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-EE119JD8TQ');
      `;
      document.body.appendChild(inlineScript);
    };

    // Load Yandex Metrika
    const loadYandexMetrika = () => {
      const script = document.createElement("script");
      script.async = true;
      script.src = "https://mc.yandex.ru/metrika/tag.js";
      document.body.appendChild(script);

      const inlineScript = document.createElement("script");
      inlineScript.innerHTML = `
        (function(m,e,t,r,i,k,a){
          m[i]=m[i]||function(){
            (m[i].a=m[i].a||[]).push(arguments)
          };
          m[i].l=1*new Date();
          for (var j = 0; j < document.scripts.length; j++) {
            if (document.scripts[j].src === r) { return; }
          }
          k=e.createElement(t), a=e.getElementsByTagName(t)[0],
          k.async=1, k.src=r, a.parentNode.insertBefore(k,a)
        })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

        ym(98578666, "init", {
          clickmap:true,
          trackLinks:true,
          accurateTrackBounce:true,
          webvisor:true
        });
      `;
      document.body.appendChild(inlineScript);
    };

    // Load both Google Analytics and Yandex Metrika
    loadGoogleAnalytics();
    loadYandexMetrika();

    // Yandex.Metrika noscript workaround
    const noscript = document.createElement("noscript");
    noscript.innerHTML = `<div><img src="https://mc.yandex.ru/watch/98578666" style="position:absolute; left:-9999px;" alt="" /></div>`;
    document.body.appendChild(noscript);
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
