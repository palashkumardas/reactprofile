import React, {Component, Fragment } from 'react';
import Navbar from '../components/navbar.js';
import Common from '../components/common.js';
import Privacy from '../components/privacy.js';
import Footer from '../components/footer.js';

class privacyPage extends Component {
    render() { 
        return (
            <Fragment>
              <Navbar/>
              <Common pageTitle='Privacy Policy'/> 
              <Privacy/>
              <Footer/>
            </Fragment> 
        );
    }
}
 
export default privacyPage;