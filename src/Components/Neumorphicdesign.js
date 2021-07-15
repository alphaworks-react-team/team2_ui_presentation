import React from 'react';
import { BsPower } from 'react-icons/bs';
import { FiSettings } from 'react-icons/fi';

const Neumorphicdesign = () => {
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
      height: '700px',
      background: 'rgb(87,87,87)',
      background:
        'linear-gradient(180deg, rgba(87,87,87,1) 0%, rgba(25,25,25,1) 100%)',
      display: 'flex',
      flexFlow: 'wrap',
      justifyContent: 'flex-end',
      position: 'relative',
      boxShadow:
        '35px 35px 40px 0 rgba(46, 5, 16, 0.4), -10px -10px 20px 0 rgb(237, 120, 149)',
      border: 'solid 1px #575757',
      borderRadius: '25px',
    },
    nav: {
      maxHeight: '20%',
      width: '400px',
      height: '100px',
      borderTopLeftRadius: '20px',
      borderTopRightRadius: '20px',
    },
    btn1: {
      width: '60px',
      height: '60px',
      backgroundSize: '25px 25px',
      background: '#383838',
      borderRadius: '50px',
      border: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow:
        '12px 12px 16px 0 rgba(255, 255, 255, 0.15) inset, -8px -8px 12px 0 rgba(0, 0, 0, .25) inset,12px 12px 15px 0 rgba(0, 0, 0, 0.25),-8px -8px 15px 0 rgba(255, 255, 255, 0.15)',
      transform: `translate(310px, 30px)`,
    },
    settingsbtn: {
      height: '20px',
      width: '20px',
      color: 'grey',
    },
    description: {
      maxHeight: '40%',
      width: '400px',
      height: '250px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      dcontent: {
        width: '80%',
        height: '80%',
        backgroundImage: `url("https://picsum.photos/600")`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        padding: '10px',
      },
    },
    body: {
      maxHeight: '20%',
      width: '400px',
      height: '200px',
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
      maxHeight: '20%',
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
      background:
        'linear-gradient(315deg, rgba(67,157,226,1) 17%, rgba(64,73,162,1) 100%)',
      borderRadius: '50%',
      border: 'none',
      boxShadow:
        '6px 6px 15px 0 rgba(0, 0, 0, 0.3) inset, -6px -6px 15px 0 rgba(255, 255, 255, 0.3) inset, 10px 10px 34px 0 rgba(0, 0, 0, 0.2), -7px -7px 30px 0 rgba(255, 255, 255, 0.25)',
      border: 'solid 3px #439de2',
    },
    powerbtn: {
      height: '40px',
      width: '40px',
      color: 'white',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.nav}>
          <button style={styles.btn1}>
            <FiSettings style={styles.settingsbtn} />
          </button>
        </div>
        <div style={styles.description}>
          <div style={styles.description.dcontent}>Neumorphic</div>
        </div>
        <div style={styles.body}>
          <div style={styles.body.content}>TEAM 2</div>
        </div>
        <div style={styles.button}>
          <button style={styles.btn2}>
            <BsPower style={styles.powerbtn} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Neumorphicdesign;
