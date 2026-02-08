import React from "react";
import { Link } from "react-router-dom";
import Hero from "./Hero/Hero";
import ReasonsSection from "../components/sections/reasons/ReasonsSection";
import About from "../components/sections/about/About";
import Services from "../components/sections/fourCard/Services";
import "../Index.css";
import "../pages/Hero/Index.css";
import hands34 from "/src/assets/hands34.jpg";

export default function Home() {
  return (

    <main>
      <Hero
        image={hands34}
        title="Individual Piano Lessons. Personalized Learning. Real Results."
        text="Whether you’re starting from scratch, nurturing a child’s newfound interest in music, or looking to revisit the skills you mastered in school, private piano lessons are the perfect place to begin (or continue!) your musical journey."
        ctaLink="/pricing"
        ctaText="learn more"
      />

      < ReasonsSection />

      <About />

      <Services /> 

    </main>
  );
}
