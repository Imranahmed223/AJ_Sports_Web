import React from "react";
import "./LeagueMenu.scss";

import one from "../../assest/league-Menu/one.png";
import two from "../../assest/league-Menu/two.png";
import three from "../../assest/league-Menu/three.png";
import four from "../../assest/league-Menu/four.png";
import five from "../../assest/league-Menu/five.png";

import six from "../../assest/league-Menu/six.png";
import seven from "../../assest/league-Menu/seven.png";
import eight from "../../assest/league-Menu/eight.png";

const LeagueMenu = () => {
  return (
    <>
      <div className="leagueMenu">
        <div className="leagueMenu-container">
          <div className="leagueMenu-container-img">
            <img src={one} alt="first" />
          </div>
          <div className="leagueMenu-container-img">
            <img src={two} alt="second" />
          </div>
          <div className="leagueMenu-container-img">
            <img src={three} alt="three" />
          </div>
          <div className="leagueMenu-container-img">
            <img src={four} alt="four" />
          </div>
          <div className="leagueMenu-container-img">
            <img src={five} alt="five" />
          </div>
          <div className="leagueMenu-container-img">
            <img src={six} alt="six" />
          </div>
          <div className="leagueMenu-container-img">
            <img src={seven} alt="seven" />
          </div>
          <div className="leagueMenu-container-img">
            <img src={eight} alt="eight" />
          </div>
        </div>
      </div>
    </>
  );
};

export default LeagueMenu;
