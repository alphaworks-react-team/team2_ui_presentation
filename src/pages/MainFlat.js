import React from "react";
import FlatCard from "../Components/Flatcard";
import Flatdesign from "../Components/Flatdesign";
import FlatLogInCard from "../Components/FlatLogInCard";

const MainFlat = () => {
  const glassContainer = {
    display: "flex",
    flexFlow: "wrap row",
    justifyContent: "space-evenly",
    alignItems: "center",
    alignContent: "center",
    width: "100%",
    minHeight: "80vh",
  };

  return (
    <div style={glassContainer}>
      <FlatCard />
      <Flatdesign />
      <FlatLogInCard />
    </div>
  );
};

export default MainFlat;
