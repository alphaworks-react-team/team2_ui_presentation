import React from 'react'

const Main = (props) => {
  const styles = {
    display: "flex",
    flexFlow: "wrap row",
    alignItems: "center",
    
    width: "100%",
    minHeight: "80vh",
  };

  return (
    <div style={styles}>
      {props.children}
    </div>
  )
}

export default Main
