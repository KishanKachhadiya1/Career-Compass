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
