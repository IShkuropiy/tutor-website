import React from "react";
import { Link } from "react-router-dom";
import "./Index.css";
import b1 from "/src/assets/b1.jpg";
import art7 from "/src/assets/art7.png";

export default function TwoCardLib() {

  return (
    <main id="libraries" className="lib">
      <section className="section">

      {/* HEADER */}

      <header className="intro">
        <h1>
            Free collections of sheet music
        </h1>
        <p>
          Finding the right tools shouldn’t be a chore. Dive into free sheet music libraries and explore a hand-picked collection of apps designed to make learning piano at home easy, and fun.
        </p>

      </header>

      {/* GRID */}

      <div className="two-card-grid">
        {/* Card 1 */}
        <div className="card">
          <div className="image-wrapper">
            <img src={b1} />
          </div>
          <span className="label">LIBRARY</span>

          <div className="content-split">
            <ul className="link-column">
              <li>
               <a className="card-title"
              href="https://michaelkravchuk.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Progressive Piano Method Library
            </a>
              </li>
              <li>
                <a className="card-title"
              href="https://notes.tarakanov.net/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Boris Tarakanov's Music Archive
            </a>
              </li>
            </ul>

            <div className="desc-column">
              <p>
                Browse a huge selection of free scores for all instruments. Find everything from classical favorites to jazz, rock, and pop hits.
              </p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card">
          <div className="image-wrapper">
            <img src={art7} />
          </div>
          <span className="label">PLAYGROUND</span>
          <div className="content-split">

            <ul className="link-column">
              <li>
                <a className="card-title"
                  href="https://join-piano.hellosimply.com/start/motivationsIntro?exp=selfer&sitelink=rated&utm_source=main&utm_medium=[%E2%80%A6]af_adset_id=158533709880&af_ad=682575438869&af_ad_id=682575438869?sitelink=rated&utm_source=main&utm_medium=20426025480&utm_campaign=20426025480&af_click_lookback=30d&c=20426025480&url=https://join-piano.hellosimply.com/start&af_c_id=20426025480&af_siteid=&network=g&af_keywords=free%20piano%20lessons&af_adset=158533709880&af_adset_id=158533709880&af_ad=682575438869&af_ad_id=682575438869&gad_source=1&gad_campaignid=20426025480&gbraid=0AAAAADzQDl8DkgabFW9uhwXJO5BntU49L&gclid=Cj0KCQiAhOfLBhCCARIsAJPiopNaGELzHQawzoVBNPSTs0o1luUgeivitiE0HUiYXsqb7lYaEtrWCf8aAj5-EALw_wcB
"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Simply Piano
                </a>
              </li>
              <li>
                <a className="card-title"
                  href="https://www.hoffmanacademy.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Hoffman Academy
                </a>
              </li>
            </ul>

            <div className="desc-column">
              <p>
                Top educational apps and websites offer high-quality, engaging content across subjects for kids
              </p>
            </div>
          </div>
        </div>
      </div>
    </section >

    </main>
  );
};
