import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Blog from "./pages/Blog";
import ContectUs from "./pages/ContectUs";

function App() {
  return (
    <>
      <div style={{ zIndex: "99" }} className=" position-sticky top-0">
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContectUs />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
