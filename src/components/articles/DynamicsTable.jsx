import React from 'react';
import "./Tables.css";

export default function DynamicsTable() {
  const dynamics = [
    { term: "piano-pianissimo", abbr: "ppp", meaning: "extremely quiet" },
    { term: "pianissimo", abbr: "pp", meaning: "very quiet" },
    { term: "piano", abbr: "p", meaning: "soft, quiet" },
    { term: "mezzo piano", abbr: "mp", meaning: "moderately quiet" },
    { term: "mezzo forte", abbr: "mf", meaning: "moderately loud" },
    { term: "forte", abbr: "f", meaning: "loud, strong" },
    { term: "fortissimo", abbr: "ff", meaning: "very loud" },
    { term: "forte-fortissimo", abbr: "fff", meaning: "extremely loud" },
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
