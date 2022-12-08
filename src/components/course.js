import React, {Component, Fragment } from "react";
import '../asset/css/custom.css';
import '../asset/css/bootstrap.min.css';
import Design from '../asset/images/design.jpg';
import Development from '../asset/images/development.jpg';
import Testing from '../asset/images/testing.jpg';
import Machine from '../asset/images/ai.jpg';


import {Container, Row, Col, Button} from 'react-bootstrap';

class course extends Component {
    state = {  } 
    render() { 
        return (
            <Fragment>
                <Container>
                <h1 className="serviceMainTitle text-center">Our Courses</h1>

                    <Row>
                        <Col lg={3} md={6} sm={12} className="p-2">
                            <img  className="courseImg" src={Design}/>
                        </Col>
                        <Col lg={3} md={6} sm={12}>
                            <h3 className="courseTitle">Website Design</h3>
                            <p className="courseDes">I provide you totall video and live support for website design. You can learn psd to html, figma to html and so on. We teach you html, css, javascript, ajax etc.</p>
                            <Button className="courseDetails">Details</Button>
                        </Col>
                        <Col lg={3} md={6} sm={12} className="p-2">
                            <img  className="courseImg" src={Development}/>
                        </Col>
                        <Col lg={3} md={6} sm={12}>
                            <h3 className="courseTitle">Website Development</h3>
                            <p className="courseDes">I provide you totall video and live support for website development. You can learn php,python. We teach you laravel and django etc.</p>
                            <Button className="courseDetails">Details</Button>
                        </Col>                        
                    </Row>
                    <Row className="mt-5">
                        <Col lg={3} md={6} sm={12} className="p-2">
                            <img  className="courseImg" src={Testing}/>
                        </Col>
                        <Col lg={3} md={6} sm={12}>
                             <h3 className="courseTitle">Software Testing</h3>
                             <p className="courseDes">I provide you totall video and live support for SQA. We teach you so many testing tools.</p>
                             <Button className="courseDetails">Details</Button>
                        </Col>
                        <Col lg={3} md={6} sm={12} className="p-2">
                            <img  className="courseImg" src={Machine}/>
                        </Col>
                        <Col lg={3} md={6} sm={12}>
                             <h3 className="courseTitle">Machine Learning</h3> 
                             <p className="courseDes">I provide you totall video and live support for machine learning. We can also provide you all necessary tools which are use to machine learning.</p>
                             <Button className="courseDetails">Details</Button>
                        </Col>
                    </Row>
                </Container>
            </Fragment> 
        );
    }
}
 
export default course;