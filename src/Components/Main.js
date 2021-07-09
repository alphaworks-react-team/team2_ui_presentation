import React from 'react'

const Main = (props) => {
  const styles = {
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: "90vh",
  };

  return (
    <div style={styles}>
      {props.children}
    </div>
  )
}

export default Main
