import HomePage from './pages/homePage';
import AboutPage from './pages/aboutPage';
import ServicePage from './pages/servicePage';
import CoursePage from './pages/coursePage';
import ProfilePage from './pages/profilePage';
import ContactPage from './pages/contactPage';
import ErrorPage from './pages/errorPage';
import RefundPage from './pages/refundPage';
import TermPage from './pages/termPage';
import PrivacyPage from './pages/privacyPage';
import ResumePage from './pages/resumePage';
import { Routes, Route} from 'react-router-dom';
function App() {
  return (
   <div>
    <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/services" element={<ServicePage/>}/>
          <Route path="/courses" element={<CoursePage/>}/>
          <Route path="/profile" element={<ProfilePage/>}/> 
          <Route path="/contact" element={<ContactPage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/refund" element={<RefundPage/>}/>
          <Route path="/terms" element={<TermPage/>}/>
          <Route path="/privacy" element={<PrivacyPage/>}/>
          <Route path="/resume" element={<ResumePage/>}/>
          <Route path="*" element={<ErrorPage/>}/>
    </Routes>
   </div>
  );
}

export default App;
