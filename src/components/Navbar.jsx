import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";

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

  const linkStyle = ({ isActive }) =>
    isActive
      ? "text-green-600 font-semibold"
      : "hover:text-green-600";

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">

        <h1 className="text-2xl font-bold text-green-700">
          HelpFoundation
        </h1>

        {/* Desktop Menu */}

        <ul className="hidden md:flex space-x-8 font-medium">

          <li>
            <NavLink to="/" className={linkStyle}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/campaigns" className={linkStyle}>
              Campaigns
            </NavLink>
          </li>

          <li>
            <NavLink to="/volunteer" className={linkStyle}>
              Volunteer
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact" className={linkStyle}>
              Contact
            </NavLink>
          </li>

        </ul>

        {/* Donate Button */}

        <NavLink to="/donate">
          <button className="hidden md:block bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700">
            Donate
          </button>
        </NavLink>

        {/* Mobile Menu Button */}

        <FaBars
          className="md:hidden text-2xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        />

      </div>

      {/* Mobile Menu */}

      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg p-6 space-y-4">

          <NavLink to="/" className={linkStyle}>Home</NavLink>
          <NavLink to="/campaigns" className={linkStyle}>Campaigns</NavLink>
          <NavLink to="/volunteer" className={linkStyle}>Volunteer</NavLink>
          <NavLink to="/contact" className={linkStyle}>Contact</NavLink>

        </div>
      )}

    </nav>
  );
};

export default Navbar;