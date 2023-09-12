import React from "react";
import "./Testimonial.css";

const Testimonial = () => {
    return (
        <section id="testimonial">
            <div className="container">
                <h2 className="section-header text-capitalize text-center">what the people thinks about us</h2>
                <div className="row">
                    <div className="col-lg-11 m-auto">
                        <div id="carouselExample" className="carousel slide">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="testimonial__card d-flex flex-column align-items-center">
                                        <div className="testimonial__card-img">
                                            <picture>
                                                <img src="assets/carousel-img.png" alt="" />
                                            </picture>
                                        </div>
                                        <div className="testimonial__card-body">
                                            <div className="star-icon">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <p className="testimonial__card-content">
                                                Lesser Replenish bearing they're him cattle kind dominion. You which
                                                fill place. Land she'd subdue divided gathering blessed seasons it.
                                                Without, wherein days.
                                            </p>
                                            <h3 className="testimonial__card-name">Lukan Depina</h3>
                                            <p className="testimonial__card-detail">Ceo And Head Of Idea</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="testimonial__card d-flex flex-column align-items-center">
                                        <div className="testimonial__card-img">
                                            <picture>
                                                <img src="assets/carousel-img.png" alt="" />
                                            </picture>
                                        </div>
                                        <div className="testimonial__card-body">
                                            <div className="star-icon">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <p className="testimonial__card-content">
                                                Lesser Replenish bearing they're him cattle kind dominion. You which
                                                fill place. Land she'd subdue divided gathering blessed seasons it.
                                                Without, wherein days.
                                            </p>
                                            <h3 className="testimonial__card-name">Lukan Depina</h3>
                                            <p className="testimonial__card-detail">Ceo And Head Of Idea</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="testimonial__card d-flex flex-column align-items-center">
                                        <div className="testimonial__card-img">
                                            <picture>
                                                <img src="assets/carousel-img.png" alt="" />
                                            </picture>
                                        </div>
                                        <div className="testimonial__card-body">
                                            <div className="star-icon">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <p className="testimonial__card-content">
                                                Lesser Replenish bearing they're him cattle kind dominion. You which
                                                fill place. Land she'd subdue divided gathering blessed seasons it.
                                                Without, wherein days.
                                            </p>
                                            <h3 className="testimonial__card-name">Lukan Depina</h3>
                                            <p className="testimonial__card-detail">Ceo And Head Of Idea</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button
                                className="carousel-control-prev"
                                type="button"
                                data-bs-target="#carouselExample"
                                data-bs-slide="prev"
                            >
                                <span className="custom-carousel-icon prev-icon">
                                    <img className="w-100" src="assets/carousel-icon.png" alt="" />
                                </span>
                            </button>
                            <button
                                className="carousel-control-next"
                                type="button"
                                data-bs-target="#carouselExample"
                                data-bs-slide="next"
                            >
                                <span className="custom-carousel-icon next-icon">
                                    <img className="w-100" src="assets/carousel-icon.png" alt="" />
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
