import React from "react";
import "./Achievements.css";

const Achievements = () => {
    return (
        <section id="achievement">
            <picture>
                <img className="achievement__shape" src="assets/achievement-shape.png" alt="" />
            </picture>
            <div className="container">
                <div className="row row-cols-lg-4 row-cols-sm-2 row-cols-1 g-5">
                    <div className="col achievement__content">
                        <h2 className="achievement__number">53k</h2>
                        <h3 className="achievement__name">Happy Client</h3>
                    </div>
                    <div className="col achievement__content">
                        <h2 className="achievement__number">10k</h2>
                        <h3 className="achievement__name">Projects Done</h3>
                    </div>
                    <div className="col achievement__content">
                        <h2 className="achievement__number">120</h2>
                        <h3 className="achievement__name">Gets Award</h3>
                    </div>
                    <div className="col achievement__content">
                        <h2 className="achievement__number">16</h2>
                        <h3 className="achievement__name">Operated Years</h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Achievements;
