import React from "react";

const Glassmorphism = () => {
  const styles = {
    container: {
     
      // width: "90%",
      height: "80vh",
      // backgroundImage: `url("https://i.pinimg.com/originals/db/1d/d2/db1dd2566264bd67962dd9bb5fd65644.jpg")`,
      // backgroundRepeat: "no-repeat",
      // backgroundSize: "cover",
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center",
    },
    basic: {
      width: "20vw",
      height: "60vh",
      background: "rgba(255,255,255,.4)",
      // position: "relative",
      borderRadius: "10px",
      border: "1px solid rgba(255,255,255,.2)",
      backdropFilter: "blur(4px)",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      alignItems: "center",
    },
    blur: {
      // position: "absolute",
      width: "80%",
      height: "35%",
      background: "rgba(255,255,255,.4)",
      backdropFilter: "blur(0px)",
      borderRadius: "10px",
      border: "1px solid rgba(255,255,255,.2)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      alignItems: "center",
    },
    cardBody: {
      margin: "0px",
      width: "80%",
      height: "55%",
      display: "flex",
      flexFlow: "column wrap",
      justifyContent: "space-around",
      alignItems: "center",
      title: {
        margin: "0",
        color: "white",
      },
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.basic}>
        <div style={styles.blur}>
          <img src="https://img.icons8.com/fluent/48/000000/cloud.png" />
          <p>65°C</p>
          <p>Oakland, CA</p>
        </div>
        <div style={styles.cardBody}>
          <h3 style={styles.cardBody.title}>Know Your Weather</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla,
            repellendus excepturi.
          </p>
          <button>Get Started</button>
        </div>
      </div>
      {/* <div style={styles.blur}>
          <img src="https://img.icons8.com/fluent/48/000000/cloud.png" />
          <p>80°C</p>
          <p>Los Angelos , CA</p>
        </div>
        <div style={styles.blur}>
          <img src="https://img.icons8.com/fluent/48/000000/cloud.png" />
          <p>65°C</p>
          <p>San Francisco, CA</p>
        </div> */}
      {/* <div style={styles.basic}></div>
      <div style={styles.basic}></div> */}
    </div>
  );
};

export default Glassmorphism;
