import React, {Component, Fragment } from "react";
import '../asset/css/custom.css';
import '../asset/css/bootstrap.min.css';
import logo from '../asset/images/logo.png';
import { NavLink } from "react-router-dom";
import {Container,Nav,Navbar} from 'react-bootstrap';

class navbar extends Component {
    constructor(){
        super();
        this.state={
            navBarTitle:"navTitle",
            navVariant:"dark",
            backGroud:"navBackground",
            fontColor:"navItem"
        }
    }

    onScroll=()=>{
        if(window.scrollY>100){
            this.setState({navVariant:'light',navBarTitle:'navTitleScroll',backGroud:'navBackgroundScroll',fontColor:'navItemScroll'})
        }
        else if(window.scrollY<100){
            this.setState({navVariant:'dark',navBarTitle:'navTitle',backGroud:'navBackground',fontColor:'navItem'})
        }
    }

    componentDidMount(){
        window.addEventListener('scroll',this.onScroll)
    }
    render() { 
        return (
            <Fragment>
                <Navbar className={this.state.backGroud} fixed="top" collapseOnSelect expand="lg" variant={this.state.navVariant}>
                    <Container>
                        <Navbar.Brand className={this.state.navBarTitle}><img className="logo" src={logo}/> PALASH DAS</Navbar.Brand>
                          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                           <Navbar.Collapse id="responsive-navbar-nav">
                             <Nav className="me-auto">
                            
                            </Nav>
                            <Nav>
                          <Nav.Link> <NavLink className={this.state.fontColor} to="/">HOME</NavLink></Nav.Link> 
                          <Nav.Link><NavLink  className={this.state.fontColor} to="/services">SERVICES</NavLink></Nav.Link> 
                          <Nav.Link><NavLink  className={this.state.fontColor} to="/courses">COURSES</NavLink></Nav.Link> 
                          <Nav.Link><NavLink  className={this.state.fontColor} to="/profile">PORTFOLIO</NavLink></Nav.Link> 
                          <Nav.Link><NavLink  className={this.state.fontColor} to="/contact">CONTACT</NavLink></Nav.Link> 
                          <Nav.Link><NavLink  className={this.state.fontColor} to="/about">ABOUT</NavLink></Nav.Link> 

                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Fragment> 
        );
    }
}
 
export default navbar;