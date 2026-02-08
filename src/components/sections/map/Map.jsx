import React from "react";
import { Link } from "react-router-dom";
import "./Index.css";

export default function Map() {

    return (

        <section id="map" class="hero-section">
            <h1 class="hero-title">Discover every sound imaginable.</h1>
            <p class="hero-subtitle">
                <a className="inner-link"
                    href="https://musicmap.info/"
                    target="_blank"
                    rel="noopener noreferrer">Musicmap </a>

                is a massive, dynamic map that tracks the evolution of every music genre in history.
            </p>
            <a className="hero-link"
                href="https://musicmap.info/"
                target="_blank"
                rel="noopener noreferrer">
                <span class="arrow">→</span>
                <span class="link-text">Explore the ultimate music genealogy</span>
            </a>
        </section>


    );
}
