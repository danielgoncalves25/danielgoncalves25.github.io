import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

// function submit( message) {
//   window.open(`mailto:${email}?subject=subject&body=${message}`);
// }

//Mandrill need API key
const Contact = () => {
  return (
    <section id="contact" className="contact-container">
      <h1 id="title"> Contact</h1>
      <div className="form-container">
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </section>
  );
};
export default Contact;
