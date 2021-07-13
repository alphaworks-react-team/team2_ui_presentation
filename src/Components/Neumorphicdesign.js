import React from 'react';
import arrow_l from '../image/leftarrowari.png';
import arrow_r from '../image/rightarrowari.png';
import heart from '../image/heartari.png';

const Neumorphicdesign = () => {
  const styles = {
    container: {
      height: '80vh',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    main: {
      maxHeight: '100%',
      width: '400px',
      height: '650px',
      background: 'rgb(87,87,87)',
      background:
        'linear-gradient(180deg, rgba(87,87,87,1) 0%, rgba(25,25,25,1) 100%)',
      borderRadius: '20px',
      display: 'flex',
      flexFlow: 'wrap',
      justifyContent: 'flex-end',
      position: 'relative',
      boxShadow:
        '35px 35px 40px 0 rgba(46, 5, 16, 0.4), -10px -10px 20px 0 rgb(237, 120, 149)',
      border: 'solid 1px #575757',
      borderRadius: '25px',
    },
    description: {
      maxHeight: '100%',
      width: '400px',
      height: '300px',
      // backgroundRepeat: 'no-repeat',
      // backgroundSize: 'cover',
      borderTopLeftRadius: '20px',
      borderTopRightRadius: '20px',
      // borderBottomRightRadius: '40px',
    },
    btn1: {
      width: '60px',
      height: '60px',
      backgroundImage: `url(${arrow_l})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: '25px 25px',
      background: '#383838',
      // background:
      //   'linear-gradient(315deg, rgba(40,40,40,.8) 27%, rgba(60,60,60,.8) 70%)',
      borderRadius: '50px',
      border: 'none',
      // boxShadow: '0px 0px 10px 15px rgba(90, 90, 90)',
      boxShadow:
        '12px 12px 16px 0 rgba(255, 255, 255, 0.15) inset, -8px -8px 12px 0 rgba(0, 0, 0, .25) inset,12px 12px 15px 0 rgba(0, 0, 0, 0.25),-8px -8px 15px 0 rgba(255, 255, 255, 0.15)',
      transform: `translate(310px, 30px)`,
    },
    body: {
      maxHeight: '100%',
      width: '400px',
      height: '100px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      content: {
        width: '80%',
        height: '80%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'lightgrey',
        padding: '10px',
      },
    },
    button: {
      maxHeight: '100%',
      width: '400px',
      height: '150px',
      borderBottomLeftRadius: '20px',
      borderBottomRightRadius: '20px',
      display: 'flex',
      justifyContent: 'center',
    },
    btn2: {
      width: '120px',
      height: '120px',
      backgroundImage: `url(${heart})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: '25px 25px',
      background:
        'linear-gradient(315deg, rgba(67,157,226,1) 17%, rgba(64,73,162,1) 100%)',
      borderRadius: '50%',
      border: 'none',
      // boxShadow:
      //   '5px 5px 8px 0 rgba(87,87,87,0.7), -5px -5px 8px 0 rgb(87,87,87,0.7)',
      boxShadow:
        '6px 6px 15px 0 rgba(0, 0, 0, 0.2) inset, -6px -6px 15px 0 rgba(255, 255, 255, 0.3) inset, 10px 10px 34px 0 rgba(0, 0, 0, 0.2), -10px -10px 34px 0 rgba(255, 255, 255, 0.3)',
      border: 'solid 3px #439de2',
    },
  };
  return (
    <div style={styles.container}>
      <div style={styles.main}>
        <div style={styles.description}>
          <button style={styles.btn1}></button>
        </div>
        <div style={styles.body}>
          <div style={styles.body.content}>TEAM 2</div>
        </div>
        <div style={styles.button}>
          <button style={styles.btn2}></button>
        </div>
      </div>
    </div>
  );
};

export default Neumorphicdesign;
