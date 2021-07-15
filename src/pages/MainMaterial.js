import React from "react";
import MaterialDialog from "../Components/Material/MaterialDialog.js";
import MaterialButtonWrap from "../Components/Material/MaterialButtonWrap.js";
import MaterialCard from "../Components/Material/Material";

const MainMaterial = () => {
  const styles = {
    wrap: {
      minHeight: "80vh",
      width: "100%",
      display: "flex",
      flexFlow: "wrap row",
      alignItems: "center",
      justifyContent: "space-evenly",
    },
  };

  return (
    <div style={styles.wrap}>
      <MaterialCard />
      <MaterialButtonWrap />
      <MaterialDialog />
    </div>
  );
};

export default MainMaterial;
