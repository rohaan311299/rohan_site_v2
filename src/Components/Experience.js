import React, { useState, useEffect } from 'react';
import '../Styles/Experience.css';
import jobsData from '../Data/Jobs.json';

function Experience() {
  const [activeTab, setActiveTab] = useState(0);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    setJobs(jobsData);
  }, []);

  return (
    <section className="where-ive-worked" id="work">
      <h2 className="section-title">
        Where I’ve Worked
      </h2>
      <div className="work-content">
        {/* Sidebar */}
        <div className="work-sidebar">
          {jobs.map((job, index) => (
            <button
              key={index}
              className={`tab-button ${index === activeTab ? 'active' : 'inactive'}`}
              onClick={() => setActiveTab(index)}
            >
              {job.company}
            </button>
          ))}
        </div>

        {/* Main Content */}
        <div className="work-details">
          {jobs.length > 0 && (
            <>
              <h3>
                {jobs[activeTab].role} @{' '}
                <span className="company-name">{jobs[activeTab].company}</span>
              </h3>
              <p className="work-duration">
                {jobs[activeTab].startDate} – {jobs[activeTab].endDate}
              </p>
              <ul className="responsibilities">
                {jobs[activeTab].responsibilities.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <div className='education-image'>
                <img src={jobs[activeTab].image} alt={jobs[activeTab].company} />
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default Experience;
