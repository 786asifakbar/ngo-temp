import React from "react";

const Contact = () => {
  return (
    <section className="py-20 bg-gray-100">

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12">

        {/* CONTACT FORM */}

        <div>

          <h2 className="text-3xl font-bold mb-6">
            Contact Us
          </h2>

          <form className="space-y-4">

            <input
              type="text"
              placeholder="Name"
              className="w-full border p-3 rounded-lg"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full border p-3 rounded-lg"
            />

            <textarea
              placeholder="Message"
              className="w-full border p-3 rounded-lg"
            ></textarea>

            <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700">
              Send Message
            </button>

          </form>

        </div>

        {/* GOOGLE MAP */}

        <div>

          <iframe
            title="map"
            src="https://www.google.com/maps?q=karachi&output=embed"
            className="w-full h-80 rounded-xl border"
          ></iframe>

        </div>

      </div>

    </section>
  );
};

export default Contact;