import React from "react";
import { Link } from "react-router-dom";
import self from "/src/assets/self.jpeg";
import art1 from "/src/assets/art1.jpg";
import "./Index.css";

export default function About() {
    return (

        <main id="about" className="about">
            
            <section className="about-container">
                {/* Left Column */}
                <div className="about-content">
                    <h2 className="about-title">
                        Music is a magical place — let it remain that way for
                        <span className="italic"> everyone.</span>
                    </h2>
                    <Link to="/pricing" className="black-btn">learn more</Link>

                </div>

                {/* Right Column */}
                <div className="about-card">
                    <div className="about-image">
                        <img
                            src={self}
                        />
                    </div>
                    <div className="text-box">
                        <p className="text">
                            With a Bachelor's degree in Performing Arts, I possess a strong foundation built upon 12 years of academic study, specializing in classical music. My 10 years of professional experience spans diverse international environments, including Ukraine, China, and the United States, where I have taught students ranging from 5 to 25 years old. I focus on providing a comprehensive and strong classical foundation; this rigorous base ensures that whether students pursue music professionally or explore other genres, they are always equipped with superior technique, theory, and discipline. This global experience allows me to connect with and adapt my teaching methods to students of all backgrounds and skill levels.
                        </p>
                        <div className="author-info">
                            <p className="name"><strong>Iryna Shkuropii</strong></p>
                            <p className="role">Classical Piano Tutor</p>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}