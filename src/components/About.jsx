import React from "react"

const About = () => {
  return (
    <section className="py-20 bg-gray-100">

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10">

        <div>
          <h2 className="text-3xl font-bold mb-6">
            About Our NGO
          </h2>

          <p className="text-gray-600">
            We are committed to helping communities through
            humanitarian programs, education, and healthcare.
          </p>
        </div>

        <img
          src="https://images.unsplash.com/photo-1593113598332-cd59a93bce38"
          className="rounded-xl"
        />

      </div>

    </section>
  )
}

export default About