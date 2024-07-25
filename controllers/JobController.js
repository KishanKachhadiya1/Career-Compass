
import JobProfile from '../models/JobsModel.js';

export const createJob = async (req, res) => {
  try {
    const {
      jobTitle,
      industry,
      skills,
      jobShift,
      degreeLevel,
      country,
      state,
      city,
      experience,
      gender,
      salaryFrom,
      salaryTo,
      keyResponsibilities,
      benefits,
      jobDescription
    } = req.body;

    const newJob = new JobProfile({
      jobTitle,
      industry,
      skills,
      jobShift,
      degreeLevel,
      country,
      state,
      city,
      experience,
      gender,
      salaryFrom,
      salaryTo,
      keyResponsibilities,
      benefits,
      jobDescription
    });

    const savedJob = await newJob.save();
    res.status(201).json(savedJob);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getLatestJobs = async (req, res) => {
  try {
    const jobs = await JobProfile.find().sort({ createdAt: -1 }).limit(10);
    res.status(200).json(jobs);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};