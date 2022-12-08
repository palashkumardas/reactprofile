import React, {Component, Fragment } from "react";
import Topbar from '../components/topbar';
import Service from '../components/service';
import Navbar from '../components/navbar';
import Analysis from '../components/analysis';
import Summary from '../components/summary';
import Recent from '../components/recent';
import Course from '../components/course';
import Video from '../components/video.js';
import Testimonials from '../components/testimonials';
import Footer from '../components/footer.js';

class HomePage extends Component {
    render() { 
        return (
            <Fragment>
               <Navbar/>
                <Topbar/>
                <Service/>
                <Analysis/>
                <Summary/>
                <Recent/>
                <Course/>
                <Video/>
                <Testimonials/>
                <Footer/>
            </Fragment> 
        );
    }
}
 
export default HomePage;