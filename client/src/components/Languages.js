import React, { useState } from 'react'

const languagesOptions = [
  { value: "english", label: "English" },
  { value: "hindi", label: "Hindi" },
  { value: "gujarati", label: "Gujarati" },
  { value: "french", label: "French" },
  { value: "spanish", label: "Spanish" },
  { value: "german", label: "German" },
  { value: "chinese", label: "Chinese" },
  { value: "japanese", label: "Japanese" },
];

const Languages = () => {
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleLanguage = (value) => {
    setSelectedLanguages((prevLanguages) =>
      prevLanguages.includes(value)
        ? prevLanguages.filter((language) => language !== value)
        : [...prevLanguages, value]
    );
  };

  return (
    <>
      <div className="dropdown">
      <button onClick={() => setDropdownOpen(!dropdownOpen)}>
        Select Languages
      </button>
      {dropdownOpen && (
        <div className="dropdown-menu">
          {languagesOptions.map((language) => (
            <div
              key={language.value}
              className={`dropdown-item ${selectedLanguages.includes(language.value) ? 'selected' : ''}`}
              onClick={() => toggleLanguage(language.value)}
            >
              {language.label}
            </div>
          ))}
        </div>
      )}
    </div>
    </>
  )
}

export default Languages
