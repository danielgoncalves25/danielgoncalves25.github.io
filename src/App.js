import "./App.css";
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import ProjectList from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import { Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Route path="/" exact component={Home} />
        <Route path="/projects" exact component={ProjectList} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
      </Router>
    </div>
  );
}

export default App;
