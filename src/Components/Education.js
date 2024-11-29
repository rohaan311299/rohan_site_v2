import React, { useState, useEffect } from 'react';
import '../Styles/Experience.css';
import educationData from '../Data/Education.json';

function Education() {
  const [activeTab, setActiveTab] = useState(0);
  const [educations, setEducation] = useState([]);

  useEffect(() => {
    setEducation(educationData);
  }, []);

  return (
    <section className="where-ive-worked" id="education">
      <h2 className="section-title">Where I’ve Studied</h2>
      <div className="work-content">
        {/* Sidebar */}
        <div className="work-sidebar">
          {educations.map((education, index) => (
            <button
              key={index}
              className={`tab-button ${index === activeTab ? 'active' : 'inactive'}`}
              onClick={() => setActiveTab(index)}
            >
              {education.university}
            </button>
          ))}
        </div>

        {/* Main Content */}
        <div className="work-details">
          {educations.length > 0 && (
            <div className="education-details-container">
              {/* Text Content */}
              <div className="education-text">
                <h3>
                  {educations[activeTab].role} @{' '}
                  <span className="company-name">{educations[activeTab].university}</span>
                </h3>
                <p className="work-duration">
                  {educations[activeTab].startDate} – {educations[activeTab].endDate}
                </p>
                <ul className="responsibilities">
                  {educations[activeTab].coursework.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Image Content */}
              <div className="education-image">
                {/* Add a placeholder image or dynamic image */}
                <img
                  src={educations[activeTab].image}
                  alt={`${educations[activeTab].university} logo`}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Education;
