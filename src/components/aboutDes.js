import React, {Component, Fragment } from "react";
import '../asset/css/custom.css';
import '../asset/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';

class details extends Component {
    state = {  } 
    render() { 
        return (
            <Fragment>
                <Container className="mt-5">
                   <Row>
                        <Col lg={12} md={12} sm={12}>
                            <h1 className="serviceName">Who am I</h1>
                            <hr/>
                            <p className="serviceDescription">I am Palash kumar das. I am a professional full stack developer. I have more than five years experience in this field. More i am  working data science and machine learning too. In fact programming is not only my profession but also my passion. I like programming very much. I have a higher degree on computer science and engineering. </p>

                            <h1 className="serviceName">My Mission</h1>
                            <hr/>
                            <p className="serviceDescription">I am Palash kumar das. I am a professional full stack developer. I have more than five years experience in this field. More i am  working data science and machine learning too. In fact programming is not only my profession but also my passion. I like programming very much. I have a higher degree on computer science and engineering. </p>

                            <h1 className="serviceName">My Passion</h1>
                            <hr/>
                            <p className="serviceDescription">I am Palash kumar das. I am a professional full stack developer. I have more than five years experience in this field. More i am  working data science and machine learning too. In fact programming is not only my profession but also my passion. I like programming very much. I have a higher degree on computer science and engineering. </p>
                            
                        </Col>
                   </Row>
                </Container>
            </Fragment> 
        );
    }
}
 
export default details;