import React from "react";
import sprite from "../image/sprite.png";
import { GrFavorite } from "react-icons/gr";

const Glassmorphic = (props) => {
  const {
    wrapper,
    imgBox,
    titleBox,
    textBox,
    buttonBox,
    img,
    iconBox,
    icon,
    title,
    price,
    text,
    button,
  } = {
    wrapper: {
      // width: "300px",
      // height: "500px",
      width: props.width,
      height: props.height,
      borderRadius: "20px",
      backgroundColor: "rgba( 173, 173, 173, 0.25 )",
      boxShadow: " 0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
      backdropFilter: "blur(5.0px)",
      padding: "20px",
      display: "flex",
      flexFlow: "column",
      justifyContent: "space-between",
      border: "1px solid rgba( 255, 255, 255, 0.18 )",
    },
    imgBox: {
      width: "100%",
      height: "30%",
      display: "flex",
      justifyContent: "flex-end",
      flexFlow: "wrap",
    },
    img: {
      width: "50%",
      height: "100%",
      backgroundPosition: "center",
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      backgroundImage: props.img,
    },
    iconBox: {
      width: "25%",
      display: "flex",
      justifyContent: "flex-end",
    },
    icon: {
      color: "white",
      fontSize: "30px",
    },
    titleBox: {
      width: "100%",
      height: "20%",
    },
    title: {
      color: "white",
      fontSize: "30px",
      textAlign: "center",
    },
    textBox: {
      // height: "10%",
      display: "flex",
      justifyContent: "center",
    },
    price: {
      fontSize: "25px",
      color: "#27E299",
      textAlign: "center",
    },
    text: {
      height: "100%",
      width: "80%",
      color: "white",
      textAlign: "center",
    },
    buttonBox: {
      height: "20%",
    },
    button: {
      width: "100%",
      height: "100%",
      borderRadius: "10px",
      border: "none",
      backgroundColor: props.btnColor,
      color: "white",
      fontSize: "20px",
    },
  };

  return (
    <div style={wrapper}>
      <div style={imgBox}>
        <div style={img}></div>
        <div style={iconBox}>
          <GrFavorite style={icon}/>
        </div>
      </div>
      <div style={titleBox}>
        {props.title ? <div style={title}>{props.title}</div> : null}
        {props.price ? <div style={price}>{props.price}</div> : null}
      </div>
      <div style={textBox}>
        {props.text ? <div style={text}>{props.text}</div> : null}
      </div>
      <div style={buttonBox}>
        {props.button ? <button style={button}>{props.button}</button> : null}
      </div>
    </div>
  );
};

export default Glassmorphic;
