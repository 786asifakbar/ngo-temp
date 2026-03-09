import React from "react";

const campaigns = [
  {
    title: "Education for Every Child",
    description:
      "Help us provide books, teachers, and classrooms for children in underprivileged communities.",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80",
    raised: 3500,
    goal: 10000,
  },
  {
    title: "Healthcare for Rural Areas",
    description:
      "Support medical camps and provide essential medicines to families who cannot afford treatment.",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=900&q=80",
    raised: 6200,
    goal: 12000,
  },
  {
    title: "Food for Hungry Families",
    description:
      "Join us in fighting hunger by distributing food packages to families in need.",
    image:
      "https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=900&q=80",
    raised: 4800,
    goal: 9000,
  },
];

const Campaigns = () => {
  return (
    <section className="py-20 bg-gray-100">

      <div className="container mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-12">
          Our Campaigns
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {campaigns.map((campaign, index) => {

            const progress = (campaign.raised / campaign.goal) * 100;

            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
              >

                {/* Image */}

                <img
                  src={campaign.image}
                  alt={campaign.title}
                  className="w-full h-52 object-cover"
                />

                {/* Content */}

                <div className="p-6">

                  <h3 className="text-xl font-semibold mb-2">
                    {campaign.title}
                  </h3>

                  <p className="text-gray-600 mb-4">
                    {campaign.description}
                  </p>

                  {/* Progress Bar */}

                  <div className="w-full bg-gray-200 rounded-full h-3 mb-3">

                    <div
                      className="bg-green-600 h-3 rounded-full"
                      style={{ width: `${progress}%` }}
                    ></div>

                  </div>

                  {/* Donation Info */}

                  <div className="flex justify-between text-sm text-gray-600 mb-4">

                    <span>
                      Raised: ${campaign.raised}
                    </span>

                    <span>
                      Goal: ${campaign.goal}
                    </span>

                  </div>

                  {/* Button */}

                  <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
                    Donate Now
                  </button>

                </div>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
};

export default Campaigns