import React, {Component, Fragment } from 'react';
import Navbar from '../components/navbar.js';
import Common from '../components/common.js';
import Allprojects from '../components/allProjects.js';
import Footer from '../components/footer.js';

class profilePage extends Component {
    render() { 
        return (
            <Fragment>
              <Navbar/>
              <Common pageTitle='All Projects'/> 
              <Allprojects/>
              <Footer/>
            </Fragment> 
        );
    }
}
 
export default profilePage;