import "./App.css";
import Glassmorphism from "./Components/Glassmorphism";
import Flatdesign from "./Components/Flatdesign";
import FlatCard from "./Components/Flatcard";
import Nav from "./Components/Nav.js";
import Main from "./pages/Main";
import Footer from "./Components/Footer.js";
import Neumorphism from "./Components/MorphThree/Neumorphism.js";
import { Route, Switch } from "react-router-dom";
import Thirds from "./Components/Thirds";
import Neumorphicdesign from "./Components/Neumorphicdesign.js";
import MainGlassmorphism from "./pages/MainGlassmorphism";
import MainNeumorphism from "./pages/MainNeumorphism";
import MainFlat from "./pages/MainFlat";
import MainMaterial from "./pages/MainMaterial.js";
import MorphThree from "./pages/MorphThree";
import Flayout from "./pages/Flayout";
import MainSkeumorphic from "./pages/MainSkeuomorphic";

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
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/flayout" exact component={Flayout} />
        <Route path="/glassmorphism" exact component={MainGlassmorphism} />
        <Route path="/neumorphism" exact component={MainNeumorphism} />
        <Route path="/flat" exact component={MainFlat} />
        <Route path="/material" exact component={MainMaterial} />
        <Route path="/thirds" exact component={Thirds} />
        <Route path="/morph" exact component={MorphThree} />
        <Route path="/Skeuomorphism" exact component={MainSkeumorphic} />
        {/* <Main>
          <Neumorphism />
          <Glassmorphism />
          <Flatdesign />
          <FlatCard />
        </Main>{" "} */}
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
