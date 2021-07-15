import React from 'react';
import FlatCard from '../Components/Flatcard';
import Flatdesign from '../Components/Flatdesign';

const MainFlat = () => {
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
      <FlatCard />
      <Flatdesign />
    </div>
  );
};

export default MainFlat;
