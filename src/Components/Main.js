import React from "react";
import Glassmorphism from "./Glassmorphism";
import Flatdesign from "./Flatdesign";
import FlatCard from "./Flatcard";
import Neumorphism from "./Neumorphism.js";
// import Glassmorphism from '../components/Glassmorphism';

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
      <h1 style={styles.h1}>
       Neuomorphism vs Skeuomorphism vs Glassmorphism
      </h1>

      <Glassmorphism />
      <Flatdesign />
      <FlatCard />
    </div>
  );
};

export default Main;
