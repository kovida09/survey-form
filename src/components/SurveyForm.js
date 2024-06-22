import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TechnologySection from './TechnologySection';
import HealthSection from './HealthSection';
import EducationSection from './EducationSection';
import Summary from './Summary';
import useFormValidation from '../hooks/useFormValidation';

const SurveyForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    surveyTopic: '',
    favoriteLanguage: '',
    yearsOfExperience: '',
    exerciseFrequency: '',
    dietPreference: '',
    highestQualification: '',
    fieldOfStudy: '',
    feedback: '',
  });

  const [additionalQuestions, setAdditionalQuestions] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { errors, validateForm } = useFormValidation(formData);

  useEffect(() => {
    if (isSubmitted) {
      axios.get(`https://api.example.com/questions?topic=${formData.surveyTopic}`)
        .then(response => setAdditionalQuestions(response.data))
        .catch(error => console.error('Error fetching additional questions:', error));
    }
  }, [isSubmitted, formData.surveyTopic]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
    }
  };

  return (
    <div className="survey-form">
      <h2>Survey Form</h2>
      {!isSubmitted ? (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
            {errors.fullName && <p className="error">{errors.fullName}</p>}
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>

          <div className="form-group">
            <label>Survey Topic</label>
            <select
              name="surveyTopic"
              value={formData.surveyTopic}
              onChange={handleChange}
              required
            >
              <option value="">Select a topic</option>
              <option value="Technology">Technology</option>
              <option value="Health">Health</option>
              <option value="Education">Education</option>
            </select>
            {errors.surveyTopic && <p className="error">{errors.surveyTopic}</p>}
          </div>

          {formData.surveyTopic === 'Technology' && (
            <TechnologySection formData={formData} handleChange={handleChange} errors={errors} />
          )}

          {formData.surveyTopic === 'Health' && (
            <HealthSection formData={formData} handleChange={handleChange} errors={errors} />
          )}

          {formData.surveyTopic === 'Education' && (
            <EducationSection formData={formData} handleChange={handleChange} errors={errors} />
          )}

          <div className="form-group">
            <label>Feedback</label>
            <textarea
              name="feedback"
              value={formData.feedback}
              onChange={handleChange}
              required
            />
            {errors.feedback && <p className="error">{errors.feedback}</p>}
          </div>

          <button type="submit" className="submit-btn">Submit</button>
        </form>
      ) : (
        <Summary formData={formData} additionalQuestions={additionalQuestions} />
      )}
    </div>
  );
};

export default SurveyForm;
