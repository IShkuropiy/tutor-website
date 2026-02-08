import React from 'react';
import "./Tables.css";

export default function DynamicsChanges() {
  const dynamics = [
    { term: "a piacere", english: "at pleasure", meaning: "the performer may use their own discretion regarding tempo and rhythm.)" },
    { term: "a tempo", english: "in time ", meaning: "return to the original previous speed (usually after a rit. or accel.)." },
    { term: "rallentando, rall.", english: "broadening", meaning: "gradually slowing down (often with a sense of getting heavier)." },
    { term: "ritardando, ritt., ritard.", english: "delaying", meaning: "gradually slowing down." },
    { term: "ritenuto, riten.", english: "held back", meaning: "an immediate reduction in speed (faster and more sudden than ritardando" },
    { term: "rubato, rob(rare)", english: "stolen time", meaning: "flexible tempo; rhythmic freedom for expressive purposes." },
    { term: "stringendo, string.", english: "pressing forward", meaning: "gradually getting faster (literally tightening)." },
    { term: "accelerando, accel.", english: "accelerating", meaning: "gradually increasing the speed." },
  ];

  return (
    <div className="art-table-wrap">
      <table className="art-table">
        <thead>
          <tr>
            <th>Term</th>
            <th>English</th>
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
                {item.english}
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