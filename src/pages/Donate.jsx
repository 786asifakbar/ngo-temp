import React from "react"
import { NavLink } from "react-router-dom"


const Donate = () => {
  return (
    <section className="py-20 bg-green-600 text-white text-center">

      <h2 className="text-3xl font-bold mb-6">
        Support Our Mission
      </h2>

      <p className="mb-8">
        Your donation can change someone's life.
      </p>

       <NavLink to="/Donation">
      <button className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold">
        Donate Now
      </button>
</NavLink>
    </section>
  )
}

export default Donate