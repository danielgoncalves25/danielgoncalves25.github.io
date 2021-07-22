import React from "react";
import Button from "react-bootstrap/Button";


const Project = ({ name, desc, imgPath, url, images, liveUrl }) => {
  return (
    <div className="project-container">
      <p id='grey'> {name} </p>
      <div className="project">
        <div
          className="project-front"
          style={{
            backgroundImage: `url(${imgPath})`,
          }}
        >
          
        </div>
        <div className="project-back">
          <div className="back-info">
            <p id="grey">{desc}</p>
            <div className="buttons-flex">

            <Button
              href={url}
              target="_blank"
              size="md"
              variant="outline-light"
            >
              View Source Code
            </Button>
            
            {liveUrl && (
              <Button
                href={liveUrl}
                target="_blank"
                size="md"
                variant="outline-light"
              >
                Live Demo
              </Button>
            )}

            </div>
          </div>
          <span className="images">
            {images.map((img) => {
              return img;
            })}
          </span>
        </div>
      </div>
    </div>
  );
};
export default Project;
