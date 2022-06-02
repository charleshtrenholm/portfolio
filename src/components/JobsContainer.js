import React, { useState, useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import './JobsContainer.css';

const JobsContainer = (props) => {  

    // useEffect(() => {
    //     const files = useStaticQuery(graphql`
    //         query {
                
    //         }
    //     `)
    // }, [])

    const [currentJob, setCurrentJob] = useState(null);

    return (
        <div className="jobs-container">
            <h1 className="jobs-header">
                Work Experience
            </h1>
            
        </div>
    )

}

export default JobsContainer;