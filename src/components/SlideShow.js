import React, { useState, useContext } from "react";
import Carousel from "react-bootstrap/Carousel";
import shoes from "../assets/shoes.png";
import zoom from "../assets/zoom.png";
import Modal from "react-bootstrap/Modal";

import { ProjectContext } from "../service";
const SlideShow = () => {
  const { value1 } = useContext(ProjectContext);
  const [isModal, setIsModal] = value1;
  return (
    <Modal show={isModal} onHide={() => setIsModal(false)} size="lg">
      <Modal.Body>
        <Carousel>
          <Carousel.Item className="project-front">
            <img className="w-100" src={zoom} alt="First slide" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="project-front">
            <img className="w-100" src={shoes} alt="Second slide" />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Modal.Body>
    </Modal>
  );
};

export default SlideShow;
