import React from "react";
import { StaticImage } from 'gatsby-plugin-image';
import './JobsContainer.css';

const JobCard = ({
  title,
  img,
  description,
  onJobChange
}) => {
  const images = require.context('../images', true);

  function handleMouseUp() {
    console.log('mousing up');
    onJobChange({img, title, description});
  }

  return (
    <div className="job-card" onMouseUp={handleMouseUp}>
      <img className="job-card-image" src={images(`./${img}`).default} />
      <span className="job-card-title">{title}</span>
    </div>
  )
}

export default JobCard;