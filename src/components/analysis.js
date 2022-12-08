import React, {Component, Fragment } from "react";
import '../asset/css/custom.css';
import '../asset/css/bootstrap.min.css';
import {Container, Row, Col } from 'react-bootstrap';
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";

class analysis extends Component {
    constructor(){
        super();
        this.state={
            data:[
                {technology:'java', project:100},
                {technology:'Flutter', project:80},
                {technology:'sql', project:90},
                {technology:'java', project:100},
                {technology:'PHP', project:90},
                {technology:'Phyton', project:80},
                {technology:'React', project:85},
                {technology:'Bootstrap', project:90}

            ]
        }
    }
    render() { 
        var blue="rgba(0,115,230,0.8)"
        return (
            <Fragment>
              <Container>
                <h1 className="serviceMainTitle text-center">Technology</h1>
                <Row>
                    <Col lg={6} md={6} sm={12}>
                        <ResponsiveContainer>
                            <BarChart width={100} height={300} data={this.state.data}>
                                <XAxis dataKey="technology"/>
                                <Tooltip/>
                                <Bar dataKey="project" fill={blue}>
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                       <p className="des"> The most important part of web application is technology. I am a passionate & professional full stack developer.<br/><br/> From my working experience i only said that technolog is used according on the client demamd.<br/><br/>I am personally suggest to use latest technology such as HTml, CSS and Javasript and Jquery for frontend development. I personally use bootstrap, tailwind and react for frontend development.<br/><br/> In backend development i usually use laravel,  django .
                        At present i am focusing on mern stack. </p>
                    </Col>

                </Row>
              </Container>
            </Fragment> 
        );
    }
}
 
export default analysis;