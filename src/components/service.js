import React, {Component, Fragment } from "react";
import '../asset/css/custom.css';
import '../asset/css/bootstrap.min.css';
import applogo from '../asset/images/app.png';
import weblogo from '../asset/images/web.png';
import graphiclogo from '../asset/images/graphic.png';

import {Container, Row, Col} from 'react-bootstrap';

class service extends Component {
    state = {  } 
    render() { 
        return (
            <Fragment>
                <Container>
                <h1 className="serviceMainTitle text-center">My Services</h1>

                 <Row>
                    <Col lg={4} md={6} sm={12}>
                        <div className="serviceCard text-center"><img className="serviceImg" src={applogo}/>
                            <h2 className="serviceName">App Development</h2> 
                            <p className="serviceDescription">I create a reliable and client best app. I first analyze clint requirements and then gather necessary documents to create it.</p> 
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                        <div className="serviceCard text-center"><img className="serviceImg" src={graphiclogo}/>
                            <h2 className="serviceName">Web Development</h2> 
                            <p className="serviceDescription">I create a reliable and client best website. I first analyze clint requirements and then gather necessary documents to create it.</p> 
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                        <div className="serviceCard text-center"><img className="serviceImg" src={weblogo}/>
                            <h2 className="serviceName">Graphic  Design</h2>  
                            <p className="serviceDescription">I create a reliable and client best graphic design. I first analyze clint requirements and then gather necessary documents to create it.</p> 
                        </div>
                    </Col>

                 </Row>
                </Container>
            </Fragment> 
        );
    }
}
 
export default service;