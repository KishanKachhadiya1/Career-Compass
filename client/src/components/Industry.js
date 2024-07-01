import React, { useState } from "react";

const industryOptions = [
  { value: "informationtechnology", label: "Information Technology" },
  { value: "engineering", label: "Engineering" },
  { value: "teacher", label: "Teacher" },
  { value: "financeandbanking", label: "Finance and Banking" },
  { value: "constructions", label: "Constructions" },
  { value: "business", label: "Business" },
];

const Industry = () => {
  const [selectedIndustry, setSelectedIndustry] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const selectIndustry = (event, value) => {
    event.preventDefault();
    setSelectedIndustry(value);
    setDropdownOpen(false);
  };

  const toggleDropdown = (event) => {
    event.preventDefault();
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <>
      <div className="dropdown">
        <button onClick={toggleDropdown}>
          {selectedIndustry
            ? industryOptions.find(
                (option) => option.value === selectedIndustry
              ).label
            : "Select Industry"}
        </button>
        {dropdownOpen && (
          <div className="dropdown-menu">
            {industryOptions.map((industry) => (
              <div
                key={industry.value}
                className={`dropdown-item ${
                  selectedIndustry === industry.value ? "selected" : ""
                }`}
                onClick={(event) => selectIndustry(event, industry.value)}
              >
                {industry.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Industry;
