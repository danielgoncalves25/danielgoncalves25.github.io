import React from "react";
import Button from "react-bootstrap/Button";
//Asset files
import res from "../assets/resume.pdf";

const Home = () => {
  return (
    <section id="home" className="home-container">
      <div className="text-container">
        <p id="title"> Daniel Goncalves </p>
        <Button href={res} target="_blank" size="lg" variant="outline-light">
          Resume
        </Button>
        <Button href="#projects" size="lg" variant="outline-light">
          Projects
        </Button>
      </div>
    </section>
  );
};

export default Home;
