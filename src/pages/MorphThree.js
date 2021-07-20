import React from 'react';
import Neumorphism from '../Components/MorphThree/Neumorphism';
import Skeuomorphism from '../Components/MorphThree/Skeuomorphism';
import Glassmorphic from '../Components/MorphThree/Glassmorphic';


const MorphThree = () => {
    const styles = {
      neuoWrapper: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        height: "80vh",
        width: "100vw",
      },
      componentWrap: {
        display: "flex",
        justifyContent: "space-around",
        width:"60vw",
      },
      text: {
        fontSize: "60px",
          width: "40vw",
          color: "white",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",

      },
      textSize: {
          width:"57%",
          textAlign: "center",
      }
    };
    return (
      <div style={styles.neuoWrapper}>
        <div style={styles.componentWrap}>
          <Neumorphism />
          <Skeuomorphism />
          <Glassmorphic />
        </div>
        <div style={styles.text}>
          <div style={styles.textSize}>
            <p>Neumorphism vs Skeuomorphism vs Glassmorphism</p>
          </div>
        </div>
      </div>
    );
}

export default MorphThree
