import express from "express";
import { register, login } from "../controllers/authController.js";
import {
  saveCandidateProfile,
  getCandidateProfileByEmail,
  updateCandidateProfile,
  getCandidateProfiles,
  deleteCandidateProfile,
} from "../controllers/CandidateProfileController.js";
import {
  saveEmployerProfile,
  getEmployerProfileByEmail,
  updateEmployerProfile,
  getEmployerProfiles,
  deleteEmployerProfile,
} from "../controllers/EmployerProfileController.js";
import { createJob, getLatestJobs, getAllJobs,getJobProfiles,deleteJobsProfile } from "../controllers/JobController.js";
import {
  getCounts,
  employerdashboard,
} from "../controllers/DashboardController.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/candidate-profile", saveCandidateProfile);
router.post("/employer-profile", saveEmployerProfile);
router.post("/employer-jobs/add", createJob);
router.get("/admin-dashboard", getCounts);
router.get("/employer-dashboard", employerdashboard);
router.get("/candidate-profile", getCandidateProfileByEmail);
router.put("/candidate-edit-profile", updateCandidateProfile);
router.get("/employer-profiles", getEmployerProfiles);
router.delete("/employer-profile/:id", deleteEmployerProfile);
router.get("/candidate-profiles", getCandidateProfiles);
router.delete("/candidate-profile/:id", deleteCandidateProfile);
router.get("/employer-profile",getEmployerProfileByEmail);
router.put("/employer-edit-profile",updateEmployerProfile);
router.get("/latest-jobs", getLatestJobs);
router.get("/employer/employer-jobs",getAllJobs)
router.get("/admin/job-list",getJobProfiles);
router.delete('/admin/job-list/:id', deleteJobsProfile);
router.delete('/employer/employer-jobs/:id', deleteJobsProfile);


export default router;
