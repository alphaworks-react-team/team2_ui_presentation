import "./App.css";
import Nav from "./Components/Nav.js";
import Main from "./pages/Main";
import Footer from "./Components/Footer.js";
import { Route, Switch } from "react-router-dom";
import Thirds from "./Components/Thirds";
import MainGlassmorphism from "./pages/MainGlassmorphism";
import MainNeumorphism from "./pages/MainNeumorphism";
import MainFlat from "./pages/MainFlat";
import MainMaterial from "./pages/MainMaterial.js";
import MorphThree from "./pages/MorphThree";
import Flayout from "./pages/Flayout";
import MainSkeumorphic from "./pages/MainSkeuomorphic";

function App() {
  const styles = {
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
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
