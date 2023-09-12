import React from "react";
import "./Portfolio.css";

const Portfolio = () => {
    return (
        <section id="portfolio">
            <picture>
                <img className="portfolio__shape" src="assets/portfolio-shape.png" alt="" />
            </picture>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 m-auto text-center">
                        <h2 className="section-header">We create real impact</h2>
                        <p className="portfolio__description">
                            We design, build and support websites and apps for clients worldwide. Create beautiful,
                            eye-catching on-page messages without the need for a developer.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-5">
                        <div className="portfolio__card d-flex">
                            <picture>
                                <img src="assets/analysis.png" alt="" />
                            </picture>
                            <div className="portfolio__card-body">
                                <h3 className="portfolio__card-heading">Competetive Analysis</h3>
                                <p className="portfolio__card-content">
                                    With an all-new look and powerful features, Ekko is the best way to ensure success
                                    for your business.
                                </p>
                            </div>
                        </div>
                        <div className="portfolio__card d-flex mt-5">
                            <picture>
                                <img src="assets/research.png" alt="" />
                            </picture>
                            <div className="portfolio__card-body">
                                <h3 className="portfolio__card-heading">Strategy and Research</h3>
                                <p className="portfolio__card-content">
                                    Save money and start building your website using the best tools available on the
                                    market today.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 m-auto">
                        <picture>
                            <img className="portfolio__img w-100" src="assets/portfolio-img.png" alt="" />
                        </picture>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
