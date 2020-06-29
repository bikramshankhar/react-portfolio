import React from "react";
import Container from "../components/Container";

function About() {
  return (
    <Container>
      <section className="about">
        <div className="container">
            <h2 className="title">About Me</h2>
            <div className="about-content">
                <img
                 className="img"
                  src={require("../components/assets/images/bikram.png")}
                  alt="Me"
                />
             
              <div className="description">
                <h4>Hi, I'm Bikram Shankhar</h4>
                  <h5>A Web Developer</h5>
                  <p> I am originally from Nepal and I am currently living in Chicago. I am student in Northwastern University. I am taking a full stack coding bootcamp which is six month web development course.</p>

                </div>
              </div>

          </div>

      </section>
    </Container>
  );
}

export default About;
