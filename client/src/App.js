import {Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound';
import Jobs from './pages/Jobs';
import JobDetails from './pages/JobDetails';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/jobs' element={<Jobs />} />
      <Route path='/job-details' element={<JobDetails />} />
      <Route path='/contact-us' element={<ContactUs />} />
      <Route path='/about-us' element={<AboutUs />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
    </>
  );
}

export default App;
