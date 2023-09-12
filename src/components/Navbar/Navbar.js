import React from "react";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark position-absolute w-100">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <picture>
                        <img src="assets/logo.png" alt="logo" />
                    </picture>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvas">
                    <div className="offcanvas-header">
                        <button
                            type="button"
                            className="btn-close btn-close-white"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0 justify-content-evenly align-items-center">
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#about">
                                    About
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#service">
                                    Service
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#portfolio">
                                    Portfolio
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#price">
                                    Price
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#blog">
                                    Blog
                                </a>
                            </li>
                        </ul>
                        <div className="text-center">
                            <a className="custom-btn custom-btn-solid" href="#">
                                Contact Us
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
