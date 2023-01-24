import React from "react";
import "./ResponsiveMenu.scss";
import nfl from "../../assest/menu-items/nfl.svg";
import basketball from "../../assest/menu-items/basketball.svg";
import boxing from "../../assest/menu-items/boxing.svg";
import football from "../../assest/menu-items/footballNew.svg";
import other from "../../assest/menu-items/other.svg";

const ResponsiveMenu = () => {
  return (
    <>
      <div className="res_menu">
        <div className="res_menu-container">
          <div className="res_menu-container-live">
            <div></div> LIVE
          </div>
          <div className="res_menu-container-menus">
            <div className="res_menu-container-menus-items">
              <img src={football} alt="football" />
              <h2>Football</h2>
            </div>
            <div className="res_menu-container-menus-items">
              <img src={boxing} alt="boxing" />
              <h2>Boxing</h2>
            </div>
            <div className="res_menu-container-menus-items">
              <img src={basketball} alt="football" />
              <h2>Basketball</h2>
            </div>
            <div className="res_menu-container-menus-items">
              <img src={nfl} alt="football" />
              <h2>NFL</h2>
            </div>
            <div className="res_menu-container-menus-items">
              <img src={other} alt="helmet" />
              <h2>Other's</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResponsiveMenu;
