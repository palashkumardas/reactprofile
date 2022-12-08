import React, {Component, Fragment } from 'react';
import Navbar from '../components/navbar.js';
import Common from '../components/common.js';
import Error from '../components/error.js';
import Footer from '../components/footer.js';

class errorPage extends Component {
    render() { 
        return (
            <Fragment>
              <Navbar/>
              <Common pageTitle='Page Not Found'/> 
              <Error/>
              <Footer/>
            </Fragment> 
        );
    }
}
 
export default errorPage;