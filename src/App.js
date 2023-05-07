import Footer from "./components/Footer";
import "../src/styles/global.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AnimeLanding from "./pages/AnimeLanding";
import AnimeSearch from "./pages/AnimeSearch";
import AnimeInfo from "./pages/AnimeInfo";
import MangaLanding from "./pages/MangaLanding";
import MangaSearch from "./pages/MangaSearch";
import MangaInfo from "./pages/MangaInfo";

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<AnimeLanding />} />
          <Route path="/anime/search/:searchEl" element={<AnimeSearch />} />
          <Route path="/anime/:id" element={<AnimeInfo />} />
          <Route path="/manga" element={<MangaLanding />} />
          <Route path="/manga/search/:searchEl" element={<MangaSearch />} />
          <Route path="/manga/:id" element={<MangaInfo />} />
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;
