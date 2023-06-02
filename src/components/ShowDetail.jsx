import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
function ShowDetail() {
  const [show, setShow] = useState(null);
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => response.json())
      .then((data) => setShow(data))
      .catch((error) => console.log(error));
  }, [id]);

  if (!show) {
    return (
      <div
        style={{
          height: "100vh",
          backgroundColor: "rgb(0, 0, 184)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {" "}
        <h2 style={{ color: "cyan" }}>Loading...</h2>
      </div>
    );
  }

  return (
    <div
      className="showDetails"
      style={{
        backgroundColor: "blue",
        height: "100vh",
        weight: "100vw",
        padding: "10px",
        display: "flex",

        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <img
        src={show.image.original}
        alt="image"
        style={{
          height: "650px",
          border: "2px solid black",
          borderRadius: "40px",
        }}
      />
      <div
        className="description"
        style={{
          height: "700px",
          display: "block",
          backgroundColor: "rgb(133, 218, 157)",
          marginLeft: "50px",
          // weight: "50vw",
          border: "2px solid black",
          borderRadius: "40px",
          textAlign: "center",
        }}
      >
        <h1>{show.name}</h1>
        <div
          className="showGenres"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Genres:{" "}
          <div
            style={{
              display: "flex",
              width:"95px",
              height:"90px",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            {" "}
            {show.genres.map((gen, idx) => {
              return (
                <div style={{ height:"35px",display: "flex", flexDirection: "row", justifyContent:"space-around",
               }}>
                  <h4>{++idx}.</h4>
                  {" "}
                  <h4> {gen} </h4>
                </div>
              );
            })}
          </div>
        </div>
        <h4 className="language">Language: {show.language}</h4>
        <div dangerouslySetInnerHTML={{ __html: show.summary }}></div>
        <div className="schedule">Schedule: {show.schedule.time} </div>
        <div className="rating">Rating: {show.rating.average}</div>
        <div>
          {" "}
          <Link to={`/booking/${show.id}`}>Book Movie Ticket</Link>
        </div>
      </div>
    </div>
  );
}

export default ShowDetail;
