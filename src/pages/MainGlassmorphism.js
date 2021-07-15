import React from 'react';
import Glassmorphism from '../Components/Glassmorphism';
import Glassmorphicdesign from '../Components/Glassmorphicdesign';

const MainGlassmorphism = () => {
  const glassContainer = {
    display: 'flex',
    flexFlow: 'wrap row',
    justifyContent: 'space-evenly',
    alignItems: 'space-between',
    width: '100%',
    minHeight: '80vh',
  };

  return (
    <div style={glassContainer}>
      <Glassmorphicdesign />
      <Glassmorphism />
    </div>
  );
};

export default MainGlassmorphism;
