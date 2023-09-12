import React from "react";
import "./Banner.css";

const Banner = () => {
    return (
        <section id="banner">
            <div className="banner__overlay">
                <div className="container">
                    <div className="row justify-content-center text-center">
                        <div className="col-xxl-10">
                            <h1 className="banner__heading">YOU'RE UNIQUE. YOUR WEBSITE SHOULD BE TOO</h1>
                        </div>
                        <div className="col-xxl-8 col-xl-10">
                            <p className="banner__content">
                                A beautiful website passionately crafted for your small business. Our Digital Agency
                                development has changed the way brands and businesses use technology for growing
                                business.
                            </p>
                        </div>
                        <div>
                            <a className="custom-btn custom-btn-solid me-sm-3" href="#">
                                Get Free Quoto
                            </a>
                            <a className="custom-btn custom-btn-outline mt-4" href="#">
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
