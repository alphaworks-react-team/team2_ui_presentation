import "./App.css";
import Glassmorphism from "./Components/Glassmorphism";
import Flatdesign from "./Components/Flatdesign";
import FlatCard from "./Components/Flatcard";
import Nav from "./Components/Nav.js";
import Main from "./Components/Main.js";
import Footer from "./Components/Footer.js";
import Neumorphism from "./Components/Neumorphism.js"

function App() {
  const styles = {
    // backgroundImage: `url("https://i.pinimg.com/originals/db/1d/d2/db1dd2566264bd67962dd9bb5fd65644.jpg")`,
    backgroundImage: `url(https://res.cloudinary.com/practicaldev/image/fetch/s--_MCEk7P6--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/vm957e5dm3hxnwc94dd7.jpg)`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    
  };

  return (
    <div className="App" style={styles}>
      <Nav />
      <Main>
        <Neumorphism />
        <Glassmorphism />
        <Flatdesign />
        <FlatCard />
      </Main>
      <Footer />
    </div>
  );
}

export default App;
