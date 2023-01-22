import React from "react";
import "./Homepage.scss";
import { Link } from "react-router-dom";
import data from "../data/data.json";
import { useState } from "react";
import header from "../assets/ham-it.png";

export default function Homepage() {
  const [show, setShow] = useState();

  return (
    <body className ="body">
      <header className="header">
        <img className="header__img" src={header} alt="Ham it up logo"></img>
      </header>
      <main className = "main">
      {data.map((show) => {
        const title = show.title;
        const poster = show.poster;
        const id = show.id;
        return (
          <Link to={`/show/${id}`} element="../HamItUp.js" key={id}>
            <img className="poster" src={poster} alt={title} />
          </Link>
        );
      })}
      </main>
    </body>
  );
}
