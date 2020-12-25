import React from "react";
import Button from "react-bootstrap/Button";
//Asset files
// import bg from "../assets/background-pic.jpg";
import resume from "../assets/CS_resume(fall2020).pdf";

const Home = () => {
  return (
    <section className="home-container">
      <div className="text-container">
        <p className="text"> Daniel Goncalves </p>
        <Button href={resume} target="_blank" size="lg" variant="outline-light">
          Resume
        </Button>
        <Button href="/projects" size="lg" variant="outline-light">
          Projects
        </Button>
      </div>
    </section>
  );
};

export default Home;
