import React from "react";
import "./DeskTopOne.scss";

import LeftSide from "../../components/LeftSide/LeftSide";
import Middle from "../../components/Middle/Middle";
import RightSide from "../../components/RightSide/RightSide";
import TextArea from "../../components/TextArea/TextArea";
import Heading from "../../components/Heading/Heading";
// Common Components
import Add from "../../CommonComponents/Adds/Add";
import ScoreBar from "../../CommonComponents/ScoreBar/ScoreBar";
import FlexAdd from "../../CommonComponents/FlexAdd/FlexAdd";

import MenuItems from "../../CommonComponents/MenuItems/MenuItems";

import First from "../../assest/scorebar/first.png";
import Second from "../../assest/scorebar/second.png";

// Icons
import { FaSearch, FaTelegramPlane } from "react-icons/fa";
import Marque from "../../components/Marque/Marque";
import ResponsiveMenu from "../../components/ResponsiveMenu/ResponsiveMenu";
const DeskTopOne = () => {
  return (
    <>
      <div className="deskone">
        <div class="mobile-marque">
          <Marque />
        </div>
        <div className="deskone-display">
          <div className="deskone-display-container">
            <div className="deskone-display-container-search">
              <input type="search" placeholder="Type to search..." />
              <FaSearch className="deskone-display-container-search-icon" />
            </div>
            <div className="deskone-display-container-menu">
              <ResponsiveMenu />
            </div>
          </div>
        </div>

        <div className="deskone-menuitems">
          <MenuItems />
        </div>
        <div className="deskone-middle">
          <div className="deskone-middle-left">
            <LeftSide>
              <Add size="small" />
              <Add size="large" />
              <TextArea />
              <Add size="large" />
              <Add size="small" />
              <TextArea />
            </LeftSide>
          </div>
          <div className="deskone-middle-middle">
            <Middle>
              <div className="deskone-chaticon-mobile">
                <div className="only-for-mobile">
                  <div className="chat-icon">
                    <FaTelegramPlane />
                  </div>
                </div>
              </div>
              <div className="display-non-adds">
                <FlexAdd />
              </div>
              <Heading text="hot matches" />

              <ScoreBar
                date="Aug 18 - 15:00"
                league="Premeire League"
                firstimage={First}
                firstname="Man Utd"
                secondimage={Second}
                secondname="Liverpool"
                half="2nd Half:47"
              />
              <ScoreBar
                date="Aug 18 - 15:00"
                league="Premeire League"
                firstimage={First}
                firstname="Man Utd"
                secondimage={Second}
                secondname="Liverpool"
                half="2nd Half:47"
              />
              <ScoreBar
                date="Aug 18 - 15:00"
                league="Premeire League"
                firstimage={First}
                firstname="Man Utd"
                secondimage={Second}
                secondname="Liverpool"
                half="2nd Half:47"
              />
              <ScoreBar
                date="Aug 18 - 15:00"
                league="Premeire League"
                firstimage={First}
                firstname="Man Utd"
                secondimage={Second}
                secondname="Liverpool"
                half="2nd Half:47"
              />
              <ScoreBar
                date="Aug 18 - 15:00"
                league="Premeire League"
                firstimage={First}
                firstname="Man Utd"
                secondimage={Second}
                secondname="Liverpool"
                half="2nd Half:47"
              />
              <ScoreBar
                date="Aug 18 - 15:00"
                league="Premeire League"
                firstimage={First}
                firstname="Man Utd"
                secondimage={Second}
                secondname="Liverpool"
                half="2nd Half:47"
              />
              <div className="display-non-adds">
                <FlexAdd />
              </div>
              <div className="margintop-for-mobile">
                <br />
              </div>
              <Heading text="other matches" />

              <ScoreBar
                date="Aug 18 - 15:00"
                league="Premeire League"
                firstimage={First}
                firstname="Man Utd"
                secondimage={Second}
                secondname="Liverpool"
                half="2nd Half:47"
              />
              <ScoreBar
                date="Aug 18 - 15:00"
                league="Premeire League"
                firstimage={First}
                firstname="Man Utd"
                secondimage={Second}
                secondname="Liverpool"
                half="2nd Half:47"
              />
              <ScoreBar
                date="Aug 18 - 15:00"
                league="Premeire League"
                firstimage={First}
                firstname="Man Utd"
                secondimage={Second}
                secondname="Liverpool"
                half="2nd Half:47"
              />
              <ScoreBar
                date="Aug 18 - 15:00"
                league="Premeire League"
                firstimage={First}
                firstname="Man Utd"
                secondimage={Second}
                secondname="Liverpool"
                half="2nd Half:47"
              />
              <ScoreBar
                date="Aug 18 - 15:00"
                league="Premeire League"
                firstimage={First}
                firstname="Man Utd"
                secondimage={Second}
                secondname="Liverpool"
                half="2nd Half:47"
              />
              <ScoreBar
                date="Aug 18 - 15:00"
                league="Premeire League"
                firstimage={First}
                firstname="Man Utd"
                secondimage={Second}
                secondname="Liverpool"
                half="2nd Half:47"
              />
              <FlexAdd />
            </Middle>
          </div>
          <div className="deskone-middle-right">
            <RightSide>
              <div className="only-for-desktop">
                <div className="only-for-desktop-chat-icon">
                  <FaTelegramPlane />
                </div>
              </div>
              <Add size="small" />
              <Add size="large" />
              <TextArea />
              <Add size="full" />
              <Add size="full" />
              <Add size="full" />
              <Add size="full" />
            </RightSide>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeskTopOne;
