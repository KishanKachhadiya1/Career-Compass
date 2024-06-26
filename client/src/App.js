import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import Jobs from "./pages/Jobs";
import JobDetails from "./pages/JobDetails";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import Companies from "./pages/Companies";
import ForgotPassword from "./pages/ForgotPassword";
import CandidateProfile from "./pages/Candidate/CandidateProfile";
import CandidateDashboard from "./pages/Candidate/CandidateDashboard";
import CandidateAppliedJobs from "./pages/Candidate/CandidateAppliedJobs";
import CandidateSavedJobs from "./pages/Candidate/CandidateSavedJobs";
import CandidateList from "./pages/Admin/CandidateList";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import EmployerList from "./pages/Admin/EmployerList";
import EmployerDashboard from "./pages/Employer/EmployerDashboard";
import CandidateJobList from "./pages/Employer/CandidateJobList";
import EmployerJobs from "./pages/Employer/EmployerJobs";
import EmployerProfile from "./pages/Employer/EmployerProfile";
import JobList from "./pages/Admin/JobList";
import EmployerAddJobs from "./pages/Employer/EmployerAddJobs";
import EmployerEditJobs from "./pages/Employer/EmployerEditJobs";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/job-details" element={<JobDetails />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        {/* candidate routes  */}
        <Route
          path="/candidate/candidate-profile"
          element={<CandidateProfile />}
        />
        <Route
          path="/candidate/candidate-dashboard"
          element={<CandidateDashboard />}
        />
        <Route
          path="/candidate/candidate-applied-jobs"
          element={<CandidateAppliedJobs />}
        />
        <Route
          path="/candidate/candidate-saved-jobs"
          element={<CandidateSavedJobs />}
        />
        {/* admin routes  */}
        <Route path="/admin/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/admin/employer-list" element={<EmployerList />} />
        <Route path="/admin/candidate-list" element={<CandidateList />} />
        <Route path="/admin/job-list" element={<JobList />} />
        {/* employer routes  */}
        <Route
          path="/employer/employer-dashboard"
          element={<EmployerDashboard />}
        />
        <Route
          path="/employer/employer-profile"
          element={<EmployerProfile />}
        />
        <Route path="/employer/employer-jobs" element={<EmployerJobs />} />
        <Route path="/employer/employer-jobs/add" element={<EmployerAddJobs />} />
        <Route path="/employer/employer-jobs/edit" element={<EmployerEditJobs />} />
        <Route
          path="/employer/candidate-job-list"
          element={<CandidateJobList />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
