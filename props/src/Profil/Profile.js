import React from "react";
import PropTypes from "prop-types";

export default function Profile(props) {
  console.log(props.handleClick);
  return (
    <div
      style={{ textAlign: "center", backgroundColor: "grey", margin: "50px" }}
    >
      <h1
        style={{
          color: "blue",
          borderStyle: "dashed",
          margin: "30px",
          padding: "30px",
        }}
      >
        {props.FullName}
      </h1>
      <p style={{}}>{props.Bio}</p>
      <h2 style={{ color: "blueviolet" }}>{props.Profession}</h2>
      {props.children}
      <button
        style={{
          justifyContent: "center",
          margin: "280px",
          padding: "50px",
          color: "blueviolet",
        }}
        onClick={() => props.handleClick(props.FullName)}
      >
        click
      </button>
    </div>
  );
}
