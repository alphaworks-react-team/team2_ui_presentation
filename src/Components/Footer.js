import React from "react";
import { FaGithubSquare } from "react-icons/fa";

const Footer = () => {
  const style = {
    footer: {
      width: "100%",
      height: "10vh",
      display: "flex",
      flexFlow: "row",
      justifyContent:"space-evenly",
      backgroundColor: "white",
      alignItems: "center",
    },
    text: {
      display: "flex",
      flexFlow: "row",
      alignItems: "center",
      justifyContent: "space-around",
    },
    aTag: {
      
    },
  };

  return (
    <div style={style.footer}>
      <div style={style.text}>
        <a
          style={style.aTag}
          href="https://github.com/AriAgress"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithubSquare />
        </a>
        &nbsp; Ari
      </div>
      
      <div style={style.text}>
        <a
          style={style.aTag}
          href="https://github.com/Frank-5850"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithubSquare />
        </a>
        &nbsp; Franco
      </div>
      <div style={style.text}>
        <a
          style={style.aTag}
          href="https://github.com/mgdeveloper45"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithubSquare />
        </a>
        &nbsp; Marcus
      </div>
      <div style={style.text}>
        <a
          style={style.aTag}
          href="https://github.com/seenanadimi"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithubSquare />
        </a>
        &nbsp; Seena
      </div>
    </div>
  );
};

export default Footer;
