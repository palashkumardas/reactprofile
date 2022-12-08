import React, {Component, Fragment } from "react";
import '../asset/css/custom.css';
import '../asset/css/bootstrap.min.css';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faPhone } from '@fortawesome/free-solid-svg-icons';
class contact extends Component {
    state = {  } 
    render() { 
        return (
            <Fragment>
                <Container className="mt-5">
                   <Row>
                        <Col lg={6} md={6} sm={12}>
                          <h1 className="text-justify serviceName">Quick Conect</h1>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className="serviceDescription">Name</Form.Label>
                                <Form.Control type="text" />                                
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className="serviceDescription">Email</Form.Label>
                                <Form.Control type="email" />                                
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className="serviceDescription">Message</Form.Label>
                                <Form.Control  as="textarea"  style={{ height: '100px' }} />                                
                            </Form.Group>
                                <Button variant="primary" type="submit">Send Message</Button>

                        </Form>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                        <h3 className="text-justify serviceName">Direct Touch Me</h3>
                            <p className="serviceDescription">24 lane Road no 3 house no 2 Satkhira,Bangladesh </p>
                            <p className="serviceDescription"><FontAwesomeIcon  icon={faEnvelope} /> cse.palashdas@gmail.com </p>
                            <p className="serviceDescription"><FontAwesomeIcon  icon={faPhone} /> +8801927166288</p>
                        </Col>
                   </Row>
                </Container>
            </Fragment> 
        );
    }
}
 
export default contact;