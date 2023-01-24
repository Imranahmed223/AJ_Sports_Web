import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./TopBar.scss";
import IconMenu from "../../CommonComponents/IconMenu/IconMenu";
import navlogo from "../../assest/logo/LOGO.png";
import { IoIosMenu } from "react-icons/io";
// Social Icons
import { FaDiscord, FaTelegram, FaTelegramPlane } from "react-icons/fa";
import { BsTwitter, BsFacebook, BsInstagram } from "react-icons/bs";
import { TbBrandTiktok } from "react-icons/tb";
import CloseIcon from "@mui/icons-material/Close";
import Marque from "../Marque/Marque";
// Responsive Bar Icon
import bundes from "../../assest/navbar/bundes.png";
import champions from "../../assest/navbar/champions.png";
import europa from "../../assest/navbar/europa.png";
import ligue from "../../assest/navbar/ligue.png";
import premier from "../../assest/navbar/premier.png";
import serie from "../../assest/navbar/serie.png";
import uefa from "../../assest/navbar/uefa.png";
import worldcup from "../../assest/navbar/worldcup.png";
import la from "../../assest/navbar/la.png";

const TopBar = ({ onChange }) => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  if (sidebar === true) {
    onChange(true);
  } else {
    onChange(false);
  }

  // For Chat Icon
  const [isVisible, setIsVisible] = useState(false);

  const listenToScroll = () => {
    let heightToHidden = 280;
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
      <div className="topbar">
        <div className="nvabar-settings">
          <div className="topbar-topsection">
            <p class="topbar-topsection-content">
              We apologize for the amount of ads displayed to you. It is the
              only way we can keep the site running
            </p>
          </div>
          <div className="topbar-menuicons">
            <IconMenu />
          </div>
          <div className="topbar-languagemenu">
            <div className="topbar-languagemenu-items">
              <div className="topbar-languagemenu-items-icon">العربية</div>
              <div className="topbar-languagemenu-items-icon">English</div>
              <div className="topbar-languagemenu-items-icon">Español</div>
            </div>
          </div>
        </div>
        <div className="topbar-navbar">
          <div className="nvabar-settings">
            <nav className="topbar-navbar-nav">
              <div className="topbar-navbar-nav-logo">
                <Link to="/">
                  <img src={navlogo} alt="logo" />
                </Link>
              </div>
              <div className="topbar-navbar-nav-items">
                <Link to="/">sports</Link>
                <Link to="/channel">channels</Link>
                <Link to="/statistics">statistics</Link>
                <Link to="/news">news</Link>
                <Link to="/contactus">contact</Link>
              </div>
              <div className="topbar-navbar-nav-btns">
                <Link to="/donate" className="red-big-btn donate-btn">
                  Donate
                </Link>
                <Link to="/giveaway" className="red-big-btn">
                  giveaway
                </Link>
              </div>
            </nav>
          </div>
        </div>
        <div className="topbar-marquee">
          <div className="topbar-marquee-marquee">
            <Marque />
          </div>
        </div>
      </div>

      {/* Responsive Part */}

      <div className="responsive-topbar">
        <div
          className={`${
            sidebar ? "side_menu-active" : "responsive-topbar-top "
          }`}
        >
          <div className="responsive-topbar-container">
            <div className="responsive-topbar-top-hamburger">
              <Link>
                {sidebar ? (
                  <CloseIcon onClick={showSidebar} id="cross-icons" />
                ) : (
                  <IoIosMenu
                    className="cross-icons"
                    onClick={showSidebar}
                    style={{ color: "white", marginLeft: "1rem" }}
                  />
                )}
              </Link>
            </div>

            <div className="responsive-topbar-top-logo">
              <img src={navlogo} alt="logo" />
            </div>
          </div>

          <div
            className={`${sidebar ? "contact-active" : "contact-active-none"}`}
          >
            <div className="contact-active-language">
              <p>العربية</p>
              <p>English</p>
              <p>Español</p>
            </div>
            <div className="contact-active-menu">
              <div className="contact-active-menu-item">
                <Link to="/">sports</Link>
              </div>
              <div className="contact-active-menu-divider"></div>
              <div className="contact-active-menu-item">
                <Link to="/channel">channels</Link>
              </div>
              <div className="contact-active-menu-divider"></div>
              <div className="contact-active-menu-item">
                <Link to="/statistics">statistics</Link>
              </div>
              <div className="contact-active-menu-divider"></div>
              <div className="contact-active-menu-item">
                <Link to="/news">news</Link>
              </div>
              <div className="contact-active-menu-divider"></div>
              <div className="contact-active-menu-item">
                <Link to="/contactus">contact</Link>
              </div>
              <div className="contact-active-menu-divider"></div>
            </div>
            <div className="contact-active-btn">
              <div className="contact-active-btn-container">
                <Link to="/donate">donate</Link>
                <Link to="/giveaway">giveaway</Link>
              </div>
            </div>
            <div className="contact-active-icons">
              <div className="contact-active-icons-items">
                <BsTwitter />
              </div>
              <div className="contact-active-icons-items">
                <BsFacebook />
              </div>
              <div className="contact-active-icons-items">
                <FaDiscord />
              </div>
              <div className="contact-active-icons-items">
                <BsInstagram />
              </div>
              <div className="contact-active-icons-items">
                <TbBrandTiktok />
              </div>
              <div className="contact-active-icons-items">
                <FaTelegram />
              </div>
            </div>

            <div className="contact-active-bottom">
              <div className="contact-active-bottom-container">
                <div className="contact-active-bottom-container-left">
                  <div className="contact-active-bottom-container-left-item">
                    <img src={worldcup} alt="league" />
                    <h3>World Cup</h3>
                  </div>
                  <div className="contact-active-bottom-container-left-item">
                    <img src={uefa} alt="league" />
                    <h3>UFFA Nations League</h3>
                  </div>
                  <div className="contact-active-bottom-container-left-item">
                    <img src={champions} alt="league" />
                    <h3>Champions League</h3>
                  </div>
                  <div className="contact-active-bottom-container-left-item">
                    <img src={premier} alt="league" />
                    <h3>Premier League</h3>
                  </div>
                  <div className="contact-active-bottom-container-left-item">
                    <img src={europa} alt="league" />
                    <h3>Europa League</h3>
                  </div>
                  <div className="contact-active-bottom-container-left-item">
                    <img src={la} alt="league" />
                    <h3>La Liga</h3>
                  </div>
                  <div className="contact-active-bottom-container-left-item">
                    <img src={bundes} alt="league" />
                    <h3>Bundesliga</h3>
                  </div>
                  <div className="contact-active-bottom-container-left-item">
                    <img src={ligue} alt="league-icon" />
                    <h3>Ligue 1</h3>
                  </div>
                  <div className="contact-active-bottom-container-left-item">
                    <img src={serie} alt="league-icon" />
                    <h3>Serie A</h3>
                  </div>
                </div>
                <div className="contact-active-bottom-container-right">
                  {isVisible && (
                    <div className="contact-active-bottom-container-right-icon">
                      <div className="contact-active-bottom-container-right-icon-chat">
                        <FaTelegramPlane />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBar;
