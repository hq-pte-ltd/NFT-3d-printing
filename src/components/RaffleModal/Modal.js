import React from "react";
import "./Modal.css";
import { Link } from "react-router-dom";

function Modal({ setOpenModal }) {
  return (
    <>
      {/* <div className="modalBackground">
        <div className="modalContainer">
          <div className="titleCloseBtn">
            <button onClick={() => setOpenModal(false)}>X</button>
          </div>

          <div className="title">
            <h1>RAFFLE MECHANICS</h1>
          </div>
          <div className="body">
            <p>Sample Text</p>
          </div>
          <div className="footer">
            <button
              onClick={() => {
                setOpenModal(false);
              }}
            >
              Confirm
            </button>
          </div>
        </div>
      </div> */}

      <div class="modal">
        <div class="modal-content">
          <div class="modal-header">
            <p className="ai-title-modal mt-3">
              HOMEQUBE RAFFLE DRAW LUCKY WINNER OF{" "}
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://twitter.com/QubeToken/status/1562007029539307520?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1562007029539307520%7Ctwgr%5E42ad0887d6de936618e77eb922fd85c4656841c5%7Ctwcon%5Es1_&ref_url=https%3A%2F%2Fwww.homeqube.io%2Fclaimqubes"
                className="link-main-color"
              >
                A CONDOMINUM
              </a>{" "}
              FROM CALMA PROPERTIES INC
            </p>
            <span class="close" onClick={() => setOpenModal(false)}>
              &times;
            </span>
          </div>
          <div class="modal-body">
            {/* <div className="col-md eco-1-title">
               
              </div>  */}
            <section className="text-uppercase text-center text-dark">
              <div>
                <ul style={{ listStyleType: "none" }} className="text-start">
                  <p>RAFFLE MECHANICS</p>
                  <li>
                    {" "}
                    1. THE RAFFLE IS OPEN TO ALL BUYERS OF OUR STRUCTURAL LEGACY
                    NFTS, COST AT 9 SOLS. SEE OUR COLLECTION{" "}
                    <Link to="/home-designs" className="link-main-color">
                      HERE.
                    </Link>
                  </li>
                  <li>
                    {" "}
                    2. PARTICIPANTS MUST LIKE AND FOLLOW OUR TWITTER, AND
                    INSTAGRAM ACCOUNTS.
                  </li>
                  <li>
                    {" "}
                    3. CONTEST PERIOD IS FROM AUGUST 23,2022 UNTIL THE FIRST
                    1500 NFTS HAS BEEN SOLD.
                  </li>
                </ul>
                <br />
                <ul style={{ listStyleType: "none" }} className="text-start">
                  <p>RAFFLE DRAW</p>
                  <li>
                    {" "}
                    1. WINNERS WILL BE RANDOMLY GENERATED THRU AN ELECTRONIC
                    DRAW
                  </li>
                  <li>
                    {" "}
                    2. WINNERS WILL BE ANNOUNCED ON OUR SOCIAL MEDIA CHANNELS.
                  </li>
                  <li>
                    {" "}
                    3. WINNER MUST PRESENT THE PROOF OF OWNERSHIP OF THE NFT
                  </li>
                </ul>
              </div>
            </section>
          </div>
          <div class="modal-footer">
            <button
              className="button1_raffle btn btn-lg rounded-pill"
              type="button"
              onClick={() => {
                setOpenModal(false);
              }}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
