import React from "react";
import { Link } from "react-router-dom";
import "./Index.css";

export default function TwoCard() {

  return (
    <main id="videos" className="original">
      <section className="section">

        {/* HEADER */}

        <header className="intro">
          <h1>Resource Hub: Materials & Links</h1>
          <p>
            Take control of your education and feed your curiosity with these extra materials. Whether you're seeking additional practice or new knowledge, everything you need to succeed is right here.
          </p>
          <Link to="/Blog" className="explore-link">
            Read the Full Archive
          </Link>

        </header>

        {/* GRID */}

        <div className="two-card-grid">
          {/* Card 1 */}
          <div className="card">
            <div className="image-wrapper">
              <img src="/images/art6.jpg" />
            </div>
            <span className="label">EDUCATIONAL CHANNELS</span>

            <div className="content-split">
              <ul className="link-column">
                <li>
                  <a className="card-title"
                    href="https://www.youtube.com/@NahreSol/videos"
                    target="_blank"
                    rel="noopener noreferrer"
                  >Nahre Sol Blog
                  </a>
                </li>
                <li>
                  <a className="card-title"
                    href="https://www.youtube.com/playlist?list=PL9LXrs9vCXK56qtyK4qcqwHrbf0em_81r"
                    target="_blank"
                    rel="noopener noreferrer"
                  > Yale MT Course
                  </a>
                </li>
                <li>
                  <a className="card-title"
                    href="https://www.youtube.com/@thechopinmethod7257"
                    target="_blank"
                    rel="noopener noreferrer"
                  > The Chopin Method
                  </a>
                </li>
              </ul>

              <div className="desc-column">
                <p>
                  A masterful collection of instructional content that dives deep into
                  the mechanics of piano playing, analyzing music, and unique
                  biomechanical approaches to technique.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card">
            <div className="image-wrapper">
              <img src="/images/art5.png"/>
            </div>
            <span className="label">MUSIC THEORY</span>
            <div className="content-split">

              <ul className="link-column">
                <li>
                  <a className="card-title"
                    href="https://muted.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Muted.io
                  </a>
                </li>
                <li>
                  <a className="card-title"
                    href="https://www.8notes.com/school/theory/staff_clefs_ledger_lines.asp?pageno=6"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    8notes.com
                  </a>
                </li>
                <li>
                  <a className="card-title"
                    href="https://www.musictheory.net/lessons"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    MusicTheory.net
                  </a>
                </li>
              </ul>

              <div className="desc-column">
                <p>
                  Free online platforms offering everything from interactive visual theory tools and "cheat sheets" to extensive sheet music libraries and animated lessons for musicians of all levels.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section >

    </main>
  );
};
