import React from "react";
import "./RedBtn.scss";
import { Link } from "react-router-dom";
const RedBtn = ({ text, ...props }) => {
  return (
    <>
      <Link {...props} className="red-btn">
        {text}
      </Link>
    </>
  );
};

export default RedBtn;
