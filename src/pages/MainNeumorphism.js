import React from 'react';
import Neumorphicdesign from '../Components/Neumorphicdesign';
import Neumorphism from '../Components/MorphThree/Neumorphism.js';

const MainNeumorphism = () => {
  const neumorphicContainer = {
    display: 'flex',
    flexFlow: 'wrap row',
    justifyContent: 'space-evenly',
    alignItems: 'space-between',
    width: '100%',
    minHeight: '80vh',
  };

  return (
    <div style={neumorphicContainer}>
      <Neumorphism />
      <Neumorphicdesign />
    </div>
  );
};

export default MainNeumorphism;
