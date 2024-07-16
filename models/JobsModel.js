import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const JobSchema = new Schema({
  jobTitle: {type: String,required: true},
  industry: {type: String,required: true},
  skills: {type: [String],required: true},
  jobShift: {type: String,required: true},
  degreeLevel: {type: String,required: true},
  country: {type: String,required: true},
  state: {type: String,required: true},
  city: {type: String,required: true},
  experience: {type: String,required: true},
  gender: {type: String,enum: ['Male', 'Female', 'Both'],required: true},
  salaryFrom: {type: Number,required: true},
  salaryTo: {type: Number,required: true},
  keyResponsibilities: {type: String,required: true},
  benefits: {type: String,required: true},
  jobDescription: {type: String,required: true},
  createdAt: {type: Date,default: Date.now}
});

const JobProfile = mongoose.model('Job', JobSchema);

export default JobProfile;