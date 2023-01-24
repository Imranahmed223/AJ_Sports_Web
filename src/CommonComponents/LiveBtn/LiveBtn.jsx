import React from "react";
import "./LiveBtn.scss";
import { Link } from "react-router-dom";
const LiveBtn = ({ text, ...props }) => {
  return (
    <>
      <Link {...props} className="live-btn">
        <div className="live-btn-rounded"></div>
        {text}
      </Link>
    </>
  );
};

export default LiveBtn;
