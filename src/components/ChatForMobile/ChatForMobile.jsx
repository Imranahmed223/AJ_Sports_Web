import React, { useState, useEffect } from "react";
import "./ChatForMobile.scss";
import { FaTelegramPlane } from "react-icons/fa";
const ChatForMobile = () => {
  const [isVisible, setIsVisible] = useState(false);

  const listenToScroll = () => {
    let heightToHidden = 250;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(true);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
  }, []);

  return (
    <>
      {isVisible && (
        <div className="chatango">
          {/* <div className="chatango-icon">
            <img src={chatango} alt="chatango" />
          </div> */}
          <div className="chatango-icon">
            <div className="chat-icon">
              <FaTelegramPlane />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatForMobile;
