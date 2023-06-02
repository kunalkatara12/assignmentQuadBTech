import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    showId: "",
  });
  const [show, setShow] = useState({});
  const { showId } = useParams();
  // console.log(showId);
  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${showId}`)
      .then((response) => response.json())
      .then((data) => setShow(data))
      .catch((error) => console.log(error));
  }, [showId]);
  // console.log(show);

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    if (formData.email && formData.name) {
      const showId = show.id;
      localStorage.setItem(
        "ticketBooking",
        JSON.stringify({ showId, formData })
      );
      alert("Ticket booked successfully!");
      console.log(formData);
      setFormData({ name: "", email: "", showId: "" });
    } else {
      alert("Fill all values");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>Booking Form</h1>
      <h3>Show: {show.name}</h3>
      <form
        onSubmit={handleSubmit}
        style={{
          backgroundColor: "gray",
          width: "20%",
          height: "30vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>{" "}
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>{" "}
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="email@gmail.com"
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default BookingForm;
