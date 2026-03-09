import React from "react"

const Team = () => {
  return (
    <section className="py-20 bg-gray-100">

      <h2 className="text-3xl font-bold text-center mb-12">
        Our Team
      </h2>

      <div className="grid md:grid-cols-3 gap-8 container mx-auto px-6">

        <div className="bg-white p-6 rounded-xl text-center shadow">
          <h3 className="font-semibold">John Smith</h3>
          <p className="text-gray-500">Founder</p>
        </div>

        <div className="bg-white p-6 rounded-xl text-center shadow">
          <h3 className="font-semibold">Sarah Ali</h3>
          <p className="text-gray-500">Director</p>
        </div>

        <div className="bg-white p-6 rounded-xl text-center shadow">
          <h3 className="font-semibold">Ahmed Khan</h3>
          <p className="text-gray-500">Coordinator</p>
        </div>

      </div>

    </section>
  )
}

export default Team