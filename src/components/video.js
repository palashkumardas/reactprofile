import React, {Component, Fragment } from "react";
import '../asset/css/custom.css';
import '../asset/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import ReactPlayer from 'react-player';
import {Container, Row, Col, Modal, Button} from 'react-bootstrap';

class video extends Component {
 constructor(){
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
                <Container className="text-center">
                <h1 className="serviceMainTitle">How I Do</h1>

                    <Row>
                        <Col lg={12} md={12} sm={12} className="videoCard">
                            <p className="videoDes">First I analysis the requirement of the projects. Then gathering all information and make a graph and flowchart. After that i draw a data table and ahead for final step. At last I implement all function and test all Project or system. </p>
                            <p><FontAwesomeIcon onClick={this.modelOpen} className="playBtn" icon={faPlayCircle}/></p>
                        </Col>                    
                    </Row>
                    
                </Container>
                <Modal size="lg" show={this.state.show} onHide={this.modelClose}>
                      
                        <Modal.Body>
                            <ReactPlayer  height="400px" width="100%" url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
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
 
export default video;