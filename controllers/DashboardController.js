import JobProfile from '../models/JobsModel.js';
import EmployerProfile from '../models/EmployerModel.js';
import CandidateProfile from '../models/CandidateModel.js';
import User from '../models/User.js';


export const getCounts = async (req, res) => {
  try {
    const jobCount = await JobProfile.countDocuments();
    const employerCount = await EmployerProfile.countDocuments();
    const candidateCount = await CandidateProfile.countDocuments();

    res.status(200).json({
      jobs: jobCount,
      employers: employerCount,
      candidates: candidateCount,
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};



export const employerdashboard = async (req, res) => {
  try {
    const jobCount = await JobProfile.countDocuments();
    const employerCount = await EmployerProfile.countDocuments();
    const candidateCount = await CandidateProfile.countDocuments();

    const employer = await User.findById(req.user.id).select('firstName lastName email');

    res.status(200).json({
      jobs: jobCount,
      employers: employerCount,
      candidates: candidateCount,
      employerName: `${employer.firstName} ${employer.lastName}`,
      employerEmail: employer.email
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};