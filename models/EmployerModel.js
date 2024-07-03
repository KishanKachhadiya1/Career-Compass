// models/EmployerModel.js
import mongoose from 'mongoose';

const employerProfileSchema = new mongoose.Schema({
  companyName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: String, required: true },
  ceoName: { type: String, required: true },
  size: { type: String, required: true },
  ownershipType: { type: String, required: true },
  establishedIn: { type: Number, required: true },
  country: { type: String, required: true },
  state: { type: String, required: true },
  city: { type: String, required: true },
  industry: { type: String, required: true },
  website: { type: String, required: true },
  employerDetails: { type: String, required: true },
}, { timestamps: true });

const EmployerProfile = mongoose.model('EmployerProfile', employerProfileSchema);

export default EmployerProfile;
