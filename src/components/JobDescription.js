import React from 'react';
import './JobsContainer.css';

const JobDescription = ({
  job,
  onDismiss
}) => {

  function handleDismiss() {
    console.log('you are dismissed');
    onDismiss();
  }

  return (
    <div className="job-description-wrapper">
      <div className="job-description-dismiss">
        <span onClick={handleDismiss}>✕</span>
      </div>
      <div className="job-description-content">
        <h2>{job.title}</h2>
        <p>{job.description}</p>
      </div>
    </div>
  )
}

export default JobDescription;