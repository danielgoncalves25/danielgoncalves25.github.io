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
          <Carousel.Item className="carousel">
            <img className="" src={zoom} alt="First slide" />
          </Carousel.Item>

          <Carousel.Item className="carousel">
            <img className="" src={shoes} alt="Second slide" />
          </Carousel.Item>
        </Carousel>
      </Modal.Body>
    </Modal>
  );
};

export default SlideShow;
