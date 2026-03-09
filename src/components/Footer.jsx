import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">

      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-10">

        {/* NGO INFO */}

        <div>

          <h3 className="text-2xl font-bold mb-4">
            HelpFoundation
          </h3>

          <p className="text-gray-400">
            We are committed to helping communities through education,
            healthcare and humanitarian aid programs.
          </p>

        </div>

        {/* QUICK LINKS */}

        <div>

          <h4 className="font-semibold mb-4">
            Quick Links
          </h4>

          <ul className="space-y-2 text-gray-400">
            <li>Home</li>
            <li>Campaigns</li>
            <li>Volunteer</li>
            <li>Contact</li>
          </ul>

        </div>

        {/* SOCIAL MEDIA */}

        <div>

          <h4 className="font-semibold mb-4">
            Follow Us
          </h4>

          <div className="flex gap-4 text-2xl">

            <FaFacebook className="hover:text-blue-500 cursor-pointer"/>
            <FaTwitter className="hover:text-blue-400 cursor-pointer"/>
            <FaInstagram className="hover:text-pink-500 cursor-pointer"/>
            <FaLinkedin className="hover:text-blue-600 cursor-pointer"/>

          </div>

        </div>

      </div>

      {/* COPYRIGHT */}

      <div className="text-center text-gray-500 mt-10">
        © 2026 HelpFoundation. All Rights Reserved.
      </div>

    </footer>
  );
};

export default Footer;