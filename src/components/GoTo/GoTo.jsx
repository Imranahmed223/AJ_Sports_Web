import React, { useState, useEffect } from "react";
import "./Goto.scss";
import goto from "../../assest/goto.svg";

const GoTo = () => {
  const [isVisible, setIsVisible] = useState(false);
  const gotobtn = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  const listenToScroll = () => {
    let heightToHidden = 250;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
  }, []);

  return (
    <>
      {isVisible && (
        <div className="goto" onClick={gotobtn}>
          <div className="goto-icon">
            <img src={goto} alt="arrow" />
          </div>
        </div>
      )}
    </>
  );
};

export default GoTo;
