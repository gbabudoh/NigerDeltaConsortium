import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/FrontPage.scss';
import watermarkImage from '../assets/images/ndcicon/ndcicon.png';
import {Helmet} from "react-helmet";

// Frontpage images
import environImage from '../assets/images/frontpage/environ.jpg';
import underdevelopImage from '../assets/images/frontpage/underdevelop.jpg';
import insecurityImage from '../assets/images/frontpage/insecurity.jpg';
import climateImage from '../assets/images/frontpage/climate-change.jpg';
import communityImage from '../assets/images/frontpage/community.jpg';
import frameworkImage from '../assets/images/frontpage/framework.jpg';

const FrontPage = () => {
    const gridItems = [
        {
            imgSrc: environImage,
            title: "Environmental Devastation",
            description: "In Nigeria's Niger Delta region, rampant oil exploitation has led to severe environmental degradation, impacting ecosystems and local communities.",
            link: "/environmental-devastation"
        },
        {
            imgSrc: underdevelopImage,
            title: "Underdevelopment & Poverty",
            description: "Despite its oil wealth, Nigeria's Niger Delta faces chronic underdevelopment and poverty, marked by inadequate infrastructure and limited opportunities.",
            link: "/underdevelopment-and-poverty"
        },
        {
            imgSrc: insecurityImage,
            title: "Insecurity & Conflict",
            description: "Nigeria's Niger Delta experiences persistent insecurity and conflict, fueled by resource control struggles, militancy, and socio-economic disparities.",
            link: "/insecurity-and-conflict"
        },
        {
            imgSrc: climateImage,
            title: "Climate Change Vulnerability",
            description: "The Niger Delta's low-lying geography makes it highly vulnerable to climate change impacts like flooding and coastal erosion.",
            link: "/climate-change-vulnerability"
        },
        {
            imgSrc: communityImage,
            title: "Community Engagement",
            description: "In Nigeria's Niger Delta, community engagement is key to addressing environmental, social, and economic challenges through local participation.",
            link: "/community-engagement"
        },
        {
            imgSrc: frameworkImage,
            title: "Lack of Sustainable Framework",
            description: "Nigeria's Niger Delta region grapples with a lack of sustainable frameworks, hindering long-term environmental and socio-economic development.",
            link: "/lack-of-sustainable-framework"
        }
    ];

    return (
        <div className="front-page">
            
        <div>
        <Helmet>
        <title>Front-Page - Niger Delta Consortium</title>
        <meta name="description" content="Niger Delta Consortium is special purpose vehicle  solving complex challenges in Nigeria's Niger Delta Region." />    
        <link rel="canonical" href="https://nigerdeltaconsortium.com/front-page" />        
        </Helmet> 
        </div>
        

            <div className="title-section">
                <h1>Solving complex issues in Niger Delta region, Nigeria.</h1>
            </div>
            <div className="grid-section">
                {gridItems.map((item, index) => (
                    <div className="grid-item" key={index}>
                        <img src={item.imgSrc} alt={item.title} />
                        <h2 className='front-page-h2'>{item.title}</h2>
                        <p>{item.description}</p>
                        <div className="item-footer">
                            <Link to={item.link}>
                                <button className="read-more">Insight</button>
                            </Link>
                            <img src={watermarkImage} alt="Watermark Logo" className="logo-watermark" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FrontPage;
