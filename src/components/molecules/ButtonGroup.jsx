// src/components/molecules/ButtonGroup.jsx// src/components/molecules/ButtonGroup.jsx
import React from "react";
import Button from "../atoms/Button";

const ButtonGroup = ({ buttons, onClick }) => {
  return (
    <div className="button-group">
      {buttons.map((button, index) => (
        <Button key={index} label={button} onClick={() => onClick(button)} />
      ))}
    </div>
  );
};

export default ButtonGroup;
