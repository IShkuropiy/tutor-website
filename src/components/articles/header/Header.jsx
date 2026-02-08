import React from 'react';
import ira from "../../../assets/ira.jpg"; 
import "./Index.css";

const Header = ({ title, date }) => {
  return (
    <div className="post__header">
      <h1 className="post__title">{title}</h1>
      <div className="post__meta">
        <img src={ira} />
        <div>
          <div className="post__author">Iryna Shkuropii</div>
          <div className="post__byline">{date}</div>
        </div>
      </div>
    </div>
  );
};

export default Header;

