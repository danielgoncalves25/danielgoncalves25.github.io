import "./App.css";
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import ProjectList from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
// import { Route, BrowserRouter as Router } from "react-router-dom";

import SmoothScroll from "smooth-scroll";
// import SlideShow from "./components/SlideShow";

function App() {
  var scroll = new SmoothScroll('a[href*="#"]', { speed: 1000 });

  return (
    <>
      <div className="App">
        <NavBar />
        <Home />
        <ProjectList />
        <About />
        <Contact />
        {/* <SlideShow /> */}
      </div>
    </>
  );
}

export default App;
