import React from "react";
import { GoPlus } from "react-icons/go";

const MaterialButtonWrap = (props) => {
  const styles = {
    wrap: {
      
      // width: "50%",
    
    },
    container: {
      maxHeight: "100%",
      height: "400px",
      maxWidth: "100%",
      width: "400px",
      display: "flex",
      flexFlow: "row wrap",
      justifyContent: "space-evenly",
      alignItems: "center",
      alignContent: "space-evenly",
    },
    box_1: {
      maxWidth: "100%",
      width: "50%",
      height: "50%",
      backgroundColor: "#E4E4E5",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    button_1: {
      fontWeight: "700",
      border: "none",
      backgroundColor: "rgba(0,0,0,0)",
      color: "#6301EE",
      width: "75px",
      height: "30px",
      cursor: "pointer",
    },
    button_2: {
      fontWeight: "700",
      border: "1px solid #CCCDCD",
      borderRadius: "4px",
      backgroundColor: "#E4E4E5",
      color: "#6301EE",
      maxWidth: "50%",
      maxHeight: "50%",
      width: "auto",
      height: "auto",
      padding: "10px",
      cursor: "pointer",
    },
    button_3: {
      fontWeight: "700",
      border: "none",
      borderRadius: "4px",
      backgroundColor: "#6301EE",
      color: "white",
      maxWidth: "50%",
      maxHeight: "50%",
      width: "auto",
      height: "auto",
      padding: "10px",
      cursor: "pointer",
    },
    button_4: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      alignContent: "center",
      fontWeight: "700",
      border: "none",
      borderRadius: "4px",
      backgroundColor: "#6301EE",
      color: "white",
      maxWidth: "75%",
      maxHeight: "50%",
      width: "75%",
      height: "auto",
      padding: "10px",
      cursor: "pointer",
    },
    plusSign: {
      marginRight: "10px",
    },
  };

  return (
    <div style={styles.wrap}>
      <div style={styles.container}>
        <div style={styles.box_1}>
          {props.button_1 ? <button style={styles.button_1}>{props.button_1}</button> : null}
        </div>
        <div style={styles.box_1}>
          {props.button_2 ? <button style={styles.button_2}>{props.button_2}</button> : null}
        </div>
        <div style={styles.box_1}>
          <button style={styles.button_3}>BUTTON</button>
        </div>
        <div style={styles.box_1}>
          <button style={styles.button_4}>
            <GoPlus  style={styles.plusSign}/>
            BUTTON
          </button>
        </div>
      </div>
    </div>
  );
};

export default MaterialButtonWrap;
