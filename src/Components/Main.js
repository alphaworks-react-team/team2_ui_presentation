import React from "react";
import Glassmorphism from "./Glassmorphism";
import Flatdesign from "./Flatdesign";
import FlatCard from "./Flatcard";
import Neumorphism from "./Neumorphism.js";

const Main = () => {
  const styles = {
    display: "flex",
    flexFlow: "wrap row",
    justifyContent: "space-between",
    alignItems: "space-between",
    width: "100%",
    minHeight: "80vh",
    h1: {
      width: "40vw",
      color: "white",
      margin: "0",
      marginRight: "2%",
      fontSize: "100px",
      display: "flex",
      alignItems: "center",
      alignContent: "flex-start",
      // textAlign: "center",
    },
  };

  return (
    <div style={styles}>
      <Neumorphism />
      <h1 style={styles.h1}>
        Design is an integral part of web application development.
      </h1>

      {/* <Glassmorphism />
      <Flatdesign />
      <FlatCard /> */}
    </div>
  );
};

export default Main;
