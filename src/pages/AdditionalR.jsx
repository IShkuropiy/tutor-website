import React from "react";
import { Link } from "react-router-dom";
import Hero from "./Hero/Hero";
import TwoCard from "../components/sections/twoCard/TwoCard";
import TwoCardLib from "../components/sections/twoCard/TwoCardLib";
import Map from "../components/sections/map/Map";
import SoundBlog from "../components/sections/map/SoundBlog";
import "./Index.css";
import b5 from "../assets/b5.jpg";

export default function AdditionalR() {

  return (

    <main>
      <Hero
        image={b5}
        title="Beyond the Basics: Your Toolkit for Success"
        text="Dive deeper into your studies with this handpicked collection of learning materials. Whether you're looking for inspiring concert footage, practical music sheets, or in-depth textbook recommendations, you'll find everything you need to enhance your understanding and fuel your passion."
        ctaLink="/additional"
        ctaText="read more"
      />
      <TwoCard />
      <SoundBlog />
      <TwoCardLib />
      <Map />
  
    </main>
  );
}
