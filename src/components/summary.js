import React, {Component, Fragment } from "react";
import '../asset/css/custom.css';
import '../asset/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'
import CountUp from 'react-countup';
import {Container, Row, Col,Card } from 'react-bootstrap';

class summary extends Component {
    state = {  } 
    render() { 
        return (
            <Fragment>
                <Container fluid={true} className="SummaryBanner SummarySection p-0">
                    <div className="SummaryBannerOverlay">
                        <Container className="countSection">
                            <Row>
                                <Col className="text-center " lg={4} md={4} sm={12}>
                                    <h1 className="countNumber"><CountUp end={90} /></h1>
                                    <h4 className="countTitle">Total Projects</h4>
                                </Col>
                                <Col className="text-center" lg={4} md={4} sm={12}>
                                <h1 className="countNumber"><CountUp end={50} /></h1>
                                    <h4 className="countTitle">Total Clients</h4>
                                </Col>
                                <Col className="text-center" lg={4} md={4} sm={12}>
                                <Card >
                                    <Card.Body>
                                    <Card.Title className="cardTitle">My Work Process</Card.Title>
                                    <Card.Text>
                                        <p className="cardSubTitle "><FontAwesomeIcon className="iconBullet" icon={faCheckSquare} />    Information Gather</p>
                                        <p className="cardSubTitle "><FontAwesomeIcon className="iconBullet" icon={faCheckSquare}  />   System Analysis</p>
                                        <p className="cardSubTitle "><FontAwesomeIcon className="iconBullet" icon={faCheckSquare}  />   System Testing</p>
                                        <p className="cardSubTitle "><FontAwesomeIcon className="iconBullet" icon={faCheckSquare}  />   Implementation</p>
                                    </Card.Text>
                                    </Card.Body>
                                </Card>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </Fragment> 
        );
    }
}
 
export default summary;