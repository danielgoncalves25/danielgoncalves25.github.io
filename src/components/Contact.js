import React, { useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Toast from 'react-bootstrap/Toast';
import { FcCheckmark  } from "react-icons/fc";

import emailjs from "emailjs-com"

import {publicKey, serviceID} from "../service/keys"
import { ToastBody } from "react-bootstrap";

const Contact = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState( "");
  const [message, setMessage] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [invalidName, setInvalidName] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [invalidMessage, setInvalidMessage] = useState(false);
  
  const validateForm = () => {
    if (name === ""){
      setInvalidName(true);
      return false
    } else {
      setInvalidName(false);
    }

    if (message === ""){
      setInvalidMessage(true);
      return false
    } else {
      setInvalidMessage(false);
    }

    if (!email.match(/.+@.+\.[A-Za-z]+$/) || email===""){
      setInvalidEmail(true);
      return false
    } else {
      setInvalidEmail(false);
    }

    return true
  }
  
  const sendEmail = (e) => {
    e.preventDefault();
    if (validateForm()){
      emailjs.sendForm(serviceID, 'template_7dlxl8q', e.target, publicKey)
        .then((result) => {
            console.log(result.text);
            setShowToast(true);
        }, (error) => {
            console.log(error.text);
        });
      setName("");
      setEmail("");
      setMessage("");
      e.target.reset();
    }
  };
  
  return (
    <>

      <section id="contact" className="contact-container">
        <h1 id="title"> Contact</h1>
        <Toast className="toast-container" bg='success' show={showToast}  onClose={() => setShowToast(false)} delay={5000} autohide>
          <Toast.Body>
            Successfully sent
           <FcCheckmark size="1.5rem"/>
          </Toast.Body>
        </Toast>
        <div className="form-container">
          <Form ref={form} onSubmit={sendEmail} className="w-400">
            <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control onChange={(e) => setName(e.target.value)}type="input" isInvalid={invalidName} placeholder="Enter first and last name" name="name"/>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control onChange={(e) => setEmail(e.target.value)}type="email" isInvalid={invalidEmail} placeholder="Enter email" name="email"/>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Message</Form.Label>
              <Form.Control onChange={(e) => setMessage(e.target.value)} as="textarea" isInvalid={invalidMessage}rows={6} name="message"/>
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </section>
    </>
  );
};
export default Contact;
