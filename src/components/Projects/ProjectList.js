import React from "react";
import Project from './component/Project';
import { FaPython, FaImdb, FaReact } from "react-icons/fa";
import { SiFlutter, SiFirebase,SiBootstrap } from "react-icons/si";

import coc from "../../assets/coc.png";
import expense from "../../assets/expense.png";
import movie from "../../assets/movies.png";
import shoes from "../../assets/shoes.png";
import zoom from "../../assets/zoom.png";

const allProjects = [
  {
    name: "Clash of Clans Tracker",
    desc:
      "This is a mobile Clash of Clans App that allows users to search for other's Clash of Clans profile using their player tag provided in game. This is possible using the Clash of Clans API. I am still currently working on this project and plan on adding more useful features soon.",
    imgPath: coc,
    url: "https://github.com/danielgoncalves25/coc-app",
    liveUrl: null,
    images: [<SiFlutter size="2rem" />],
  },
  {
    name: "Expense Budget App",
    desc:
      "This is an app that keeps track of recent transations made. Users can input the amount and transaction summary. There is a chart that displays that amount spent throughtout the last week.",
    imgPath: expense,
    url: "https://github.com/danielgoncalves25/Expenses-App",
    liveUrl: null,
    images: [<SiFlutter size="2rem" />],
  },
  {
    name: "Movie Searcher",
    desc:
      "This is an web application that allows users to view which movies are recently trending and search for their favorite movies.",
    imgPath: movie,
    url: "https://github.com/danielgoncalves25/Movie-Search",
    liveUrl: "https://danielgoncalves25.github.io/Movie-Search/",
    images: [
      <FaReact size="2rem" />,
      <SiBootstrap size="2rem" />,
      <FaImdb size="2.5rem" />,
    ],
  },
  {
    name: "Shoe E-commerece App",
    desc:
      "Allows users to shop, and add shoes to cart for checkout. Users will be required to login or register before shopping. Mobile application built using Flutter, Firebase, and Sneaker Database API.",
    imgPath: shoes,
    url: "https://github.com/danielgoncalves25/shoes-shop",
    liveUrl: null,
    images: [
      <SiFlutter size="2rem" />,
      <SiFirebase size="2rem" />,
    ],
  },
  {
    name: "Zoom Automation",
    desc:
      "A simple automation script to join a zoom meeting. This was built using Python and Selenium.",
    imgPath: zoom,
    url: "https://github.com/danielgoncalves25/zoom-automation",
    liveUrl: null,
    images: [
      <FaPython size="2rem" />,
    ],
  },
];

const ProjectList = () => {
  return (
      <section id="projects">
        <h1 id="title"> My Projects </h1>
        <div className="project-list">
          {allProjects.map((project) => {
            return <Project key={project.name} {...project} />;
          })}
        </div>
      </section>
  );
};

export default ProjectList;