import React from 'react';
import Neumorphicdesign from '../Components/Neumorphicdesign';
import Neumorphism from '../Components/MorphThree/Neumorphism.js';
import Neumorphicdesign2 from '../Components/Neumorphicdesign2';

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
      <Neumorphicdesign2 />
    </div>
  );
};

export default MainNeumorphism;
