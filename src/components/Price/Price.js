import React from "react";
import "./Price.css";

const Price = () => {
    return (
        <section id="price">
            <div className="container">
                <h2 className="section-header text-center">Chose The Right Plan</h2>
                <div className="row row-cols-lg-3 row-cols-1">
                    <div className="col col-md-8 m-auto">
                        <div className="price__card">
                            <h3 className="price__card-heading">Basic</h3>
                            <div className="price__card-img">
                                <picture>
                                    <img src="assets/price-basic.png" alt="" />
                                </picture>
                            </div>
                            <h3 className="price__card-price">
                                <span>$</span>160
                            </h3>
                            <div className="price__card-description">
                                <p>Responsive Design</p>
                                <p>Dynamic Elements</p>
                                <p>Service Pages</p>
                                <p>Custom Design & Features</p>
                            </div>
                        </div>
                    </div>
                    <div className="col col-md-8 m-auto">
                        <div className="price__card">
                            <h3 className="price__card-heading">Professional</h3>
                            <div className="price__card-img">
                                <picture>
                                    <img src="assets/price-professional.png" alt="" />
                                </picture>
                            </div>
                            <h3 className="price__card-price">
                                <span>$</span>240
                            </h3>
                            <div className="price__card-description">
                                <p>Responsive Design</p>
                                <p>Dynamic Elements</p>
                                <p>Service Pages</p>
                                <p>Custom Design & Features</p>
                            </div>
                        </div>
                    </div>
                    <div className="col col-md-8 m-auto">
                        <div className="price__card">
                            <h3 className="price__card-heading">Exclusive</h3>
                            <div className="price__card-img">
                                <picture>
                                    <img src="assets/price-exclusive.png" alt="" />
                                </picture>
                            </div>
                            <h3 className="price__card-price">
                                <span>$</span>325
                            </h3>
                            <div className="price__card-description">
                                <p>Responsive Design</p>
                                <p>Dynamic Elements</p>
                                <p>Service Pages</p>
                                <p>Custom Design & Features</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Price;
