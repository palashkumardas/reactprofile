import React, {Component, Fragment } from "react";
import '../asset/css/custom.css';
import '../asset/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook,faYoutube } from '@fortawesome/free-brands-svg-icons';
import { NavLink } from "react-router-dom";
import {Container, Row, Col } from 'react-bootstrap';

class footer extends Component {
    state = {  } 
    render() { 
        return (
            <Fragment>
                <Container fluid={true} className="text-justify footerSection">
                    <Row>
                        <Col lg={3} md={6} sm={12} className="p-5">
                            <h3 className="text-justify serviceName">Follow Me</h3>
                            <a className="socialLink" href="https://www.facebook.com"><FontAwesomeIcon icon={faFacebook} /> Facebook</a><br></br>
                            <a className="socialLink" href="https://www.youtube.com"><FontAwesomeIcon icon={faYoutube} /> Youtube</a>
                        </Col>
                        <Col lg={3} md={6} sm={12} className="p-5">
                            <h3 className="text-justify serviceName">Address</h3>
                            <p className="serviceDescription">24 lane Road no 3 house no 2 Satkhira,Bangladesh </p>
                            <p className="serviceDescription" ><FontAwesomeIcon  icon={faEnvelope} /> cse.palashdas@gmail.com </p>
                            <a className="companyText" href="https://wa.me/+8801927166288"><FontAwesomeIcon  icon={faPhone} /> +8801927166288</a>

                        </Col>
                        <Col lg={3} md={6} sm={12} className="p-5">
                            <h3 className="text-justify serviceName">Information</h3>
                                <NavLink className="footerLink " to="/about">About Me</NavLink><br></br>
                                <NavLink className="footerLink " to="/resume">My Resume</NavLink><br></br>
                                <NavLink className="footerLink " to="/contact">Contact Me</NavLink>
                        </Col> 
                        <Col lg={3} md={6} sm={12} className="p-5">
                            <h3 className="text-justify serviceName">Legal</h3>
                            <NavLink className="footerLink" to="/refund">Refund Policy</NavLink><br></br>
                            <NavLink className="footerLink" to="/terms">Terms & Conditions</NavLink><br></br>
                            <NavLink className="footerLink" to="/privacy">Privacy Policy</NavLink>
                        </Col>       
                    </Row>
                </Container>

                <Container fluid={true} className="text-center copyrightSection">
                    <a className="copyrightLink" href="">palash.com &copy; 2021-22</a>
                </Container>

            </Fragment> 
        );
    }
}
 
export default footer;