import React from "react";
import "./Donate.scss";

import paypal from "../../assest/donate/paypal.svg";
import share from "../../assest/donate/share.svg";
import stripe from "../../assest/donate/stripe.svg";
// import bitcoin from "../../assest/donate/bitcoin.svg";
import Marque from "../../components/Marque/Marque";

const Donate = () => {
  return (
    <>
      <div className="donate">
        <div class="mobile-marque">
          <Marque />
        </div>
        <div className="contact-disclamer">
          <h2 className="contact-disclamer-heading">Disclaimer</h2>
          <p className="contact-disclamer-para">
            AJ Sports merely links/embeds content uploaded to popular media
            hosting websites such Vimeo.com, Dailymotion.com, Youtube.com,
            twitch.tv, reddit.com, etc. AJ Sports does not host any audio-visual
            content itself and has no ability to modify such content. We thus
            cannot accept any liability for the content transmitted by others as
            we are not affiliated nor endorsed by the external content. All
            content is copyright of their respective owners. AJ Sports operates
            as a search engine for streams and videos already hosted publicly on
            the world wide web. For any legal issues please contact appropriate
            media file owners.
          </p>
          {/* <br />
            <p className="contact-disclamer-para"> Email : info@gmail.com</p> */}
        </div>

        <div className="donate-content">
          <div className="donate-container">
            <div className="donate-line">
              <h4>Donate</h4>
              <div className="donate-line-border"></div>
            </div>
            <div className="donate-container-width">
              <h4>Enter Amount:</h4>
              <div className="donate-container-box">
                <button>&pound; 2</button>
                <button>&pound; 5</button>
                <button>&pound; 10</button>
                <button>&pound; 15</button>
                <button>&pound; 20</button>
                <button>Other Amount</button>
              </div>
              <div className="donate-container-field">
                <h4>&pound;</h4>
              </div>
              <div className="donate-container-duration">
                <button>One-time</button>
                <button>Monthly</button>
              </div>
              <div className="donate-container-pay">
                <button>pay by card</button>
              </div>
              <div className=" donate-container-or">
                <center>OR</center>
              </div>
              <div className="donate-container-paypal">
                <button>
                  <img src={paypal} alt="paypal" />
                </button>
              </div>
              <div className="donate-container-bitcoin">
                <button>bitcoin</button>
              </div>
              <div className="donate-container-stripe">
                <button>
                  <img src={stripe} alt="stripe" />
                </button>
              </div>
              <div className="donate-container-share">
                <button>
                  <img src={share} alt="share" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Donate;
