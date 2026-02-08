import React from "react";
import "./Tables.css";

const CharacterMarkings = () => {
  const tempoData = [
    { term: "agitato", meaning: "agitated, excited" },
    { term: "animato", meaning: "lively" },
    { term: "cantabile", meaning: "in a singing style" },
    { term: "con amore", meaning: "with love" },
    { term: "con brio", meaning: "with high spirit/vigor" },
    { term: "con fuoco", meaning: "with fire" },
    { term: "con moto", meaning: "with motion" },
    { term: "dolce", meaning: "gently" },
    { term: "doloroso", meaning: "sorrowfully, mournfully" },
    { term: "energico", meaning: "energetically" },
    { term: "espressivo", meaning: "expressively" },
    { term: "grazioso", meaning: "gracefully, elegantly" },
    { term: "leggiero", meaning: "lightly, nimbly" },
    { term: "maestoso", meaning: "majestically" },
    { term: "marcato", meaning: "clearly accented" },
    { term: "risoluto", meaning: "resolutely, firmly" },
    { term: "scherzando", meaning: "plaufully" },
    { term: "sostenuto", meaning: "sustained, restrained" },
    { term: "tenuto", meaning: "held, sustained" },
    { term: "tranquillo", meaning: "quaetly, calmly" },
  ];

  return (
    <div className="art-table-wrap">
      <table className="art-table">
        <thead>
          <tr>
            <th>Term</th>
            <th>Meaning</th>
          </tr>
        </thead>
        <tbody>
          {tempoData.map((row, index) => (
            <tr key={index}>
              <td className="term-cell"><strong>{row.term}</strong></td>
              <td className="meaning-cell">{row.meaning}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CharacterMarkings;