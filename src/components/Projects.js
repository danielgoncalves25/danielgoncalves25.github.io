import React from "react";
import Button from "react-bootstrap/Button";

import bg from "../assets/background-pic.jpg";
const description =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley oftype and scrambled it to make a type specimen book. It has survived not only five centuries, but also";
const projects = [
  {
    name: "Clash of Clans Tracker",
    desc:
      "This is a mobile Clash of Clans App that allows users to search for other's Clash of Clans profile using their player tag provided in game. This is possible using the Clash of Clans API. I am still currently working on this project and plan on adding more useful features soon.",
    imgPath: bg,
    url: "https://github.com/danielgoncalves25/coc-app",
  },
  {
    name: "Expense App",
    desc:
      "This is an app that keeps track of recent transations made. Users can input the amount and transaction summary. There is a chart that displays that amount spent throughtout the last week.",
    imgPath: bg,
    url: "https://github.com/danielgoncalves25/Expenses-App",
  },
  {
    name: "Movies App",
    desc: description,
    imgPath: bg,
    url: "#",
  },
];

const Project = (props) => {
  const { name, desc, imgPath, url } = props;
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
            <p> {name}</p>
          </div>
          <div className="project-back">
            <p>{desc}</p>
            <Button
              href={url}
              target="_blank"
              size="lg"
              variant="outline-light"
            >
              View Source Code
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

const ProjectList = () => {
  return (
    <div className="project-list">
      {projects.map((project) => {
        return <Project key={project.name} {...project} />;
      })}
    </div>
  );
};

export default ProjectList;
