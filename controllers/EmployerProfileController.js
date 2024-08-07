// controllers/employerProfile.controller.js
import EmployerProfile from "../models/EmployerModel.js";

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
      employerDetails,
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
      employerDetails,
    });

    const savedProfile = await newProfile.save();
    res.status(201).json(savedProfile);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


export const getEmployerProfileByEmail = async (req, res) => {
  try {
    const { email } = req.query;
    const profile = await EmployerProfile.findOne({ email });
    if (!profile) {
      return res.status(404).send('Profile not found');
    }
    res.json(profile);
  } catch (error) {
    res.status(500).send('Server error');
  }
};


export const updateEmployerProfile = async (req, res) => {
  try {
    const { email } = req.body;
    const updatedProfile = await EmployerProfile.findOneAndUpdate({ email }, req.body, { new: true });
    if (!updatedProfile) {
      return res.status(404).send('Profile not found');
    }
    res.json(updatedProfile);
  } catch (error) {
    res.status(400).send('Error updating profile');
  }
};

export const getEmployerProfiles = async (req, res) => {
  try {
    const profiles = await EmployerProfile.find({});
    res.status(200).json(profiles);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteEmployerProfile = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProfile = await EmployerProfile.findByIdAndDelete(id);
    if (!deletedProfile) {
      return res.status(404).json({ message: "Employer profile not found" });
    }
    res.status(200).json({ message: "Employer profile deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
