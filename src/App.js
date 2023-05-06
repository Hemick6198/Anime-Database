import Footer from "./components/Footer";
import "../src/styles/global.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Search from "./pages/Search";
import InfoPage from "./pages/InfoPage";
import Anime from "./components/Anime"

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/search/:searchEl" element={<Search />} />
          <Route path="/anime/:id" element={<InfoPage />} />
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;
