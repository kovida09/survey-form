import { useState } from 'react';

const useFormValidation = (formData) => {
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    // Validate Full Name
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
      valid = false;
    }

    // Validate Email
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      valid = false;
    }

    // Validate Survey Topic
    if (!formData.surveyTopic.trim()) {
      newErrors.surveyTopic = 'Survey Topic is required';
      valid = false;
    }

    // Validate Technology Section
    if (formData.surveyTopic === 'Technology') {
      if (!formData.favoriteLanguage.trim()) {
        newErrors.favoriteLanguage = 'Favorite Programming Language is required';
        valid = false;
      }
      if (!formData.yearsOfExperience.trim() || formData.yearsOfExperience <= 0) {
        newErrors.yearsOfExperience = 'Years of Experience must be greater than 0';
        valid = false;
      }
    }

    // Validate Health Section
    if (formData.surveyTopic === 'Health') {
      if (!formData.exerciseFrequency.trim()) {
        newErrors.exerciseFrequency = 'Exercise Frequency is required';
        valid = false;
      }
      if (!formData.dietPreference.trim()) {
        newErrors.dietPreference = 'Diet Preference is required';
        valid = false;
      }
    }

    // Validate Education Section
    if (formData.surveyTopic === 'Education') {
      if (!formData.highestQualification.trim()) {
        newErrors.highestQualification = 'Highest Qualification is required';
        valid = false;
      }
      if (!formData.fieldOfStudy.trim()) {
        newErrors.fieldOfStudy = 'Field of Study is required';
        valid = false;
      }
    }

    // Validate Feedback
    if (!formData.feedback.trim()) {
      newErrors.feedback = 'Feedback is required';
      valid = false;
    } else if (formData.feedback.trim().length < 50) {
      newErrors.feedback = 'Feedback must be at least 50 characters';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  return { errors, validateForm };
};

export default useFormValidation;
