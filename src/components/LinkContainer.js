import React from 'react';
import { Link } from 'gatsby';
import './LinkContainer.css';

const LinkContainer = () => {
    return <div className="link-container">
        <a href="https://www.linkedin.com/in/charlestrenholm" target="_blank">LinkedIn</a>
        <a href="https://github.com/charleshtrenholm" target="_blank">GitHub</a>
        <a href="https://instagram.com/gr8ideasworld" target="_blank">Instagram</a>
    </div>
}

export default LinkContainer;