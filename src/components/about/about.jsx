import React from 'react';
import './about.css';

function About () {
    return ( 
        <section id="about" className="about">
            <div className="section-header">
                <h2><i className="fas fa-info-circle"></i> About US </h2>
                <i className="fas fa-info"></i>
            </div>
            <p className="about-description">
                Binary Brains is a Software Engineering III group design for real implementation of project Management in the real world. We are a team of six students from the Central University of Free State, Bloemfontein, South Africa. 
                Our project focuses on creating a digital archive of three sacred dances performed in Mangaung in 2026. Through immersive multimedia content and stakeholder engagement, we aim to preserve and celebrate the rich cultural heritage 
                of Bloemfontein's dance community. Our vision is to create a living archive that connects past, present, and future generations through the power of movement and storytelling.
            </p>
        </section>
     );
}

export default About ;