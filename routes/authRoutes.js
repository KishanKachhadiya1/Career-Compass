import express from 'express';
import { register, login } from '../controllers/authController.js';
import { saveCandidateProfile } from '../controllers/CandidateProfileController.js';


const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/candidate-profile', saveCandidateProfile);  // Add this line


export default router;
