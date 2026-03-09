import React from "react";
import { FaHandsHelping, FaDonate, FaUsers } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-green-600 to-emerald-500 text-white py-24">

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}

        <div>

          <h1 className="text-5xl font-bold leading-tight mb-6">
            Together We Can Make the World Better
          </h1>

          <p className="text-lg mb-8">
            Support our mission to help underprivileged communities through
            education, healthcare and humanitarian aid.
          </p>

          <div className="flex gap-4 mb-10">

            <button className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
              Donate Now
            </button>

            <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-green-600">
              Start a Campaign
            </button>

          </div>

          {/* TRUST BADGES */}

          <div className="flex gap-8">

            <div className="flex items-center gap-2">
              <FaHandsHelping size={24}/>
              <span>10K+ People Helped</span>
            </div>

            <div className="flex items-center gap-2">
              <FaUsers size={24}/>
              <span>120 Volunteers</span>
            </div>

            <div className="flex items-center gap-2">
              <FaDonate size={24}/>
              <span>$500K Donations</span>
            </div>

          </div>

        </div>

        {/* RIGHT IMAGE */}

        <div>

          <img
            src="../assets/hero.jfif"
            alt="Helping people"
            className="rounded-2xl shadow-2xl"
          />

        </div>

      </div>

    </section>
  );
};

export default Hero;