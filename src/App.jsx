import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import Home from "./pages/Home";
import Campaigns from "./pages/Campaigns"
import Volunteer from "./pages/Volunteer"
import Contact from "./pages/Contact"
import Footer from "./components/Footer";





function App() {
  return (
    <> 
      
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/campaigns" element={<Campaigns />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App