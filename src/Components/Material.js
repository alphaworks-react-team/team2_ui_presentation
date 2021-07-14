import React from "react";
import MaterialDialog from "./MaterialDialog.js";
import MaterialButtonWrap from './MaterialButtonWrap';


const MaterialCard = () => {
  const styles = {
    wrap: {
      minHeight:"80vh",
      width: "100%",
      // backgroundColor: "black",
      display: "flex",
      flexFlow: "wrap row",
      alignItems: "center",
      justifyContent: "space-evenly",
    },
    card: {
      maxHeight: "100%",
      height: "500px",
      width: "400px",
      // backgroundColor: "red",
    },
    top: {
      borderTopLeftRadius: "5px",
      borderTopRightRadius: "5px",
      backgroundImage: `url('https://picsum.photos/600')`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      height: "50%",
      width: "100%",
      backgroundColor: "white",
    },
    bottom: {
      height: "50%",
      width: "100%",
      backgroundColor: "white",
      borderBottomLeftRadius: "5px",
      borderBottomRightRadius: "5px",
    },

    textWrap: {
      height: "70%",
      display: "flex",
      flexFlow: "column",
      justifyContent: "space-around",
    },
    text: {
      fontFamily: "'Roboto', sans-serif",
      fontWeight: "500",
      fontSize: "25px",
      marginTop: 0,
      marginBottom: 0,
      marginLeft: 20,
      marginRight: 20,
      padding: 0,
    },
    textLight: {
      fontFamily: "'Roboto', sans-serif",
      fontWeight: "300",
      fontSize: "20px",
      marginTop: 0,
      marginBottom: 0,
      marginLeft: 20,
      marginRight: 20,
      padding: 0,
    },
    buttonWrap: {
      height: "30%",
      marginLeft: "5px",
    },
    button: {
      fontFamily: "'Roboto', sans-serif",
      border: "none",
      fontSize: "17px",
      backgroundColor: "white",
      margin: "10px",
      color: "#6301EE",
      cursor:"pointer",
    },
  };

  return (
    <div style={styles.wrap}>
      <div style={styles.card}>
        <div style={styles.top}></div>
        <div style={styles.bottom}>
          <div style={styles.textWrap}>
            <p style={styles.text}>Title</p>
            <p style={styles.textLight}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem,
              consequatur?
            </p>
            <p style={styles.textLight}>Lorem ipsum dolor sit.</p>
          </div>
          <div style={styles.buttonWrap}>
            <button style={styles.button}>Action 1</button>
            <button style={styles.button}>Action 2</button>
          </div>
        </div>
      </div>
      <MaterialButtonWrap/>
      <MaterialDialog/>
    </div>
  );
};

export default MaterialCard;
