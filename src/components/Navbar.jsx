import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";

const Navbar = () => {

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">

        <h1 className="text-2xl font-bold text-green-600">
          HelpFoundation
        </h1>

        {/* Desktop Menu */}

        <ul className="hidden md:flex space-x-8 font-medium">
          <li className="hover:text-green-600 cursor-pointer">Home</li>
          <li className="hover:text-green-600 cursor-pointer">Campaigns</li>
          <li className="hover:text-green-600 cursor-pointer">Volunteer</li>
          <li className="hover:text-green-600 cursor-pointer">Contact</li>
        </ul>

        {/* Donate Button */}

        <button className="hidden md:block bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700">
          Donate
        </button>

        {/* Mobile Menu Button */}

        <FaBars
          className="md:hidden text-2xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        />

      </div>

      {/* Mobile Menu */}

      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg p-6 space-y-4">
          <p>Home</p>
          <p>Campaigns</p>
          <p>Volunteer</p>
          <p>Contact</p>
        </div>
      )}
    </nav>
  );
};

export default Navbar;