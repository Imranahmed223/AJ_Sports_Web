import React from "react";
import "./GiveAway.scss";
import Marque from "../../components/Marque/Marque";
import playStation from "../../assest/playStation.png";

// Icon
import { IoMdMail } from "react-icons/io";
import { AiOutlineTwitter } from "react-icons/ai";
const GiveAway = () => {
  return (
    <>
      <div className="giveaway">
        <div class="mobile-marque">
          <Marque />
        </div>
        <div className="giveaway-content">
          <div className="giveaway-container">
            <div className="giveaway-line">
              <h4>giveaway</h4>
              <div className="giveaway-line-border"></div>
            </div>
            <div className="giveaway-container-width">
              <div className="giveaway-top">
                <div className="giveaway-top-item">
                  <h2>0</h2>
                  <p>Your Entries</p>
                </div>
                <div className="giveaway-top-item">
                  <h2>54856</h2>
                  <p>Total Entries</p>
                </div>
                <div className="giveaway-top-item">
                  <h2>30</h2>
                  <p>Days Left</p>
                </div>
              </div>

              <div className="giveaway-heading">
                <h1>
                  win a <span>free</span> play station 5 digital edition
                </h1>
              </div>
              <div className="giveaway-image">
                <img src={playStation} alt="play" />
              </div>

              <div className="giveaway-subheading">
                <h1>
                  Enter using the below ways for a chance to win a brand new
                  <span> PlayStation 5 </span>
                </h1>
              </div>
              {/* Bottom Part */}

              <div className="giveaway-bottom-section">
                <div className="giveaway-bottom">
                  <div className="giveaway-bottom-container">
                    <div className="bottom-item">
                      <div className="bottom-item-left">
                        <IoMdMail style={{ backgroundColor: "#41f331" }} />
                        <h5>Join an Email Newsletter</h5>
                      </div>
                      <h5>+5</h5>
                    </div>

                    <div className="bottom-item">
                      <div className="bottom-item-left">
                        <AiOutlineTwitter />
                        <h5>Join an Email Newsletter</h5>
                      </div>
                      <h5>+5</h5>
                    </div>
                    <div className="bottom-item">
                      <div className="bottom-item-left">
                        <AiOutlineTwitter />
                        <h5>Join an Email Newsletter</h5>
                      </div>
                      <h5>+5</h5>
                    </div>
                    <div className="bottom-item">
                      <div className="bottom-item-left">
                        <AiOutlineTwitter />
                        <h5>Join an Email Newsletter</h5>
                      </div>
                      <h5>+5</h5>
                    </div>
                  </div>
                </div>
              </div>
              {/*  */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GiveAway;
