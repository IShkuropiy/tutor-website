import React from "react";
import "./Index.css";

export default function ReasonsSection() {
    return (

        <section className="reasons">
            <div className="section-container">
                <h1 className="section-title">So many reasons to start</h1>
                <div className="section-card-grid">
                    <div className="card">

                        <h3 className="card-title">Expand Cultural Knowledge</h3>
                        <p className="card-text">Piano lessons give your child a window into history and culture. Exploring different musical styles and composers helps young pianists develop a lasting appreciation for the arts and a deeper understanding of the world.</p>
                    </div>

                    <div className="card">

                        <h3 className="card-title">Nurture Creativity</h3>
                        <p className="card-text">Beyond the notes, the piano becomes a voice for self-expression. It helps students explore emotions, grow their imagination, and build the confidence to express themselves in everyday life.</p>
                    </div>

                    <div className="card">

                        <h3 className="card-title">Strengthen Cognitive Skills</h3>
                        <p className="card-text">
                            Playing the piano “exercises” the brain by connecting both hemispheres. This leads to better focus, stronger problem-solving, and improved fine motor coordination that supports learning inside and outside the classroom.
                        </p>
                    </div>

                </div>
            </div>

        </section>

    );
}
