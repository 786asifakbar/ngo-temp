import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="w-full min-h-screen flex items-center bg-gray-50">

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}

        <div className="space-y-6">

          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Together We Can Make the World Better
          </h1>

          <p className="text-gray-600 text-lg">
            Support our mission to help underprivileged communities through
            education, healthcare, and humanitarian aid.
          </p>

          {/* BUTTONS */}

          <div className="flex gap-4">

            <Button
              text="Donate Now"
              style="bg-green-600 text-white hover:bg-green-700"
            />

            <Button
              text="Start a Campaign"
              style="border border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
            />

          </div>

        </div>

        {/* RIGHT IMAGE */}

        <div className="relative">

          <img
            src="https://images.unsplash.com/photo-1593113598332-cd59a93bce38?auto=format&fit=crop&w=900&q=80"
            alt="NGO Help"
            className="rounded-xl shadow-xl"
          />

        </div>

      </div>

    </section>
  );
};

export default Hero;