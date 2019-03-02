import React from "react";
import "./Display.css";

const CalculatorDisplay = ({ display }) => {
  return (
    <div className={"display"}>
      <p>{display}</p>
    </div>
  );
};

export default CalculatorDisplay;
