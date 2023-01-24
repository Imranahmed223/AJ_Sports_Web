import React from "react";
import "./NewsPage.scss";
import LeftSide from "../../components/LeftSide/LeftSide";
import Middle from "../../components/Middle/Middle";
import RightSide from "../../components/RightSide/RightSide";
import TextArea from "../../components/TextArea/TextArea";
// Common Components
import Add from "../../CommonComponents/Adds/Add";
import newimage from "../../assest/newsImage.png";
import News from "../../components/News/News";
import { FaTelegramPlane } from "react-icons/fa";
import Marque from "../../components/Marque/Marque";
const NewsPage = () => {
  return (
    <>
      <div className="news">
        <div class="mobile-marque">
          <Marque />
        </div>
        <div className="deskone-chaticon-mobile">
          <div className="only-for-mobile">
            <div className="chat-icon">
              <FaTelegramPlane />
            </div>
          </div>
        </div>

        <div className="news-middle">
          <div className="news-middle-left">
            <LeftSide>
              <Add size="large" />
              <Add size="small" />
              <Add size="large" />
              <TextArea />
              <Add size="small" />
              <TextArea />
            </LeftSide>
          </div>
          <div className="news-middle-middle">
            <Middle>
              <div className="news-line">
                <h4>News</h4>
                <div className="news-line-border"></div>
              </div>
              <div className="news-middle-middle-container">
                <News
                  image={newimage}
                  heading="Sports News Title 1"
                  para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                   nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                     cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                      est laborum"
                />
                <News
                  image={newimage}
                  heading="Sports News Title 2"
                  para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                   nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                     cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                      est laborum"
                />
                <News
                  image={newimage}
                  heading="Sports News Title 3"
                  para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                   nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                     cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                      est laborum"
                />
                <News
                  image={newimage}
                  heading="Sports News Title 4"
                  para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                   nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                     cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                      est laborum"
                />
                <News
                  image={newimage}
                  heading="Sports News Title 5"
                  para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                   nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                     cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                      est laborum"
                />
                <News
                  image={newimage}
                  heading="Sports News Title 6"
                  para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                   nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                     cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                      est laborum"
                />
                <News
                  image={newimage}
                  heading="Sports News Title 7"
                  para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                   nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                     cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                      est laborum"
                />
                <News
                  image={newimage}
                  heading="Sports News Title 8"
                  para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                   nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                     cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                      est laborum"
                />
              </div>
            </Middle>
          </div>
          <div className="news-middle-right">
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

export default NewsPage;
