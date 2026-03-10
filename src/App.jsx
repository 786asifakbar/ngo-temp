import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Campaigns from "./pages/Campaigns"
import Donate from "./components/Donate"
import Volunteer from "./pages/Volunteer"
import About from "./components/About"
import Team from "./components/Team"
import Stats from "./components/Stats"
import Testimonials from "./components/Testimonials"
import Contact from "./pages/Contact"
import Footer from "./components/Footer"
import Donation from "./components/Donation";
import Impact from "./components/Impact";





function App() {
  return (
    <>
      <Navbar />
      
      <Campaigns />
      <Donate />
      <Volunteer />
      <About />
      <Stats />
      <Team />
      <Testimonials />
      <Donation />
      <Impact />
      <Contact />
      <Footer />
    </>
  )
}

import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Campaigns from "./pages/Campaigns";
import Contact from "./pages/Contact";
import Volunteer from "./pages/Volunteer";

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