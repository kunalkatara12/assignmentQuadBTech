import React from 'react'
import { Link } from "react-router-dom";
function ShowCard(props) {
let n = props.name;
n = n.replace(/\s+/g, '-');
const url = `/show/${n}`;
  return (
    <div
      className="show_card"
      style={{
        width: "100%",
        border: "5px solid black",
        borderRadius: "40px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <h2 className="show_title">{props.name}</h2>
      <img className="show_image" src={props.image} alt="image" />
      <div
        className="show_footer"
        style={{
          display: "flex",
          width: "100%",
          justifyContent:
            props.rating.average !== null ? "space-around" : "center",
        }}
      >
        <div className="show_start-year">{props.start_year}</div>
        {<div className="show_rating">{props.rating.average}</div>}
      </div>
      <Link to={`/show/${props.id}`}>Show Details</Link>
    </div>
  );
}

export default ShowCard