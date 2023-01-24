import React from "react";
import "./Marque.scss";
import Marquee from "react-fast-marquee";

const Marque = () => {
  return (
    <>
      <div className="marque-container">
        <Marquee
          speed={20}
          gradientWidth={50}
          gradientColor={[0.2, 0.7, 0.5]}
          gradient={false}
        >
          <div className="marque-container-tag">
            <span>Alternative Domains </span>
            <p>www.ajsports.tv</p>
            <p>www.ajsports.live</p>
            <p>www.ajsports.xyz</p>
            <p>www.ajsports.vip</p>
            <p>www.ajsports.io</p>
            <p>www.ajsports.uk</p>
            <p>www.ajsports.app</p>
            <p>www.ajsports.fun</p>
            <p>www.ajsports.pro</p>
            <p>www.ajsports.life</p>
            <p>www.ajsports.it</p>
            <p>www.ajsports.es</p>
            <p>www.ajsports.gay</p>
            <p>www.ajsports.london</p>
          </div>
        </Marquee>
      </div>
    </>
  );
};

export default Marque;
