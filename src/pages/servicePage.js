import React, {Component, Fragment } from 'react';
import Navbar from '../components/navbar.js';
import Common from '../components/common.js';
import Service from '../components/service.js';
import Contact from '../components/contact.js';
import Footer from '../components/footer.js';

class servicePage extends Component {
    render() { 
        return (
            <Fragment>
              <Navbar/>
              <Common pageTitle='My Services'/> 
              <Service/>
              <Contact/>
              <Footer/>
            </Fragment> 
        );
    }
}
 
export default servicePage;