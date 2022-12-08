import React, {Component, Fragment } from "react";
import '../asset/css/custom.css';
import '../asset/css/bootstrap.min.css';
import {Container, Row, Col, Modal, Form, Button } from 'react-bootstrap';

class banner extends Component {
    constructor() {
        super();
        this.state={
            show:false
        }
        
    }

modelClose=()=>this.setState({show:false})
modelOpen=()=>this.setState({show:true})
    render() { 
        return (
            <Fragment>
                <Container fluid={true} className="topFixBanner p-0">
                    <div className="topBannerOverlay">
                        <Container className="topContent">
                            <Row>
                                <Col className="text-center">
                                    <h1 className="topTitle">PALASH DAS</h1>
                                    <h4 className="topSubTitle">A Passionate & Professional Full-Stack Developer</h4>
                                    <Button onClick={this.modelOpen} variant="primary">Hire Me</Button>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>

                <Modal size="md" show={this.state.show} onHide={this.modelClose}>
                      
                      <Modal.Body>
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
                      </Modal.Body>
                      <Modal.Footer>
                      <Button variant="secondary" onClick={this.modelClose}>
                          Close
                      </Button>
                     
                      </Modal.Footer>
              </Modal>

            </Fragment> 
        );
    }
}
 
export default banner;