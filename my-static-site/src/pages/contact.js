import React, { Component } from "react";
import { Head } from "react-static";
import Navbar from "../components/Navbar";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import "../css/icon.css";
import "../css/contact.css";

const formEndpoint = "https://formspree.io/xdqknwlm";

class Contact extends Component {
  render() {
    return (
      <div>
        <Head>
          <title>Contact</title>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          ></link>
        </Head>
        <Navbar />
        <article id="main" className="contact-background">
          <Container>
            <header className="text-center">
              <span className="icon fa-envelope featured" />
              <h2 id="contact-header">Get In Touch</h2>
              <p>Use the form below to send us an email!</p>
            </header>

            <section className="wrapper style2 special container medium">
              <Form
                className="contact-form"
                action={formEndpoint}
                method="POST"
              >
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      name="name"
                      type="text"
                      placeholder="Enter name"
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      name="email"
                      type="email"
                      placeholder="Enter email"
                    />
                  </Form.Group>
                </Form.Row>

                <Form.Group controlId="formGridSubject">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control name="subject" placeholder="Enter subject" />
                </Form.Group>

                <Form.Group controlId="formGridMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    name="message"
                    as="textarea"
                    rows="3"
                    placeholder="Enter Message"
                  />
                </Form.Group>

                <Button id="submitButton" variant="primary" type="submit">
                  Send
                </Button>
              </Form>
            </section>
          </Container>
        </article>
      </div>
    );
  }
}
export default Contact;
