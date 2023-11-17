import React from "react";
import instagram from "../../img/newInsta.svg";
import twitter from "../../img/Twitter_X.png";
import linkedin from "../../img/newLinked.svg";
import telegram from "../../img/newTelegram.svg";
import tiktok from "../../img/tiktok.png";
import youtube from "../../img/yt.png";
function MainFooter() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="footer mt-auto py-2 bg-light fixed-bottom bg-black text-white">
        <div className="container-footer3">
            <div className="footer3-left">
                <p>@{currentYear} HOMEQUBE PTE. LTD.</p>
                <a href="https://www.shop.homeqube.com/buyer/about" target="_blank" rel="noreferrer noopener"><p>Disclaimer &#8226;</p></a>
                <a href="https://www.homeqube.com/terms-of-use" target="_blank" rel="noreferrer noopener"><p>Terms of Use &#8226;</p></a>
                <a href="https://www.homeqube.com/privacy-policy" target="_blank" rel="noreferrer noopener"><p>Privacy Policy</p></a>
            </div>
            <div className="footer3-left-responsive">
                <p>@{currentYear} HOMEQUBE PTE. LTD.</p>
                <a href="https://www.shop.homeqube.com/buyer/about" target="_blank" rel="noreferrer noopener"><p>Disclaimer</p></a>
                <a href="https://www.homeqube.com/terms-of-use" target="_blank" rel="noreferrer noopener"><p>Terms of Use</p></a>
                <a href="https://www.homeqube.com/privacy-policy" target="_blank" rel="noreferrer noopener"><p>Privacy Policy</p></a>
            </div>
            <div className="d-flex pb-1">
                  <a
                    href="https://www.instagram.com/homeqube.ai/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="a-no-design"
                  >
                    <img
                      src={instagram}
                      alt=""
                      className="new-footer-icons me-3"
                    />
                  </a>
                  <a
                    href="https://twitter.com/QubeToken"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="a-no-design"
                  >
                    <img
                      src={twitter}
                      alt=""
                      className="new-footer-icons me-3 twitter-logo"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/homeqube-pte-ltd/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="a-no-design"
                  >
                    <img
                      src={linkedin}
                      alt=""
                      className="new-footer-icons me-3"
                    />
                  </a>
                  <a
                    href="https://t.me/homeqube"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="a-no-design"
                  >
                    <img
                      src={telegram}
                      alt=""
                      className="new-footer-icons me-3"
                    />
                  </a>
                  <a
                    href="https://twitter.com/QubeToken"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="a-no-design"
                  >
                    <img
                      src={tiktok}
                      alt=""
                      className="new-footer-icons me-3 twitter-logo"
                    />
                  </a>
                  <a
                    href="https://twitter.com/QubeToken"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="a-no-design"
                  >
                    <img
                      src={youtube}
                      alt=""
                      className="new-footer-icons me-3 twitter-logo"
                    />
                  </a>
                </div>
        </div>
      </footer>
    </>
  );
}

export default MainFooter;
