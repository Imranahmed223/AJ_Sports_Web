import React from "react";
import "./IconMenu.scss";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { SiTiktok, SiTelegram } from "react-icons/si";
const IconMenu = () => {
  return (
    <>
      <div className="icon">
        <div className="icon-items">
          <div className="icon-items-icon">
            <BsTwitter />
          </div>
          <div className="icon-items-icon">
            <BsFacebook />
          </div>
          <div className="icon-items-icon">
            <FaDiscord />
          </div>
          <div className="icon-items-icon">
            <BsInstagram />
          </div>
          <div className="icon-items-icon">
            <SiTiktok />
          </div>
          <div className="icon-items-icon">
            <SiTelegram />
          </div>
        </div>
      </div>
    </>
  );
};

export default IconMenu;
