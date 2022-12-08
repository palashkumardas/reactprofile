import React, {Component, Fragment } from 'react';
import Navbar from '../components/navbar.js';
import Common from '../components/common.js';
import Resume from '../components/resume';
import Footer from '../components/footer.js';

class aboutPage extends Component {
    render() { 
        return (
            <Fragment>
              <Navbar/>
              <Common pageTitle='My Resume'/> 
              <Resume/>
              <Footer/>
            </Fragment> 
        );
    }
}
 
export default aboutPage;