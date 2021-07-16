import React from 'react';
import Neumorphism from '../Components/MorphThree/Neumorphism';
import Skeuomorphism from '../Components/MorphThree/Skeuomorphism';
import Glassmorphic from '../Components/MorphThree/Glassmorphic';


const MorphThree = () => {
    const styles = {
        neuoWrapper: {
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            height: "80vh",
            width: "60vw",
          },
    }
    return (
        <div style={styles.neuoWrapper}>
            <Neumorphism/>
            <Skeuomorphism/>
            <Glassmorphic/>
        </div>
    )
}

export default MorphThree
