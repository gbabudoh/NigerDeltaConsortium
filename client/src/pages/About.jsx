import React from "react";
import '../scss/About.scss';
import {Helmet} from "react-helmet";

// Import image
import aboutImage from '../assets/images/about/about.jpg'

// Import logo
import watermarkLogo from '../assets/images/ndcicon/ndcicon.png'

const About = () => {
  return (

      <div className="about">

      <div>
      <Helmet>
        <title>About - Niger Delta Consortium</title>
        <meta name="description" content="Niger Delta Consortium is dedicated to addressing multifaceted challenges in Nigeria's Niger Delta Region." />    
        <link rel="canonical" href="https://nigerdeltaconsortium.com/about" />        
      </Helmet>
      <h1 className="about-us-h1">About Us - Niger Delta Consortium</h1>      
      </div>
      
      <div className="page-title">
        <h2>Niger Delta Consortium</h2>
      </div>
      <div className="about-grid">
        <div className="column image-column">
          
          <img src={aboutImage} alt="About us" 
          title="About us" 
          loading="lazy" 
          />

        </div>
        
        <div className="column video-column">
          <iframe
            src="https://www.youtube.com/embed/o_9m2TkKw8w?si=NAFcPNuVTsbQGE8f"
            frameBorder="0"
            allowFullScreen
            title="About Video"
          ></iframe>
        </div>
      
      </div>

      <div className="about-info">
        <div className="watermark">
          <img className="water-logo" src={watermarkLogo} alt="Watermark" title="watermark icon" loading="lazy" />
        </div>
        <h2>Our Focus</h2>
        <p>
        The Niger Delta Consortium is dedicated to addressing multifaceted challenges in Nigeria's Niger Delta Region. Its goals include improving human well-being, safeguarding the environment, preserving mangroves and fisheries, tackling climate change, alleviating poverty, and enhancing healthcare and education. The Consortium prioritizes industrial development, advocating for environmental policies, fostering good governance, advancing technology, promoting research, formulating policies, improving infrastructure, and fostering peace and security in the area.
        </p>
      </div>
      
      <div className="about-info">
        <div className="watermark">
          <img className="water-logo" src={watermarkLogo} alt="Watermark" />
        </div>
        <h2>Mission Statement</h2>
        <p>
        Our mission is to enhance the Niger Delta Region's well-being, environment, and education, while promoting sustainable development, good governance, and technological advancement for a prosperous future.
        </p>
      </div>
    </div>
  );
};

export default About;
