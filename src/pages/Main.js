import React from 'react';
// import Glassmorphism from "../Components/Glassmorphism";
// import Flatdesign from "../Components/Flatdesign";
// import FlatCard from "../Components/Flatcard";
import Neumorphism from '../Components/MorphThree/Neumorphism.js';

const Main = () => {
  const styles = {
    width: '100%',
    minHeight: '80vh',
    jumbotron: {
      width: '100%',
      height: '80vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    h1: {
      width: '40vw',
      color: 'white',
      // marginRight: '5%',
      fontSize: '100px',
      // display: 'flex',
      // alignItems: 'center',
      // alignContent: 'flex-start',
      // textAlign: 'center',
    },
  };

  return (
    <div style={styles}>
      <div style={styles.jumbotron}>
        <h1 style={styles.h1}>DESIGN IS AN INTEGRAL PART OF WEB DEVELOPMENT</h1>
      </div>
      {/* <Neumorphism /> */}
      {/* <Glassmorphism />
      <Flatdesign />
      <FlatCard /> */}
    </div>
  );
};

export default Main;
