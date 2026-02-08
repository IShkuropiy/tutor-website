import React from "react";
import "./Tables.css";

export default function Accidentals() {
  const tempos = [
    { Symbol: "#", Name: "Sharp", Action: "Raises the note by a semitone (half-step)." },
    { Symbol: "♭", Name: "Flat", Action: "Lowers the note by a semitone (half-step)." },
    { Symbol: "♮", Name: "Natural", Action: "Cancels any previous sharp or flat." },
    { Symbol: "𝄪", Name: "Double Sharp", Action: "Raises the note by a whole tone." },
    { Symbol: "♭♭", Name: "Double Flat", Action: "Lowers the note by a whole tone." },
  ];

  return (
    <div className="art-table-wrap">
      <table className="art-table">
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Name</th>
            <th>What it Does</th>
          </tr>
        </thead>
        <tbody>
          {tempos.map((item, index) => (
            <tr key={index}>
              <td className="music-symbol-cell"><strong>{item.Symbol}</strong></td>
              <td className="term-cell">{item.Name}</td>
              <td className="meaning-cell">{item.Action}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};