import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import { Routes, Route } from "react-router";
import Navbar from "./components/layout/Navbar/Navbar.jsx";
import Footer from "./components/layout/Footer/Footer.jsx";
import Gallery from "./pages/Gallery/Gallery.jsx";


const App = () => {
  return (
    <div>
     <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
