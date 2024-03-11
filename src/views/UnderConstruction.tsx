import React from 'react';
import { Link } from 'react-router-dom';
import navlogo from "../img/nav-logo.png";
import cubesLeft from "../img/cubes-backdrop-left.svg";
import cubesRight from "../img/cube-backdrop-right.svg";

const PageNotFound: React.FC = () => {
    return (
        <div className="showcase vh-100 d-flex align-items-center justify-content-center px-4">
            <div className="cubes-backdrop-left">
                <img src={cubesLeft} className="cubes-backdrop-icon" alt="" />
            </div>
            <div className="cubes-backdrop-right">
                <img src={cubesRight} className="cubes-backdrop-icon" alt="" />
            </div>
            <div className="text-center d-flex flex-column align-items-center justify-content-center">
                <div className='d-flex flex-column align-items-center justify-content-center mb-5'>
                    <div className="underconst-img mb-3">
                        <img src={navlogo} className="w-100" alt="404 Error" />
                    </div>
                    <div className='d-flex flex-row align-items-center justify-content-center'>
                        <h1 className='underconst-logotitle'>NFT Marketplace for DePIN
                            <span
                                style={{
                                    marginLeft: ".4rem",
                                    borderRadius: "8px",
                                    background: "black",
                                    color: "greenyellow",
                                    fontSize: "2rem",
                                    fontWeight: "600",
                                }}
                            >
                                (Beta)
                            </span>
                        </h1>

                    </div>
                </div>
                <h1 className="underconst-title mb-3 text-white font-weight-bold mt-5">Under Construction!</h1>
                <p className="display-6 lead text-white">We are currently working on improvements of this Site to Provide you a better Product.</p>
                <a href="https://www.homeqube.com/" className="btn btn-outline-light mt-5 font-weight-bold">
                    Back to HomeQube
                </a>
            </div>
        </div>
    );
};

export default PageNotFound;
