import React from "react";
import { Link } from "react-router-dom";
import Hero from "./Hero/Hero";
import "./PriceCards.css";
import "./Index.css"
import LessonsSection from "../components/sections/reasons/LessonsSection";
import Policy from "../components/sections/fourCard/Policy";
import hands6 from "/src/assets/hands6.jpg";

export default function Pricing() {

  return (

    <main>
      {/* HERO */}
      <Hero
        image={hands6}
        title="Lesson rates"
        text="I believe that high-quality, personalized tutoring shouldn’t be a luxury. Every child deserves the chance to develop their skills and confidence through consistent, encouraging lessons.
            To make this possible, I’ve kept my pricing as affordable as I can. Your commitment to regular sessions helps me maintain this low-cost structure while continuing to provide exceptional results."
        ctaLink="/contact"
        ctaText="contact me"
      />

      {/* PRICE CARDS */}
      <section id="#price-cards" className="price-cards">
        <div className=" price-cards-grid">

          <article className="price-card">
            <h3>Single Class</h3>
            <p className="price">$30<span>/per 45-min lesson (1×/week)</span></p>
            <p className="desc">Perfect for new students or those wanting to try a single class.</p>
            <ul>
              <li>Individual 1:1 session</li>
              <li>Great for new students</li>
            </ul>
            <Link to="/contact" className="blue-btn">Book a lesson</Link>
          </article>

          <article className="price-card">
            <h3>Weekly Plan</h3>
            <p className="price">$25<span>/per 45-min lesson (2×/week)</span></p>
            <p className="desc"> Best for steady, long-term progress.</p>
            <ul>
              <li>Priority scheduling</li>
              <li>Consistent progress each week</li>
            </ul>
            <Link to="/contact" className="blue-btn">Book a lesson</Link>
          </article>

          <article className="price-card">
            <h3>Custom Plan</h3>
            <p className="price">Let’s talk</p>
            <p className="desc">Custom schedule or special projects.</p>
            <ul>
              <li>For advanced studies</li>
              <li>Sibling or family packages</li>
            </ul>
            <Link to="/contact" className="blue-btn">Book a lesson</Link>
          </article>

        </div>
      </section>

      <Policy />

      < LessonsSection />


    </main>
  );
}
