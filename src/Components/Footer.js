import React from "react";

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
      <div>Ari</div>
      <div>Franco</div>
      <div>Marcus</div>
      <div>Seena</div>
    </div>
  );
};

export default Footer;
