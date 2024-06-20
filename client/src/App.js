import {Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound';
import Jobs from './pages/Jobs';
import JobDetails from './pages/JobDetails';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import Companies from './pages/Companies';
import ForgotPassword from './pages/ForgotPassword';
import CandidateProfile from './pages/Candidate/CandidateProfile';
import CandidateDashboard from './pages/Candidate/CandidateDashboard';
import CandidateAppliedJobs from './pages/Candidate/CandidateAppliedJobs';
import CandidateList from './pages/Admin/CandidateList';
import AdminDashboard from './pages/Admin/AdminDashboard';
import EmployerList from './pages/Admin/EmployerList';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/forgot-password' element={<ForgotPassword />} />
      <Route path='/jobs' element={<Jobs />} />
      <Route path='/job-details' element={<JobDetails />} />
      <Route path='/companies' element={<Companies />} />
      <Route path='/contact-us' element={<ContactUs />} />
      <Route path='/about-us' element={<AboutUs />} />
      <Route path='/candidate-profile' element={<CandidateProfile />} />
      <Route path='/candidate-dashboard' element={<CandidateDashboard />} />
      <Route path='/candidate-applied-jobs' element={<CandidateAppliedJobs />} />
      <Route path='/admin-dashboard' element={<AdminDashboard />} />
      <Route path='/employer-list' element={<EmployerList />} />
      <Route path='/candidate-list' element={<CandidateList />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
    </>
  );
}

export default App;
