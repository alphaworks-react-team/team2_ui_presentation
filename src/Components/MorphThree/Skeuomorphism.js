import React from 'react'
import weekend from "../../image/The_Weekend2.jpeg";

const Skeuomorphism = () => {
    const styles = {
        imageRight: {
            backgroundImage: `url(${weekend})`,
            backgroundSize: "cover",
            boxShadow: "10px 13px 28px rgb(8, 24, 38)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            border: "solid 2px #333333",
            borderRadius: "45px",
            height: "600px",
            width: "288px",
          },
    }
    return (
        <div>
            <div className="rightside" style={styles.rightside}>
                <div className="imageRight" style={styles.imageRight}></div>
            </div>
        </div>
    )
}

export default Skeuomorphism
