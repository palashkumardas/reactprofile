import React, {Component, Fragment } from 'react';
import Navbar from '../components/navbar.js';
import Common from '../components/common.js';
import Refund from '../components/refund';
import Footer from '../components/footer.js';

class refundPage extends Component {
    render() { 
        return (
            <Fragment>
              <Navbar/>
              <Common pageTitle='Refund Policy'/> 
              <Refund/>
              <Footer/>
            </Fragment> 
        );
    }
}
 
export default refundPage;