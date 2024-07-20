// controllers/candidateProfile.controller.js
import CandidateProfile from '../models/CandidateModel.js';

export const saveCandidateProfile = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      birthDate,
      gender,
      skills,
      languages,
      maritalStatus,
      country,
      state,
      city,
      experience,
      address
    } = req.body;

    const newProfile = new CandidateProfile({
      firstName,
      lastName,
      email,
      phoneNumber,
      birthDate,
      gender,
      skills,
      languages,
      maritalStatus,
      country,
      state,
      city,
      experience,
      address
    });

    const savedProfile = await newProfile.save();
    res.status(201).json(savedProfile);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


export const getCandidateProfileByEmail = async (req, res) => {
  try {
    const { email } = req.query;
    const profile = await CandidateProfile.findOne({ email });
    if (!profile) {
      return res.status(404).send('Profile not found');
    }
    res.json(profile);
  } catch (error) {
    res.status(500).send('Server error');
  }
};


export const updateCandidateProfile = async (req, res) => {
  try {
    const { email } = req.body;
    const updatedProfile = await CandidateProfile.findOneAndUpdate({ email }, req.body, { new: true });
    if (!updatedProfile) {
      return res.status(404).send('Profile not found');
    }
    res.json(updatedProfile);
  } catch (error) {
    res.status(400).send('Error updating profile');
  }
};
