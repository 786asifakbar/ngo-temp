import React from "react";

const Button = ({ text, style }) => {
  return (
    <button
      className={`px-6 py-3 rounded-lg font-semibold transition duration-300 ${style}`}
    >
      {text}
    </button>
  );
};

export default Button;