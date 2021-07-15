import React from "react";
<<<<<<< HEAD:src/Components/Main.js
import Glassmorphism from "./Glassmorphism";
import Flatdesign from "./Flatdesign";
import FlatCard from "./Flatcard";
import Neumorphism from "./Neumorphism.js";
// import Glassmorphism from '../components/Glassmorphism';
=======
// import Glassmorphism from "../Components/Glassmorphism";
// import Flatdesign from "../Components/Flatdesign";
// import FlatCard from "../Components/Flatcard";
import Neumorphism from "../Components/Neumorphism.js";
>>>>>>> 4ed407c5f9d0980060d3efaffa8b62e4651ff2e3:src/pages/Main.js

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
