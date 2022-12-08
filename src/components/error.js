import React, {Component, Fragment } from "react";
import '../asset/css/custom.css';
import '../asset/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';
import ErrorGif from '../asset/images/404.gif';

class error extends Component {
    state = {  } 
    render() { 
        return (
            <Fragment>
                <Container className="mt-5">
                   <Row>
                        <Col lg={12} md={12} sm={12}>
                            <img className="error" src={ErrorGif}/>
                        </Col>
                   </Row>
                </Container>
            </Fragment> 
        );
    }
}
 
export default error;