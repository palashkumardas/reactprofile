import React, {Component, Fragment } from 'react';
import Navbar from '../components/navbar.js';
import Common from '../components/common.js';
import Details from '../components/aboutDes.js';
import Footer from '../components/footer.js';

class aboutPage extends Component {
    render() { 
        return (
            <Fragment>
              <Navbar/>
              <Common pageTitle='About Me'/> 
              <Details/>
              <Footer/>
            </Fragment> 
        );
    }
}
 
export default aboutPage;