import express from 'express'
import { registerController } from '../controllers/authController.js'
import { saveCandidateProfile } from '../controllers/CandidateProfileController.js';
const router = express.Router()

router.post('/register', registerController)
router.post('/candidate-profile', saveCandidateProfile);



export default router