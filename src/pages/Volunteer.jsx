import React from "react";

const Volunteer = () => {
  return (
    <section className="py-20 bg-gray-50">

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Images */}

        <div className="grid grid-cols-2 gap-4">

          <img
            src="https://media.istockphoto.com/id/870402320/photo/a-social-worker-meeting-with-a-group-of-villagers.jpg?s=1024x1024&w=is&k=20&c=D7VStYA3q4pgZ85OsEDgVawhcqFGDPZyHwX3AZBb0i4="
            alt="Volunteers helping"
            className="rounded-xl shadow-lg col-span-2 h-56 w-full object-cover"
          />

          <img
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800"
            alt="Community help"
            className="rounded-xl shadow-lg h-40 w-full object-cover"
          />

          <img
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800"
            alt="Charity work"
            className="rounded-xl shadow-lg h-40 w-full object-cover"
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

export default Volunteer;