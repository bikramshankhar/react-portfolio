import React from "react";
import Container from "../components/Container";
// import Row from "../components/Row";
// import Col from "../components/Col";

function ContactForm() {
  return (
    <Container>
       <div className="contact">
        <div className="container">
            <h2 className="title">Contact Me</h2>
            <div className="content">
                <div className="box">
                    <div className="icon">
                        <span className="fa fa-phone"></span>
                    </div>
                    <h4>Phone Number</h4>
                    <a href="tel:8722035767">
                        <p>8722035767</p>
                    </a>
                </div>
                <div className="box">
                    <div className="icon">
                        <span className="fa fa-envelope"></span>
                    </div>
                    <h4>Eamil</h4>
                    <a href="mailto:bikrambiswa30@gmail.com">
                        <p>bikrambiswa30@gmail.com</p>
                    </a>
                </div>
                <div className="box">
                    <div className="icon">
                        <span className="fa fa-github"></span>
                    </div>
                    <h4>GitHub</h4>
                    <a href="https://github.com/bikramshankhar?tab=repositories">
                        <p>bikramshankhar</p>
                    </a>
                </div>
                <div className="box">
                    <div className="icon">
                        <span className="fa fa-file"></span>
                    </div>
                    <h4>resume</h4>
                    <a href="../components/assets/images/bikramresume.pdf">
                        <p>Bikram Shankhar</p>
                    </a>
                </div>
                <div className="box">
                    <div className="icon">
                        <span className="fa fa-linkedin"></span>
                    </div>
                    <h4>linkedin</h4>
                    <a href="https://www.linkedin.com/in/bikram-shankhar-96314b1a0/">
                        <p>Bikram Shankhar</p>
                    </a>
                </div>

            </div>


        </div>
    </div>
    </Container>
  );
}

export default ContactForm;
