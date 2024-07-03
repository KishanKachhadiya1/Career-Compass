// controllers/employerProfile.controller.js
import EmployerProfile from '../models/EmployerModel.js';

export const saveEmployerProfile = async (req, res) => {
  try {
    const {
      companyName,
      email,
      phoneNumber,
      ceoName,
      size,
      ownershipType,
      establishedIn,
      country,
      state,
      city,
      industry,
      website,
      employerDetails
    } = req.body;

    const newProfile = new EmployerProfile({
      companyName,
      email,
      phoneNumber,
      ceoName,
      size,
      ownershipType,
      establishedIn,
      country,
      state,
      city,
      industry,
      website,
      employerDetails
    });

    const savedProfile = await newProfile.save();
    res.status(201).json(savedProfile);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
