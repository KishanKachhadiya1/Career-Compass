// models/CandidateModel.js
import mongoose from 'mongoose';

const candidateProfileSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: String, required: true },
  birthDate: { type: Date, required: true },
  gender: { type: String, required: true },
  skills: [{ type: String, required: true }],
  languages: [{ type: String, required: true }],
  maritalStatus: { type: String, required: true },
  country: { type: String, required: true },
  state: { type: String, required: true },
  city: { type: String, required: true },
  experience: { type: String, required: true },
  address: { type: String, required: true },
}, { timestamps: true });

const CandidateProfile = mongoose.model('CandidateProfile', candidateProfileSchema);

export default CandidateProfile;
