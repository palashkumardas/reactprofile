import React, {Component, Fragment } from 'react';
import Navbar from '../components/navbar.js';
import Common from '../components/common.js';
import AllCourses from '../components/allCourses.js';
import Footer from '../components/footer.js';

class coursePage extends Component {
    render() { 
        return (
            <Fragment>
              <Navbar/>
              <Common pageTitle='All Courses'/> 
              <AllCourses/>
              <Footer/>
            </Fragment> 
        );
    }
}
 
export default coursePage;