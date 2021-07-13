import React from "react";
import drake from "../image/drake.jpeg";
import menu from "../image/menu.png";
import arrow from "../image/big-left-arrow.png";
import rewind from "../image/clear-rewind.png";
import pause from "../image/pause-24.png";
import forward from "../image/fast-forward-24.png";
import weekend from "../image/The_Weekend2.jpeg";

const Neumorphism = () => {
  const styles = {
    neuoWrapper: {
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center",
      height: "80vh",
      width: "50vw",
    },
    leftside: {
      display: "flex",
      justifyContent: "center",
      alignContent: "space-evenly",
    },
    imageLeft: {
      boxShadow:
        "30px 30px 41px 0 rgba(46, 5, 16, 0.25), -10px -10px 18px 0 rgb(237, 120, 149)",
      padding: "5px",
      border: "solid 1px #ed4575",
      borderRadius: "25px",
      height: "70vh",
      width: "15vw",
    },

    topControls: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    arrow: {
      height: "40px",
      width: "40px",
      borderRadius: "50%",
      margin: "10px",
      border: "solid 1px #ed4575",
      backgroundImage: `url(${arrow})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "25px 25px",
      boxShadow:
        "4px 4px 8px 0 rgba(0, 0, 0, 0.25), -5px -5px 9px 0 rgb(241, 142, 168)",
    },
    playing: {
      color: "#8b0e31",
      fontSize: "10px",
    },
    menu: {
      height: "40px",
      width: "40px",
      borderRadius: "50%",
      margin: "10px",
      border: "solid 1px #ed4575",
      backgroundImage: `url(${menu})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      boxShadow:
        "4px 4px 8px 0 rgba(0, 0, 0, 0.25), -5px -5px 9px 0 rgb(241, 142, 168)",
    },

    middleControls: {
      display: "flex",
      flexDirection: "column",
      alignContent: "space-between",
      alignItems: "center",
    },
    artistImage: {
      backgroundImage: `url(${drake})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      height: "200px",
      width: "200px",
      marginTop: "20px",
      borderRadius: "50%",
      border: "solid 5px #ed4575",
      boxShadow:
        "10px 10px 18px 0 rgba(46, 5, 16, 0.25), -6px -6px 10px 0 rgb(241, 142, 168)",
    },
    title: {
      color: "#740b29",
      marginTop: "30px",
      marginBottom: "0",
    },
    artist: {
      color: "#8b0e31",
      marginTop: "0",
    },
    timeLapse: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      width: "260px",
      color: "#8b0e31",
      fontSize: "12px",
      marginTop: "10px",
    },

    dial: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundImage: "linear-gradient(to right, #8b0e31 , #fde8ee)",
      height: "8px",
      width: "250px",
      border: "solid 1px #ed4575",
      borderRadius: "10px",
    },
    timer: {
      backgroundColor: "#f9d2db",
      height: "20px",
      width: "20px",
      border: "solid 1px #f08fa4",
      borderRadius: "50%",
      boxShadow:
        "6px 6px 10px 0 rgba(46, 5, 16, 0.25), -2px -2px 5px 0 rgb(241, 142, 168)",
    },
    bottomControls: {
      display: "flex",
      justifyContent: "space-around",
      marginTop: "80px",
    },
    rewind: {
      height: "60px",
      width: "60px",
      borderRadius: "50%",
      margin: "10px",
      border: "solid 1px #EA2E63",
      backgroundImage: `url(${rewind})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      boxShadow:
        "4px 4px 8px 0 rgba(0, 0, 0, 0.25), -5px -5px 9px 0 rgb(241, 142, 168)",
    },
    pause: {
      height: "60px",
      width: "60px",
      borderRadius: "50%",
      margin: "10px",
      border: "solid 1px #EA2E63",
      backgroundImage: `url(${pause})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      boxShadow:
        "4px 4px 8px 0 rgba(0, 0, 0, 0.25), -5px -5px 9px 0 rgb(241, 142, 168)",
    },
    forward: {
      height: "60px",
      width: "60px",
      borderRadius: "50%",
      margin: "10px",
      border: "solid 1px #EA2E63",
      backgroundImage: `url(${forward})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      boxShadow:
        "4px 4px 8px 0 rgba(0, 0, 0, 0.25), -5px -5px 9px 0 rgb(241, 142, 168)",
    },
    rightside: {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
    },
    imageRight: {
      backgroundImage: `url(${weekend})`,
      backgroundSize: "cover",
      boxShadow: "10px 13px 28px rgb(8, 24, 38)",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      border: "solid 2px #333333",
      borderRadius: "45px",
      height: "70vh",
      width: "17vw",
    },
  };
  return (
    <div>
      <div className="neuoWrapper" style={styles.neuoWrapper}>
        <div className="leftside" style={styles.leftside}>
          <div className="imageLeft" style={styles.imageLeft}>
            <div className="topControls" style={styles.topControls}>
              <div className="arrow" style={styles.arrow}></div>
              <div className="playing" style={styles.playing}>
                PLAYING NOW
              </div>
              <div className="menu" style={styles.menu}></div>
            </div>
            <div className="middleControls" style={styles.middleControls}>
              <div className="artistImage" style={styles.artistImage}></div>
              <h3 className="titleSong" style={styles.title}>
                Toosie Slide
              </h3>
              <p className="artist" style={styles.artist}>
                Drake
              </p>
              <div className="timeLapse" style={styles.timeLapse}>
                <div className="timeProgress" style={styles.timeProgress}>
                  2:03
                </div>
                <div className="totalTime" style={styles.totalTime}>
                  4:05
                </div>
              </div>
              <div className="dial" style={styles.dial}>
                <div className="timer" style={styles.timer}></div>
              </div>
            </div>
            <div className="bottomControls" style={styles.bottomControls}>
              <div className="rewind" style={styles.rewind}></div>
              <div className="pause" style={styles.pause}></div>
              <div className="forward" style={styles.forward}></div>
            </div>
          </div>
        </div>
        <div className="rightside" style={styles.rightside}>
          <div className="imageRight" style={styles.imageRight}></div>
        </div>
      </div>
    </div>
  );
};

export default Neumorphism;
