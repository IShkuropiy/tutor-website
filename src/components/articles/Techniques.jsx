import React from 'react';
import "./Tables.css";

export default function Techniques() {
  const dynamics = [
    { term: "arpeggio", abbr: "arp.", meaning: "the chord should be played one note at a time, rather than all at once" },
    { term: "glissando", abbr: "gliss", meaning: "a smooth slide from one sound to another" },
    { term: "mano destra", abbr: "m.d.", meaning: "with the right hand" },
    { term: "mano sinistra ", abbr: "m.s.", meaning: "with the left hand" },
    { term: "con sordino", abbr: "", meaning: "play with a mute" },
    { term: "senza sordino ", abbr: "", meaning: "play without a mute" },
    { term: "pizzicato", abbr: "pizz", meaning: "play by plucking on bowed string instruments" },
    { term: "portamento", abbr: "port", meaning: "a smooth transition from one note to another" },
    { term: "tutti", abbr: "pp", meaning: "performed by the entire ensemble" },
    { term: "vibrato", abbr: "p", meaning: "frequent, small changes in pitch" },
  ];

  return (
    <div className="art-table-wrap">
      <table className="art-table">
        <thead>
          <tr>
            <th>Term</th>
            <th>Abbreviation</th>
            <th>Meaning</th>
          </tr>
        </thead>
        <tbody>
          {dynamics.map((item, index) => (
            <tr key={index}>
              <td className="term-cell">
                <strong>{item.term}</strong>
              </td>
              <td className="music-symbol-cell">
                {item.abbr}
              </td>
              <td className="meaning-cell">
                {item.meaning}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}