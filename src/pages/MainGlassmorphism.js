import React from 'react';
import Glassmorphism from '../Components/Glassmorphism';
import Glassmorphicdesign from '../Components/Glassmorphicdesign';
import Glassmorphic from '../Components/Glassmorphic.js';
import sprite from "../image/sprite.png"
import coke from "../image/coke.png"

const MainGlassmorphism = () => {
  const glassContainer = {
    display: 'flex',
    flexFlow: 'wrap row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    minHeight: '80vh',
  };

  return (
    <div style={glassContainer}>
      <Glassmorphicdesign />
      <Glassmorphism />
      <Glassmorphic
        width={"300px"}
        height={"400px"}
        img={`url(${sprite})`}
        title={"Sprite"}
        price={"$1.00"}
        text={"There’s a delicious ray of sunshine in every drop."}
        button={"Add to Cart"}
        btnColor={"#8ADA7E"}
      />
    </div>
  );
};

export default MainGlassmorphism;
