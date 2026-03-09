import React from "react"

const Contact = () => {
  return (
    <section className="py-20">

      <div className="container mx-auto px-6 max-w-xl">

        <h2 className="text-3xl font-bold text-center mb-8">
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

          <button className="bg-green-600 text-white px-6 py-3 rounded-lg w-full">
            Send Message
          </button>

        </form>

      </div>

    </section>
  )
}

export default Contact