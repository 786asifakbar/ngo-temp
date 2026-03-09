import React from "react"

const Navbar = () => {
  return (
    <nav className="bg-green-600 shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold text-white">
          HelpFoundation
        </h1>

        <ul className="hidden md:flex space-x-8 text-gray-700">
          <li>Home</li>
          <li>Campaigns</li>
          <li>About</li>
          <li>Volunteer</li>
          <li>Contact</li>
        </ul>

        <button className="bg-green-700 text-white px-5 py-2 rounded-lg hover:bg-green-700">
          Donate
        </button>

      </div>
    </nav>
  )
}

export default Navbar