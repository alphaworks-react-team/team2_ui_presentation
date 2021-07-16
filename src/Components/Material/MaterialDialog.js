import React from "react";
import "./MaterialDialog.css";

const MaterialDialog = (props) => {
  const styles = {
    dialog: {
      width: 240,
      backgroundColor: "white",
      borderRadius: 3,
    },
    dialog_container: {
      display: "flex",
      flexFlow: "column wrap",
      // justifyContent: "",
    },
    dialog_title: {
      padding: "0 24px 10px 24px",
      minHeight: "50px",
      display: "flex",
      alignItems: "flex-end",
      color: props.color,
    },
    dialog_content: {
      color: "rgba(0,0,0, 0.6)",
      fontWeight: 400,
      padding: "0 24px 20px",
      maxWidth: "100%",
      // minHeight: "44px",
    },
    dialog_footer: {
      minHeight: "37px",
      display: "flex",
      flexFlow: "row",
      justifyContent: "flex-end",
      padding: "8px",
    },

    dialog_button: {
      border: "none",
      backgroundColor: "rgba(0,0,0,0)",
      radius: "5px",
      fontWeight: 600,
      fontSize: "1rem",
      color: props.btncolor,
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.dialog}>
      <div style={styles.dialog_container}>
        {props.title ? (
          <h2 style={styles.dialog_title}>{props.title}</h2>
        ) : null}
        {props.content ? (
          <div style={styles.dialog_content}>{props.content}</div>
        ) : null}
        <div style={styles.dialog_footer}>
          {props.button_1 ? (
            <button className="backgroundHover" style={styles.dialog_button}>
              {props.button_1}
            </button>
          ) : null}
          {props.button_2 ? (
            <button className="backgroundHover" style={styles.dialog_button}>
              {props.button_2}
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default MaterialDialog;
