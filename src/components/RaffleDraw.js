import React, { useState } from "react";
import { Link } from "react-router-dom";
import raffleImg from "../img/Pablo_Residence_2.png";
import raffleImg2 from "../img/ReworkRaf.png";
import raffleImgmobile from "../img/Pablo_Residence_2.png";
import Modal from "./RaffleModal/Modal";
import { NavLink } from "react-router-dom";

function RaffleDraw() {
  const [modalOpen, setOpenModal] = useState(false);
  return (
    <>
      <section className="raffle-sec-res text-light">
        <div className="raffle-sec m-auto">
          <div className="raffle-img-main">
            <img src={raffleImg2} alt="" />
          </div>
          <div className="raffle-img-main-mobile">
            <img src={raffleImgmobile} alt="" />
          </div>
          <div className="raffle-des-main">
            <h1 className="text-uppercase raffle-sub-title pt-3">
              Homeqube Raffle Draw!
            </h1>
            <h3 className="raffle-sub-title-2 text-uppercase text-light">
              Lucky winner of A condominium from calma properties inc
            </h3>
            <p className="raffle-sub-title-3 text-light pt-5">
              For the first 1500 NFTs sold, we will give away one brand new
              condo in
              Paranaque, Philippines.
            </p>
            <h4 className="raffle-sub-title-4 pt-5">
              Get your system architecture NFT (9$Sol)
            </h4>
            <p className="text-light sub-text-raff-1 mb-4">
              Transfer fees are included
            </p>
            <div className="pt-3 button-raffle-cont">
                <NavLink to="/home-products" className="a-link">
                  <button className="button1 btn btn-lg rounded-pill secure-entry-btn" type="button">
                    Secure your entry
                    <img src="/icons8-right-24.png" className="ms-1" alt="image" />
                  </button>
                </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default RaffleDraw;
