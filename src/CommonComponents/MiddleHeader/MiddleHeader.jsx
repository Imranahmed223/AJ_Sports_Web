import React from "react";
import "./MiddleHeader.scss";
import LiveBtn from "../LiveBtn/LiveBtn";
//  Images
import league from "../../assest/middletopheader/league.svg";
import imageone from "../../assest/scorebar/second.png";
import imagetwo from "../../assest/scorebar/first.png";

const MiddleHeader = () => {
  return (
    <>
      <div className="line-middle-top">
        <div className="line-middle-top-center">
          <div className="line-middle-top-center-league">
            <center>
              <img src={league} alt="league" />
            </center>
          </div>
          <div className="line-middle-top-center-date">
            <center>
              <h5>Aug : 18 15:00</h5>
            </center>
          </div>
          <div className="line-middle-top-center-old">
            <center>
              <h5 className="line-middle-top-center-old-text">Old Trafford</h5>
            </center>
          </div>
        </div>
        <div className="line-middle-top-vs">
          <div className="line-middle-top-vs-left">
            <img src={imagetwo} alt="country" />

            <h1>Man Utd</h1>
          </div>
          <div className="line-middle-top-vs-middle">
            <p>vs</p>
          </div>
          <div className="line-middle-top-vs-right">
            <h1>Liverpool</h1>
            <img src={imageone} alt="country" />
          </div>
        </div>

        <div className="line-middle-top-bottom">
          <div className="line-middle-top-bottom-half">2nd Half: 47’</div>
          {/* <div className="line-middle-top-bottom-btn">
            <button className="middle-live-btn">
              <div></div>
              Live
            </button>
          </div> */}
          <div className="line-middle-top-bottom-btn">
            <LiveBtn text={"Live"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default MiddleHeader;
