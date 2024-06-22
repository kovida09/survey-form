// import React from 'react';

// const Summary = ({ formData, additionalQuestions }) => {
//   return (
//     <div className="summary">
//       <h2>Summary</h2>
//       <p><strong>Full Name:</strong> {formData.fullName}</p>
//       <p><strong>Email:</strong> {formData.email}</p>
//       <p><strong>Survey Topic:</strong> {formData.surveyTopic}</p>

//       {formData.surveyTopic === 'Technology' && (
//         <div>
//           <p><strong>Favorite Programming Language:</strong> {formData.favoriteLanguage}</p>
//           <p><strong>Years of Experience:</strong> {formData.yearsOfExperience}</p>
//         </div>
//       )}

//       {formData.surveyTopic === 'Health' && (
//         <div>
//           <p><strong>Exercise Frequency:</strong> {formData.exerciseFrequency}</p>
//           <p><strong>Diet Preference:</strong> {formData.dietPreference}</p>
//         </div>
//       )}

//       {formData.surveyTopic === 'Education' && (
//         <div>
//           <p><strong>Highest Qualification:</strong> {formData.highestQualification}</p>
//           <p><strong>Field of Study:</strong> {formData.fieldOfStudy}</p>
//         </div>
//       )}

//       <p><strong>Feedback:</strong> {formData.feedback}</p>

//       {additionalQuestions.length > 0 && (
//         <div>
//           <h3>Additional Questions</h3>
//           <ul>
//             {additionalQuestions.map(question => (
//               <li key={question.id}>
//                 <strong>{question.title}:</strong> {question.answer}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Summary;
import React from 'react';

const Summary = ({ formData, additionalQuestions }) => {
  return (
    <div className="summary">
      <h2>Summary</h2>
      <p><strong>Full Name:</strong> {formData.fullName}</p>
      <p><strong>Email:</strong> {formData.email}</p>
      <p><strong>Survey Topic:</strong> {formData.surveyTopic}</p>

      {formData.surveyTopic === 'Technology' && (
        <div>
          <p><strong>Favorite Programming Language:</strong> {formData.favoriteLanguage}</p>
          <p><strong>Years of Experience:</strong> {formData.yearsOfExperience}</p>
        </div>
      )}

      {formData.surveyTopic === 'Health' && (
        <div>
          <p><strong>Exercise Frequency:</strong> {formData.exerciseFrequency}</p>
          <p><strong>Diet Preference:</strong> {formData.dietPreference}</p>
        </div>
      )}

      {formData.surveyTopic === 'Education' && (
        <div>
          <p><strong>Highest Qualification:</strong> {formData.highestQualification}</p>
          <p><strong>Field of Study:</strong> {formData.fieldOfStudy}</p>
        </div>
      )}

      <div className="feedback-section">
        <p><strong>Feedback:</strong></p>
        <div className="feedback-content">
          {formData.feedback}
        </div>
      </div>

      {additionalQuestions.length > 0 && (
        <div className="additional-questions">
          <h3>Additional Questions</h3>
          <ul>
            {additionalQuestions.map(question => (
              <li key={question.id}>
                <strong>{question.title}:</strong> {question.answer}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Summary;
