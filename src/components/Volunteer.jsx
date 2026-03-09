import React from "react";

const Volunteer = () => {
  return (
    <section className="py-20 bg-gray-50">

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Image */}

        <div>
          <img
            src="https://images.unsplash.com/photo-1593113598332-cd59a93bce38?auto=format&fit=crop&w=900&q=80"
            alt="Volunteers"
            className="rounded-xl shadow-lg"
          />
        </div>

        {/* Right Content */}

        <div>

          <h2 className="text-3xl font-bold mb-4">
            Become a Volunteer
          </h2>

          <p className="text-gray-600 mb-6">
            Join our mission to help communities in need. As a volunteer,
            you can make a real difference in people's lives through
            education, healthcare, and humanitarian support.
          </p>

          {/* Volunteer Form */}

          <form className="space-y-4">

            <input
              type="text"
              placeholder="Full Name"
              className="w-full border p-3 rounded-lg"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border p-3 rounded-lg"
            />

            <input
              type="text"
              placeholder="City"
              className="w-full border p-3 rounded-lg"
            />

            <textarea
              placeholder="Why do you want to volunteer?"
              className="w-full border p-3 rounded-lg"
            ></textarea>

            <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
              Apply Now
            </button>

          </form>

        </div>

      </div>

    </section>
  );
};

export default Volunteer