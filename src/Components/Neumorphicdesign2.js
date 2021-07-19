import React from 'react';
import { BsPower } from 'react-icons/bs';
import { BiMenuAltLeft } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';
import { FaAutoprefixer } from 'react-icons/fa';
import { TiWaves } from 'react-icons/ti';
import { WiSnowflakeCold } from 'react-icons/wi';
import { RiTimerLine } from 'react-icons/ri';

const Neumorphicdesign2 = () => {
  const styles = {
    container: {
      height: '80vh',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    card: {
      maxHeight: '100%',
      width: '400px',
      height: '650px',
      background: 'rgb(87,87,87)',
      background:
        'linear-gradient(180deg, rgba(87,87,87,1) 0%, rgba(25,25,25,1) 100%)',
      display: 'flex',
      flexFlow: 'wrap',
      // justifyContent: 'center',
      alignContent: 'flex-start',
      // position: 'relative',
      boxShadow:
        '35px 35px 40px 0 rgba(46, 5, 16, 0.4), -10px -10px 20px 0 rgb(255, 255, 255, 0.3)',
      border: 'solid 1px #636363',
      borderRadius: '25px',
    },
    nav: {
      maxHeight: '20%',
      width: '400px',
      height: '90px',
      borderTopLeftRadius: '20px',
      borderTopRightRadius: '20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginLeft: '30px',
      marginRight: '30px',
    },
    navbtn1: {
      width: '50px',
      height: '50px',
      background: '#383838',
      borderRadius: '50px',
      border: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow:
        '12px 12px 16px 0 rgba(255, 255, 255, 0.15) inset, -8px -8px 12px 0 rgba(0, 0, 0, .25) inset,12px 12px 15px 0 rgba(0, 0, 0, 0.25),-8px -8px 15px 0 rgba(255, 255, 255, 0.15)',
      // transform: `translate(310px, 25px)`,
    },
    navbtn2: {
      width: '50px',
      height: '50px',
      background: '#383838',
      borderRadius: '50px',
      border: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow:
        '12px 12px 16px 0 rgba(255, 255, 255, 0.15) inset, -8px -8px 12px 0 rgba(0, 0, 0, .25) inset,12px 12px 15px 0 rgba(0, 0, 0, 0.25),-8px -8px 15px 0 rgba(255, 255, 255, 0.15)',
      // transform: `translate(310px, 25px)`,
    },
    settingsbtn: {
      height: '20px',
      width: '20px',
      color: 'grey',
    },
    description: {
      maxHeight: '90%',
      width: '400px',
      height: '560px',
      display: 'flex',
      // justifyContent: 'center',
      // alignItems: 'flex-start',
      flexFlow: 'wrap',
      borderTop: 'solid 2px #636363',
      borderRadius: '25px',
    },
    top: {
      width: '400px',
      height: '50px',
      display: 'flex',
    },
    top1: {
      width: '133.33px',
      height: '50px',
      display: 'flex',
      alignItems: 'center',
    },
    toptext: {
      color: 'white',
      transform: `translate(30px, 20px)`,
    },
    top2: {
      width: '133.33px',
      height: '50px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
    },
    swipe: {
      width: '60px',
      height: '4px',
      background: 'black',
      borderRadius: '20%',
      marginTop: '10px',
      background: 'rgba(25,25,25,1)',
    },
    top3: {
      width: '133.33px',
      height: '50px',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    topbtn: {
      width: '60px',
      height: '60px',
      background:
        'linear-gradient(315deg, rgba(67,157,226,1) 17%, rgba(64,73,162,1) 100%)',
      borderRadius: '50%',
      border: 'none',
      boxShadow:
        '6px 6px 15px 0 rgba(0, 0, 0, 0.3) inset, -6px -6px 15px 0 rgba(255, 255, 255, 0.3) inset, 10px 10px 34px 0 rgba(0, 0, 0, 0.2), -7px -7px 30px 0 rgba(255, 255, 255, 0.25)',
      border: 'solid 3px #439de2',
      transform: `translate(-28px, 20px)`,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    powerbtn: {
      height: '25px',
      width: '25px',
      color: 'white',
    },
    content: {
      // maxHeight: '20%',
      width: '400px',
      height: '220px',
      // background: 'blue',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    contenticon: {
      width: '200px',
      height: '200px',
      background: '#4786B7',
      borderRadius: '50%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      border: 'solid 8px #262626',
      boxShadow:
        '12px 12px 16px 0 rgba(255, 255, 255, 0.15) inset, -8px -8px 12px 0 rgba(0, 0, 0, .25) inset,12px 12px 15px 0 rgba(0, 0, 0, 0.25),-8px -8px 15px 0 rgba(255, 255, 255, 0.15)',
      contenticon1: {
        width: '125px',
        height: '125px',
        background: '#262626',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        contenticon2: {
          fontSize: '40px',
          color: 'white',
        },
      },
    },
    // content1: {
    //   width: '400px',
    //   height: '73.33px',
    // background: 'purple',
    //   display: 'flex',
    //   alignItems: 'flex-end',
    //   marginLeft: '30px',
    // },
    // contenttext: {
    //   fontSize: '20px',
    //   color: 'white',
    // },
    // content2: {
    //   width: '400px',
    //   height: '103.33',
    //   display: 'flex',
    //   flexFlow: 'row wrap',
    // },
    // contentbox1: {
    //   width: '133.33px',
    //   height: '51.66px',
    //   display: 'flex',
    //   alignItems: 'center',
    //   transform: `translate(30px, 0px)`,
    // },
    // contentbox2: {
    //   width: '133.33px',
    //   height: '51.66px',
    //   display: 'flex',
    //   alignItems: 'center',
    // },
    // contentbox3: {
    //   width: '133.33px',
    //   height: '51.66px',
    //   display: 'flex',
    //   alignItems: 'center',
    //   transform: `translate(-30px, 0px)`,
    // },
    // contentbox4: {
    //   width: '133.33px',
    //   height: '51.66px',
    //   color: 'white',
    //   transform: `translate(55px, 0px)`,
    // },
    // contentbox5: {
    //   width: '133.33px',
    //   height: '51.66px',
    //   color: 'white',
    //   transform: `translate(25px, 0px)`,
    // },
    // contentbox6: {
    //   width: '133.33px',
    //   height: '51.66px',
    //   color: 'white',
    //   transform: `translate(-5px, 0px)`,
    // },
    bottom: {
      width: '400px',
      height: '160px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexFlow: 'wrap',
    },
    bottomtext1: {
      width: '400px',
      height: '43.33px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
      color: 'white',
      fontSize: '25px',
    },
    bbox1: {
      width: '80px',
      height: '45px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
      color: 'lightgrey',
    },
    bbox2: {
      width: '80px',
      height: '45px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
      color: 'lightgrey',
    },
    bbox3: {
      width: '80px',
      height: '45px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
      color: 'lightgrey',
    },
    bbox4: {
      width: '80px',
      height: '45px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
      color: 'lightgrey',
    },
    bbox5: {
      width: '80px',
      height: '45px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
      color: 'lightgrey',
    },
    bottom1: {
      width: '400px',
      height: '45px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    slider: {
      width: '350px',
      height: '10px',
      borderRadius: '50px',
      marginTop: '10px',
      background:
        'linear-gradient(90deg, rgba(67,157,226,1) 0%, rgba(31,31,31,1) 100%)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      sliderbtn: {
        width: '25px',
        height: '25px',
        borderRadius: '50%',
        background: '#383838',
        boxShadow:
          '6px 6px 15px 0 rgba(0, 0, 0, 0.3) inset, -6px -6px 15px 0 rgba(255, 255, 255, 0.3) inset, 10px 10px 34px 0 rgba(0, 0, 0, 0.2), -7px -7px 30px 0 rgba(255, 255, 255, 0.25)',
        border: 'solid 1px #636363',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transform: `translate(-78px, 0px)`,
        sliderbtndot: {
          width: '5px',
          height: '5px',
          borderRadius: '50%',
          background: 'rgba(67,157,226,1)',
        },
      },
    },
    bottom2: {
      width: '400px',
      height: '35px',
      display: 'flex',
      flexFlow: 'column',
    },
    bottomtext2: {
      width: '400px',
      height: '30px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      fontSize: '25px',
    },
    // bottomtext2: {
    //   width: '400px',
    //   height: '35px',
    //   display: 'flex',
    //   justifyContent: 'space-around',
    //   alignItems:'center',
    //   color:'white',
    // },
    footer: {
      width: '400px',
      height: '130px',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      borderBottomLeftRadius: '20px',
      borderBottomRightRadius: '20px',
    },
    footertext1: {
      width: '60px',
      height: '35px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
    },
    footerbtn1: {
      width: '60px',
      height: '60px',
      background:
        'linear-gradient(315deg, rgba(67,157,226,1) 17%, rgba(64,73,162,1) 100%)',
      borderRadius: '50%',
      border: 'none',
      boxShadow:
        '6px 6px 15px 0 rgba(0, 0, 0, 0.3) inset, -6px -6px 15px 0 rgba(255, 255, 255, 0.3) inset, 10px 10px 34px 0 rgba(0, 0, 0, 0.2), -7px -7px 30px 0 rgba(255, 255, 255, 0.25)',
      border: 'solid 3px #439de2',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    autobtn: {
      height: '27px',
      width: '27px',
      color: 'white',
    },
    footertext2: {
      width: '50px',
      height: '35px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
    },
    footerbtn2: {
      width: '50px',
      height: '50px',
      // backgroundSize: '25px 25px',
      background: '#383838',
      borderRadius: '50px',
      border: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow:
        '12px 12px 16px 0 rgba(255, 255, 255, 0.15) inset, -8px -8px 12px 0 rgba(0, 0, 0, .25) inset,12px 12px 15px 0 rgba(0, 0, 0, 0.25),-8px -8px 15px 0 rgba(255, 255, 255, 0.15)',
    },
    wavesbtn: {
      height: '25px',
      width: '25px',
      color: 'grey',
    },
    footertext3: {
      width: '50px',
      height: '35px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
    },
    footerbtn3: {
      width: '50px',
      height: '50px',
      // backgroundSize: '25px 25px',
      background: '#383838',
      borderRadius: '50px',
      border: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow:
        '12px 12px 16px 0 rgba(255, 255, 255, 0.15) inset, -8px -8px 12px 0 rgba(0, 0, 0, .25) inset,12px 12px 15px 0 rgba(0, 0, 0, 0.25),-8px -8px 15px 0 rgba(255, 255, 255, 0.15)',
    },
    coldbtn: {
      height: '35px',
      width: '35px',
      color: 'grey',
    },
    footertext4: {
      width: '50px',
      height: '35px',
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      color: 'white',
      marginRight: '10px',
    },
    timerbtn: {
      height: '25px',
      width: '25px',
      color: 'grey',
    },
    footerbtn4: {
      width: '50px',
      height: '50px',
      background: '#383838',
      borderRadius: '50px',
      border: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow:
        '12px 12px 16px 0 rgba(255, 255, 255, 0.15) inset, -8px -8px 12px 0 rgba(0, 0, 0, .25) inset,12px 12px 15px 0 rgba(0, 0, 0, 0.25),-8px -8px 15px 0 rgba(255, 255, 255, 0.15)',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.nav}>
          <button style={styles.navbtn1}>
            <BiMenuAltLeft style={styles.settingsbtn} />
          </button>
          <button style={styles.navbtn2}>
            <CgProfile style={styles.settingsbtn} />
          </button>
        </div>
        <div style={styles.description}>
          <div style={styles.top}>
            <div style={styles.top1}>
              <div style={styles.toptext}>A/C is ON</div>
            </div>
            <div style={styles.top2}>
              <div style={styles.swipe}></div>
            </div>
            <div style={styles.top3}>
              <button style={styles.topbtn}>
                <BsPower style={styles.powerbtn} />
              </button>
            </div>
          </div>
          <div style={styles.content}>
            <div style={styles.contenticon}>
              <div style={styles.contenticon.contenticon1}>
                <div style={styles.contenticon.contenticon1.contenticon2}>
                  69°F
                </div>
              </div>
            </div>

            {/* <div style={styles.content1}>
              <div style={styles.contenttext}>Status</div>
            </div>
            <div style={styles.content2}>
              <div style={styles.contentbox1}>
                <GiBattery50 /> &nbsp; Battery
              </div>
              <div style={styles.contentbox2}>
                <FaLocationArrow /> &nbsp; Range
              </div>
              <div style={styles.contentbox3}>
                <RiTempHotLine /> &nbsp; Temperature
              </div>
              <div style={styles.contentbox4}>54%</div>
              <div style={styles.contentbox5}>255 mi</div>
              <div style={styles.contentbox6}>69 F</div>
            </div> */}
            {/* <div style={styles.content3}>Fan Speed</div> */}
          </div>
          <div style={styles.bottom}>
            <div style={styles.bottomtext1}>Fan Speed</div>
            <div style={styles.bbox1}>1</div>
            <div style={styles.bbox2}>2</div>
            <div style={styles.bbox3}>3</div>
            <div style={styles.bbox4}>4</div>
            <div style={styles.bbox5}>5</div>
            <div style={styles.bottom1}>
              <div style={styles.slider}>
                <div style={styles.slider.sliderbtn}>
                  <div style={styles.slider.sliderbtn.sliderbtndot}></div>
                </div>
              </div>
            </div>
            <div style={styles.bottom2}>
              <div style={styles.bottomtext2}>Mode</div>
            </div>
          </div>
          <div style={styles.footer}>
            <div>
              <div style={styles.footertext1}>Auto</div>
              <button style={styles.footerbtn1}>
                <FaAutoprefixer style={styles.autobtn} />
              </button>
            </div>
            <div>
              <div style={styles.footertext2}>Dry</div>
              <button style={styles.footerbtn2}>
                <TiWaves style={styles.wavesbtn} />
              </button>
            </div>
            <div>
              <div style={styles.footertext3}>Cool</div>
              <button style={styles.footerbtn3}>
                <WiSnowflakeCold style={styles.coldbtn} />
              </button>
            </div>
            <div>
              <div style={styles.footertext4}>Program</div>
              <button style={styles.footerbtn4}>
                <RiTimerLine style={styles.timerbtn} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Neumorphicdesign2;
