import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages";
import About from "./pages/about";
import GlobalStyles from "./GlobalStyles";
import Footer from "./components/Footer";
import LanguageSelector from "./components/LanguageSelector";
import "./i18n";

function App() {
  return (
    <main>
      <Router>
        <LanguageSelector />
        <GlobalStyles />
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}

export default App;
