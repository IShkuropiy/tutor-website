import React from "react";
import { Link } from "react-router-dom";
import "./Index.css";

export default function SoundBlog() {

    return (
        <section id="sound" className="blog-hero-section">
            <div className="hero-container">
                <h1 className="blog-hero-title">Sound Adventures</h1>
                <p className="blog-hero-subtitle">
                    Music is more than just sound—it’s a living history. In my new articles, we aren't just listening; we’re investigating the folk tales and myths that shaped musical history.
                </p>
                <Link to="/Additional" className="hero-link">
                    <span className="blog-arrow">→</span>
                    <span className="blog-link-text">
                        Unravel the Stories Behind Iconic masterpieces with me
                    </span>
                </Link>
            </div>

        </section>
    );
}
