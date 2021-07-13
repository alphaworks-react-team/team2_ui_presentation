import React from "react";

const materialCard = () => {
  const styles = {
    wrap: {
      height: "80vh",
      width: "100%",
      backgroundColor: "black",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    card: {
      maxHeight: "100%",
      height: "500px",
      width: "400px",
      backgroundColor: "red",
    },
    photo: {
      height: "50%",
      width: "100%",
      backgroundColor: "blue",
    },
    text: {
      height: "50%",
      width: "100%",
      backgroundColor: "green",
    },
  };
  //test push

  return (
    <div style={styles.wrap}>
      <div style={styles.card}>
        <div style={styles.photo}></div>
        <div style={styles.text}></div>
      </div>
    </div>
  );
};

export default materialCard;
