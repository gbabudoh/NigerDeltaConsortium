// Updated Underdevelopment.jsx with watermark image in the last grid column
import React from "react";
import '../scss/Underdevelopment.scss';
import {Helmet} from "react-helmet";

//import image
import underdevImage from '../assets/images/frontpage/underdevelop.jpg'

//import logo
import watermarkLogo from '../assets/images/ndcicon/ndcicon.png'


const Underdevelopment = () => {
  return (
    <div className="underdevelopment">

      <div>
      <Helmet>
        <title>Underdevelopment and Poverty - Niger Delta Consortium</title>
        <meta name="description" content="Niger Delta Consortium is dedicated to addressing Underdevelopment and Poverty issues in Nigeria's Niger Delta Region." />
        <link rel="canonical" href="https://nigerdeltaconsortium.com/underdevelopment-and-poverty" />        
      </Helmet>
      <h1 className="underdevelopment-h1">Underdevelopment and Poverty - Niger Delta Consortium</h1>      
      </div>

      <div className="page-title">
        <h2>Underdevelopment and Poverty</h2>
      </div>

      <div>
        <p className="fix-underdevelopment-issues">How Do We Fix This Issues</p>
      </div>

      <div className="underdevelopment-grid">
        <div className="column image-column">
          {/* Replace with actual image */}
          <img src={underdevImage} alt="Underdevelopment" />
        </div>
        <div className="column video-column">
          {/* Replace with actual YouTube embed link */}
          <iframe
            src="https://www.youtube.com/embed/pqD6ZQD2ASU?si=cwj6Aft6crYsbSdz"
            frameBorder="0"
            allowFullScreen
            title="Underdevelopment Video"
          ></iframe>
        </div>
      </div>
      <div className="underdevelopment-info">
        <div className="watermark">
          {/* Replace with actual watermark image */}
          <img className="water-logo" src={watermarkLogo} alt="Watermark" />
        </div>
        <h2>Economic Empowerment and Livelihood Diversification</h2>
        <p>
        Fostering economic empowerment in the Niger Delta involves investing in education and skills training to prepare individuals for diverse industries beyond oil. Initiatives like entrepreneurship training and microloan programs can stimulate business creation. It's crucial to support community-driven development, enabling locals to lead in identifying and implementing their development priorities, thereby ensuring sustainability. Promoting sustainable agriculture and fisheries through research and development of climate-resilient practices can boost food security and income. Additionally, developing infrastructure and improving access to markets by enhancing transportation, communication, and storage facilities are key to linking producers with markets and supporting economic activities.
        </p>
      </div>
      
      <div className="underdevelopment-info">
        <div className="watermark">
          {/* Replace with actual watermark image */}
          <img className="water-logo" src={watermarkLogo} alt="Watermark" />
        </div>
        <h2>Transparent and Equitable Resource Management</h2>
        <p>
        To achieve transparent and equitable resource management in the Niger Delta, it's essential to reassess and renegotiate resource-sharing agreements, ensuring a fair distribution of oil revenues that prioritizes regional development. Tackling corruption and enhancing transparency is crucial, requiring the strengthening of governance institutions and the implementation of robust anti-corruption strategies for effective resource management. Involving various stakeholders, including local communities, government, and the private sector, in decision-making processes is key to fostering inclusive development. Additionally, enforcing stringent regulations and establishing monitoring systems is necessary to hold companies accountable for their social and environmental impact, ensuring responsible resource extraction and minimal ecological harm.
        </p>
      </div>

      <div className="underdevelopment-info">
        <div className="watermark">
          {/* Replace with actual watermark image */}
          <img className="water-logo" src={watermarkLogo} alt="Watermark" />
        </div>
        <h2>Investing in Social Development and Basic Needs</h2>
        <p>
        To foster social development in the Niger Delta, enhancing access to quality healthcare and education is crucial. This involves expanding healthcare facilities, increasing medical staff, prioritizing educational initiatives, and offering scholarships for advanced studies. Investment in essential infrastructure is key to providing communities with clean water, sanitation, and reliable electricity. Tackling gender inequality is also vital, with policies and programs needed to ensure women have equal access to education, healthcare, and economic opportunities. Additionally, supporting youth development is essential, creating opportunities for their involvement in education, skills training, and employment to prevent marginalization and build a more inclusive society.
        </p>
      </div>

      <div className="underdevelopment-info">
        <div className="watermark">
          {/* Replace with actual watermark image */}
          <img className="water-logo" src={watermarkLogo} alt="Watermark" />
        </div>
        <h2>Environmental Preservation and Sustainable Development</h2>
        <p>
        In the Niger Delta, addressing environmental challenges is paramount, necessitating comprehensive remediation efforts for oil spills, pipeline leaks, and other pollution sources. It's essential to incorporate climate resilience into development strategies, preparing for impacts like floods and droughts. Protecting the region's rich biodiversity and ecosystem services, including forests and mangroves, is critical for both livelihood sustenance and environmental regulation. Moreover, sustainable development plans should be developed and implemented, focusing on renewable energy, sustainable agricultural practices, and eco-friendly approaches to ensure long-term environmental health and sustainable growth.
        </p>
      </div>

    </div>
  );
};

export default Underdevelopment;
