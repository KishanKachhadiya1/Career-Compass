import express from 'express';
import { register, login } from '../controllers/authController.js';
import { saveCandidateProfile } from '../controllers/CandidateProfileController.js';
import { saveEmployerProfile } from '../controllers/EmployerProfileController.js';



const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/candidate-profile', saveCandidateProfile);  
router.post('/employer-profile', saveEmployerProfile);



export default router;
