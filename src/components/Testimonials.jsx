import React from "react";

const testimonials = [
  {
    name: "Sarah Ahmed",
    role: "Volunteer",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    message:
      "Working with this NGO has been an amazing experience. I have seen real change in the lives of children and families who needed help the most.",
  },
  {
    name: "John Smith",
    role: "Donor",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    message:
      "I trust this organization completely. Every donation goes toward meaningful projects that make a difference in communities.",
  },
  {
    name: "Ayesha Khan",
    role: "Community Member",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    message:
      "Because of this NGO, our village now has access to education and healthcare services that we never had before.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50">

      <div className="container mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-12">
          What People Say About Us
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >

              <p className="text-gray-600 mb-6">
                "{item.message}"
              </p>

              <div className="flex items-center gap-4">

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full"
                />

                <div>
                  <h4 className="font-semibold">
                    {item.name}
                  </h4>
                  <p className="text-gray-500 text-sm">
                    {item.role}
                  </p>
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Testimonials;