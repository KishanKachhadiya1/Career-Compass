import React, { useState } from "react";
import PropTypes from "prop-types";

const JobCard = ({ job }) => {
  const [showAllSkills, setShowAllSkills] = useState(false);

  const handleToggleSkills = () => {
    setShowAllSkills(!showAllSkills);
  };

  const {
    jobTitle = "No Title",
    industry = "No Industry",
    city = "No City",
    state = "No State",
    country = "No Country",
    skills = [],
  } = job || {};

  return (
    <div className="latestJobCard bgWhite rounded-6">
      <div className="imgContent dFlex alignCenter">
        <h3 className="textPrimary">{jobTitle}</h3>
      </div>
      <div className="jobContent">
        <h4>
          <span className="textPlaceHolder icon">
            <i className="fa-solid fa-briefcase"></i>
          </span>
          <span className="textPlaceHolder role">{industry}</span>
        </h4>
        <h4>
          <span className="textPlaceHolder icon">
            <i className="fa-solid fa-location-dot"></i>
          </span>
          <span className="textPlaceHolder role">{`${city}, ${state}, ${country}`}</span>
        </h4>
        <div className="jobSkills">
          {skills.slice(0, 2).map((skill, index) => (
            <span key={index} className="bgLightGrey textPrimary">
              {skill}
            </span>
          ))}
          {skills.length > 2 && (
            <>
              {!showAllSkills ? (
                <span
                  className="bgLightGrey textPrimary"
                  onClick={handleToggleSkills}
                  style={{ cursor: "pointer" }}
                >
                  +{skills.length - 2}
                </span>
              ) : (
                <>
                  {skills.slice(2).map((skill, index) => (
                    <span key={index + 2} className="bgLightGrey textPrimary">
                      {skill}
                    </span>
                  ))}
                  <span
                    className="bgLightGrey textPrimary"
                    onClick={handleToggleSkills}
                    style={{ cursor: "pointer" }}
                  >
                    -{skills.length - 2}
                  </span>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

JobCard.propTypes = {
  job: PropTypes.shape({
    jobTitle: PropTypes.string,
    industry: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    country: PropTypes.string,
    skills: PropTypes.arrayOf(PropTypes.string),
  }),
};

export default JobCard;
