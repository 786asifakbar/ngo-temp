import React, { useEffect, useState } from "react";

const stats = [
  { title: "People Helped", number: 10000 },
  { title: "Active Volunteers", number: 120 },
  { title: "Projects Completed", number: 50 },
  { title: "Cities Reached", number: 20 },
];

const Counter = ({ target }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, 16);

    return () => clearInterval(timer);
  }, [target]);

  return <span>{count}</span>;
};

const Impact = () => {
  return (
    <section className="py-20 bg-green-600 text-white">

      <div className="container mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold mb-12">
          Our Impact
        </h2>

        <div className="grid md:grid-cols-4 gap-10">

          {stats.map((item, index) => (
            <div key={index} className="space-y-2">

              <h3 className="text-4xl font-bold">
                <Counter target={item.number} />+
              </h3>

              <p className="text-lg">
                {item.title}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Impact;