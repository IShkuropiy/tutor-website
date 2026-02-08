import React from "react";
import { Link } from "react-router-dom";
import "./Index.css";

export default function Services() {
    return (
        < section id="services" className="service" >
            <div className="service__container">
                <h1 className="title">
                    Musical Guidance & Services
                </h1>

                <div className="service__grid">

                    <article className="service__card">

                        <h3>Individual Lessons</h3>
                        <p>Instruction is available at my home studio or in the comfort of your own home.
                            I am happy to travel to your location. A small $5 travel fee is added to the standard lesson price to cover transportation expenses.</p>
                    </article>

                    <article className="service__card">

                        <h3>Musical Development</h3>
                        <p>I provide a comprehensive musical foundation by integrating technical mastery with ear training. Lessons focus on developing "musical thinking," allowing students to perform with greater confidence, artistic expression, and physical ease.</p>
                    </article>

                    <article className="service__card">

                        <h3>Music Theory & Advanced Studies</h3>
                        <p>For students seeking to deepen their understanding of musical structure and context, I offer specialised academic instruction. Private lessons are available in Music Theory and Music Literature.</p>
                    </article>

                    <article className="service__card">

                        <h3>Additional Services</h3>
                        <ul>
                            <li><strong>Personal Consultations:</strong> One-on-one sessions available upon request to discuss student progress, set long-term goals, or address specific musical questions.</li>
                            <li><strong>Language Options:</strong> Lessons are primarily conducted in English, but instruction is also available in Russian or Ukrainian upon request.</li>
                        </ul>
                    </article>
                </div>
            </div>

      </section >
  );
}