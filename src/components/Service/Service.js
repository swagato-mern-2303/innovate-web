import React from "react";
import "./Service.css";

const Service = () => {
    return (
        <section id="service">
            <div className="container">
                <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 g-4">
                    <div className="col">
                        <div className="service__content">
                            <h2 className="section-header">What We Do</h2>
                            <p className="service__content-description">
                                We are now a team of strategists, engineers, designers, and marketers who both use and
                                develop technology
                            </p>
                            <a className="custom-btn custom-btn-solid" href="#">
                                Contact Us
                            </a>
                        </div>
                    </div>
                    <div className="col">
                        <div className="service__card">
                            <picture>
                                <img src="assets/web-design.png" alt="" />
                            </picture>
                            <h3 className="service__card-heading">Web-design & Dev</h3>
                            <p className="service__card-content">
                                Social Media has changed the way we interact & do business while creating
                            </p>
                            <a className="custom-link" href="#">
                                Read more
                            </a>
                        </div>
                    </div>
                    <div className="col">
                        <div className="service__card">
                            <picture>
                                <img src="assets/software.png" alt="" />
                            </picture>
                            <h3 className="service__card-heading">Software Dev</h3>
                            <p className="service__card-content">
                                Content Marketing is the other fold of online advertisement. If you are looking to build
                            </p>
                            <a className="custom-link" href="#">
                                Read more
                            </a>
                        </div>
                    </div>
                    <div className="col">
                        <div className="service__card">
                            <picture>
                                <img src="assets/content-writing.png" alt="" />
                            </picture>
                            <h3 className="service__card-heading">Content Writing</h3>
                            <p className="service__card-content">
                                Social Media has changed the way we interact & do business while creating a new avenue.
                            </p>
                            <a className="custom-link" href="#">
                                Read more
                            </a>
                        </div>
                    </div>
                    <div className="col">
                        <div className="service__card">
                            <picture>
                                <img src="assets/digital-marketing.png" alt="" />
                            </picture>
                            <h3 className="service__card-heading">Digital Marketing</h3>
                            <p className="service__card-content">
                                Social Media has changed the way we interact & do business while creating a new avenue.
                            </p>
                            <a className="custom-link" href="#">
                                Read more
                            </a>
                        </div>
                    </div>
                    <div className="col">
                        <div className="service__card">
                            <picture>
                                <img src="assets/support.png" alt="" />
                            </picture>
                            <h3 className="service__card-heading">Support & Training</h3>
                            <p className="service__card-content">
                                Content Marketing is the other fold of online advertisement. If you are looking to build
                            </p>
                            <a className="custom-link" href="#">
                                Read more
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Service;
