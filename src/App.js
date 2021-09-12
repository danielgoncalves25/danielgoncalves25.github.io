import "./App.css";
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import ProjectList from "./components/Projects/ProjectList";
import About from "./components/About";
import Contact from "./components/Contact";
import SlideShow from "./components/SlideShow";
import { ProjectProvider } from "./service";

import SmoothScroll from "smooth-scroll";

function App() {
  var scroll = new SmoothScroll('a[href*="#"]', { speed: 1000 });

  return (
    <ProjectProvider>
      <div className="App">
        <NavBar />
        <Home />
        <ProjectList />
        <About />
        <Contact />
        <SlideShow />
      </div>
    </ProjectProvider>
  );
}

export default App;
