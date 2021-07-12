import React from 'react';
import arrow from '../image/big-left-arrow.png';

const FlatCard = () => {
  const styles = {
    container: {
      height: '80vh',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    main: {
      width: '30vw',
      height: '60vh',
      background: 'white',
      borderRadius: '20px',
      display: 'flex',
      flexWrap: 'wrap',
      // justifyContent: 'flex-start',
      alignContent: 'flex-start',
      position: 'relative',
    },
    description: {
      width: '30vw',
      height: '35vh',
      backgroundImage: `url("https://picsum.photos/600")`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      borderTopLeftRadius: '20px',
      borderTopRightRadius: '20px',
      // borderBottomRightRadius: '40px',
    },
    body: {
      width: '30vw',
      height: '15vh',
      // borderTopLeftRadius: '40px',
      background: 'grey',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      content: {
        width: '80%',
        height: '100%',
        marginTop: '50px',
      },
    },
    button: {
      width: '30vw',
      height: '10vh',
      background: 'grey',
      borderBottomLeftRadius: '20px',
      borderBottomRightRadius: '20px',
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    btn: {
      width: '50px',
      height: '50px',
      backgroundImage: `url(${arrow})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: '25px 25px',
      backgroundColor: 'orange',
      borderRadius: '50px',
      border: 'none',
      marginLeft: '40px',
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
          <button style={styles.btn}></button>
        </div>
      </div>
    </div>
  );
};

export default FlatCard;
