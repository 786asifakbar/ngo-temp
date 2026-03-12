import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const Donation = () => {

  const navigate = useNavigate();

  const [amount, setAmount] = useState(25);

  const presetAmounts = [10, 25, 50, 100];

  return (
    <section className="py-20 bg-gray-100">

      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-xl p-10 relative">

        {/* Back Arrow Button */}

        <button
          onClick={() => navigate(-1)}
          className="absolute top-6 left-6 text-green-600 text-xl hover:text-green-800"
        >
          <FaArrowLeft />
        </button>

        <h2 className="text-3xl font-bold text-center mb-6">
          Make a Donation
        </h2>

        <p className="text-gray-600 text-center mb-10">
          Your support helps us provide education, healthcare and food
          for people who need it most.
        </p>

        {/* Donation Amount */}

        <h3 className="font-semibold mb-4">
          Select Donation Amount
        </h3>

        <div className="grid grid-cols-4 gap-4 mb-6">

          {presetAmounts.map((value) => (
            <button
              key={value}
              onClick={() => setAmount(value)}
              className={`py-3 rounded-lg border font-semibold 
              ${
                amount === value
                  ? "bg-green-600 text-white"
                  : "bg-white text-gray-700"
              }`}
            >
              ${value}
            </button>
          ))}

        </div>

        {/* Custom Amount */}

        <input
          type="number"
          placeholder="Custom Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full border rounded-lg p-3 mb-6"
        />

        {/* Donor Information */}

        <h3 className="font-semibold mb-4">
          Donor Information
        </h3>

        <div className="grid md:grid-cols-2 gap-4 mb-4">

          <input
            type="text"
            placeholder="First Name"
            className="border p-3 rounded-lg"
          />

          <input
            type="text"
            placeholder="Last Name"
            className="border p-3 rounded-lg"
          />

        </div>

        <input
          type="email"
          placeholder="Email Address"
          className="w-full border p-3 rounded-lg mb-4"
        />

        {/* Payment Button */}

        <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition">
          Donate ${amount}
        </button>

        <p className="text-sm text-gray-500 text-center mt-4">
          🔒 Your donation is secure and encrypted.
        </p>

      </div>

    </section>
  );
};

export default Donation;