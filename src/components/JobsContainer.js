import React, { useState, useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import './JobsContainer.css';
import data from '../components/content/job_descriptions.yaml';
import JobDescription from './JobDescription';
import JobCard from './JobCard';


const JobsContainer = (props) => {  

    const [currentJob, setCurrentJob] = useState(null);

    console.log("DATA", data);

    return (
        <div className="jobs-container-container-container">
            <div className="jobs-container-container">
                <div className="jobs-container">
                    {currentJob !== null &&
                        <JobDescription job={currentJob} onDismiss={() => setCurrentJob(null)} />
                    }
                    <h1 className="jobs-header">
                        Work Experience
                    </h1>
                    <div className="jobs-wrapper">
                        {Object.entries(data).map(([jobTitle, {img, description}]) => 
                            <JobCard
                                title={jobTitle}
                                description={description}
                                img={img}
                                onJobChange={setCurrentJob}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )

}

export default JobsContainer;