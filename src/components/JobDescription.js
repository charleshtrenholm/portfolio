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

  function formatLinks(text) {
    const [preLink, postLink] = text.split('@here');
    return (
      <p>{preLink}<a href={job.link}>here</a>{postLink}</p>
    )
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
          {/* <p>{job.description}</p> */}
          {formatLinks(job.description)}
        </div>
      </div>
    </div>
  )
}

export default JobDescription;