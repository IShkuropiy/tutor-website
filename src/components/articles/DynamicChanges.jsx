import React from 'react';
import "./Tables.css";

export default function DynamicsChanges() {
  const dynamics = [
    { term: "crescendo", abbr: "cresc. or < ", meaning: "gradually increasing (getting louder)" },
    { term: "diminuendo", abbr: "dim. or > ", meaning: "gradually decreasing (getting softer)" },
    { term: "fortepiano", abbr: "p", meaning: "loud, then immediately soft" },
    { term: "sforzando, forzando, sforzato", abbr: "sfz, sf or fz", meaning: "sudden emphasis (applied to a note or chord)" },
    { term: "rinforzando", abbr: "rfz or rf", meaning: "strengthening (applied to a note, chord, or phrase" },
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