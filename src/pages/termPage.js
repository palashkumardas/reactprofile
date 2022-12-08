import React, {Component, Fragment } from 'react';
import Navbar from '../components/navbar.js';
import Common from '../components/common.js';
import Terms from '../components/terms.js';
import Footer from '../components/footer.js';

class termPage extends Component {
    render() { 
        return (
            <Fragment>
              <Navbar/>
              <Common pageTitle='Terms & Conditions'/> 
              <Terms/>
              <Footer/>
            </Fragment> 
        );
    }
}
 
export default termPage;