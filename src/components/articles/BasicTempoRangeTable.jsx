import React from "react";
import "./Tables.css";

export default function BasicTempoRangeTable() {
  const tempos = [
    { term: "Larghissimo", meaning: "very, very slow", bpm: "24 and under" },
    { term: "Grave", meaning: "very slow", bpm: "25-45" },
    { term: "Largo", meaning: "broadly", bpm: "40-60" },
    { term: "Lento", meaning: "slowly", bpm: "45-60" },
    { term: "Larghetto", meaning: "rather broadly", bpm: "60-66" },
    { term: "Adagio", meaning: "slow and stately (literally, 'at ease')", bpm: "66-76 bpm" },
    { term: "Adagietto", meaning: "slower than Andante", bpm: "72-76" },
    { term: "Andante", meaning: "at a walking pace", bpm: "76-108 bpm" },
    { term: "Andantino", meaning: "slightly faster than Andante", bpm: "80-108" },
    { term: "Marcia moderato", meaning: "moderately, in the manner of a march", bpm: "83-85" },
    { term: "Andante moderato", meaning: "between Andante and Moderato", bpm: "92-112" },
    { term: "Moderato", meaning: "moderately", bpm: "108-120" },
    { term: "Allegretto", meaning: "moderately fast", bpm: "112-120" },
    { term: "Allegro moderato", meaning: "close to but not quite Allegro", bpm: "116-120" },
    { term: "Allegro", meaning: "fast, quickly, and bright", bpm: "120-168" },
    { term: "Vivace", meaning: "lively and fast", bpm: "168-176" },
    { term: "Vivacissimo", meaning: "very fast and lively", bpm: "172-176" },
    { term: "Allegressimo (Allegro vivace)", meaning: "very fast", bpm: "172-176" },
    { term: "Presto", meaning: "very, very fast", bpm: "168-200" },
    { term: "Prestissimo", meaning: "even faster than Presto", bpm: "200 and over" },
  ];

  return (
    <div className="art-table-wrap">
      <table className="art-table">
        <thead>
          <tr>
            <th>Term</th>
            <th>Meaning</th>
            <th>BPM Range</th>
          </tr>
        </thead>
        <tbody>
          {tempos.map((item, index) => (
            <tr key={index}>
              <td className="term-cell"><strong>{item.term}</strong></td>
              <td className="meaning-cell">{item.meaning}</td>
              <td className="music-symbol-cell">{item.bpm}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};