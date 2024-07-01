import React, { useState } from "react";

const skillsOptions = [
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

const Skills = () => {
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleSkill = (event, value) => {
    event.preventDefault();
    setSelectedSkills((prevSkills) =>
      prevSkills.includes(value)
        ? prevSkills.filter((skill) => skill !== value)
        : [...prevSkills, value]
    );
  };

  const toggleDropdown = (event) => {
    event.preventDefault();
    setDropdownOpen(!dropdownOpen);
  };

  const selectedSkillsLabels = selectedSkills
    .map(
      (skill) => skillsOptions.find((option) => option.value === skill).label
    )
    .join(", ");

  return (
    <>
      <div className="dropdown">
        <button onClick={toggleDropdown}>
          {selectedSkills.length > 0 ? selectedSkillsLabels : "Select Skills"}
        </button>
        {dropdownOpen && (
          <div className="dropdown-menu">
            {skillsOptions.map((skill) => (
              <div
                key={skill.value}
                className={`dropdown-item ${
                  selectedSkills.includes(skill.value) ? "selected" : ""
                }`}
                onClick={(event) => toggleSkill(event, skill.value)}
              >
                {skill.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Skills;
