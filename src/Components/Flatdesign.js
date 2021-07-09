import React from 'react';

const Flatdesign = () => {
  const styles = {
    container: {
      margin: 'auto',
      height: '80vh',
      // backgroundImage: `url("https://i.pinimg.com/originals/db/1d/d2/db1dd2566264bd67962dd9bb5fd65644.jpg")`,
      // backgroundRepeat: 'no-repeat',
      // backgroundSize: 'cover',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    main: {
      width: '20vw',
      height: '60vh',
      background: 'grey',
      position: 'relative',
      borderRadius: '10px',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    box: {
      position: 'absolute',
      top: '2vh',
      width: '150px',
      height: '150px',
      background: 'black',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'center',
      color: 'white',
    },
    btn: {
      // position: 'absolute',
      // top: '2vh',
      width: '150px',
      height: '50px',
      background: 'orange',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'center',
      border: 'none',
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
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla,
          repellendus excepturi. Quam neque delectus amet ea quaerat quisquam
          praesentium ullam enim, culpa blanditiis ducimus consequuntur,
          repellat dolor ut impedit nemo.
        </p>
        <button style={styles.btn}>Get Started</button>
      </div>
    </div>
  );
};

export default Flatdesign;
