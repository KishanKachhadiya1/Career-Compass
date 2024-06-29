import React from "react";
import CandidateHeader from "../../components/CandidateHeader";
import "../../styles/candidateappliedjobs.css";

const CandidateAppliedJobs = () => {
  return (
    <>
      <CandidateHeader />
      <section className="candAppliedJobs container">
        <h2 className="title textPrimary">Applied Jobs</h2>
        <div className="searchJobs">
          <div className="candSearch dFlex">
            <span className="rounded-6 dFlex justifyCenter alignCenter">
              <i class="fa-solid fa-magnifying-glass textPrimary"></i>
            </span>
            <input
              type="text"
              placeholder="Search..."
              className="formControl"
            />
          </div>
        </div>
        <div className="appliedJobsMain">
          <div className="appliedJobsCard">
            <div className="dFlex alignCenter">
              <i className="fa-solid fa-briefcase textPlaceHolder icon"></i>
              <h3 className="textPrimary jobTitle">Web Designer</h3>
            </div>
            <div className="dFlex alignCenter mt-10">
              <i className="fa-regular fa-clock textPlaceHolder icon"></i>
              <h4 className="textPlaceHolder jobTitle">
                <span className="textPlaceHolder">Applied On:</span>26th June,
                2024
              </h4>
            </div>
            <div className="dFlex alignCenter mt-10">
              <i className="fa-solid fa-dollar-sign textPlaceHolder icon"></i>
              <h4 className="jobTitle textPlaceHolder">60,000</h4>
            </div>
          </div>
          <div className="appliedJobsCard">
            <div className="dFlex alignCenter">
              <i className="fa-solid fa-briefcase textPlaceHolder icon"></i>
              <h3 className="textPrimary jobTitle">Web Designer</h3>
            </div>
            <div className="dFlex alignCenter mt-10">
              <i className="fa-regular fa-clock textPlaceHolder icon"></i>
              <h4 className="textPlaceHolder jobTitle">
                <span className="textPlaceHolder">Applied On:</span>26th June,
                2024
              </h4>
            </div>
            <div className="dFlex alignCenter mt-10">
              <i className="fa-solid fa-dollar-sign textPlaceHolder icon"></i>
              <h4 className="jobTitle textPlaceHolder">60,000</h4>
            </div>
          </div>
          <div className="appliedJobsCard">
            <div className="dFlex alignCenter">
              <i className="fa-solid fa-briefcase textPlaceHolder icon"></i>
              <h3 className="textPrimary jobTitle">Web Designer</h3>
            </div>
            <div className="dFlex alignCenter mt-10">
              <i className="fa-regular fa-clock textPlaceHolder icon"></i>
              <h4 className="textPlaceHolder jobTitle">
                <span className="textPlaceHolder">Applied On:</span>26th June,
                2024
              </h4>
            </div>
            <div className="dFlex alignCenter mt-10">
              <i className="fa-solid fa-dollar-sign textPlaceHolder icon"></i>
              <h4 className="jobTitle textPlaceHolder">60,000</h4>
            </div>
          </div>
          <div className="appliedJobsCard">
            <div className="dFlex alignCenter">
              <i className="fa-solid fa-briefcase textPlaceHolder icon"></i>
              <h3 className="textPrimary jobTitle">Web Designer</h3>
            </div>
            <div className="dFlex alignCenter mt-10">
              <i className="fa-regular fa-clock textPlaceHolder icon"></i>
              <h4 className="textPlaceHolder jobTitle">
                <span className="textPlaceHolder">Applied On:</span>26th June,
                2024
              </h4>
            </div>
            <div className="dFlex alignCenter mt-10">
              <i className="fa-solid fa-dollar-sign textPlaceHolder icon"></i>
              <h4 className="jobTitle textPlaceHolder">60,000</h4>
            </div>
          </div>
          <div className="appliedJobsCard">
            <div className="dFlex alignCenter">
              <i className="fa-solid fa-briefcase textPlaceHolder icon"></i>
              <h3 className="textPrimary jobTitle">Web Designer</h3>
            </div>
            <div className="dFlex alignCenter mt-10">
              <i className="fa-regular fa-clock textPlaceHolder icon"></i>
              <h4 className="textPlaceHolder jobTitle">
                <span className="textPlaceHolder">Applied On:</span>26th June,
                2024
              </h4>
            </div>
            <div className="dFlex alignCenter mt-10">
              <i className="fa-solid fa-dollar-sign textPlaceHolder icon"></i>
              <h4 className="jobTitle textPlaceHolder">60,000</h4>
            </div>
          </div>
          <div className="appliedJobsCard">
            <div className="dFlex alignCenter">
              <i className="fa-solid fa-briefcase textPlaceHolder icon"></i>
              <h3 className="textPrimary jobTitle">Web Designer</h3>
            </div>
            <div className="dFlex alignCenter mt-10">
              <i className="fa-regular fa-clock textPlaceHolder icon"></i>
              <h4 className="textPlaceHolder jobTitle">
                <span className="textPlaceHolder">Applied On:</span>26th June,
                2024
              </h4>
            </div>
            <div className="dFlex alignCenter mt-10">
              <i className="fa-solid fa-dollar-sign textPlaceHolder icon"></i>
              <h4 className="jobTitle textPlaceHolder">60,000</h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CandidateAppliedJobs;
