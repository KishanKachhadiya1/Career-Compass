import React, { useState, useEffect } from "react";

const industryOptions = [
  { value: "IT", label: "Information Technology" },
  { value: "Finance", label: "Finance" },
  { value: "Healthcare", label: "Healthcare" },
  { value: "Education", label: "Education" },
  { value: "Manufacturing", label: "Manufacturing" },
  { value: "Retail", label: "Retail" },
  { value: "Hospitality", label: "Hospitality" },
  { value: "Transportation", label: "Transportation" },
];

const Industry = ({ setFormData, selectedIndustry, setSelectedIndustry }) => {
  useEffect(() => {
    setSelectedIndustry(selectedIndustry);
  }, [selectedIndustry, setSelectedIndustry]);

  const handleChange = (event) => {
    const { value } = event.target;
    setSelectedIndustry(value);
    setFormData((prevFormData) => ({
      ...prevFormData,
      industry: value,
    }));
  };

  return (
    <select
      className="formControl"
      value={selectedIndustry}
      onChange={handleChange}
    >
      <option value="">Select Industry *</option>
      {industryOptions.map((industry) => (
        <option key={industry.value} value={industry.value}>
          {industry.label}
        </option>
      ))}
    </select>
  );
};

export default Industry;
