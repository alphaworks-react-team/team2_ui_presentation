import React from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import Glassmorphism from "./Glassmorphism";

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
      h2: {
        textDecoration: "none",
        width: "100%",
        // display: "flex",
        // justifyContent: "space-evenly",
      },
    },
    nav: {
      width: "50%",
      height: "100%",
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center",
      navItems: {
        textDecoration: "none",
        width: "100%",
        display: "flex",
        justifyContent: "space-evenly",
      },
    },
  };

  const history = useHistory();

  return (
    <div style={styles.container}>
      <div style={styles.logo}>
        <Link style={styles.logo.h2}>
          <h2 onClick={() => history.push("/main")}>TEAM 2</h2>
        </Link>
      </div>
      <div style={styles.nav}>
        <Link style={styles.nav.navItems}>
          <p onClick={() => history.push("/glassmorphism")}> Glassmorphism</p>
          <p onClick={() => history.push("/flat")}>Flat</p>
          <p onClick={() => history.push("/Material")}>Material</p>
          <p onClick={() => history.push("/flayout")}>F-Layout</p>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
