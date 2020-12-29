import React from "react";
import Button from "react-bootstrap/Button";
import { FaPython } from "react-icons/fa";
import { SiFlutter } from "react-icons/si";

import coc from "../assets/coc.png";
import expense from "../assets/expense.png";

// import SlideShow from "./SlideShow";
// const description =
//   "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley oftype and scrambled it to make a type specimen book. It has survived not only five centuries, but also";
const projects = [
  {
    name: "",
    desc:
      "This is a mobile Clash of Clans App that allows users to search for other's Clash of Clans profile using their player tag provided in game. This is possible using the Clash of Clans API. I am still currently working on this project and plan on adding more useful features soon.",
    imgPath: coc,
    url: "https://github.com/danielgoncalves25/coc-app",
    images: [<SiFlutter size="2rem" />, <FaPython size="2rem" />],
  },
  {
    name: "",
    desc:
      "This is an app that keeps track of recent transations made. Users can input the amount and transaction summary. There is a chart that displays that amount spent throughtout the last week.",
    imgPath: expense,
    url: "https://github.com/danielgoncalves25/Expenses-App",
    images: [<SiFlutter size="2rem" />],
  },
];

const Project = (props) => {
  const { name, desc, imgPath, url, images } = props;
  return (
    <>
      <div className="project-container">
        <div className="project">
          <div
            className="project-front"
            style={{
              backgroundImage: `url(${imgPath})`,
            }}
          >
            <p id="grey"> {name}</p>
          </div>
          <div className="project-back">
            <p id="grey">{desc}</p>
            <Button
              href={url}
              target="_blank"
              size="lg"
              variant="outline-light"
            >
              View Source Code
            </Button>
            <span className="images">
              {images.map((img) => {
                return img;
              })}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

const ProjectList = () => {
  return (
    <>
      <section id="projects">
        <h1 id="title"> My Projects </h1>
        <div className="project-list">
          {projects.map((project) => {
            return <Project key={project.name} {...project} />;
          })}
        </div>
      </section>
    </>
  );
};

export default ProjectList;
