import React, { useState } from "react";
import Select from "react-select";

const options = [
  { value: "programming", label: "Programming" },
  { value: "testing", label: "Testing" },
  { value: "designing", label: "Designing" },
  { value: "management", label: "Management" },
  { value: "sales", label: "Sales" },
  { value: "teaching", label: "Teaching" },
  { value: "problem-solving", label: "Problem solving" },
  { value: "leadership", label: "Leadership" },
  { value: "communication-skill", label: "Communication skill" },
];

const SkillsDropdown = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleChange = (selected) => {
    setSelectedOptions(selected);
  };

  return(
    <div>
      <Select
        isMulti
        name="skills"
        options={options}
        className="basic-multi-select"
        classNamePrefix="select"
        value={selectedOptions}
        onChange={handleChange}
      />
      <div>
        {selectedOptions.map(option => (
          <span key={option.value} className="skill-badge">
            {option.label}
          </span>
        ))}
      </div>
    </div>
  );
  
};

export default SkillsDropdown;
