import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import qube from "../img/qube-icon.svg";
function LandingPage() {
  return (
    <>
      <section className="text-uppercase nft-raffle-sec-1">
        <section className="text-light collection-headings-cont">
            <div>
              <h1 className="nft-subtext-1">NFT Collections</h1>
            </div>
            <div>
              <p className="text-light text-capitalize nft-subtext-2">
                Our marketplace has four types of NFT collections categories.
                These are:
              </p>
            </div>
        </section>
          <section className="collection-sec">
            <div className="collection-item-cont collection-cont">
              <h1 className="pt-5 mr-5 text-light collection-sub-text-1">
                <img src={qube} className="mx-3" alt="" />
                community collections
              </h1>
              <ul className="ms-3 pt-3 list-collection">
                <li className="text-start">Structural Legacies</li>
                <li className="text-start pt-2">Home Designs</li>
                <li className="text-start pt-2">System Architecture</li>
                <li className="text-start pt-2">Products</li>
              </ul>
            </div>
            <div className="collection-item-cont">
              <h1 className="pt-5 mx-2 text-light collection-sub-text-1">
                <img src={qube} className="mx-3" alt="" />
                dao projects
              </h1>
              <ul className="ms-3 pt-3 list-collection">
                <li className="text-start">Hotel</li>
                <li className="text-start pt-2">Commercial</li>
                <li className="text-start pt-2">Residential</li>
              </ul>
            </div>
            
            
          </section>
          <div className="pt-4">
          <NavLink to="/home-products" className="a-link">
              <button className="button1 btn btn-lg rounded-pill view-collection-btn" type="button">
                View Collections
                <img src="/icons8-right-24.png" className="p-1" alt="image" />
              </button>
          
            </NavLink>
          </div>
      </section>
       

        {/* <div className="container">
          <div class="row justify-content-around">
            <div class="col-4">
              <p>
                Our Marketplace has four types of NFT Collections categories.
                These are:
              </p>
            </div>
            <div class="col-4">
              <ul style={{ listStyleType: "none", textAlign: "left" }}>
                <div className="col-md eco-1-title">
                  <p className="ai-title-home">Community Collection</p>
                </div>
                <li> ● STRUCTURAL LEGACIES </li>
                <li> ● Home Designs </li>
                <li> ● System Architecture </li>
                <li> ● Products </li>
              </ul>
            </div> */}
        {/* <div class="col-4">
              <ul style={{ listStyleType: "none", textAlign: "left" }}>
                <div className="col-md eco-1-title">
                  <p className="ai-title-home">Dao Projects</p>
                </div> */}
        {/* <li> ● Hotel </li>
                <li> ● Commercial/Residential </li> */}
        {/* <li> ● System Architecture </li>
                <li> ● Products </li> */}
        {/* </ul>
            </div>
          </div>
          <br />
          <br />
          <NavLink to="/structural-legacies" className="a-link">
            <button className="button1 btn btn-lg rounded-pill" type="button">
              Collections
            </button>
          </NavLink> */}
        {/* <p> CHECK OUR COLLECTIONS: </p> */}
        {/* </div>
        <br />
        <br /> */}
    </>
  );
}
export default LandingPage;
