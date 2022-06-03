import React from "react";
import './JobsContainer.css';

const JobCard = ({
  title,
  img,
  link,
  description,
  onJobChange
}) => {
  const images = require.context('../images', true);

  function handleMouseUp() {
    console.log('mousing up');
    onJobChange({img, title, description, link});
  }

  return (
    <div className="job-card" onMouseUp={handleMouseUp}>
      <img className="job-card-image" src={images(`./${img}`).default} />
      <span className="job-card-title">{title}</span>
    </div>
  )
}

export default JobCard;