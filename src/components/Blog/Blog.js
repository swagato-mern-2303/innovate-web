import React from "react";
import "./Blog.css";

const Blog = () => {
    return (
        <section id="blog">
            <picture>
                <img className="blog__shape" src="assets/blog-shape.png" alt="" />
            </picture>
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 m-auto">
                        <h2 className="section-header">You Also May Like</h2>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-4">
                        <div className="blog__img"></div>
                    </div>
                    <div className="col-lg-6">
                        <div className="blog__details d-flex justify-content-center justify-content-lg-start">
                            <p className="blog__details-news">News</p>
                            <p className="blog__details-name">
                                By <span>Tomas Nikelson</span>
                            </p>
                            <p className="blog__details-time">
                                Posted <span>5 Hours Ago</span>
                            </p>
                        </div>
                        <h3 className="blog__content">
                            Punto Pago Allows Quick And Secure Payments For Services In Panama
                        </h3>
                        <a className="custom-link" href="#">
                            Read more
                        </a>
                    </div>
                </div>
                <div className="row justify-content-center mt-3">
                    <div className="col-lg-4">
                        <div className="blog__img"></div>
                    </div>
                    <div className="col-lg-6">
                        <div className="blog__details d-flex justify-content-center justify-content-lg-start">
                            <p className="blog__details-news">News</p>
                            <p className="blog__details-name">
                                By <span>Tomas Nikelson</span>
                            </p>
                            <p className="blog__details-time">
                                Posted <span>5 Hours Ago</span>
                            </p>
                        </div>
                        <h3 className="blog__content">The User Can Also Replenish A Balance Make Remittances</h3>
                        <a className="custom-link" href="#">
                            Read more
                        </a>
                    </div>
                </div>
                <div className="row justify-content-center mt-3">
                    <div className="col-lg-4">
                        <div className="blog__img"></div>
                    </div>
                    <div className="col-lg-6">
                        <div className="blog__details d-flex justify-content-center justify-content-lg-start">
                            <p className="blog__details-news">News</p>
                            <p className="blog__details-name">
                                By <span>Tomas Nikelson</span>
                            </p>
                            <p className="blog__details-time">
                                Posted <span>5 Hours Ago</span>
                            </p>
                        </div>
                        <h3 className="blog__content">The User Can Also Replenish A Balance Make Remittances</h3>
                        <a className="custom-link" href="#">
                            Read more
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;
