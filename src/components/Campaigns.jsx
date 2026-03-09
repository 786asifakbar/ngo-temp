import React from "react"

const Campaigns = () => {
  return (
    <section className="py-20 bg-gray-100">

      <div className="container mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-12">
          Our Campaigns
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-3">
              Education for Children
            </h3>
            <p className="text-gray-600">
              Helping children access quality education.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-3">
              Healthcare Support
            </h3>
            <p className="text-gray-600">
              Providing medical aid to poor communities.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-3">
              Food Distribution
            </h3>
            <p className="text-gray-600">
              Fighting hunger in underprivileged areas.
            </p>
          </div>

        </div>

      </div>

    </section>
  )
}

export default Campaigns