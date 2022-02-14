import React from 'react';

const Main = () => {
  const styles = {
    width: '100%',
    minHeight: '80vh',
    jumbotron: {
      width: '100%',
      height: '80vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    h1: {
      width: '40vw',
      color: 'white',
      fontSize: '100px',
    },
  };

  return (
    <div style={styles}>
      <div style={styles.jumbotron}>
        <h1 style={styles.h1}>DESIGN IS AN INTEGRAL PART OF WEB DEVELOPMENT</h1>
      </div>
    </div>
  );
};

export default Main;
