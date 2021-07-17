import React from "react";

const Flayout = () => {
  const styles = {
    layout: {
      width: "100%",
      height: "auto",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    main: {
      width: "80%",
      height: "auto",
      margin: "100px",
      background: "white",
      display: "flex",
      flexFlow: "wrap column",
      alignContent: "flex-start",
      borderRadius: "3rem",
    },
    jumbotron: {
      width: "100%",
      height: "20vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      // background: 'blue',
    },
    jb_text: {
      width: "80%",
      height: "80%",
      // background: 'black',
    },
    body: {
      width: "100%",
      height: "auto",
      // background: 'coral',
      display: "flex",
      flexFlow: "wrap column",
      alignItems: "center",
    },
    box1: {
      width: "80%",
      height: "300px",
      // background: 'yellow',
      display: "flex",
      flexFlow: "row",
      justifyContent: "space-around",
      alignItems: "center",
      borderBottom: "1px solid grey",
    },
    box2: {
      width: "80%",
      height: "300px",
      // background: 'yellow',
      display: "flex",
      flexFlow: "row",
      justifyContent: "space-around",
      alignItems: "center",
      borderBottom: "1px solid grey",
    },
    box3: {
      width: "80%",
      height: "300px",
      // background: 'yellow',
      display: "flex",
      flexFlow: "row",
      justifyContent: "space-around",
      alignItems: "center",
    },
    pictureBox1: {
      width: "300px",
      height: "200px",
      backgroundImage: "url(https://picsum.photos/200/300?random=1)",
      backgroundRepeat: "none",
      backgroundSize: "cover",
    },
    pictureBox2: {
      width: "300px",
      height: "200px",
      backgroundImage: "url(https://picsum.photos/200/300?random=2)",
      backgroundRepeat: "none",
      backgroundSize: "cover",
    },
    pictureBox3: {
      width: "300px",
      height: "200px",
      backgroundImage: "url(https://picsum.photos/200/300?random=3)",
      backgroundRepeat: "none",
      backgroundSize: "cover",
    },
    nest_box2: {
      width: "50%",
      height: "300px",
      display: "flex",
      flexFlow: "column",
      justifyContent: "space-around",
      // alignItems: "space-around",
      // alignContent: "space-around",

      // background: "green",
    },
    titleText: {
      borderBottom: "1px solid black",
    },
  };

  return (
    <div style={styles.layout}>
      <div style={styles.main}>
        <div style={styles.jumbotron}>
          <div style={styles.jb_text}>
            <h1>Hello, World</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Inventore, labore?
            </p>
            <hr />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur
              in rem inventore delectus sint unde.
            </p>
          </div>
        </div>
        <div style={styles.body}>
          <div style={styles.box1}>
            <div style={styles.pictureBox1}></div>
            <div style={styles.nest_box2}>
              <h1 style={styles.titleText}>Title</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Doloribus voluptatibus quo sed, quam sit perspiciatis blanditiis
                vel, molestiae vitae cum consequatur reprehenderit nobis aut
                nesciunt molestias nulla dolorem! Ab, qui! Lorem ipsum dolor,
                sit amet consectetur adipisicing elit. Dolore quisquam quae
                placeat earum.
              </p>
            </div>
          </div>
          <div style={styles.box2}>
            <div style={styles.pictureBox2}></div>
            <div style={styles.nest_box2}>
              <h1 style={styles.titleText}>Title</h1>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Doloribus voluptatibus quo sed, quam sit perspiciatis blanditiis
              vel, molestiae vitae cum consequatur reprehenderit nobis aut
              nesciunt molestias nulla dolorem! Ab, qui! Lorem ipsum dolor, sit
              amet consectetur adipisicing elit. Dolore quisquam quae placeat
              earum.
            </div>
          </div>
          <div style={styles.box3}>
            <div style={styles.pictureBox3}></div>
            <div style={styles.nest_box2}>
              <h1 style={styles.titleText}>Title</h1>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Doloribus voluptatibus quo sed, quam sit perspiciatis blanditiis
              vel, molestiae vitae cum consequatur reprehenderit nobis aut
              nesciunt molestias nulla dolorem! Ab, qui! Lorem ipsum dolor, sit
              amet consectetur adipisicing elit. Dolore quisquam quae placeat
              earum.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flayout;
