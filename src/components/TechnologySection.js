import React from 'react';

const TechnologySection = ({ formData, handleChange, errors }) => (
  <div className="technology-section">
    <div className="form-group">
      <label>Favorite Programming Language</label>
      <select
        name="favoriteLanguage"
        value={formData.favoriteLanguage}
        onChange={handleChange}
        required
      >
        <option value="">Select a language</option>
        <option value="JavaScript">JavaScript</option>
        <option value="Python">Python</option>
        <option value="Java">Java</option>
        <option value="C#">C#</option>
      </select>
      {errors.favoriteLanguage && <p className="error">{errors.favoriteLanguage}</p>}
    </div>

    <div className="form-group">
      <label>Years of Experience</label>
      <input
        type="number"
        name="yearsOfExperience"
        value={formData.yearsOfExperience}
        onChange={handleChange}
        required
      />
      {errors.yearsOfExperience && <p className="error">{errors.yearsOfExperience}</p>}
    </div>
  </div>
);

export default TechnologySection;
