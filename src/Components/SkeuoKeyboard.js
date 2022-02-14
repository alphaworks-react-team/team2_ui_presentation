import React, { useEffect, useState } from "react";
import {
  BsPower,
  BsPlay,
  BsStop,
  BsSkipEnd,
  BsSkipForward,
  BsSkipStart,
  BsSkipBackward,
  BsShuffle,
  BsMusicPlayer,
} from "react-icons/bs";
import { CgRecord } from "react-icons/cg";
import { RiRepeatOneLine, RiRepeatLine } from "react-icons/ri";
import { HiOutlineSave } from "react-icons/hi";
import { GiRoundKnob } from "react-icons/gi";
import { GoPrimitiveDot } from "react-icons/go";
import equalizer from "../image/musick.jpg";
import chicken from "./Assets/The Chicken Wing Beat.mp3";

const NeumorphismKey = () => {
  const {
    mainContainer,
    keyboardContainer,
    keyboardContainerLayer,
    ControlPanelLayer,
    keyboardLayer,
    keyboardKeys,
    leftControl,
    knobGroup,
    control,
    knobContainer,
    knobBox,
    knob,
    knobIcon,
    knobText,
    padGroup,
    padGroupTwo,
    launchpad,
    padButton,
    padText,
    redPadButton,
    middlePanel,
    logoBox,
    logoText,
    logoTextBox,
    displayBox,
    screen,
    screenIconBox,
    screenIcons,
    image,
    ScreenGloss,
    buttonControls,
    button,
    powerButton,
    icon,
    redIcon,
    text,
    unpressedButton,
  } = {
    mainContainer: {
      display: "flex",
      flexFlow: "column",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      margin: " 0 auto",
    },
    keyboardContainer: {
      display: "flex",
      flexFlow: "column",
      justifyContent: "center",
      alignItems: "center",
      minWidth: "1256px",
      maxWidth: "1256px",
      height: "452px",
      background: "rgb(84,83,86)",
      boxSizing: "border-box",
      boxShadow: "inset 2px 2px 4px rgba(84,83,86, 0.8)",
      borderRadius: "20px",
    },
    keyboardContainerLayer: {
      display: "flex",
      flexFlow: "column",
      justifyContent: "space-around",
      alignItems: "center",
      minWidth: "1256px",
      maxWidth: "1256px",
      height: "452px",
      background: `rgb(84,83,86)`,
      border: "2px solid #c4c4c2",
      boxSizing: "border-box",
      boxShadow: "inset 2px 2px 4px rgba(84,83,86, 0.8)",
      borderRadius: "20px",
    },
    ControlPanelLayer: {
      display: "flex",
      flexFlow: "column wrap",
      justifyContent: "space-around",
      alignItems: "space-around",
      minWidth: "1162px",
      maxWidth: "1162px",
      height: "200px",
      borderTop: "1px solid rgba(255, 255, 255, 0.3)",
      boxSizing: "border-box",
      boxShadow: `0 3px 2px rgba(0, 0, 0, 0.034),
      0 7px 5px rgba(0, 0, 0, 0.048),
      0 13px 10px rgba(0, 0, 0, 0.06),
      0 22px 18px rgba(0, 0, 0, 0.072),
      0 42px 33px rgba(0, 0, 0, 0.086),
      0 100px 80px rgba(0, 0, 0, 0.12)`,
      borderRadius: "8px",
    },
    keyboardLayer: {
      display: "flex",
      flexFlow: "row",
      justifyContent: "space-around",
      alignItems: "space-around",
      minWidth: "1162px",
      maxWidth: "1162px",
      height: "200px",
      border: "1px solid rgba(255, 255, 255, 0.3)",
      boxSizing: "border-box",
      boxShadow: `inset 0px 5px 5px 5px grey`,
      borderRadius: "8px",
      padding: "5px",
      background: "black",
    },
    keyboardKeys: {
      // position: "relative",
      border: "1px solid red",
      marginTop: "10px",
      width: "60px",
      height: "190px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#d1d7e0",
      borderRadius: "4px",
      boxShadow: "2px 5px 5px black",
      cursor: "pointer",
    },
    leftControl: {
      width: "700px",
      height: "100%",
      display: "flex",
      flexFlow: "column",
      justifyContent: "space-around",
    },
    knobGroup: {
      width: "100%",
      height: "74px",
      marginTop: "1px",
      marginLeft: "4px",
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
    },
    control: {
      width: "20px",
      height: "6px",
      fontSize: "15px",
      color: "white",
      margin: "0",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      transform: "rotate(90deg)",
      text: {
        margin: "0",
        letterSpacing: "1px",
        fontWeight: "bold",
      },
    },
    knobContainer: {
      width: "678px",
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
    },
    knobBox: {
      width: "55px",
      height: "55px",
      margin: "5px",
      display: "flex",
      flexFlow: "column",
      justifyContent: "space-between",
      alignItems: "center",
      alignContent: "center",
    },
    knob: {
      width: "60%",
      height: "60%",
      borderRadius: "50%",
      boxShadow: `0 3px 3px black, -3px -3px 3px grey`,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
    },
    knobIcon: {
      width: "90%",
      height: "90%",
      color: "white",
    },
    knobText: {
      fontSize: "10px",
      color: "white",
      margin: "0",
      padding: ".5px",
      border: "1px solid white",
      borderRadius: "4px",
    },
    padGroup: {
      width: "100%",
      height: "135px",
      border: "1px solid red",
      borderRadius: "4px",
      boxSizing: "border-box",
      marginLeft: "4px",
      marginBottom: "4px",
      display: "flex",
      flexFlow: "row",
      justifyContent: "center",
      alignItems: "center",
      alignContent: "center",
    },
    padGroupTwo: {
      display: "flex",
      flexFlow: "row wrap",
      justifyContent: "space-around",
      alignItems: "space-around",
      alignContent: "space-around",
    },
    launchpad: {
      width: "20px",
      height: "6px",
      fontSize: "15px",
      color: "white",
      margin: "0",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      transform: "rotate(90deg)",
      text: {
        margin: "0",
        letterSpacing: "1px",
        fontWeight: "bold",
      },
    },
    padButton: {
      margin: "5px",
      width: "55px",
      height: "50px",
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "flex-end",
      background: "grey",
      border: "1px solid white",
      boxSizing: "border-box",
      borderRadius: "4px",
      boxShadow: `0 3px 3px black, -3px -3px 3px grey`,
      cursor: "pointer",
    },
    redPadButton: {
      margin: "5px",
      width: "55px",
      height: "50px",
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "flex-end",
      background: "grey",
      border: "1px solid red",
      boxSizing: "border-box",
      borderRadius: "4px",
      boxShadow: `0 3px 3px black, -3px -3px 3px grey`,
      cursor: "pointer",
    },
    padText: {
      fontSize: "10px",
      color: "white",
      margin: "3px",
    },
    middlePanel: {
      width: "200px",
      height: "90%",
      display: "flex",
      flexFlow: "column",
      justifyContent: "space-around",
      borderRight: "1px white solid",
    },
    logoBox: {
      width: "100%",
      height: "65px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      alignContent: "center",
    },
    logoTextBox: {
      marginRight: "10px",
    },
    logoText: {
      width: "130px",
      fontSize: "20px",
      margin: "0",
      color: "white",
      textAlign: "start",
      icon: {
        width: "auto",
        height: "50px",
        color: "white",
      },
      musick: {
        fontSize: "30px",
        color: "red",
        margin: "0",
        textAlign: "end",
        borderTop: "1px solid white",
      },
    },
    displayBox: {
      width: "100%",
      height: "130px",
      display: "flex",
      justifyContent: "center",
      position: "relative",
    },
    screen: {
      width: "180px",
      height: "130px",
      boxSizing: "border-box",
      boxShadow: `inset 0px 5px 5px 5px grey`,
      display: "flex",
      flexFlow: "column",
      justifyContent: "flex-end",
      alignItems: "center",
    },
    screenIconBox: {
      width: "160px",
      height: "15px",
      display: "flex",
      flexFlow: "row",
      justifyContent: "space-evenly",
      marginBottom: "2px",
    },
    screenIcons: {
      color: "grey",
      green: {
        color: "green",
      },
      red: {
        color: "red",
      },
    },
    image: {
      width: "170px",
      height: "100px",
      backgroundImage: `url(${equalizer})`,
      backgroundRepeat: "none",
      backgroundSize: "cover",
      borderRadius: "4px",
      marginBottom: "2px",
    },
    ScreenGloss: {
      position: "absolute",
      width: "180px",
      height: "130px",
      borderRadius: "4px",
      backgroundImage: `url(https://pizzabreakfast.co/project-assets/web-op-1/gloss.svg)`,
    },
    buttonControls: {
      width: "260px",
      height: "100%",
      display: "flex",
      flexFlow: "row wrap",
      justifyContent: "space-around",
      alignItems: "space-around",
      alignContent: "space-around",
      borderHeight: "90%",
    },
    button: {
      width: "60px",
      height: "60px",
      display: "flex",
      flexFlow: "column",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "4px",
    },
    powerButton: {
      width: "60%",
      height: "60%",
      background: "rgb(84,83,86)",
      boxShadow: `inset 0px 5px 5px black`,
      border: "1px solid grey",
      borderRadius: "4px",
      display: "flex",
      flexFlow: "column",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
    },
    unpressedButton: {
      width: "60%",
      height: "60%",
      background: "rgb(84,83,86)",
      boxShadow: `0 3px 3px black, -3px -3px 3px grey`,
      borderTop: "1px solid rgba(255, 255, 255, 0.3)",
      borderRadius: "4px",
      boxSizing: "border-box",
      display: "flex",
      flexFlow: "column",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
    },
    icon: {
      width: "70%",
      height: "70%",
      color: "white",
      pointerEvents: "none",
    },
    redIcon: {
      width: "70%",
      height: "70%",
      color: "red",
      pointerEvents: "none",
    },
    text: {
      color: "white",
      fontSize: "10px",
      margin: "0",
      marginTop: "3px",
    },
  };

  const [playing, setPlaying] = useState(false);
  const [audio] = useState(new Audio(chicken));
  const [press, setPress] = useState({
    play: true,
  });

  useEffect(() => {
    console.log(press);
  }, [press]);

  const toggleButtons = (e) => {
    setPress({ ["play"]: !e.target.getAttribute("value") });
  };
  const playAudio = () => {
    console.log("playing");
    setPlaying(true);
    audio.volume = 0.1;
    audio.play();
  };

  const pauseAudio = () => {
    console.log("Pausing");
    setPlaying(false);
    audio.pause();
  };

  return (
    <div style={mainContainer}>
      <div style={keyboardContainer}>
        <div style={keyboardContainerLayer}>
          <div style={ControlPanelLayer}>
            <div style={leftControl}>
              <div style={knobGroup}>
                <div style={control}>
                  <p style={control.text}>Control</p>
                </div>
                <div style={knobContainer}>
                  <div style={knobBox}>
                    <div style={knob}>
                      <GiRoundKnob style={knobIcon} />
                    </div>
                    <p style={knobText}>Tempo</p>
                  </div>
                  <div style={knobBox}>
                    <div style={knob}>
                      <GiRoundKnob style={knobIcon} />
                    </div>
                    <p style={knobText}>Division</p>
                  </div>
                  <div style={knobBox}>
                    <div style={knob}>
                      <GiRoundKnob style={knobIcon} />
                    </div>
                    <p style={knobText}>Swing</p>
                  </div>
                  <div style={knobBox}>
                    <div style={knob}>
                      <GiRoundKnob style={knobIcon} />
                    </div>
                    <p style={knobText}>Mode</p>
                  </div>
                  <div style={knobBox}>
                    <div style={knob}>
                      <GiRoundKnob style={knobIcon} />
                    </div>
                    <p style={knobText}>Latch</p>
                  </div>
                  <div style={knobBox}>
                    <div style={knob}>
                      <GiRoundKnob style={knobIcon} />
                    </div>
                    <p style={knobText}>Sync</p>
                  </div>
                  <div style={knobBox}>
                    <div style={knob}>
                      <GiRoundKnob style={knobIcon} />
                    </div>
                    <p style={knobText}> + / - </p>
                  </div>
                  <div style={knobBox}>
                    <div style={knob}>
                      <GiRoundKnob style={knobIcon} />
                    </div>
                    <p style={knobText}>Oscillator</p>
                  </div>
                  <div style={knobBox}>
                    <div style={knob}>
                      <GiRoundKnob style={knobIcon} />
                    </div>
                    <p style={knobText}>Controller</p>
                  </div>
                  <div style={knobBox}>
                    <div style={knob}>
                      <GiRoundKnob style={knobIcon} />
                    </div>
                    <p style={knobText}>Volume</p>
                  </div>
                </div>
              </div>
              <div style={padGroup}>
                <div style={launchpad}>
                  <p style={launchpad.text}>Launchpad</p>
                </div>
                <div style={padGroupTwo}>
                  <div style={padButton}>
                    <p style={padText}>P1</p>
                  </div>
                  <div style={redPadButton}>
                    <p style={padText}>P2</p>
                  </div>
                  <div style={padButton}>
                    <p style={padText}>P3</p>
                  </div>
                  <div style={redPadButton}>
                    <p style={padText}>P4</p>
                  </div>
                  <div style={padButton}>
                    <p style={padText}>P5</p>
                  </div>
                  <div style={redPadButton}>
                    <p style={padText}>P6</p>
                  </div>
                  <div style={padButton}>
                    <p style={padText}>P7</p>
                  </div>
                  <div style={redPadButton}>
                    <p style={padText}>P8</p>
                  </div>
                  <div style={padButton}>
                    <p style={padText}>P9</p>
                  </div>
                  <div style={redPadButton}>
                    <p style={padText}>P10</p>
                  </div>
                  <div style={redPadButton}>
                    <p style={padText}>P11</p>
                  </div>
                  <div style={padButton}>
                    <p style={padText}>P12</p>
                  </div>
                  <div style={redPadButton}>
                    <p style={padText}>P13</p>
                  </div>
                  <div style={padButton}>
                    <p style={padText}>P14</p>
                  </div>
                  <div style={redPadButton}>
                    <p style={padText}>P15</p>
                  </div>
                  <div style={padButton}>
                    <p style={padText}>P16</p>
                  </div>
                  <div style={redPadButton}>
                    <p style={padText}>P17</p>
                  </div>
                  <div style={padButton}>
                    <p style={padText}>P18</p>
                  </div>
                  <div style={redPadButton}>
                    <p style={padText}>P19</p>
                  </div>
                  <div style={padButton}>
                    <p style={padText}>P20</p>
                  </div>
                </div>
              </div>
            </div>
            <div style={middlePanel}>
              <div style={logoBox}>
                <div>
                  <BsMusicPlayer style={logoText.icon} />
                </div>
                <div style={logoTextBox}>
                  <p style={logoText}>TEAM 2</p>
                  <p style={logoText.musick}>MUSICK</p>
                </div>
              </div>
              <div style={displayBox}>
                <div style={screen}>
                  <div style={screenIconBox}>
                    <BsPlay style={screenIcons.green} />
                    <BsStop style={screenIcons} />
                    <BsShuffle style={screenIcons} />
                    <RiRepeatOneLine style={screenIcons.green} />
                    <RiRepeatLine style={screenIcons} />
                    <GoPrimitiveDot style={screenIcons.red} />
                  </div>
                  <div style={image}></div>
                  <div style={ScreenGloss}></div>
                </div>
              </div>
            </div>
            <div style={buttonControls}>
              <div style={button}>
                <div
                  style={!press.play ? unpressedButton : powerButton}
                  onClick={(e) => toggleButtons(e)}
                  name="play"
                  value={press.play}
                >
                  <BsPlay style={icon} />
                </div>
                <p style={text}>Play</p>
              </div>

              <div style={button}>
                <div style={unpressedButton}>
                  <BsStop style={icon} />
                </div>
                <p style={text}>Stop</p>
              </div>
              <div style={button}>
                <div style={powerButton}>
                  <CgRecord style={redIcon} />
                </div>
                <p style={text}>Record</p>
              </div>
              <div style={button}>
                <div style={powerButton}>
                  <BsPower style={redIcon} />
                </div>
                <p style={text}>Power</p>
              </div>
              <div style={button}>
                <div style={unpressedButton}>
                  <BsSkipBackward style={icon} />
                </div>
                <p style={text}>Backward</p>
              </div>
              <div style={button}>
                <div style={unpressedButton}>
                  <BsSkipStart style={icon} />
                </div>
                <p style={text}>Restart</p>
              </div>
              <div style={button}>
                <div style={unpressedButton}>
                  <BsSkipEnd style={icon} />
                </div>
                <p style={text}>Skip</p>
              </div>
              <div style={button}>
                <div style={unpressedButton}>
                  <BsSkipForward style={icon} />
                </div>
                <p style={text}>Forward</p>
              </div>
              <div style={button}>
                <div style={unpressedButton}>
                  <BsShuffle style={icon} />
                </div>
                <p style={text}>Shuffle</p>
              </div>
              <div style={button}>
                <div style={powerButton}>
                  <RiRepeatOneLine style={icon} />
                </div>
                <p style={text}>Repeat One</p>
              </div>
              <div style={button}>
                <div style={unpressedButton}>
                  <RiRepeatLine style={icon} />
                </div>
                <p style={text}>Repeat</p>
              </div>
              <div style={button}>
                <div style={unpressedButton}>
                  <HiOutlineSave style={icon} />
                </div>
                <p style={text}>Save</p>
              </div>
            </div>
          </div>
          <div style={keyboardLayer}>
            <div style={keyboardKeys}></div>
            <div style={keyboardKeys}></div>
            <div style={keyboardKeys}></div>
            <div style={keyboardKeys}></div>
            <div style={keyboardKeys}></div>
            <div style={keyboardKeys}></div>
            <div style={keyboardKeys}></div>
            <div style={keyboardKeys}></div>
            <div style={keyboardKeys}></div>
            <div style={keyboardKeys}></div>
            <div style={keyboardKeys}></div>
            <div style={keyboardKeys}></div>
            <div style={keyboardKeys}></div>
            <div style={keyboardKeys}></div>
            <div style={keyboardKeys}></div>
            <div style={keyboardKeys}></div>
            <div
              style={keyboardKeys}
              onClick={!playing ? playAudio : pauseAudio}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeumorphismKey;
