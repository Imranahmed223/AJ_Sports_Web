import React from "react";
import "./Direaction.scss";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Link } from "react-router-dom";
const Direaction = ({ next }) => {
  return (
    <>
      <div className="direaction">
        <Link to="/">Home</Link>
        <KeyboardArrowRightIcon fontSize="large" />
        <p>{next}</p>
      </div>
    </>
  );
};

export default Direaction;
