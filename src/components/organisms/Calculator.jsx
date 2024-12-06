// src/components/organisms/Calculator.jsx
// src/components/organisms/Calculator.jsx
import React, { useState } from "react";
import Display from "../atoms/Display";
import ButtonGroup from "../molecules/ButtonGroup";

const Calculator = () => {
  const [value, setValue] = useState("");

  const handleButtonClick = (button) => {
    if (button === "=") {
      try {
        setValue(eval(value).toString()); // Avoid using eval in production
      } catch {
        setValue("Error");
      }
    } else if (button === "C") {
      setValue("");
    } else {
      setValue(value + button);
    }
  };

  const buttons = [
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "0",
    ".",
    "=",
    "+",
    "C",
  ];

  return (
    <div className="calculator">
      <Display value={value} />
      <ButtonGroup buttons={buttons} onClick={handleButtonClick} />
    </div>
  );
};

export default Calculator;
