import React from "react";
import Glassmorphism from "../Components/Glassmorphism";

const MainGlassmorphism = () => {
  const glassContainer = {
    display: "flex",
    flexFlow: "wrap row",
    justifyContent: "space-between",
    alignItems: "space-between",
    width: "100%",
    minHeight: "80vh",
  };

  return (
    <div style={glassContainer}>
      <Glassmorphism />
    </div>
  );
};

export default MainGlassmorphism;
