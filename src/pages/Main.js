import React from "react";
// import Glassmorphism from "../Components/Glassmorphism";
// import Flatdesign from "../Components/Flatdesign";
// import FlatCard from "../Components/Flatcard";
import Neumorphism from "../Components/Neumorphism.js";

const Main = () => {
  const styles = {
    display: "flex",
    flexFlow: "wrap row",
    justifyContent: "space-between",
    alignItems: "space-between",
    width: "100%",
    minHeight: "80vh",
    h1: {
      width: "30vw",
      color: "white",
      marginRight: "5%",
      fontSize: "75px",
      display: "flex",
      alignItems: "center",
      alignContent: "flex-start",
      textAlign: "center",
    },
  };

  return (
    <div style={styles}>
      <Neumorphism />
      <h1 style={styles.h1}>Neuomorphism vs Skeuomorphism vs Glassmorphism</h1>

      {/* <Glassmorphism />
      <Flatdesign />
      <FlatCard /> */}
    </div>
  );
};

export default Main;
