import React from "react";
import "./Tables.css";

const GeneralTerms = () => {
  const tempoData = [
    { term: "ad libitum", meaning: "with free rhythm and expression (often referring to tempo and style)" },
    { term: "assai", meaning: "very" },
    { term: "con", meaning: "with" },
    { term: "ma", meaning: "but" },
    { term: "ma non tanto", meaning: "but not so much" },
    { term: "ma non troppo", meaning: "but no too much" },
    { term: "meno", meaning: "less" },
    { term: "molto", meaning: "very" },
    { term: "non", meaning: "not, no" },
    { term: "più", meaning: "more" },
    { term: "poco", meaning: "little" },
    { term: "poco a poco", meaning: "little by little" },
    { term: "senza", meaning: "without" },
    { term: "simile", meaning: "in a similar way" },
    { term: "subito", meaning: "suddenly, immediately" },
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

export default GeneralTerms;