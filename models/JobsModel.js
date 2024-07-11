const mongoose = require('mongoose');

const jobProfileSchema = new mongoose.Schema({
  companyName: { 
    type: String, 
    required: [true, 'Company name is required'] 
  },
  email: { 
    type: String, 
    required: [true, 'Email is required'], 
    unique: true,
    match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address']
  },
  phoneNumber: { 
    type: String, 
    required: [true, 'Phone number is required'],
    match: [/^\d{10}$/, 'Please enter a valid 10-digit phone number']
  },
  ceoName: { 
    type: String, 
    required: [true, 'CEO name is required'] 
  },
  size: { 
    type: String, 
    required: [true, 'Company size is required'] 
  },
  ownershipType: { 
    type: String, 
    required: [true, 'Ownership type is required'] 
  },
  establishedIn: { 
    type: Number, 
    required: [true, 'Establishment year is required'],
    min: [1900, 'Year must be after 1900'],
    max: [new Date().getFullYear(), 'Year cannot be in the future']
  },
  country: { 
    type: String, 
    required: [true, 'Country is required'] 
  },
  state: { 
    type: String, 
    required: [true, 'State is required'] 
  },
  city: { 
    type: String, 
    required: [true, 'City is required'] 
  },
  industry: { 
    type: String, 
    required: [true, 'Industry is required'] 
  },
  website: { 
    type: String, 
    required: [true, 'Website is required'],
    match: [/^https?:\/\/[^\s$.?#].[^\s]*$/, 'Please enter a valid URL']
  },
  employerDetails: { 
    type: String, 
    required: [true, 'Employer details are required'] 
  }
}, { timestamps: true });

const JobProfile = mongoose.model('JobProfile', jobProfileSchema);

module.exports = JobProfile;
