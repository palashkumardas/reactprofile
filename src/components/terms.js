import React, {Component, Fragment } from "react";
import '../asset/css/custom.css';
import '../asset/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';

class term extends Component {
    state = {  } 
    render() { 
        return (
            <Fragment>
                <Container className="mt-5">
                   <Row>
                        <Col lg={12} md={12} sm={12}>
                            <h1 className="serviceName">Terms and  Conditions</h1>
                            <hr/>
                            <p>If your website or app has the option to receive payments then including a Return & Refund Policy is required by law. We will make sure that your Return & Refund Policy ensures that you stay in line with your legal obligations. For any app you are developing you will need a Return & Refund Policy to launch it. Termify can help you generate the best for the case and get your app ready for review.</p>
                        </Col>
                   </Row>
                </Container>
            </Fragment> 
        );
    }
}
 
export default term;