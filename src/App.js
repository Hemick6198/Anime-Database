import Footer from "./components/Footer";
import "../src/styles/global.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<LandingPage />}/>
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;
