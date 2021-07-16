import React from "react";
import { IoMdContact, IoIosHeadset } from "react-icons/io";

const FlatUi = () => {
  const {
    // container,
    cardContainer,
    welcomeContainer,
    formContainer,
    input,
    button,
    buttonText,
    textContainer,
    icon,
    welcomeText,
    appText,
  } = {
    // container: {
    //   background: "#3498db",
    //   width: "80vw",
    //   height: "80vh",
    //   margin: "auto",
    //   display: "flex",
    //   justifyContent: "center",
    //   alignItems: "center",
    // },
    cardContainer: {
      margin: "0",
      height: "200px",
      width: "400px",
      display: "flex",
      justifyContent: "center",
      alignContent: "center",
    },
    welcomeContainer: {
      margin: "10px",
      height: "100%",
      width: "30%",
      display: "flex",
      flexFlow: "column wrap",
      justifyContent: "space-evenly",
      alignItems: "center",
    },
    formContainer: {
      width: "100%",
      backgroundColor: "#bdc3c7",
      display: "flex",
      flexFlow: "column",
      justifyContent: "space-evenly",
      alignItems: "center",
      borderRadius: "10px",
    },
    input: {
      width: "80%",
      height: "8%",
      borderRadius: "5px",
      border: "none",
    },
    button: {
      width: "80%",
      height: "13%",
      background: "#3498db",
      border: "none",
      borderRadius: "5px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
    },
    buttonText: {
      color: "white",
      fontSize: "20px",
    },
    textContainer: {
      margin: "0",
      width: "80%",
      display: "flex",
      fontSize: "10px",
      justifyContent: "space-around",
      color: "grey",
      cursor: "pointer",
    },
    icon: {
      width: "100px",
      height: "100%",
      color: "#ecf0f1",
    },
    welcomeText: {
      color: "white",
    },
    appText: { color: "white", fontWeight: "bold" },
  };
  return (
    // <div style={container}>
    <div style={cardContainer}>
      <div style={welcomeContainer}>
        <div>
          <IoIosHeadset style={icon} />
        </div>
        <div>
          <p style={welcomeText}>Welcome to</p>
          <p style={appText}>Music App</p>
        </div>
      </div>
      <div style={formContainer}>
        <input
          style={input}
          type="text"
          placeholder="Enter your email/username"
        />
        {/* <input style={input} type="text" placeholder={`${IoMdContact}`} /> */}
        <input style={input} type="text" placeholder="Enter your password" />
        <button style={button}>
          <p style={buttonText}>Log in</p>
        </button>
        <div style={textContainer}>
          <p>don't have an account? sign up!</p>
          <p>forgot your password?</p>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default FlatUi;
