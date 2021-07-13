import React from "react";
import frisco from "../image/Frisco.jpg";
import morman from "../image/MormanTemple.jpg";
import bay from "../image/baybridge.jpg";

const Thirds = () => {
  const styles = {
    layout: {
      flex: "display",
      justifyContent: "center",
      alignItems: "center",
      alginContent: "center",
    },
    mainWrapper: {
      position: "relative",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      margin: "10px",
    },
    mainBorder: {
      width: "75%",
      height: "60vh",
      background: "rgba(255,255,255,.4)",
      borderRadius: "10px",
      border: "1px solid rgba(255,255,255,.2)",
      backdropFilter: "blur(4px)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      // position: "absolute",
    },
    main: {
      width: "97%",
      height: "95%",
      backgroundImage: `url(${bay})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "cover",
      position: "absolute",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    text: {
      margin: "0",
      marginTop: "11%",
      marginLeft: "30%",
      width: "53.3%",
      color: "white",
      fontSize: "30px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      fontFamily: "Segoe Script",
    },
    life: {
      margin: "0",
      fontFamily: "Segoe Script",
    },
    arrowIcons: {
      width: "40px",
      height: "40px",
      background: "rgba(255,255,255,.4)",
      borderRadius: "50%",
      border: "1px solid rgba(255,255,255,.2)",
      backdropFilter: "blur(4px)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      rightArrow: {
        margin: "0",
        color: "white",
        fontSize: "30px",
        fontWeight: "bold",
        cursor: "pointer",
      },
      leftArrow: {
        margin: "0",
        color: "white",
        fontSize: "30px",
        fontWeight: "bold",
        transform: "rotate(180deg)",
        cursor: "pointer",
      },
      // position: "absolute",
    },
    cardWrapper: {
      display: "flex",
      justifyContent: "space-evenly",
    },
    cardBorder: {
      width: "30%",
      height: "30vh",
      background: "rgba(255,255,255,.4)",
      borderRadius: "10px",
      border: "1px solid rgba(255,255,255,.2)",
      backdropFilter: "blur(4px)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    cardSelector: {
      width: "30%",
      height: "30vh",
      background: "rgba(0,0,0,.6)",
      borderRadius: "10px",
      border: "1px solid rgba(255,255,255,.2)",
      backdropFilter: "blur(4px)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    city: {
      width: "90%",
      height: "90%",
      backgroundImage: `url(${frisco})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "cover",
    },
    frisco: {
      width: "90%",
      height: "90%",
      backgroundImage: `url(${bay})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "cover",
    },
    morman: {
      width: "90%",
      height: "90%",
      backgroundImage: `url(${morman})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "cover",
    },
  };

  return (
    <div style={styles.layout}>
      <div style={styles.mainWrapper}>
        <div style={styles.arrowIcons}>
          <p style={styles.arrowIcons.leftArrow}>></p>
        </div>
        <div style={styles.mainBorder}>
          <div style={styles.main}>
            <p style={styles.text}>
              A photograph is the pause button of life
              {/* <p style={styles.life}>life</p> */}
            </p>
          </div>
        </div>
        <div style={styles.arrowIcons}>
          <p style={styles.arrowIcons.rightArrow}>></p>
        </div>
        {/* <div style={styles.mainBorder}></div> */}
        {/* <div style={styles.mainBorder}></div> */}
      </div>
      <div style={styles.cardWrapper}>
        <div style={styles.cardBorder}>
          <div style={styles.city}></div>
        </div>
        <div style={styles.cardSelector}>
          <div style={styles.frisco}></div>
        </div>
        <div style={styles.cardBorder}>
          <div style={styles.morman}></div>
        </div>
      </div>
    </div>
  );
};

export default Thirds;
