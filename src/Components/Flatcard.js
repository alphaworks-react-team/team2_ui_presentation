import React from 'react';
import arrow_l from '../image/leftarrowari.png';
import arrow_r from '../image/rightarrowari.png';
import heart from '../image/heartari.png';

const FlatCard = () => {
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
      background: 'white',
      borderRadius: '20px',
      display: 'flex',
      flexWrap: 'wrap',
      // justifyContent: 'flex-start',
      alignContent: 'flex-start',
      position: 'relative',
    },
    description: {
      maxHeight: '100%',
      width: '400px',
      height: '350px',
      backgroundImage: `url("https://picsum.photos/600")`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      borderTopLeftRadius: '20px',
      borderTopRightRadius: '20px',
      // borderBottomRightRadius: '40px',
    },
    body: {
      maxHeight: '100%',
      width: '400px',
      height: '200px',
      // borderTopLeftRadius: '40px',
      background: 'grey',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      content: {
        width: '80%',
        height: '100%',
        marginTop: '70px',
      },
    },
    button: {
      maxHeight: '100%',
      width: '400px',
      height: '100px',
      background: 'grey',
      borderBottomLeftRadius: '20px',
      borderBottomRightRadius: '20px',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    btn1: {
      width: '60px',
      height: '60px',
      backgroundImage: `url(${arrow_l})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: '25px 25px',
      backgroundColor: 'orange',
      borderRadius: '50px',
      border: 'none',
    },
    btn2: {
      width: '50px',
      height: '50px',
      backgroundImage: `url(${heart})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: '25px 25px',
      backgroundColor: 'orange',
      borderRadius: '50px',
      border: 'none',
    },
    btn3: {
      width: '60px',
      height: '60px',
      backgroundImage: `url(${arrow_r})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: '25px 25px',
      backgroundColor: 'orange',
      borderRadius: '50px',
      border: 'none',
    },
  };
  return (
    <div style={styles.container}>
      <div style={styles.main}>
        <div style={styles.description}></div>
        <div style={styles.body}>
          <div style={styles.body.content}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla,
            repellendus excepturi. Quam neque delectus amet ea quaerat quisquam
            praesentium ullam enim, culpa blanditiis ducimus consequuntur,
            repellat dolor ut impedit nemo.
          </div>
        </div>
        <div style={styles.button}>
          <button style={styles.btn1}></button>
          <button style={styles.btn2}></button>
          <button style={styles.btn3}></button>
        </div>
      </div>
    </div>
  );
};

export default FlatCard;
