// src/pages/Home.js
import React from 'react';
import { Container, Row, Col, Carousel, Card, Form, Button } from 'react-bootstrap';

const Home = () => (
  <Container fluid className="p-0">
    {/* Hero Section */}
    <section className="hero-section text-center bg-primary text-white py-5" style={{ backgroundImage: 'url(/src/assets/images/hero-background.jpg)' }}>
      <Container>
        <Row>
          <Col>
            <h1>Welcome to Springdale Public School</h1>
            <p className="lead">A brief description of the school.</p>
          </Col>
        </Row>
      </Container>
    </section>

    {/* Carousel Section */}
    <section className="carousel-section py-5">
      <Container>
        <Row>
          <Col>
            <Carousel>
              <Carousel.Item>
                <img className="d-block w-100" src="/src/assets/images/carousel1.jpeg" alt="First slide" />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Description.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src="/src/assets/images/carousel2.jpeg" alt="Second slide" />
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Description.</p>
                </Carousel.Caption>
              </Carousel.Item>
              {/* Add more slides as needed */}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>

    {/* About Us Section */}
    <section className="about-us-section py-5 bg-light">
      <Container>
        <Row>
          <Col>
            <h2>About Us</h2>
            <p>Detailed information about the school's history, vision, mission, and values.</p>
            <p>Message from the principal or head of the institution.</p>
            <p>Information about the school's infrastructure and facilities.</p>
          </Col>
        </Row>
      </Container>
    </section>

    {/* Academics Section */}
    <section className="academics-section py-5">
      <Container>
        <Row>
          <Col>
            <h2>Academics</h2>
            <p>Information about the curriculum offered (e.g., primary, secondary, senior secondary).</p>
            <p>Details of various subjects taught at different levels.</p>
            <p>Information about teaching methodologies and educational resources.</p>
          </Col>
        </Row>
      </Container>
    </section>

    {/* Admissions Section */}
    <section className="admissions-section py-5 bg-light">
      <Container>
        <Row>
          <Col>
            <h2>Admissions</h2>
            <p>Admission process and criteria.</p>
            <p>Downloadable admission forms.</p>
            <p>Important dates and deadlines for admission.</p>
          </Col>
        </Row>
      </Container>
    </section>

    {/* Faculty Section */}
    <section className="faculty-section py-5">
      <Container>
        <Row>
          <Col>
            <h2>Faculty</h2>
            <p>Profiles of the teaching and administrative staff.</p>
            <p>Qualifications and experience of the faculty members.</p>
          </Col>
        </Row>
      </Container>
    </section>

    {/* Students Section */}
    <section className="students-section py-5 bg-light">
      <Container>
        <Row>
          <Col>
            <h2>Students</h2>
            <p>Information about student life, including extracurricular activities, clubs, and societies.</p>
            <p>Achievements and accolades of the students.</p>
            <p>Student council and leadership opportunities.</p>
          </Col>
        </Row>
      </Container>
    </section>

    {/* Gallery Section */}
    <section className="gallery-section py-5">
      <Container>
        <Row>
          <Col>
            <h2>Gallery</h2>
            <p>Photo and video gallery showcasing school events, activities, and infrastructure.</p>
          </Col>
        </Row>
      </Container>
    </section>

    {/* Contact Us Section */}
    <section className="contact-us-section py-5 bg-light">
      <Container>
        <Row>
          <Col>
            <h2>Contact Us</h2>
            <Form>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>
              <Form.Group controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
            <p>School’s address, contact numbers, and email.</p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.123123123!2d-123.123123!3d37.123123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x123123123123123!2sSchool!5e0!3m2!1sen!2s!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="School Location"
            ></iframe>
          </Col>
        </Row>
      </Container>
    </section>
  </Container>
);

export default Home;
