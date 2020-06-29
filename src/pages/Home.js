import React from "react";
import Container from "../components/Container";

function home() {
    return (
        <Container>
     <section className="home">
        <div className="container">
            <div className="home-text">
                <h1>I'm Bikram Shankhar</h1>
                <h3>A Web Developer</h3>
                <div className="social-links">
                    <ul>
                        <li><a href="https://github.com/bikramshankhar" target="_blank"><span className="fa fa-github"></span></a></li>
                        <li><a href="https://www.linkedin.com/feed/?trk=onboarding-landing" target="_blank"><span className="fa fa-linkedin"></span></a></li>
                    </ul>
                </div>
            </div>
        </div>

    </section>
        </Container>

        );
    }
    
    export default home;
    