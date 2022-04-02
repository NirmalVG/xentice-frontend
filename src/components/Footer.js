import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer-row text-white text-center text-lg-start">
            <Container>
                <Row className="footer-hide">
                    <Col xs={12} md={3}>
                        <h5>ABOUT</h5>
                        <p className="footer-text">How Xentice works</p>
                        <p className="footer-text">Founder's Letter</p>
                        <p className="footer-text">Newsroom</p>
                        <p className="footer-text">Investors</p>
                        <p className="footer-text">Xentice Gold</p>
                        <p className="footer-text">Xentice Platinum</p>
                        <p className="footer-text">Startup Support</p>
                        <p className="footer-text">Careers</p>
                    </Col>
                    <Col xs={12} md={3}>
                        <h5>EXPLORE</h5>
                        <p className="footer-text">Diversity and Descrimination</p>
                        <p className="footer-text">Accessibility</p>
                        <p className="footer-text">Xentice Associates</p>
                        <p className="footer-text">Xentice Team</p>
                        <p className="footer-text">Xentice Mall</p>
                        <p className="footer-text">Xstudio</p>
                        <p className="footer-text">Xmoney</p>
                        <p className="footer-text">Entice Spaces</p>
                    </Col>
                    <Col xs={12} md={3}>
                        <h5>SERVICES</h5>
                        <p className="footer-text">Buttons and badges</p>
                        <p className="footer-text">Mobile Apps</p>
                        <p className="footer-text">For Companies</p>
                        <p className="footer-text">Mobile Apps</p>
                        <p className="footer-text">Review Professionals</p>
                        <p className="footer-text">Suggested Professionals</p>
                        <p className="footer-text">Resource Centre</p>
                        <p className="footer-text">Community Centre</p>
                    </Col>
                    <Col xs={12} md={3}>
                        <h5>SUPPORT</h5>
                        <p className="footer-text">Our Covid-19 Response</p>
                        <p className="footer-text">Help Centre</p>
                        <p className="footer-text">Cancellation Options</p>
                        <p className="footer-text">Neighbourhood Support</p>
                        <p className="footer-text">Corporate Contact</p>
                        <p className="footer-text">Trust and Safety</p>
                        <p className="footer-text">FAQ</p>
                        <p className="footer-text">Payment Gateway</p>
                    </Col>
                </Row>
                <hr style={{height:"4px"}} className="rule" />
                <Row>
                    <Col xs={12} md={8} >
                        <p style={{color: "white"}}>&copy; Xentice Group of Companies 2022 . All Rights Reserved</p>
                    </Col>
                    <Col xs={12} md={4}  >
                        <Link className="footer-link" to="/about">About Us</Link>
                        <Link className="footer-link" to="/contact">Contact Us</Link>
                        <Link className="footer-link" to="/privacy">Privacy Policy</Link>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
