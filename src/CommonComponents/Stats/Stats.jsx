import React from "react";
import "./Stats.scss";

const Stats = ({ left, middle, right }) => {
  return (
    <>
      <div className="stats">
        <div className="stats-container">
          <h5>{left}</h5>
          <h2>{middle}</h2>
          <h5>{right}</h5>
        </div>
      </div>
    </>
  );
};

export default Stats;
