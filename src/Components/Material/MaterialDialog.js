import React from "react";
import "./MaterialDialog.css";

const MaterialDialog = () => {
  const styles = {
    dialog: {
      width: 240,
      backgroundColor: "white",
      borderRadius: 3,
    },
    dialog_container: {
      display: "flex",
      flexFlow: "column",
      // justifyContent: "",
    },
    dialog_title: {
      padding: "0 24px 10px 24px",
      minHeight: "50px",
      display: "flex",
      alignItems: "flex-end",
    },
    dialog_content: {
      color: "rgba(0,0,0, 0.6)",
      fontWeight: 400,
      padding: "0 24px 20px",
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
      color: "#6301EE",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.dialog}>
      <div style={styles.dialog_container}>
        <h2 style={styles.dialog_title}>Dialog Title</h2>
        <div style={styles.dialog_content}>Lorem, ipsum dolor.</div>
        <div style={styles.dialog_footer}>
          <button className="backgroundHover" style={styles.dialog_button}>
            Action 1
          </button>
          <button className="backgroundHover" style={styles.dialog_button}>
            Action 2
          </button>
        </div>
      </div>
    </div>
  );
};

export default MaterialDialog;
