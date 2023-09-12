import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <a href="#">
                            <picture>
                                <img src="assets/logo.png" alt="" />
                            </picture>
                        </a>
                        <p className="footer__content mb-5">
                            Install any demo or template with a single click. You can mix and match all the demos &
                            templates. Every demo can be turned into one or multi-page.
                        </p>
                    </div>
                    <div className="col-lg-7">
                        <div className="footer__links d-flex flex-wrap justify-content-between">
                            <ul>
                                <li className="footer__links-heading">Features</li>
                                <li>
                                    <a href="#">Home</a>
                                </li>
                                <li>
                                    <a href="#">About</a>
                                </li>
                                <li>
                                    <a href="#">Benifit</a>
                                </li>
                                <li>
                                    <a href="#">Pricing</a>
                                </li>
                                <li>
                                    <a href="#">Blog</a>
                                </li>
                            </ul>
                            <ul>
                                <li className="footer__links-heading">Products</li>
                                <li>
                                    <a href="#">Task Management</a>
                                </li>
                                <li>
                                    <a href="#">Company Growth</a>
                                </li>
                                <li>
                                    <a href="#">Time Tracking</a>
                                </li>
                            </ul>
                            <ul>
                                <li className="footer__links-heading">Support</li>
                                <li>
                                    <a href="#">Customer Service</a>
                                </li>
                                <li>
                                    <a href="#">Accessibility</a>
                                </li>
                                <li>
                                    <a href="#">Contact Us</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-between footer__others">
                    <div className="col-md-4">
                        <p className="copyright">@20201 Innovate.All rights reserved.</p>
                    </div>
                    <div className="col-md-4">
                        <a className="privacy-policy me-4" href="#">
                            Privacy Policy
                        </a>
                        <a className="terms-conditions" href="#">
                            Terms & Condition
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
