import React from "react";
import "./Index.css";

export default function Lessons() {

    return (
         <section className="lessons">
                    <div className="lessons section-container">
                        <h1 className="section-title">Personalized piano lessons for every age, every stage</h1>
                        <div className="section-card-grid">
                            <div className="card">
                                
                                <h3 className="card-title">Flexible</h3>
                                <p className="card-text">
                                    Enjoy the convenience of a flexible lesson schedule designed to fit your busy life.
                                </p>
                            </div>
        
                             <div className="card">
                                
                                <h3 className="card-title">Personalized</h3>
                                <p className="card-text">
                                   Each lesson program is adapted and tailored specifically to the individual student's goals and needs 
                                </p>
                            </div>
                            
                            <div className="card">
                             
                                <h3 className="card-title">Comprehensive</h3>
                                <p className="card-text">
                                    Comprehensive training for all skill levels: engaging lessons for beginners and advanced instruction for experienced musicians.
                                </p>
                            </div>
                        </div>
                    </div>
        
                </section>

    );
}