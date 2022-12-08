import React, {Component, Fragment } from "react";
import '../asset/css/custom.css';
import '../asset/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';

class common extends Component {
    state = {  } 
    render() { 
        return (
            <Fragment>
                <Container fluid={true} className="topFixBroadcum p-0">
                    <div className="topBroadcumOverlay">
                        <Container className="topContent">
                            <Row>
                                <Col className="text-center">
                                    <h1 className="topTitle">{this.props.pageTitle}</h1>
                                    
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </Fragment> 
        );
    }
}
 
export default common;