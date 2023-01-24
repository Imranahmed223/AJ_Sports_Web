import React from "react";
import "./BlueBtn.scss";

const BlueBtn = ({ text, ...props }) => {
  return (
    <>
      <button className="blue-btn" {...props}>
        {text}
      </button>
    </>
  );
};

export default BlueBtn;
