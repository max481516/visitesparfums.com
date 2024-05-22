import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Decoration from "./components/Decoration";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./pages";
import About from "./pages/about";
import GlobalStyles from "./GlobalStyles";

function App() {
  return (
    <main>
      <Router>
        <GlobalStyles />
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
        </Routes>
      </Router>
      <Header />
      <Decoration />
    </main>
  );
}

export default App;
