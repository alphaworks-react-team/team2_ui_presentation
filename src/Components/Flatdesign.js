import React from 'react';

const Flatdesign = () => {
  const styles = {
    container: {
      height: '80vh',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    main: {
      width: '20vw',
      height: '60vh',
      background: 'grey',
      position: 'relative',
      // borderRadius: '10px',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    box: {
      // position: 'absolute',
      top: '2vh',
      width: '80%',
      height: '35%',
      background: 'black',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'center',
      color: 'white',
    },
    cardBody: {
      margin: '0px',
      width: '80%',
      height: '40%',
      display: 'flex',
      flexFlow: 'column wrap',
      justifyContent: 'space-around',
      alignItems: 'center',
      title: {
        margin: '0',
        color: 'white',
      },
    },
    btn: {
      // position: 'absolute',
      // top: '2vh',
      width: '150px',
      height: '50px',
      background: 'orange',
      display: 'flex',
      // flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'center',
      border: 'none',
      marginBottom: '30px',
    },
    icon: {},
  };
  return (
    <div style={styles.container}>
      <div style={styles.main}>
        <div style={styles.box}>
          <img src='https://img.icons8.com/fluent/48/000000/cloud.png' />
          <p>65°C</p>
          <p>Oakland, CA</p>
        </div>
        <div style={styles.cardBody}>
          <h3 style={styles.cardBody.title}>Know Your Weather</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla,
            repellendus excepturi. Quam neque delectus amet ea quaerat quisquam
            praesentium ullam enim, culpa blanditiis ducimus consequuntur,
            repellat dolor ut impedit nemo.
          </p>
        </div>
        <button style={styles.btn}>Get Started</button>
      </div>
    </div>
  );
};

export default Flatdesign;
