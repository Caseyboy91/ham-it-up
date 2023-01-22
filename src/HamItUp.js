import React from "react";
import "./HamItUp.scss";
import data from "./data/data.json";
import { Link, useParams, useNavigate } from "react-router-dom";
import Homepage from "./pages/Homepage";
import header from "./assets/ham-it.png";

export default function HamItUp() {
  let navigate = useNavigate()

const handleClick = (e) =>{
  navigate(data[id].website)

}

  const { id } = useParams();

  return (
    <body className = "body">
      <header className="header">
        <img className="header__img" src={header} alt="Ham it up logo"></img>
      </header>
      <div className="show__container" key={id}>
        <h1 className="show__title">{data[id].title}</h1>
        <p className="show__open">Opened: {data[id].opened}</p>
        <p className="show__description">{data[id].description}</p>
        <button onClick ={handleClick} className="show__website">Buy Tickets </button>

        <Link className ="show__button" to="/" element={<Homepage />}>
          Back
        </Link>
      </div>
    </body>
  );
}
