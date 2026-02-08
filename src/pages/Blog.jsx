import { Link } from "react-router-dom";
import React, { useMemo } from 'react';
import Carousel from "./Carousel.jsx";
import Hero from "./Hero/Hero";
import "./Index.css";
import hands20 from "/src/assets/hands20.jpg";
import art12 from "/src/assets/art12.avif";
import art13 from "/src/assets/art13.jpg";
import b from "/src/assets/b.jpg";
import b2 from "/src/assets/b2.jpg";
import markaccidentals from "/src/assets/markaccidentals.svg";
import markdinam from "/src/assets/markdinam.jpg";
import markscore from "/src/assets/markscore.jpg";
import marktime from "/src/assets/marktime.png";
import keys8 from "/src/assets/keys8.jpg";
import art8 from "/src/assets/art8.png";
import art11 from "/src/assets/art11.avif";
import hands23 from "/src/assets/hands23.jpg";
import hands24 from "/src/assets/hands24.png";
import keys12 from "/src/assets/keys12.webp";
import kid3 from "/src/assets/kid3.png";
import kid6 from "/src/assets/kid6.jpg";
import kid7 from "/src/assets/kid7.jpg";
import kid8 from "/src/assets/kid8.jpg";
import royal4 from "/src/assets/royal4.jpg";
import scheharazade from "/src/assets/scheharazade.png";
import peergynt from "/src/assets/peergynt.png";
import saintsaens14 from "/src/assets/saintsaens14.png";
import erl from "/src/assets/erl.png";
import tiger from "/src/assets/tiger.png";
import taras from "/src/assets/taras.png";
import satie1 from "/src/assets/satie1.jpg";

export default function Blog() {

  const rows = useMemo(() => [
    {
      id: "theory",
      title: "Music Theory",
      items: [
        { id: "t1", img: art12, eyebrow: "Music Theory", title: "From Bumps to Beats: Understanding Sound and Music", href: "/blog/article16" },
        { id: "t2", img: markdinam, eyebrow: "Music Theory", title: "Your Guide to Dynamics on the Piano", href: "/blog/article5" },
        { id: "t3", img: marktime, eyebrow: "Music Theory", title: "Rhythm: The Heartbeat of Music", href: "/blog/article17" },
        { id: "t4", img: art8, eyebrow: "Music Theory", title: " Musical Intervals: An Introduction", href: "/blog/article12" },
        { id: "t5", img: markaccidentals, eyebrow: "Music Theory", title: "Accidentals, the basics", href: "/blog/article2" },
        { id: "t6", img: markscore, eyebrow: "Music Theory", title: "Articulations & Expressions", href: "/blog/article10" },
        { id: "t7", img: b2, eyebrow: "Music Theory", title: "Mode: The Alphabet of Music", href: "/blog/article11" },
        { id: "t8", img: b, eyebrow: "Music Theory", title: "Introduction to Musical Tempos", href: "/blog/article8" },
        { id: "t9", img: art13, eyebrow: "Music Theory", title: "Italian Musical Terms", href: "/blog/article19" },
      ],
    },

    {
      id: "practice",
      title: "Independed Practice",
      items: [
        { id: "p1", img: kid6, eyebrow: "Independent Practice", title: "  Effective Strategies for Practicing Music", href: "/blog/article4" },
        { id: "p2", img: keys8, eyebrow: "Independent Practice", title: "How to Structure Your Piano Practice at Home", href: "/blog/article1" },
        { id: "p3", img: kid7, eyebrow: "Independent Practice", title: "Practical Piano Advice for Absolute Beginners", href: "/blog/article7" },
        { id: "p4", img: hands24, eyebrow: "Independent Practice", title: "Playing with Ease: Releasing Tension at the Piano", href: "/blog/article13" },
        { id: "p5", img: kid8, eyebrow: "Independent Practice", title: "Your Guide to Proper Piano Posture", href: "/blog/article14" },
      ],
    },

    {
      id: "inspire",
      title: "Inspire & Archive",
      items: [
        { id: "i1", img: art11, eyebrow: "Inspire & Archive", title: "The Psychological Benefits of Piano Playing", href: "/blog/article3" },
        { id: "i2", img: kid3, eyebrow: "Inspire & Archive", title: " The Art of Stumbling Forward", href: "/blog/article6" },
        { id: "i3", img: royal4, eyebrow: "Inspire & Archive", title: "Being a Pianis is an Honor", href: "/blog/article9" },
        { id: "i4", img: keys12, eyebrow: "Inspire & Archive", title: "The Evolution of Piano Playing: From Formal Precision to Mental Mastery", href: "/blog/article15" },
      ],
    },
    {
      id: "adventures",
      title: "Sound Adventures",
      items: [
        { id: "a1", img: scheharazade, eyebrow: "Sound Adventures", title: "Scheherazade", href: "/blog/Rimskiy" },
        { id: "a2", img: peergynt, eyebrow: "Sound Adventures", title: "Peer Gynt", href: "/blog/Grieg" },
        { id: "a3", img: saintsaens14, eyebrow: "Sound Adventures", title: "Carnival of Animals", href: "/blog/Saintsaens" },
        { id: "a4", img: erl, eyebrow: "Sound Adventures", title: "Erlkönig", href: "/blog/Erlkönig" },
        { id: "a5", img: taras, eyebrow: "Sound Adventures", title: "Taras Bulba", href: "/blog/TarasBulba" },
        { id: "a6", img: tiger, eyebrow: "Sound Adventures", title: "Circus", href: "/blog/Turina" },
        { id: "a7", img: satie1, eyebrow: "Sound Adventures", title: "Trois Gymnopédies", href: "/blog/Satie" },
      ],
    },
  ],
    []
  );


  return (

    <main className="blog">

      <Hero
        image={hands20}
        title="Expand Your Learning"
        text="Discover a deeper connection to your music through my personal collection of insights and professional guidance. Whether you're mastering the 'Alphabet of Music' or exploring the honor of being a pianist, you'll find the knowledge I've gathered to help you enhance your understanding and elevate your play."
        ctaLink="/additionalR"
        ctaText="explore more"
      />

      <section className="blog-section">
        
        <header className="intro">
          <h1 className="title">
            Your Path to Piano Mastery Starts Here
          </h1>
          <p className="subtitle">
            These articles are extra reading to help you learn even faster and make your piano playing easier!
          </p>
        </header>


        <Carousel rows={rows} />
      </section>

    </main>

  );
}