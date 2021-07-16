import React from 'react';

const Flayout = () => {
  const styles = {
    layout: {
      width: '100%',
      height: '80vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    main: {
      width: '80%',
      height: '80vh',
      background: 'white',
      display: 'flex',
      flexFlow: 'wrap column',
      alignContent: 'flex-start',
    },
    jumbotron: {
      width: '100%',
      height: '20vh',
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      // background: 'blue',
    },
    jb_text: {
      width: '80%',
      height: '80%',
      // background: 'black',
    },
    body: {
      width: '100%',
      height: '60vh',
      // background: 'coral',
      display: 'flex',
      flexFlow: 'wrap column',
    },
    box1: {
      width: '100%',
      height: '20vh',
      // background: 'yellow',
      display: 'flex',
      flexFlow: 'row',
    },
    box2: {
      width: '100%',
      height: '20vh',
      // background: 'grey',
      display: 'flex',
      flexFlow: 'row',
    },
    box3: {
      width: '100%',
      height: '20vh',
      // background: 'orange',
      display: 'flex',
      flexFlow: 'row',
    },
    nest_box1: {
      width: '30%',
      height: '20vh',
      background: 'purple',
    },
    nest_box2: {
      width: '70%',
      height: '20vh',
      background: 'green',
    },
  };

  return (
    <div style={styles.layout}>
      <div style={styles.main}>
        <div style={styles.jumbotron}>
          <div style={styles.jb_text}>
            <h1>Hello, World</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore, labore?</p>
            <hr />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur in rem inventore delectus sint unde.</p>
            
          </div>
        </div>
        <div style={styles.body}>
          <div style={styles.box1}>
            <div style={styles.nest_box1}></div>
            <div style={styles.nest_box2}></div>
          </div>
          <div style={styles.box2}>
            <div style={styles.nest_box1}></div>
            <div style={styles.nest_box2}></div>
          </div>
          <div style={styles.box3}>
            <div style={styles.nest_box1}></div>
            <div style={styles.nest_box2}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flayout;
