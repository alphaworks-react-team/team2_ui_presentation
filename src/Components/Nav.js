import React from "react";

const Nav = () => {
  const styles = {
    container: {
      height: "10vh",
      width: "100%",
      backgroundColor: "white",
      display: "flex",
    },
    logo: {
      width: "50%",
      height: "100%",
      marginLeft: "20px",
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
    },
    nav: {
      width: "50%",
      height: "100%",
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center",
    },
  };

  return (
  
  <div style={styles.container}>
    <div style={styles.logo}>
      <h2>TEAM 2</h2>
    </div>
    <div style={styles.nav}>
      <p>NAV</p>
      <p>NAV</p>
      <p>NAV</p>
    </div>
  </div>

)};

export default Nav;
