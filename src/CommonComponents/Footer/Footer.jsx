import React from "react";
import Logo from "../../assest/logo/LOGO.png";
import { Link } from "react-router-dom";
import "./Footer.scss";
import { BsTwitter, BsFacebook, BsInstagram } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { SiTiktok, SiTelegram } from "react-icons/si";
const Footer = () => {
  return (
    <>
      <div className="footer-bg">
        <footer className="footer">
          <div className="footer-container">
            <dv className="footer-container-left">
              <div className="footer-container-left-logo">
                <img src={Logo} alt="" />
                <div className="footer-container-left-logo-icons">
                  <BsTwitter />
                  <BsFacebook />
                  <FaDiscord />
                  <BsInstagram />
                  <SiTiktok />
                  <SiTelegram />
                </div>
              </div>
              <div className="footer-container-left-content">
                <h2 className="footer-container-left-content-heading">
                  Disclaimer
                </h2>
                <p className="footer-container-left-content-para">
                  AJ Sports merely links/embeds content uploaded to popular
                  media hosting websites such Vimeo.com, Dailymotion.com,
                  Youtube.com, twitch.tv, reddit.com, etc. AJ Sports does not
                  host any audio-visual content itself and has no ability to
                  modify such content. We thus cannot accept any liability for
                  the content transmitted by others as we are not affiliated nor
                  endorsed by the external content. All content is copyright of
                  their respective owners. AJ Sports operates as a search engine
                  for streams and videos already hosted publicly on the world
                  wide web. For any legal issues please contact appropriate
                  media file owners.
                </p>
                <p className="footer-container-left-content-email">
                  Email : ajsports1@protonmail.com
                </p>
                <div className="footer-container-left-content-empty">
                  <a
                    href="//www.dmca.com/Protection/Status.aspx?ID=002505e4-50e2-4de5-849b-394af1373ce5"
                    target="_blank"
                    className="footer-container-left-content-empty-first"
                  >
                    Protected
                  </a>

                  <a
                    href="https://images.dmca.com/Badges/dmca_protected_sml_120am.png?ID=002505e4-50e2-4de5-849b-394af1373ce5"
                    target="_blank"
                    className="footer-container-left-content-empty-second"
                  >
                    DMCA
                  </a>
                </div>
              </div>
            </dv>

            <div className="footer-container-right">
              <div className="footer-container-right-list">
                <h5>Quick Menus</h5>
                <p className="footer-container-right-list-p">
                  <Link to="/"> About Us</Link>
                </p>
                <p className="footer-container-right-list-p">
                  <Link to="/contactus">Contact Us</Link>
                </p>
                <p className="footer-container-right-list-p">
                  <Link to="/donate">Donate </Link>
                </p>
                <p className="footer-container-right-list-p">
                  <Link to="/donate">Give Away</Link>
                </p>
              </div>
              <div className="footer-container-right-list">
                <h5>Statistics</h5>
                <p className="footer-container-right-list-p">
                  <Link>Premier League</Link>
                </p>
                <p className="footer-container-right-list-p">
                  <Link>Champions League</Link>
                </p>
                <p className="footer-container-right-list-p">
                  <Link>Ligue 1</Link>
                </p>
                <p className="footer-container-right-list-p">
                  <Link>La Liga</Link>
                </p>
              </div>
              <div className="footer-container-right-list">
                <h5>Sports</h5>
                <p className="footer-container-right-list-p">
                  <Link to="/nfl">Nfl</Link>
                </p>
                <p className="footer-container-right-list-p">
                  <Link to="/basketball">Basketball</Link>
                </p>
                <p className="footer-container-right-list-p">
                  <Link to="/football">Football</Link>
                </p>
                <p className="footer-container-right-list-p">
                  <Link to="/boxing">Boxing</Link>
                </p>
                <p className="footer-container-right-list-p">
                  <Link to="/others">Others</Link>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
