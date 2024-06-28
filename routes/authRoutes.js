import express from 'express';
import { registerController } from '../controllers/authController.js';
import { saveCandidateProfile } from '../controllers/CandidateProfileController.js';

const router = express.Router();

// Route for user registration
router.post('/register', registerController);

// Route for saving candidate profile
router.post('/candidate-profile', saveCandidateProfile);

export default router;
