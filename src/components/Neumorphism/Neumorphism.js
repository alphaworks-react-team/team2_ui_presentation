import React from 'react'
import boogie from '../../image/boogie_board.jpeg'
import menu from '../../image/menu.png'
import arrow from '../../image/big-left-arrow.png'

const Neumorphism = () => {
    const styles = {
        neuoWrapper: {
            display: "flex",
            justifyContent: "space-around",

        },
        leftside: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgb(179, 231, 255)",
            height: "80vh",
            width: "40vw",
        },
        imageLeft: {
            backgroundColor: "rgb(179, 231, 255)",
            boxShadow: "25px 25px 39px 0 rgba(77, 198, 255, 0.25), -10px -10px 18px 0 rgb(204, 239, 255)",
            
            padding: "5px",
            borderRadius: "5%",
            height: "65vh",
            width: "15vw",
        },
       
        topControls: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            
        },
        arrow: {
            height: "40px",
            width: "40px",
            borderRadius: "50%",
            margin: "10px",
            border: "solid 1px #99dfff",
            backgroundImage: `url(${arrow})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "25px 25px",
            backgroundColor: "rgb(179, 231, 255)",
            boxShadow: "12px 12px 16px 0 rgba(0, 0, 0, 0.25), -5px -5px 9px 0 rgb(204, 239, 255)",
        },
        menu: {
            height: "40px",
            width: "40px",
            borderRadius: "50%",
            margin: "10px",
            border: "solid 1px #99dfff",
            backgroundImage: `url(${menu})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundColor: "rgb(179, 231, 255)",
            boxShadow: "12px 12px 16px 0 rgba(0, 0, 0, 0.25), -5px -5px 9px 0 rgb(204, 239, 255)",
        },

        middleControls: {
            display: "flex",
            flexDirection: "column",
            alignContent: "space-between",
            alignItems: "center",
        },
        artistImage: {
            backgroundImage: `url(${boogie})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            height: "200px",
            width: "200px",
            borderRadius: "50%",
            border: "solid 3px #99dfff",
            boxShadow: "12px 12px 16px 0 rgba(0, 0, 0, 0.25), -6px -6px 10px 0 rgb(204, 239, 255)",
        },
        title: {
            color: "#006999",
            marginBottom: "0",
        },
        artist: {
            color: "#007ab3",
            marginTop: "0",
        },
        rightside: {
            backgroundColor: "orange",
            height: "40vh",
            width: "40vw",
        },
    }
    return (
        <div>
            <div className="neuoWrapper" style={styles.neuoWrapper}>
                <div className="leftside" style={styles.leftside}>
                    <div className="imageLeft" style={styles.imageLeft}>
                        <div className="topControls" style={styles.topControls}>
                            <div className="arrow" style={styles.arrow}></div>
                            <div className="menu" style={styles.menu}></div>
                        </div>
                        <div className="middleControls" style={styles.middleControls}>
                            <div className="artistImage" style={styles.artistImage}></div>
                            <h3 className="titleSong" style={styles.title}>Toosie Slide</h3>
                            <p className="artist" style={styles.artist}>Drake</p>
                            <div className="dial"></div>
                        </div>
                        <div className="bottomControls">
                            <div className="rewind"></div>
                            <div className="pause"></div>
                            <div className="forward"></div>
                        </div>
                    </div> 
                </div>
                <div className="rightside" style={styles.rightside}></div>
            </div>
        </div>
    )
}

export default Neumorphism
