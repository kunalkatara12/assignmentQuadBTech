import React, { useEffect, useState } from "react";
import ShowCard from "./ShowCard";
import TextField from "@mui/material/TextField";
function Home() {
  const [data, setData] = useState([]);
    const url = "https://api.tvmaze.com/search/shows?q=all";
  const fetchData = () => {
    fetch(url)
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((dt) => {
        setData(dt);
        console.log(dt);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "black",
        }}
      >
        {/* <TextField id="outlined-basic" label="Search Show" variant="outlined" /> */}
        <ul
          className="showList"
          style={{
            width: "50%",
            padding: "15px",
            display: "grid",
            gridTemplateColumns: "repeat(2,auto)",
            gap: "50px",
            justifyItems: "center",
            alignItems: "center",
            backgroundColor: "rgb(0, 0, 184)",
          }}
        >
          {data.map((di) => {
            return (
              <li key={di.show.id} style={{ listStyleType: "none" }}>
                {" "}
                <ShowCard
                  name={di.show.name}
                  image={di.show.image.medium}
                  start_year={di.show.premiered}
                  rating={di.show.rating}
                  id={di.show.id}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Home;
