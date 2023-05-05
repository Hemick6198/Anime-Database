import Footer from "./components/Footer";
import "../src/styles/global.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Search from "./pages/Search";

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/search/:searchEl" element={<Search />} />
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;
