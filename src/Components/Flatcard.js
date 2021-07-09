import React from 'react';

const FlatCard = () => {
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
    content: {
      width: '30vw',
      height: '15vh',
      // borderTopLeftRadius: '40px',
      background: 'grey',
    },
    button: {
      width: '30vw',
      height: '10vh',
      background: 'grey',
      borderBottomLeftRadius: '20px',
      borderBottomRightRadius: '20px',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    btn: {
      width: '5vw',
      height: '5vh',
      background: 'orange',
      borderRadius: '50px',
      border: 'none',
      marginRight: '20px',
    },
  };
  return (
    <div style={styles.container}>
      <div style={styles.main}>
        <div style={styles.description}></div>
        <div style={styles.content}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla,
          repellendus excepturi. Quam neque delectus amet ea quaerat quisquam
          praesentium ullam enim, culpa blanditiis ducimus consequuntur,
          repellat dolor ut impedit nemo.
        </div>
        <div style={styles.button}>
          <button style={styles.btn}></button>
        </div>
      </div>
    </div>
  );
};

export default FlatCard;
