import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Aboutme = () => {
  return (
    <section className="contact" id="aboutme">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Hi! here's a few things about me...</h2>
                <p>My name is Andro Rezkalla, I am an aspiring Computer Science student at the College of Staten Island</p>
                <p>I started learning coding in High School and have been interested in a career in tech ever since! 
                  Some of my interests in computer science include:</p> 
                    <p>* Machine Learning </p> 
                    <p>* Neural Networking</p>
                    <p>* Artificial Intellegence</p>
                <p> My interests in computer science and robotics were sparked after I participated in my local Robotics Club,
                  FRC Team 333 at John Dewey High School. I got the opporunity to compete and win national champinionships 
                  in the First Robotics Competition with my team and I have been interested in tech ever since!
                </p>
                <p>"We are what we repeatedly do. Excellence is not an act, but a habit." - Aristotle</p>

                
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}


/* 
<form action="https://drive.google.com/file/d/1RBKq__70k-zWIJ87r-_mKxevKeG03rPa/view?usp=sharing" method="get" target="_blank">
                <input type="submit" value="Resume" />
</form>
*/