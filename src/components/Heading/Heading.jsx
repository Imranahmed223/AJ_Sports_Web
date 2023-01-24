import React from "react";
import "./Heading.scss";
const Heading = ({ text }) => {
  return (
    <>
      <h1 className="heading">{text}</h1>
    </>
  );
};

export default Heading;
