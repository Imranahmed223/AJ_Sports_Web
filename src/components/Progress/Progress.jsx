import React from "react";
import "./Progress.scss";
import first from "../../assest/scorebar/first.png";
import second from "../../assest/scorebar/second.png";
const Progress = () => {
  return (
    <>
      <div className="progresss">
        <center>Who will win?</center>
        <div className="progresss-container">
          <div className="progresss-container-item">
            <img src={first} alt="icon" />
            <div className="progress ">
              <div
                className="progress-bar "
                role="progressbar"
                style={{ width: "78%" }}
              ></div>
            </div>
            <p>78%</p>
          </div>
          <div className="progresss-container-item-two">
            <img src={second} alt="icon" />
            <div className="progress ">
              <div
                className="progress-bar "
                role="progressbar"
                style={{ width: "27%" }}
              ></div>
            </div>
            <p>27%</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Progress;
