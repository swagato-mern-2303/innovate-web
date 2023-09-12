import React from "react";
import "./About.css";

const About = () => {
    return (
        <section id="about">
            <picture>
                <img className="about__shape" src="assets/about-shape.png" alt="" />
            </picture>
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-lg-6">
                        <div className="about__card d-flex">
                            <div className="about__card-circle"></div>
                            <div className="about__card-content">
                                <p>We solve real-world problems through people and the web.</p>
                            </div>
                        </div>
                        <div className="about__card d-flex">
                            <div className="about__card-circle"></div>
                            <div className="about__card-content">
                                <p>We make processes and technology work efficiently together.</p>
                            </div>
                        </div>
                        <div className="about__card d-flex">
                            <div className="about__card-circle"></div>
                            <div className="about__card-content">
                                <p>We advance improve existing technology through research and development.</p>
                            </div>
                        </div>
                        <div className="about__card d-flex">
                            <div className="about__card-circle"></div>
                            <div className="about__card-content">
                                <p>We develop long-lasting and scalable solutions, relationships partnerships.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="about__content">
                            <h2 className="section-header">Why Choose Us</h2>
                            <p>
                                We are now a team of strategists, engineers, designers, and marketers who both use and
                                develop technology for a variety of client needs.
                            </p>
                            <a className="custom-btn custom-btn-solid" href="#">
                                Contact Us
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
