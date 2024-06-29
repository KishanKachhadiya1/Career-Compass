import React from "react";
import CandidateHeader from "../../components/CandidateHeader";
import "../../styles/candidateappliedjobs.css";

const CandidateAppliedJobs = () => {
  return (
    <>
      <CandidateHeader />
      <section className="candAppliedJobs container">
        <h2 className="title textPrimary">Applied Jobs</h2>
      </section>
    </>
  );
};

export default CandidateAppliedJobs;
