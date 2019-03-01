import React from "react";

import "./Button.css";

const Button = ({ value, action, width, bgColor, textColor, extrastyles }) => {
  return (
    <button
      action={action}
      style={{
        flexGrow: width,
        backgroundColor: bgColor,
        color: textColor,
        ...extrastyles
      }}
    >
      {value}
    </button>
  );
};

export default Button;
