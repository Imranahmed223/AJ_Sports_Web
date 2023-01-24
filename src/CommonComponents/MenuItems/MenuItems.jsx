import React from "react";
import "./MenuItems.scss";
import nfl from "../../assest/menu-items/nfl.svg";
import basketball from "../../assest/menu-items/basketball.svg";
import boxing from "../../assest/menu-items/boxing.svg";
import football from "../../assest/menu-items/footballNew.svg";
import other from "../../assest/menu-items/other.svg";

import { Link } from "react-router-dom";

// Icons

import { BsFillBellFill } from "react-icons/bs";
const MenuItems = () => {
  return (
    <>
      <div className="menu">
        <div></div>
        <div className="menu-container">
          <div className="menu-items">
            <div className="menu-items-icon">
              <Link to="/nfl">
                <div className="menu-items-icon-flex">
                  <img src={nfl} alt="nfl" />
                  <p>NFL</p>
                  <div className="menu-items-icon-flex-line"></div>
                </div>
              </Link>
            </div>

            <div className="menu-items-icon">
              <Link to="/basketball">
                <div className="menu-items-icon-flex">
                  <img src={basketball} alt="basket" />
                  <p>Basketball</p>
                  <div className="menu-items-icon-flex-line"></div>
                </div>
              </Link>
            </div>

            <div className="menu-items-icon">
              <Link to="/football">
                <div className="menu-items-icon-flex">
                  <img src={football} alt="football" />
                  <p>Football</p>
                  <div className="menu-items-icon-flex-line"></div>
                </div>
              </Link>
            </div>

            <div className="menu-items-icon">
              <Link to="/boxing">
                <div className="menu-items-icon-flex">
                  <img src={boxing} alt="boxing" />
                  <p>Boxing</p>
                  <div className="menu-items-icon-flex-line"></div>
                </div>
              </Link>
            </div>

            <div className="menu-items-icon">
              <Link to="/other">
                <div className="menu-items-icon-flex">
                  <img src={other} alt="other" style={{ width: "5rem" }} />
                  <p>Others</p>
                  <div className="menu-items-icon-flex-line"></div>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="menu-bellicon">
          <BsFillBellFill />
        </div>
      </div>
    </>
  );
};

export default MenuItems;
