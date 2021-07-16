import React from "react";
import drake from "../image/drake.jpeg";
import weekend from "../image/The_Weekend2.jpeg";
import aiko from "../image/jhene-aiko-11.jpeg";
import { CgDisc, CgMenuGridO } from "react-icons/cg";
import { BsPlus, BsHeart, BsDownload, BsThreeDots, BsArrowRepeat, BsPauseFill, BsShuffle, BsArrowLeftShort } from "react-icons/bs";
import { FiChevronLeft, FiSkipBack, FiSkipForward, FiFastForward, FiRewind } from "react-icons/fi";


const Neumorphism = () => {
  const styles = {
    neuoWrapper: {
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center",
      height: "80vh",
      width: "60vw",
    },
    leftside: {
      display: "flex",
      justifyContent: "center",
      alignContent: "space-evenly",
    },
    imageLeft: {
      boxShadow: "30px 30px 41px 0 rgba(46, 5, 16, 0.25), -10px -10px 18px 0 rgb(237, 120, 149)",
      padding: "5px",
      border: "solid 1px #ed4575",
      borderRadius: "25px",
      height: "600px",
      width: "288px",
    },

    topControls: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-around",
      height: "60px",
    },
    arrow: {
      height: "40px",
      width: "40px",
      borderRadius: "50%",
      color: "#8b0e31",
      border: "solid 1px #ed4575",
      backgroundSize: "25px 25px",
      boxShadow: "4px 4px 8px 0 rgba(0, 0, 0, 0.25), -5px -5px 9px 0 rgb(241, 142, 168)",
    },
    playing: {
      color: "#8b0e31",
      fontSize: "10px",
      alignSelf: "center",
    },
    menu: {
      height: "20px",
      width: "20px",
      color: "#8b0e31",
      padding: "10px",
      borderRadius: "50%",
      border: "solid 1px #ed4575",
      boxShadow: "4px 4px 8px 0 rgba(0, 0, 0, 0.25), -5px -5px 9px 0 rgb(241, 142, 168)",
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
      boxShadow: "10px 10px 18px 0 rgba(46, 5, 16, 0.25), -6px -6px 10px 0 rgb(241, 142, 168)",
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
      boxShadow: "6px 6px 10px 0 rgba(46, 5, 16, 0.25), -2px -2px 5px 0 rgb(241, 142, 168)",
    },
    bottomControls: {
      display: "flex",
      justifyContent: "space-around",
      marginTop: "80px",
    },
    rewind: {
      height: "40px",
      width: "40px",
      borderRadius: "50%",
      padding: "10px",
      color: "#8b0e31",
      border: "solid 1px #EA2E63",
      boxShadow: "4px 4px 8px 0 rgba(0, 0, 0, 0.25), -5px -5px 9px 0 rgb(241, 142, 168)",
    },
    pause: {
      height: "40px",
      width: "40px",
      borderRadius: "50%",
      padding: "10px",
      color: "#8b0e31",
      border: "solid 1px #EA2E63",
      boxShadow: "4px 4px 8px 0 rgba(0, 0, 0, 0.25), -5px -5px 9px 0 rgb(241, 142, 168)",
    },
    forward: {
      height: "40px",
      width: "40px",
      borderRadius: "50%",
      padding: "10px",
      color: "#8b0e31",
      border: "solid 1px #EA2E63",
      boxShadow: "4px 4px 8px 0 rgba(0, 0, 0, 0.25), -5px -5px 9px 0 rgb(241, 142, 168)",
    },
    rightside: {
      display: "flex",
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
      height: "600px",
      width: "288px",
    },
    farside: {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        alignContent: "space-between",
    },
    farright: {
        border: "3px solid rgba(255,255,255)",
        borderRadius: "25px",
        height: "600px",
        width: "288px",
        background: "rgba(255,179,255, .4)",
        boxShadow: "4px 4px 8px 0 rgba(0, 0, 0, 0.25), -4px -4px 8px 0 rgb(163, 80, 175)",
    },
    topFarControls: {
        display: "flex",
        alignItems: "flex-end",
        alignContent: "flex-end",
        justifyContent: "space-around",
        height: "60px",
      },
      arrowFar: {
        height: "40px",
        width: "40px",
        color: "#ffccdd",
      },
      playingFar: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: "30px",
        width: "60px",
        height: "20px",
        padding: "10px",
        backgroundColor: "rgba(172,79,168, .25)",
        border: "solid 2px rgba(255, 204, 221, .3)",
        color: "#ffccdd", 
      },
      disc: {
        height: "20px",
        width: "20px",
        color: "#ffccdd",
      },
      menuFar: {
        height: "40px",
        width: "40px",
        color: "#ffccdd",
      },

    middleControlsFar: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "300px",
      },
      artistImageFar: {
        backgroundImage: `url(${aiko})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "200px",
        width: "200px",
        borderRadius: "25px",
        border: "solid 7px rgba(255, 204, 221, .4)",
        boxShadow: "7px 7px 12px 0 rgba(23, 3, 8, 0.5), -3px -3px 7px 0 rgb(247, 187, 203)",
      },
      album: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        height: "35px",
      },
      titleFar: {
        color: "#ffccdd",
        fontSize: "20px",
        textShadow: "3px 3px 6px rgb(47, 4, 16)",
      },
      artistFar: {
        color: "#ffccdd",
        fontSize: "15px",
      },
      timeLapseFar: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "flex-end",
        color: "#ffccdd",
        fontSize: "15px",
        height: "35px",
      },
  
      dialFar: {
        backgroundImage: "linear-gradient(to right, #8455C7 , #e3d9f2)",
        height: "6px",
        width: "180px",
        border: "solid 1px #ffccdd",
        borderRadius: "10px",
        alignSelf: "space-evenly",
      },
      beforeLast: {
         display: "flex",
         justifyContent: "space-around",
         alignItems: "center",
         height: "90px",
      },
      loveIt: {
        height: "30px",
        width: "30px",
        color: "#ffccdd",
      },
      favorites: {
        height: "40px",
        width: "40px",
        color: "#ffccdd",
      },
      download: {
        height: "30px",
        width: "30px",
        color: "#ffccdd",
      },
      farBottom: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        height: "80px",
        backgroundColor: "#ffccdd",
        borderTopLeftRadius: "40px", 
        borderTopRightRadius: "40px",
        borderBottomLeftRadius: "20px", 
        borderBottomRightRadius: "20px",
      },

      inBetween: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      },
      repeat: {
        height: "35px",
        width: "35px",
        color: "rgba(42,27,137, .25)",
      },
      skipBack: {
        height: "30px",
        width: "30px",
        color: "#2A1B89",
        marginRight: "10px",
      },
      farPause: {
        height: "30px",
        width: "30px",
        backgroundColor: "#2A1B89",
        color: "#ffccdd",
        borderRadius: "50%",
        padding: "10px"
      },
      skipForward: {
        height: "30px",
        width: "30px",
        color: "#2A1B89",
        marginLeft: "10px",
      },
      shuffle: {
        height: "30px",
        width: "30px",
        color: "#2A1B89",
      },
  };
  return (
    <div>
      <div className="neuoWrapper" style={styles.neuoWrapper}>
        <div className="leftside" style={styles.leftside}>
          <div className="imageLeft" style={styles.imageLeft}>
            <div className="topControls" style={styles.topControls}>
              <div className="arrow">
                <BsArrowLeftShort style={styles.arrow}/>
              </div>
              <div className="playing" style={styles.playing}>PLAYING NOW</div>
              <div className="menu">
                <CgMenuGridO style={styles.menu}/>
              </div>
            </div>
            <div className="middleControls" style={styles.middleControls}>
              <div className="artistImage" style={styles.artistImage}></div>
              <h3 className="titleSong" style={styles.title}>Toosie Slide</h3>
              <p className="artist" style={styles.artist}>Drake</p>
              <div className="timeLapse" style={styles.timeLapse}>
                <div className="timeProgress" style={styles.timeProgress}>2:03</div>
                <div className="totalTime" style={styles.totalTime}>4:05</div>
              </div>
              <div className="dial" style={styles.dial}>
                <div className="timer" style={styles.timer}></div>
              </div>
            </div>
            <div className="bottomControls" style={styles.bottomControls}>
              <div className="rewind">
                <FiRewind style={styles.rewind}/>
              </div>
              <div className="pause">
                <BsPauseFill style={styles.pause}/>
              </div>
              <div className="forward">
                <FiFastForward style={styles.forward}/>
              </div>
            </div>
          </div>
        </div>
        <div className="rightside" style={styles.rightside}>
          <div className="imageRight" style={styles.imageRight}></div>
        </div>
        <div className="farside" style={styles.farside}>
            <div className="farright" style={styles.farright}>
                <div className="topFarControls" style={styles.topFarControls}>
                    <div className="arrowFar">
                        <FiChevronLeft style={styles.arrowFar}/>
                    </div>
                    <div className="playingFar" style={styles.playingFar}>
                      <div className="disc">
                        <CgDisc style={styles.disc}/>
                      </div>
                      <div className="skin" style={styles.skin}>Skin</div>
                    </div>
                    <div className="menuFar">
                        <BsThreeDots style={styles.menuFar}/>
                    </div>
                </div>
                <div className="middleControlsFar" style={styles.middleControlsFar}>
                    <div className="artistImageFar" style={styles.artistImageFar}></div>
                </div>
                <div className="album" style={styles.album}>
                      <div className="titleSongFar" style={styles.titleFar}>Wading</div>
                      <div className="artist" style={styles.artistFar}>Jhene Aiko</div>
                </div>
                <div className="timeLapseFar" style={styles.timeLapseFar}>
                    <div className="timeProgressFar" style={styles.timeProgressFar}>2:03</div>
                    <div className="dialFar" style={styles.dialFar}></div>
                    <div className="totalTimeFar" style={styles.totalTimeFar}>4:34</div>
                </div>
                <div className="beforeLast" style={styles.beforeLast}>
                    <div className="loveIt">
                        <BsHeart style={styles.loveIt}/>
                    </div>
                    <div className="favorites">
                        <BsPlus style={styles.favorites}/>
                    </div>
                    <div className="download">
                        <BsDownload style={styles.download}/>
                    </div>
                </div>
                <div className="farBottom" style={styles.farBottom}>
                  <div className="repeat">
                    <BsArrowRepeat style={styles.repeat}/>
                  </div>
                  <div className="inBetween" style={styles.inBetween}>
                    <div className="skipBack">
                      <FiSkipBack style={styles.skipBack}/>
                    </div>
                    <div className="farPause">
                      <BsPauseFill style={styles.farPause}/>
                    </div>
                    <div className="skipForward">
                      <FiSkipForward style={styles.skipForward}/>
                    </div>
                  </div>
                  <div className="shuffle">
                    <BsShuffle style={styles.shuffle}/>
                  </div>
                </div>
            </div>
        </div>
      </div>
    </div>
    
  );
};

export default Neumorphism;
