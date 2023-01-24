import React from "react";
//  Material UI
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./SchudleTable.scss";
import LeftSide from "../../components/LeftSide/LeftSide";
import Middle from "../../components/Middle/Middle";
import RightSide from "../../components/RightSide/RightSide";
import TextArea from "../../components/TextArea/TextArea";
// Common Components
import Add from "../../CommonComponents/Adds/Add";
import FlexAdd from "../../CommonComponents/FlexAdd/FlexAdd";
// Images
import First from "../../assest/scorebar/first.png";
import Second from "../../assest/scorebar/second.png";
import LeagueMenu from "../../CommonComponents/LeagueMenu/LeagueMenu";
import { FaTelegramPlane } from "react-icons/fa";
import Marque from "../../components/Marque/Marque";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const SchudleTable = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // Mobile Menu Code

  return (
    <>
      <div className="schudle">
        <div class="mobile-marque">
          <Marque />
        </div>
        <div className="schudle-menu">
          <LeagueMenu />
        </div>
        <div className="deskone-chaticon-mobile">
          <div className="only-for-mobile">
            <div className="chat-icon">
              <FaTelegramPlane />
            </div>
          </div>
        </div>
        <div className="schudle-middle">
          <div className="schudle-middle-left">
            <LeftSide>
              <Add size="large" />
              <Add size="small" />
              <Add size="large" />
              <TextArea />
              <Add size="small" />
              <TextArea />
            </LeftSide>
          </div>
          <div className="schudle-middle-middle">
            <Middle>
              <Box sx={{ width: "100%" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  TabIndicatorProps={{
                    sx: {
                      backgroundColor: "#03a1cd",
                    },
                  }}
                  sx={{
                    "& button": {
                      color: "white",
                      fontSize: "1.5rem",
                      fontWeight: "400",
                    },
                    "& button:hover": { color: "#03a1cd" },
                    "& button:focus": { color: "#03a1cd" },
                    "& button:active": {
                      color: "#03a1cd",
                      fontWeight: "400",
                    },
                    "& button:after": { color: "#03a1cd" },
                  }}
                  centered
                >
                  <Tab
                    label="FIXTURES"
                    style={{
                      color: value === 0 ? "#03a1cd" : "white",
                    }}
                  />
                  <Tab
                    label="STANDINGS"
                    style={{
                      color: value === 1 ? "#03a1cd" : "white",
                    }}
                  />
                  <Tab
                    label="RESULTS"
                    style={{
                      color: value === 2 ? "#03a1cd" : "white",
                    }}
                  />
                </Tabs>
              </Box>
              <TabPanel
                value={value}
                index={0}
                className="main-container-for-table"
              >
                <div className="schudle-middle-middle-table">
                  <div className="schule-middle-middle-table-container">
                    <div className="fixtures">
                      <div className="captions">
                        <h2>TODAY</h2>
                        <small>30 AUG</small>
                      </div>
                      <table className="schudle-table">
                        <tr className="tr">
                          <td className="td space"></td>
                          <td className="td" colspan="2">
                            <div className="team">
                              <div className="team-logo">
                                <img src={First} alt="LOGO" />
                              </div>
                              <div>
                                <p className="team-name">Man Utd</p>
                              </div>
                            </div>
                          </td>
                          <td className="td table-vs">VS</td>
                          <td className="td" colspan="2">
                            <div className="team">
                              <div>
                                <p className="team-name">Liver Pool</p>
                              </div>
                              <div className="team-logo">
                                <img src={Second} alt="LOGO" />
                              </div>
                            </div>
                          </td>
                          <td className="date">Aug 30 - 15:00</td>
                        </tr>
                        <tr className="tr">
                          <td className="td space"></td>
                          <td className="td" colspan="2">
                            <div className="team">
                              <div className="team-logo">
                                <img src={First} alt="LOGO" />
                              </div>
                              <div>
                                <p className="team-name">Man Utd</p>
                              </div>
                            </div>
                          </td>
                          <td className="td table-vs">VS</td>
                          <td className="td" colspan="2">
                            <div className="team">
                              <div>
                                <p className="team-name">Liver Pool</p>
                              </div>
                              <div className="team-logo">
                                <img src={Second} alt="LOGO" />
                              </div>
                            </div>
                          </td>
                          <td className="date">Aug 30 - 15:00</td>
                        </tr>
                        <tr className="tr">
                          <td className="td space"></td>
                          <td className="td" colspan="2">
                            <div className="team">
                              <div className="team-logo">
                                <img src={First} alt="LOGO" />
                              </div>
                              <div>
                                <p className="team-name">Man Utd</p>
                              </div>
                            </div>
                          </td>
                          <td className="td table-vs">VS</td>
                          <td className="td" colspan="2">
                            <div className="team">
                              <div>
                                <p className="team-name">Liver Pool</p>
                              </div>
                              <div className="team-logo">
                                <img src={Second} alt="LOGO" />
                              </div>
                            </div>
                          </td>
                          <td className="date">Aug 30 - 15:00</td>
                        </tr>
                      </table>
                    </div>

                    <div className="fixtures">
                      <div className="captions">
                        <h2>TOMORROW</h2>
                        <small>30 AUG</small>
                      </div>
                      <table className="schudle-table">
                        <tr className="tr">
                          <td className="td space"></td>
                          <td className="td" colspan="2">
                            <div className="team">
                              <div className="team-logo">
                                <img src={First} alt="LOGO" />
                              </div>
                              <div>
                                <p className="team-name">Man Utd</p>
                              </div>
                            </div>
                          </td>
                          <td className="td table-vs">VS</td>
                          <td className="td" colspan="2">
                            <div className="team">
                              <div>
                                <p className="team-name">Liver Pool</p>
                              </div>
                              <div className="team-logo">
                                <img src={Second} alt="LOGO" />
                              </div>
                            </div>
                          </td>
                          <td className="date">Aug 30 - 15:00</td>
                        </tr>
                        <tr className="tr">
                          <td className="td space"></td>
                          <td className="td" colspan="2">
                            <div className="team">
                              <div className="team-logo">
                                <img src={First} alt="LOGO" />
                              </div>
                              <div>
                                <p className="team-name">Man Utd</p>
                              </div>
                            </div>
                          </td>
                          <td className="td table-vs">VS</td>
                          <td className="td" colspan="2">
                            <div className="team">
                              <div>
                                <p className="team-name">Liver Pool</p>
                              </div>
                              <div className="team-logo">
                                <img src={Second} alt="LOGO" />
                              </div>
                            </div>
                          </td>
                          <td className="date">Aug 30 - 15:00</td>
                        </tr>
                        <tr className="tr">
                          <td className="td space"></td>
                          <td className="td" colspan="2">
                            <div className="team">
                              <div className="team-logo">
                                <img src={First} alt="LOGO" />
                              </div>
                              <div>
                                <p className="team-name">Man Utd</p>
                              </div>
                            </div>
                          </td>
                          <td className="td table-vs">VS</td>
                          <td className="td" colspan="2">
                            <div className="team">
                              <div>
                                <p className="team-name">Liver Pool</p>
                              </div>
                              <div className="team-logo">
                                <img src={Second} alt="LOGO" />
                              </div>
                            </div>
                          </td>
                          <td className="date">Aug 30 - 15:00</td>
                        </tr>
                      </table>
                    </div>

                    <div className="fixtures">
                      <div className="captions">
                        <h2>THURSDAY</h2>
                        <small>30 AUG</small>
                      </div>
                      <table className="schudle-table">
                        <tr className="tr">
                          <td className="td space"></td>
                          <td className="td" colspan="2">
                            <div className="team">
                              <div className="team-logo">
                                <img src={First} alt="LOGO" />
                              </div>
                              <div>
                                <p className="team-name">Man Utd</p>
                              </div>
                            </div>
                          </td>
                          <td className="td table-vs">VS</td>
                          <td className="td" colspan="2">
                            <div className="team">
                              <div>
                                <p className="team-name">Liver Pool</p>
                              </div>
                              <div className="team-logo">
                                <img src={Second} alt="LOGO" />
                              </div>
                            </div>
                          </td>
                          <td className="date">Aug 30 - 15:00</td>
                        </tr>
                        <tr className="tr">
                          <td className="td space"></td>
                          <td className="td" colspan="2">
                            <div className="team">
                              <div className="team-logo">
                                <img src={First} alt="LOGO" />
                              </div>
                              <div>
                                <p className="team-name">Man Utd</p>
                              </div>
                            </div>
                          </td>
                          <td className="td table-vs">VS</td>
                          <td className="td" colspan="2">
                            <div className="team">
                              <div>
                                <p className="team-name">Liver Pool</p>
                              </div>
                              <div className="team-logo">
                                <img src={Second} alt="LOGO" />
                              </div>
                            </div>
                          </td>
                          <td className="date">Aug 30 - 15:00</td>
                        </tr>
                        <tr className="tr">
                          <td className="td space"></td>
                          <td className="td" colspan="2">
                            <div className="team">
                              <div className="team-logo">
                                <img src={First} alt="LOGO" />
                              </div>
                              <div>
                                <p className="team-name">Man Utd</p>
                              </div>
                            </div>
                          </td>
                          <td className="td table-vs">VS</td>
                          <td className="td" colspan="2">
                            <div className="team">
                              <div>
                                <p className="team-name">Liver Pool</p>
                              </div>
                              <div className="team-logo">
                                <img src={Second} alt="LOGO" />
                              </div>
                            </div>
                          </td>
                          <td className="date">Aug 30 - 15:00</td>
                        </tr>
                      </table>
                    </div>

                    <div className="fixtures">
                      <div className="captions">
                        <h2>FRIDAY</h2>
                        <small>30 AUG</small>
                      </div>
                      <table className="schudle-table">
                        <tr className="tr">
                          <td className="td space"></td>
                          <td className="td" colspan="2">
                            <div className="team">
                              <div className="team-logo">
                                <img src={First} alt="LOGO" />
                              </div>
                              <div>
                                <p className="team-name">Man Utd</p>
                              </div>
                            </div>
                          </td>
                          <td className="td table-vs">VS</td>
                          <td className="td" colspan="2">
                            <div className="team">
                              <div>
                                <p className="team-name">Liver Pool</p>
                              </div>
                              <div className="team-logo">
                                <img src={Second} alt="LOGO" />
                              </div>
                            </div>
                          </td>
                          <td className="date">Aug 30 - 15:00</td>
                        </tr>
                        <tr className="tr">
                          <td className="td space"></td>
                          <td className="td" colspan="2">
                            <div className="team">
                              <div className="team-logo">
                                <img src={First} alt="LOGO" />
                              </div>
                              <div>
                                <p className="team-name">Man Utd</p>
                              </div>
                            </div>
                          </td>
                          <td className="td table-vs">VS</td>
                          <td className="td" colspan="2">
                            <div className="team">
                              <div>
                                <p className="team-name">Liver Pool</p>
                              </div>
                              <div className="team-logo">
                                <img src={Second} alt="LOGO" />
                              </div>
                            </div>
                          </td>
                          <td className="date">Aug 30 - 15:00</td>
                        </tr>
                        <tr className="tr">
                          <td className="td space"></td>
                          <td className="td" colspan="2">
                            <div className="team">
                              <div className="team-logo">
                                <img src={First} alt="LOGO" />
                              </div>
                              <div>
                                <p className="team-name">Man Utd</p>
                              </div>
                            </div>
                          </td>
                          <td className="td table-vs">VS</td>
                          <td className="td" colspan="2">
                            <div className="team">
                              <div>
                                <p className="team-name">Liver Pool</p>
                              </div>
                              <div className="team-logo">
                                <img src={Second} alt="LOGO" />
                              </div>
                            </div>
                          </td>
                          <td className="date">Aug 30 - 15:00</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
              </TabPanel>

              <TabPanel
                value={value}
                index={1}
                className="main-container-for-table"
              >
                <div className="points">
                  <div className="schule-middle-middle-table-container">
                    <table className="main">
                      <tr>
                        <td className="table-heading">Position</td>
                        <td className="table-heading" colspan="2">
                          Teams
                        </td>
                        <td className="table-heading">Played</td>
                        <td className="table-heading">Won</td>
                        <td className="table-heading">Drawn</td>
                        <td className="table-heading">Lost</td>
                        <td className="table-heading">GF</td>
                        <td className="table-heading">GA</td>
                        <td className="table-heading">Points</td>
                        <td className="table-heading">Next Game</td>
                      </tr>

                      <tr className="border-bottom">
                        <td>1</td>
                        <td colspan="2">
                          <div className="team">
                            <div className="team-logo">
                              <img src={First} alt="LOGO" />
                            </div>
                            <div>
                              <p class="team-name"> Man Utd</p>
                            </div>
                          </div>
                        </td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td>0</td>
                        <td>7</td>
                        <td>7</td>
                        <td>7</td>
                        <td>
                          <div className="logo-two">
                            <img
                              src={Second}
                              className="team-logo"
                              alt="LOGO"
                            />
                          </div>
                        </td>
                      </tr>

                      <tr className="border-bottom">
                        <td>1</td>
                        <td colspan="2">
                          <div className="team">
                            <div className="team-logo">
                              <img src={First} alt="LOGO" />
                            </div>
                            <div>
                              <p class="team-name"> Man Utd</p>
                            </div>
                          </div>
                        </td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td>0</td>
                        <td>7</td>
                        <td>7</td>
                        <td>7</td>
                        <td>
                          <div className="logo-two">
                            <img
                              src={Second}
                              className="team-logo"
                              alt="LOGO"
                            />
                          </div>
                        </td>
                      </tr>

                      <tr className="border-bottom">
                        <td>1</td>
                        <td colspan="2">
                          <div className="team">
                            <div className="team-logo">
                              <img src={First} alt="LOGO" />
                            </div>
                            <div>
                              <p class="team-name"> Man Utd</p>
                            </div>
                          </div>
                        </td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td>0</td>
                        <td>7</td>
                        <td>7</td>
                        <td>7</td>
                        <td>
                          <div className="logo-two">
                            <img
                              src={Second}
                              className="team-logo"
                              alt="LOGO"
                            />
                          </div>
                        </td>
                      </tr>

                      <tr className="border-bottom">
                        <td>1</td>
                        <td colspan="2">
                          <div className="team">
                            <div className="team-logo">
                              <img src={First} alt="LOGO" />
                            </div>
                            <div>
                              <p class="team-name"> Man Utd</p>
                            </div>
                          </div>
                        </td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td>0</td>
                        <td>7</td>
                        <td>7</td>
                        <td>7</td>
                        <td>
                          <div className="logo-two">
                            <img
                              src={Second}
                              className="team-logo"
                              alt="LOGO"
                            />
                          </div>
                        </td>
                      </tr>

                      <tr className="border-bottom">
                        <td>1</td>
                        <td colspan="2">
                          <div className="team">
                            <div className="team-logo">
                              <img src={First} alt="LOGO" />
                            </div>
                            <div>
                              <p class="team-name"> Man Utd</p>
                            </div>
                          </div>
                        </td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td>0</td>
                        <td>7</td>
                        <td>7</td>
                        <td>7</td>
                        <td>
                          <div className="logo-two">
                            <img
                              src={Second}
                              className="team-logo"
                              alt="LOGO"
                            />
                          </div>
                        </td>
                      </tr>

                      <tr className="border-bottom">
                        <td>1</td>
                        <td colspan="2">
                          <div className="team">
                            <div className="team-logo">
                              <img src={First} alt="LOGO" />
                            </div>
                            <div>
                              <p class="team-name"> Man Utd</p>
                            </div>
                          </div>
                        </td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td>0</td>
                        <td>7</td>
                        <td>7</td>
                        <td>7</td>
                        <td>
                          <div className="logo-two">
                            <img
                              src={Second}
                              className="team-logo"
                              alt="LOGO"
                            />
                          </div>
                        </td>
                      </tr>

                      <tr className="border-bottom">
                        <td>1</td>
                        <td colspan="2">
                          <div className="team">
                            <div className="team-logo">
                              <img src={First} alt="LOGO" />
                            </div>
                            <div>
                              <p class="team-name"> Man Utd</p>
                            </div>
                          </div>
                        </td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td>0</td>
                        <td>7</td>
                        <td>7</td>
                        <td>7</td>
                        <td>
                          <div className="logo-two">
                            <img
                              src={Second}
                              className="team-logo"
                              alt="LOGO"
                            />
                          </div>
                        </td>
                      </tr>

                      <tr className="border-bottom">
                        <td>1</td>
                        <td colspan="2">
                          <div className="team">
                            <div className="team-logo">
                              <img src={First} alt="LOGO" />
                            </div>
                            <div>
                              <p class="team-name"> Man Utd</p>
                            </div>
                          </div>
                        </td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td>0</td>
                        <td>7</td>
                        <td>7</td>
                        <td>7</td>
                        <td>
                          <div className="logo-two">
                            <img
                              src={Second}
                              className="team-logo"
                              alt="LOGO"
                            />
                          </div>
                        </td>
                      </tr>

                      <tr className="border-bottom">
                        <td>1</td>
                        <td colspan="2">
                          <div className="team">
                            <div className="team-logo">
                              <img src={First} alt="LOGO" />
                            </div>
                            <div>
                              <p class="team-name"> Man Utd</p>
                            </div>
                          </div>
                        </td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td>0</td>
                        <td>7</td>
                        <td>7</td>
                        <td>7</td>
                        <td>
                          <div className="logo-two">
                            <img
                              src={Second}
                              className="team-logo"
                              alt="LOGO"
                            />
                          </div>
                        </td>
                      </tr>

                      <tr className="border-bottom">
                        <td>1</td>
                        <td colspan="2">
                          <div className="team">
                            <div className="team-logo">
                              <img src={First} alt="LOGO" />
                            </div>
                            <div>
                              <p class="team-name"> Man Utd</p>
                            </div>
                          </div>
                        </td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td>0</td>
                        <td>7</td>
                        <td>7</td>
                        <td>7</td>
                        <td>
                          <div className="logo-two">
                            <img
                              src={Second}
                              className="team-logo"
                              alt="LOGO"
                            />
                          </div>
                        </td>
                      </tr>
                      <tr className="border-bottom">
                        <td>1</td>
                        <td colspan="2">
                          <div className="team">
                            <div className="team-logo">
                              <img src={First} alt="LOGO" />
                            </div>
                            <div>
                              <p class="team-name"> Man Utd</p>
                            </div>
                          </div>
                        </td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td>0</td>
                        <td>7</td>
                        <td>7</td>
                        <td>7</td>
                        <td>
                          <div className="logo-two">
                            <img
                              src={Second}
                              className="team-logo"
                              alt="LOGO"
                            />
                          </div>
                        </td>
                      </tr>

                      <tr className="border-bottom">
                        <td>1</td>
                        <td colspan="2">
                          <div className="team">
                            <div className="team-logo">
                              <img src={First} alt="LOGO" />
                            </div>
                            <div>
                              <p class="team-name"> Man Utd</p>
                            </div>
                          </div>
                        </td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td>0</td>
                        <td>7</td>
                        <td>7</td>
                        <td>7</td>
                        <td>
                          <div className="logo-two">
                            <img
                              src={Second}
                              className="team-logo"
                              alt="LOGO"
                            />
                          </div>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
              </TabPanel>

              <TabPanel
                value={value}
                index={2}
                className="main-container-for-table"
              >
                <div className="schudle-middle-middle-table">
                  <div className="schule-middle-middle-table-container">
                    <div className="fixtures">
                      <div className="captions">
                        <h2>TODAY</h2>
                        <small>30 AUG</small>
                      </div>
                      <table className="schudle-table">
                        <tr className="tr">
                          <td className="td space"></td>
                          <td className="td" colspan="2">
                            <div className="team">
                              <div className="team-logo">
                                <img src={First} alt="LOGO" />
                              </div>
                              <div>
                                <p className="team-name">Man Utd</p>
                              </div>
                            </div>
                          </td>
                          <td className="td dash">
                            1<span>-</span>5
                          </td>
                          <td className="td" colspan="2">
                            <div className="team">
                              <div>
                                <p className="team-name">LiverPool</p>
                              </div>
                              <div className="team-logo">
                                <img src={Second} alt="LOGO" />
                              </div>
                            </div>
                          </td>
                          <td className="date" colspan="2">
                            Aug 30 - 15:00
                          </td>
                        </tr>
                        <tr className="tr">
                          <td className="td space"></td>
                          <td className="td" colspan="2">
                            <div className="team">
                              <div className="team-logo">
                                <img src={First} alt="LOGO" />
                              </div>
                              <div>
                                <p className="team-name">Man Utd</p>
                              </div>
                            </div>
                          </td>
                          <td className="td dash">
                            1<span>-</span>5
                          </td>
                          <td className="td" colspan="2">
                            <div className="team">
                              <div>
                                <p className="team-name">LiverPool</p>
                              </div>
                              <div className="team-logo">
                                <img src={Second} alt="LOGO" />
                              </div>
                            </div>
                          </td>
                          <td className="date" colspan="2">
                            Aug 30 - 15:00
                          </td>
                        </tr>
                        <tr className="tr">
                          <td className="td space"></td>
                          <td className="td" colspan="2">
                            <div className="team">
                              <div className="team-logo">
                                <img src={First} alt="LOGO" />
                              </div>
                              <div>
                                <p className="team-name">Man Utd</p>
                              </div>
                            </div>
                          </td>
                          <td className="td dash">
                            1<span>-</span>5
                          </td>
                          <td className="td" colspan="2">
                            <div className="team">
                              <div>
                                <p className="team-name">LiverPool</p>
                              </div>
                              <div className="team-logo">
                                <img src={Second} alt="LOGO" />
                              </div>
                            </div>
                          </td>
                          <td className="date" colspan="2">
                            Aug 30 - 15:00
                          </td>
                        </tr>
                      </table>
                    </div>

                    <div className="fixtures">
                      <div className="captions">
                        <h2>TOMORROW</h2>
                        <small>30 AUG</small>
                      </div>
                      <table className="schudle-table">
                        <tr className="tr">
                          <td className="td space"></td>
                          <td className="td" colspan="2">
                            <div className="team">
                              <div className="team-logo">
                                <img src={First} alt="LOGO" />
                              </div>
                              <div>
                                <p className="team-name">Man Utd</p>
                              </div>
                            </div>
                          </td>
                          <td className="td dash">
                            1<span>-</span>5
                          </td>
                          <td className="td" colspan="2">
                            <div className="team">
                              <div>
                                <p className="team-name">LiverPool</p>
                              </div>
                              <div className="team-logo">
                                <img src={Second} alt="LOGO" />
                              </div>
                            </div>
                          </td>
                          <td className="date" colspan="2">
                            Aug 30 - 15:00
                          </td>
                        </tr>
                        <tr className="tr">
                          <td className="td space"></td>
                          <td className="td" colspan="2">
                            <div className="team">
                              <div className="team-logo">
                                <img src={First} alt="LOGO" />
                              </div>
                              <div>
                                <p className="team-name">Man Utd</p>
                              </div>
                            </div>
                          </td>
                          <td className="td dash">
                            1<span>-</span>5
                          </td>
                          <td className="td" colspan="2">
                            <div className="team">
                              <div>
                                <p className="team-name">LiverPool</p>
                              </div>
                              <div className="team-logo">
                                <img src={Second} alt="LOGO" />
                              </div>
                            </div>
                          </td>
                          <td className="date" colspan="2">
                            Aug 30 - 15:00
                          </td>
                        </tr>
                        <tr className="tr">
                          <td className="td space"></td>
                          <td className="td" colspan="2">
                            <div className="team">
                              <div className="team-logo">
                                <img src={First} alt="LOGO" />
                              </div>
                              <div>
                                <p className="team-name">Man Utd</p>
                              </div>
                            </div>
                          </td>
                          <td className="td dash">
                            1<span>-</span>5
                          </td>
                          <td className="td" colspan="2">
                            <div className="team">
                              <div>
                                <p className="team-name">LiverPool</p>
                              </div>
                              <div className="team-logo">
                                <img src={Second} alt="LOGO" />
                              </div>
                            </div>
                          </td>
                          <td className="date" colspan="2">
                            Aug 30 - 15:00
                          </td>
                        </tr>
                      </table>
                    </div>

                    <div className="fixtures">
                      <div className="captions">
                        <h2>THURSDAY</h2>
                        <small>30 AUG</small>
                      </div>
                      <table className="schudle-table">
                        <tr className="tr">
                          <td className="td space"></td>
                          <td className="td" colspan="2">
                            <div className="team">
                              <div className="team-logo">
                                <img src={First} alt="LOGO" />
                              </div>
                              <div>
                                <p className="team-name">Man Utd</p>
                              </div>
                            </div>
                          </td>
                          <td className="td dash">
                            1<span>-</span>5
                          </td>
                          <td className="td" colspan="2">
                            <div className="team">
                              <div>
                                <p className="team-name">LiverPool</p>
                              </div>
                              <div className="team-logo">
                                <img src={Second} alt="LOGO" />
                              </div>
                            </div>
                          </td>
                          <td className="date" colspan="2">
                            Aug 30 - 15:00
                          </td>
                        </tr>
                        <tr className="tr">
                          <td className="td space"></td>
                          <td className="td" colspan="2">
                            <div className="team">
                              <div className="team-logo">
                                <img src={First} alt="LOGO" />
                              </div>
                              <div>
                                <p className="team-name">Man Utd</p>
                              </div>
                            </div>
                          </td>
                          <td className="td dash">
                            1<span>-</span>5
                          </td>
                          <td className="td" colspan="2">
                            <div className="team">
                              <div>
                                <p className="team-name">LiverPool</p>
                              </div>
                              <div className="team-logo">
                                <img src={Second} alt="LOGO" />
                              </div>
                            </div>
                          </td>
                          <td className="date" colspan="2">
                            Aug 30 - 15:00
                          </td>
                        </tr>
                        <tr className="tr">
                          <td className="td space"></td>
                          <td className="td" colspan="2">
                            <div className="team">
                              <div className="team-logo">
                                <img src={First} alt="LOGO" />
                              </div>
                              <div>
                                <p className="team-name">Man Utd</p>
                              </div>
                            </div>
                          </td>
                          <td className="td dash">
                            1<span>-</span>5
                          </td>
                          <td className="td" colspan="2">
                            <div className="team">
                              <div>
                                <p className="team-name">LiverPool</p>
                              </div>
                              <div className="team-logo">
                                <img src={Second} alt="LOGO" />
                              </div>
                            </div>
                          </td>
                          <td className="date" colspan="2">
                            Aug 30 - 15:00
                          </td>
                        </tr>
                      </table>
                    </div>

                    <div className="fixtures">
                      <div className="captions">
                        <h2>FRIDAY</h2>
                        <small>30 AUG</small>
                      </div>
                      <table className="schudle-table">
                        <tr className="tr">
                          <td className="td space"></td>
                          <td className="td" colspan="2">
                            <div className="team">
                              <div className="team-logo">
                                <img src={First} alt="LOGO" />
                              </div>
                              <div>
                                <p className="team-name">Man Utd</p>
                              </div>
                            </div>
                          </td>
                          <td className="td table-vs">VS</td>
                          <td className="td" colspan="2">
                            <div className="team">
                              <div>
                                <p className="team-name">Liver Pool</p>
                              </div>
                              <div className="team-logo">
                                <img src={Second} alt="LOGO" />
                              </div>
                            </div>
                          </td>
                          <td className="date">Aug 30 - 15:00</td>
                        </tr>
                        <tr className="tr">
                          <td className="td space"></td>
                          <td className="td" colspan="2">
                            <div className="team">
                              <div className="team-logo">
                                <img src={First} alt="LOGO" />
                              </div>
                              <div>
                                <p className="team-name">Man Utd</p>
                              </div>
                            </div>
                          </td>
                          <td className="td table-vs">VS</td>
                          <td className="td" colspan="2">
                            <div className="team">
                              <div>
                                <p className="team-name">Liver Pool</p>
                              </div>
                              <div className="team-logo">
                                <img src={Second} alt="LOGO" />
                              </div>
                            </div>
                          </td>
                          <td className="date">Aug 30 - 15:00</td>
                        </tr>
                        <tr className="tr">
                          <td className="td space"></td>
                          <td className="td" colspan="2">
                            <div className="team">
                              <div className="team-logo">
                                <img src={First} alt="LOGO" />
                              </div>
                              <div>
                                <p className="team-name">Man Utd</p>
                              </div>
                            </div>
                          </td>
                          <td className="td table-vs">VS</td>
                          <td className="td" colspan="2">
                            <div className="team">
                              <div>
                                <p className="team-name">Liver Pool</p>
                              </div>
                              <div className="team-logo">
                                <img src={Second} alt="LOGO" />
                              </div>
                            </div>
                          </td>
                          <td className="date">Aug 30 - 15:00</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
              </TabPanel>
              <div className="schudle-table-adds">
                <FlexAdd />
              </div>
            </Middle>
          </div>
          <div className="schudle-middle-right">
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

export default SchudleTable;
