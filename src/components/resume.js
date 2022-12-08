import React, {Component, Fragment } from "react";
import '../asset/css/custom.css';
import '../asset/css/bootstrap.min.css';
import Profile from '../asset/images/boy.png';
import {Container, Row, Col} from 'react-bootstrap';

class resume extends Component {
    state = {  } 
    render() { 
        return (
            <Fragment>
                <Container className="mt-5">
                   <Row>
                        <Col lg={12} md={12} sm={12}>
                            <img className="profileImg" src={Profile}/>
                            <h1 className="serviceName">PALASH KUMAR DAS</h1>
                            <h4>Email: cse.palashdas@gmail.com</h4>
                            <h4>Phone: 8801927166288</h4>

                            <h1 className="serviceName">Mission</h1>
                            <hr/>
                            <p className="serviceDescription">I am Palash kumar das. I am a professional full stack developer. I have more than five years experience in this field. More i am  working data science and machine learning too. In fact programming is not only my profession but also my passion. I like programming very much. I have a higher degree on computer science and engineering. </p>

                            <h1 className="serviceName">Work Experience</h1>
                            <hr/>
                            <a className="companyText"> 1. Company Name: abc </a><br/>
                            <a className="companyText"> Designation: Junior Developer </a><br/>
                            <a className="companyText"> Duration: One Year </a><br/><br/>
                         
                            <a className="companyText"> 2. Company Name: abc </a><br/>
                            <a className="companyText"> Designation: Junior Developer </a><br/>
                            <a className="companyText"> Duration: Two Years </a>

                            <h1 className="serviceName">Key Skills</h1>
                            <hr/>
                            <a className="companyText"> 1. PHP  </a><br/>
                            <a className="companyText"> 2. Laravel (PHP framework) </a><br/>
                            <a className="companyText"> 3. Python  </a><br/>
                            <a className="companyText"> 4. Django (Python Framework) </a><br/>
                            <a className="companyText"> 5. Sql</a><br/>
                            <a className="companyText"> 6. Javascript </a><br/>
                            <a className="companyText"> 7. React (Javascript Framework) </a><br/>
                            <a className="companyText"> 8. bootstrap </a><br/>
                            <a className="companyText"> 9. TailWind </a><br/>
                            <h1 className="serviceName">Education</h1>
                            <hr/>
                            <a className="companyText"> 1. MSc in Machine Learning & Data Science (First Year) </a><br/>
                            <a className="companyText"> 2. BSc in Computer Science & Engineering  </a><br/>
                            <a className="companyText"> 3. Diploma in Computer Technology</a><br/>

                        </Col>
                   </Row>
                </Container>
            </Fragment> 
        );
    }
}
 
export default resume;