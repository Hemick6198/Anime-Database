import Footer from "./components/Footer";
import "../src/styles/global.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/search/:query" element={<SearchPage />} />
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;
