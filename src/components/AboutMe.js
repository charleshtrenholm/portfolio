import React from 'react';
import technologiesGif from '../images/technologies01.gif';
import { StaticImage } from 'gatsby-plugin-image';
import './AboutMe.css';

const AboutMe = () => {
    return (
        <div id="about-me-container">
            <div className="image-circle-container">
                <img
                    src={technologiesGif}
                    alt="Technologies I'm proficient in"
                    id="tech-gif-animation"></img>
            </div>
            <h1>Full Stack Developer</h1>
            <p>
                I am a full stack developer located in Oakland, CA. After graduating with a degree in design and working as a freelancer for a few years, I became interested in learning HTML and CSS, which snowballed into a full scale career change after falling in love with coding. 
            </p>
            <p>
                I have done work using a wide array of technologies and disciplines in my path as a developer, covering everything from wireframe design to site deployment. I currently work in the BioSciences division at Lawrence Berkeley Labs, where I have had the privilege to work on exciting new tools to help make biological modeling and analysis easier. I have also worked at Gap, Inc. as well as several various startups and collaborative projects.
            </p>
            <p>
                It’s important to me that my contributions to the world are impactful and I have had the great privilege to be able to write programs that I believe help make the world a better place in at least some small way.
            </p>
            <p>
                I highly value creativity and have always had many creative outlets going at a time, including visual art and music. I enjoy playing pool and going on gravel bike rides. I tried to start skateboarding again, but now that I’m 30 I’m pretty sure that its probably officially illegal to continue.
            </p>
        </div>
    )
};

export default AboutMe;