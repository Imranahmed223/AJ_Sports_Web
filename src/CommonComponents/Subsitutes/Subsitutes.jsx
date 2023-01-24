import React from "react";
import "./Subsitutes.scss";
import downarrow from "../../assest/uparrow.svg";
import uparrow from "../../assest/downarrow.svg";

const Subsitutes = () => {
  return (
    <>
      <div className="subsitutes">
        <div className="subsitutes-container">
          <div className="subsitutes-container-left">
            <div className="subsitutes-container-left-arrow">
              <div className="subsitutes-container-left-arrow-up">
                <img src={uparrow} alt="Up" />
                <img src={downarrow} alt="Down" />
              </div>
            </div>
            <div className="subsitutes-container-left-name">
              <h2>C.Renaldo</h2>
              <p className="fred">Fred</p>
            </div>
          </div>
          <div className="subsitutes-container-right">
            <div className="subsitutes-container-right-name">
              <h2>M.Salah</h2>
              <p className="fred">Fred</p>
            </div>
            <div className="subsitutes-container-right-arrow">
              <div className="subsitutes-container-right-arrow-up">
                <img src={uparrow} alt="Up" />
                <img src={downarrow} alt="Down" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subsitutes;
