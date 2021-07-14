import React from "react";
import { FaGithubSquare } from "react-icons/fa";

const Footer = () => {
  const style = {
    footer: {
      width: "100%",
      height: "10vh",
      display: "flex",
      justifyContent: "space-evenly",
      backgroundColor: "white",
      alignItems: "center",
    },
  };

  return (
    <div style={style.footer}>
      <div>
        Ari
        <div>
          <a href="https://github.com/AriAgress" target="_blank">
            <FaGithubSquare />
          </a>
        </div>
      </div>
      <div>
        Franco{" "}
        <div>
          <a href="https://github.com/Frank-5850" target="_blank">
            <FaGithubSquare />
          </a>
        </div>
      </div>
      <div>
        Marcus{" "}
        <div>
          <a href="https://github.com/mgdeveloper45" target="_blank">
            <FaGithubSquare />
          </a>
        </div>
      </div>
      <div>
        Seena{" "}
        <div>
          <a href="https://github.com/seenanadimi" target="_blank">
            <FaGithubSquare />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
