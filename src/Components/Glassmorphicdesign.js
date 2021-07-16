import React from 'react';
import '../App.css';

const Glassmorphicdesign = () => {
  const styles = {
    container: {
      height: '80vh',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    nav: {
      maxHeight: '100%',
      width: '400px',
      height: '650px',
      background: 'rgba(255,255,255,.4)',
      backdropFilter: 'blur(4px)',
      display: 'flex',
      flexFlow: 'wrap',
      justifyContent: 'flex-end',
      position: 'relative',
      boxShadow:
        '35px 35px 40px 0 rgba(46, 5, 16, 0.4), -10px -10px 20px 0 rgb(255, 255, 255, 0.3)',
      border: '1px solid rgba( 255, 255, 255, 0.18 )',
      borderRadius: '25px',
    },
    header: {
      maxHeight: '30%',
      width: '400px',
      height: '190px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
      marginTop: '10px',
    },
    photo: {
      width: '180px',
      height: '180px',
      background: 'rgba(255,255,255,.4)',
      backdropFilter: 'blur(0px)',
      borderRadius: '50%',
    },
    body: {
      maxHeight: '20%',
      width: '400px',
      height: '130px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      width: '350px',
      height: '150px',
      display: 'flex',
      flexFlow: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    text1: {
      width: '350px',
      height: '75px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
      fontSize: '45px',
    },
    text2: {
      width: '350px',
      height: '75px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '35px',
      color: 'rgba(255,255,255)',
    },
    content: {
      maxHeight: '50%',
      width: '400px',
      height: '330px',
      display: 'flex',
      flexFlow: 'column',
      justifyContent: 'space-evenly',
      alignItems: 'center',
    },
    links: {
      width: '300px',
      height: '50px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '15px',
      background: 'white',
      border: 'none',
      background: 'none',
      fontSize: '25px',
      color: 'purple',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.nav}>
        <div style={styles.header}>
          <div style={styles.photo}></div>
        </div>
        <div style={styles.body}>
          <div style={styles.text}>
            <div style={styles.text1}>Glassmorphic</div>
            <div style={styles.text2}>Design</div>
          </div>
        </div>
        <div style={styles.content}>
          <button className='hover' style={styles.links}>
            Home
          </button>
          <button className='hover' style={styles.links}>
            About
          </button>
          <button className='hover' style={styles.links}>
            Portfolio
          </button>
          <button className='hover' style={styles.links}>
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default Glassmorphicdesign;
