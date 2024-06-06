import React from "react";
// https://www.freepik.com/
import jobs from "../images/jobs.jpg";

const JobCard = () => {
  return (
    <div className="latestJobCard bgWhite rounded-6">
      <div className="imgContent dFlex alignCenter">
        <img src={jobs} alt="Company Logo" />
        <h3 className="textPrimary">Web Designer</h3>
      </div>
      <div className="jobContent">
        <h4>
          <span className="textPlaceHolder icon">
            <i className="fa-solid fa-briefcase"></i>
          </span>
          <span className="textPlaceHolder role">Designer</span>
        </h4>
        <h4>
          <span className="textPlaceHolder icon">
            <i className="fa-solid fa-location-dot"></i>
          </span>
          <span className="textPlaceHolder role">Kitchener, Canada</span>
        </h4>
        <div className="jobSkills">
          <span className="bgLightGrey textPrimary">HTML5</span>
          <span className="bgLightGrey textPrimary">CSS3</span>
          <span className="bgLightGrey textPrimary">+4</span>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
