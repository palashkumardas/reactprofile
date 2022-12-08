import React, {Component, Fragment } from 'react';
import Navbar from '../components/navbar.js';
import Common from '../components/common.js';
import Contact from '../components/contact.js';
import Footer from '../components/footer.js';

class contactPage extends Component {
    render() { 
        return (
            <Fragment>
              <Navbar/>
              <Common pageTitle='Contact Me'/> 
              <Contact/>
              <Footer/>
            </Fragment> 
        );
    }
}
 
export default contactPage;