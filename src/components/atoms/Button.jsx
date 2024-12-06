// src/components/atoms/Button.jsx
import React from "react";

const Button = ({ label, onClick }) => {
  return (
    <button onClick={onClick} className="calculator-button">
      {label}
    </button>
  );
};

export default Button;
