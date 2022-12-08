import React, {Component, Fragment } from "react";
import '../asset/css/custom.css';
import '../asset/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {Container, Row, Col} from 'react-bootstrap';
import Face from '../asset/images/boy.png';
import FaceTwo from '../asset/images/boy2.png';
import FaceThree from '../asset/images/boy3.png';

class testimonials extends Component {
    state = {  } 
    render() {
        var settings = {
            autoplaySpeed:3000,
            autoplay:true,
            dots: true,
            infinite: true,
            speed: 3000,
            vertical:true,
            verticalSwiping:true,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  initialSlide: 1
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          }; 
        return (
            <Fragment>
                <Container>
                <h1 className="serviceMainTitle text-center">What Clients Say</h1>
                        <Slider {...settings}>
                            <div>
                                <Row className="text-center justify-content-center">
                                    <Col lg={6} md={6} sm={12}>
                                        <img className="circleImg" src={Face}/>
                                        <h3>Full stack Developer</h3>
                                        <p>He is very good and energitic developer. I am very gratefull to him. Wishes him to best luck.</p>
                                    </Col>
                                </Row>
                            </div>
                            <div>
                                <Row className="text-center justify-content-center">
                                    <Col lg={6} md={6} sm={12}>
                                        <img className="circleImg" src={FaceTwo}/>
                                        <h3>Full stack Developer</h3>
                                        <p>He is very good and energitic developer. I am very gratefull to him. Wishes him to best luck.</p>
                                    </Col>
                                </Row>
                            </div>
                            <div>
                                <Row className="text-center justify-content-center">
                                    <Col lg={6} md={6} sm={12}>
                                        <img className="circleImg" src={FaceThree}/>
                                        <h3>Full stack Developer</h3>
                                        <p>He is very good and energitic developer. I am very gratefull to him. Wishes him to best luck.</p>
                                    </Col>
                                </Row>
                            </div>
                        </Slider>
                </Container>
            </Fragment> 
        );
    }
}
 
export default testimonials;