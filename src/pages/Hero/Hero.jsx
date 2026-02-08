import React from 'react';
import { Link } from 'react-router-dom';

const Hero = ({ image, title, text, ctaLink, ctaText = "Learn more" }) => {
    return (
        <section className="hero">

            <img src={image} className="hero__img" />
            <div className="hero__overlay" />

            <div className="hero__content">
                <h1>{title}</h1>
                <p className="hero__text">{text}</p>

                <div className="hero__cta">
                    <Link to={ctaLink} className="btn">
                        {ctaText}
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;