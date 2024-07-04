import React from "react";
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
import CandidateEditProfile from "./pages/Candidate/CandidateEditProfile";
import EmployerEditProfile from "./pages/Employer/EmployerEditProfile";
import ProtectedRoute from "./components/ProtectedRoute";

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
          element={
            <ProtectedRoute>
              <CandidateProfile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/candidate/candidate-edit-profile"
          element={
            <ProtectedRoute>
              <CandidateEditProfile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/candidate/candidate-dashboard"
          element={
            <ProtectedRoute>
              <CandidateDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/candidate/candidate-applied-jobs"
          element={
            <ProtectedRoute>
              <CandidateAppliedJobs />
            </ProtectedRoute>
          }
        />
        <Route
          path="/candidate/candidate-saved-jobs"
          element={
            <ProtectedRoute>
              <CandidateSavedJobs />
            </ProtectedRoute>
          }
        />
        {/* admin routes  */}
        <Route
          path="/admin/admin-dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/employer-list"
          element={
            <ProtectedRoute>
              <EmployerList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/candidate-list"
          element={
            <ProtectedRoute>
              <CandidateList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/job-list"
          element={
            <ProtectedRoute>
              <JobList />
            </ProtectedRoute>
          }
        />
        {/* employer routes  */}
        <Route
          path="/employer/employer-dashboard"
          element={
            <ProtectedRoute>
              <EmployerDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/employer/employer-profile"
          element={
            <ProtectedRoute>
              <EmployerProfile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/employer/employer-edit-profile"
          element={
            <ProtectedRoute>
              <EmployerEditProfile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/employer/employer-jobs"
          element={
            <ProtectedRoute>
              <EmployerJobs />
            </ProtectedRoute>
          }
        />
        <Route
          path="/employer/employer-jobs/add"
          element={
            <ProtectedRoute>
              <EmployerAddJobs />
            </ProtectedRoute>
          }
        />
        <Route
          path="/employer/employer-jobs/edit"
          element={
            <ProtectedRoute>
              <EmployerEditJobs />
            </ProtectedRoute>
          }
        />
        <Route
          path="/employer/candidate-job-list"
          element={
            <ProtectedRoute>
              <CandidateJobList />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
