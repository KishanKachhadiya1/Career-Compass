import express from 'express';
import { register, login } from '../controllers/authController.js';
import { saveCandidateProfile } from '../controllers/CandidateProfileController.js';
import { saveEmployerProfile } from '../controllers/EmployerProfileController.js';
import { createJob } from '../controllers/JobController.js'
import { getCounts,employerdashboard } from '../controllers/DashboardController.js';


const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/candidate-profile', saveCandidateProfile);  
router.post('/employer-profile', saveEmployerProfile);
router.post('/employer-jobs', createJob);
router.get('/admin-dashboard', getCounts);  
router.get('/employer-dashboard',employerdashboard);

export default router;
