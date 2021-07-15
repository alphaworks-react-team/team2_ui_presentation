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
      <MaterialButtonWrap button_1={"Button"}  button_2={"Action"} />
      <MaterialDialog color={"blue"} title={"Dialog Title"} content={"Dialog Body text"} button_1={"button 1"} button_2={"button 2"} btncolor={"red"}/>
      
    </div>
  );
};

export default MainMaterial;
