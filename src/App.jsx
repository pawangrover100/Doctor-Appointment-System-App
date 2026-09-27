import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import { Routes, Route } from "react-router";
import Navbar from "./components/layout/Navbar/Navbar.jsx";
import Footer from "./components/layout/Footer/Footer.jsx";
import Gallery from "./pages/Gallery/Gallery.jsx";
import Register from "./pages/Auth/Register.jsx";
import  { Toaster } from 'react-hot-toast';
import Login from "./pages/Auth/Login.jsx";

const App = () => {
  return (
    <div>
     <Navbar/>
     <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
