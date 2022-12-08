import React, {Component, Fragment } from "react";
import '../asset/css/custom.css';
import '../asset/css/bootstrap.min.css';
import Project1 from '../asset/images/project1.png';
import Project2 from '../asset/images/project2.png';
import Project3 from '../asset/images/project3.png';
import Project4 from '../asset/images/project4.jpg';
import Project5 from '../asset/images/project5.jpg';
import Project6 from '../asset/images/project6.jpg';
import Project7 from '../asset/images/project7.jpg';
import Project8 from '../asset/images/project8.jpg';
import Project9 from '../asset/images/project9.jpg';


import {Container, Row, Col, Card, Button } from 'react-bootstrap';

class allprojects extends Component {
    state = {  } 
    render() { 
        return (
            <Fragment>
                <Container>
                <h1 className="serviceMainTitle text-center p-3">Projects Details</h1>

                    <Row>
                        <Col lg={4} md={6} sm={12} className="p-2">
                            <Card className="projectCard">
                                <Card.Img variant="top" src={Project1}/>
                                <Card.Body className="text-center">
                                    <Card.Title className="projectCardTitle">Card Title</Card.Title>
                                    <Card.Text className="projectCardDes">
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Details</Button>
                                </Card.Body>
                            </Card>           
                        </Col>
                        <Col lg={4} md={6} sm={12} className="p-2">
                            <Card className="projectCard">
                                <Card.Img variant="top" src={Project2}/>
                                <Card.Body className="text-center">
                                    <Card.Title className="projectCardTitle">Card Title</Card.Title>
                                    <Card.Text className="projectCardDes">
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Details</Button>
                                </Card.Body>
                            </Card>            
                        </Col>
                        <Col lg={4} md={6} sm={12} className="p-2">
                            <Card className="projectCard">
                                <Card.Img variant="top" src={Project3}/>
                                <Card.Body className="text-center">
                                    <Card.Title className="projectCardTitle">Card Title</Card.Title>
                                    <Card.Text className="projectCardDes">
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Details</Button>
                                </Card.Body>
                            </Card>            
                        </Col>
                        <Col lg={4} md={6} sm={12} className="p-2">
                            <Card className="projectCard">
                                <Card.Img variant="top" src={Project4}/>
                                <Card.Body className="text-center">
                                    <Card.Title className="projectCardTitle">Card Title</Card.Title>
                                    <Card.Text className="projectCardDes">
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Details</Button>
                                </Card.Body>
                            </Card>            
                        </Col>
                        <Col lg={4} md={6} sm={12} className="p-2">
                            <Card className="projectCard">
                                <Card.Img variant="top" src={Project5}/>
                                <Card.Body className="text-center">
                                    <Card.Title className="projectCardTitle">Card Title</Card.Title>
                                    <Card.Text className="projectCardDes">
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Details</Button>
                                </Card.Body>
                            </Card>            
                        </Col>
                        <Col lg={4} md={6} sm={12} className="p-2">
                            <Card className="projectCard">
                                <Card.Img variant="top" src={Project6}/>
                                <Card.Body className="text-center">
                                    <Card.Title className="projectCardTitle">Card Title</Card.Title>
                                    <Card.Text className="projectCardDes">
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Details</Button>
                                </Card.Body>
                            </Card>            
                        </Col>
                        <Col lg={4} md={6} sm={12} className="p-2">
                            <Card className="projectCard">
                                <Card.Img variant="top" src={Project7}/>
                                <Card.Body className="text-center">
                                    <Card.Title className="projectCardTitle">Card Title</Card.Title>
                                    <Card.Text className="projectCardDes">
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Details</Button>
                                </Card.Body>
                            </Card>            
                        </Col>
                        <Col lg={4} md={6} sm={12} className="p-2">
                            <Card className="projectCard">
                                <Card.Img variant="top" src={Project8}/>
                                <Card.Body className="text-center">
                                    <Card.Title className="projectCardTitle">Card Title</Card.Title>
                                    <Card.Text className="projectCardDes">
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Details</Button>
                                </Card.Body>
                            </Card>            
                        </Col>
                        <Col lg={4} md={6} sm={12} className="p-2">
                            <Card className="projectCard">
                                <Card.Img variant="top" src={Project9}/>
                                <Card.Body className="text-center">
                                    <Card.Title className="projectCardTitle">Card Title</Card.Title>
                                    <Card.Text className="projectCardDes">
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Details</Button>
                                </Card.Body>
                            </Card>            
                        </Col>
                    </Row>
                </Container>
            </Fragment> 
        );
    }
}
 
export default allprojects;