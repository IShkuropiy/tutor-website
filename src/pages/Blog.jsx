import { Link } from "react-router-dom";
import React, { useMemo } from 'react';
import Carousel from "./Carousel.jsx";
import Hero from "./Hero/Hero";
import "./Index.css";

export default function Blog() {

  const rows = useMemo(() => [
    {
      id: "theory",
      title: "Music Theory",
      items: [
        { id: "t1", img: "/images/art12.avif", eyebrow: "Music Theory", title: "From Bumps to Beats: Understanding Sound and Music", href: "/blog/article16" },
        { id: "t2", img: "/images/art12.avif", eyebrow: "Music Theory", title: "Mapping the Keys: A Guide to Registers and Octaves", href: "/blog/article20" },
        { id: "t3", img: "/images/markvalues.jpeg", eyebrow: "Music Theory", title: "How to Read Music", href: "/blog/article18" },
        { id: "t4", img: "/images/marktime.png", eyebrow: "Music Theory", title: "Rhythm: The Heartbeat of Music", href: "/blog/article17" },
        { id: "t5", img: "/images/art8.png", eyebrow: "Music Theory", title: " Musical Intervals: An Introduction", href: "/blog/article12" },
        { id: "t6", img: "/images/markaccidentals.svg", eyebrow: "Music Theory", title: "Accidentals, the basics", href: "/blog/article2" },
        { id: "t7", img: "/images/markscore.jpg", eyebrow: "Music Theory", title: "Articulations & Expressions", href: "/blog/article10" },
        { id: "t8", img: "/images/b2.jpg", eyebrow: "Music Theory", title: "Mode: The Alphabet of Music", href: "/blog/article11" },
        { id: "t9", img: "/images/markdinam.jpg", eyebrow: "Music Theory", title: "Your Guide to Dynamics on the Piano", href: "/blog/article5" },
        { id: "t10", img: "/images/b.jpg", eyebrow: "Music Theory", title: "Introduction to Musical Tempos", href: "/blog/article8" },
        { id: "t11", img: "/images/art13.jpg", eyebrow: "Music Theory", title: "Italian Musical Terms", href: "/blog/article19" },
      ],
    },

    {
      id: "practice",
      title: "Independed Practice",
      items: [
        { id: "p1", img: "/images/kid6.jpg", eyebrow: "Independent Practice", title: "  Effective Strategies for Practicing Music", href: "/blog/article4" },
        { id: "p2", img: "/images/keys8.jpg", eyebrow: "Independent Practice", title: "How to Structure Your Piano Practice at Home", href: "/blog/article1" },
        { id: "p3", img: "/images/kid7.jpg", eyebrow: "Independent Practice", title: "Practical Piano Advice for Absolute Beginners", href: "/blog/article7" },
        { id: "p4", img: "/images/hands24.png", eyebrow: "Independent Practice", title: "Playing with Ease: Releasing Tension at the Piano", href: "/blog/article13" },
        { id: "p5", img: "/images/kid8.jpg", eyebrow: "Independent Practice", title: "Your Guide to Proper Piano Posture", href: "/blog/article14" },
      ],
    },

    {
      id: "inspire",
      title: "Inspire & Archive",
      items: [
        { id: "i1", img: "/images/art11.avif", eyebrow: "Inspire & Archive", title: "The Psychological Benefits of Piano Playing", href: "/blog/article3" },
        { id: "i2", img: "/images/kid3.png", eyebrow: "Inspire & Archive", title: " The Art of Stumbling Forward", href: "/blog/article6" },
        { id: "i3", img: "/images/royal4.jpg", eyebrow: "Inspire & Archive", title: "Being a Pianis is an Honor", href: "/blog/article9" },
        { id: "i4", img: "/images/keys12.webp", eyebrow: "Inspire & Archive", title: "The Evolution of Piano Playing: From Formal Precision to Mental Mastery", href: "/blog/article15" },
      ],
    },
    {
      id: "adventures",
      title: "Sound Adventures",
      items: [
        { id: "a1", img: "/images/scheharazade.png", eyebrow: "Sound Adventures", title: "Scheherazade", href: "/blog/Rimskiy" },
        { id: "a2", img: "/images/peergynt.png", eyebrow: "Sound Adventures", title: "Peer Gynt", href: "/blog/Grieg" },
        { id: "a3", img: "/images/saintsaens14.png", eyebrow: "Sound Adventures", title: "Carnival of Animals", href: "/blog/Saintsaens" },
        { id: "a4", img: "/images/erl.png", eyebrow: "Sound Adventures", title: "Erlkönig", href: "/blog/Erlkönig" },
        { id: "a5", img: "/images/taras.png", eyebrow: "Sound Adventures", title: "Taras Bulba", href: "/blog/TarasBulba" },
        { id: "a6", img: "/images/tiger.png", eyebrow: "Sound Adventures", title: "Circus", href: "/blog/Turina" },
        { id: "a7", img: "/images/satie1.jpg", eyebrow: "Sound Adventures", title: "Trois Gymnopédies", href: "/blog/Satie" },
      ],
    },
  ],
    []
  );


  return (

    <main className="blog">

      <Hero
        image="/images/hands20.jpg"
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