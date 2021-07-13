import React from 'react'

const MaterialCard = () => {


  const styles = {
    wrap : {
      height : "200px",
      width : "200px",
      backgroundColor: "black",
      cardPhoto: {
        height: "50%",
        width: "100%",
      },
      cardText: {

      },
    }
  }
  //test push
  
  
  
  return (
    <div style={styles.wrap}>
        <div style={styles.wrap.cardPhoto}></div>
        <div style={styles.wrap.cardText}></div>
    </div>
  )
}

export default MaterialCard
