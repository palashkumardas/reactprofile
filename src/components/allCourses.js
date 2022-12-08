import React, {Component, Fragment } from "react";
import '../asset/css/custom.css';
import '../asset/css/bootstrap.min.css';
import Design from '../asset/images/design.jpg';
import Development from '../asset/images/development.jpg';
import Testing from '../asset/images/testing.jpg';
import Machine from '../asset/images/ai.jpg';
import DataScience from '../asset/images/data.png';
import Algorithm from '../asset/images/alg.jpg';
import Neural from '../asset/images/neural.png';
import Deep from '../asset/images/deep.png';


import {Container, Row, Col, Button} from 'react-bootstrap';

class allcourses extends Component {
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
                    <Row className="mt-5">
                        <Col lg={3} md={6} sm={12} className="p-2">
                            <img  className="courseImg" src={Deep}/>
                        </Col>
                        <Col lg={3} md={6} sm={12}>
                             <h3 className="courseTitle">Deep Learning</h3>
                             <p className="courseDes">I provide you totall video and live support for Deep learning. We teach you so many deep learning tools.</p>
                             <Button className="courseDetails">Details</Button>
                        </Col>
                        <Col lg={3} md={6} sm={12} className="p-2">
                            <img  className="courseImg" src={Neural}/>
                        </Col>
                        <Col lg={3} md={6} sm={12}>
                             <h3 className="courseTitle">Neural Networking</h3> 
                             <p className="courseDes">I provide you totall video and live support for Neural Networking. We can also provide you all necessary tools which are use to Neural Networking.</p>
                             <Button className="courseDetails">Details</Button>
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col lg={3} md={6} sm={12} className="p-2">
                            <img  className="courseImg" src={DataScience}/>
                        </Col>
                        <Col lg={3} md={6} sm={12}>
                             <h3 className="courseTitle">Data Science</h3>
                             <p className="courseDes">I provide you totall video and live support for Data Science. We teach you so many data science tools. You can tech a to z about data science. Now a days data science is very importance.</p>
                             <Button className="courseDetails">Details</Button>
                        </Col>
                        <Col lg={3} md={6} sm={12} className="p-2">
                            <img  className="courseImg" src={Algorithm}/>
                        </Col>
                        <Col lg={3} md={6} sm={12}>
                             <h3 className="courseTitle">Data Structure & Algorithm</h3> 
                             <p className="courseDes">I provide you totall video and live support for data Structure & Algorithm. We can also provide you all necessary tools which are use to Data Structure  & Algorithm.</p>
                             <Button className="courseDetails">Details</Button>
                        </Col>
                    </Row>
                </Container>
            </Fragment> 
        );
    }
}
 
export default allcourses;