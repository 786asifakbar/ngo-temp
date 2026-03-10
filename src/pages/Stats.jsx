import React from "react"

const Stats = () => {
  return (
    <section className="py-20 text-center">

      <div className="grid md:grid-cols-4 gap-8">

        <div>
          <h3 className="text-4xl font-bold text-green-600">10K+</h3>
          <p>People Helped</p>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-green-600">120+</h3>
          <p>Volunteers</p>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-green-600">35</h3>
          <p>Projects</p>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-green-600">15</h3>
          <p>Countries</p>
        </div>

      </div>

    </section>
  )
}

export default Stats