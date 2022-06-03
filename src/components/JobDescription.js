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

  const images = require.context('../images', true);

  return (
    <div className="job-description-wrapper">
      <div className="job-description-dismiss">
        <span onClick={handleDismiss}>✕</span>
      </div>
      <div className="job-description-content">
        <h2>{job.title}</h2>
        <div className="job-description-text-and-image">
          <img src={images(`./${job.img}`).default} />
          <p>{job.description}</p>
        </div>
      </div>
    </div>
  )
}

export default JobDescription;