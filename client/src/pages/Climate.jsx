// Updated Climate.jsx with watermark image in the last grid column
import React from "react";
import '../scss/Climate.scss';
import {Helmet} from "react-helmet";

//import image
import climateImage from '../assets/images/frontpage/climate-change.jpg'

//import logo
import watermarkLogo from '../assets/images/ndcicon/ndcicon.png'


const Climate = () => {
  return (
    <div className="climate">

      <div>
      <Helmet>
        <title>Climate Change Vulnerability - Niger Delta Consortium</title>
        <meta name="description" content="Niger Delta Consortium is dedicated to addressing Climate Change Vulnerability issues in Niger Delta, Nigeria."/>
        <link rel="canonical" href="https://nigerdeltaconsortium.com/climate-change-vulnerability" />        
      </Helmet>
      <h1 className="climate-change-h1">Climate Change Vulnerability - Niger Delta Consortium</h1>      
      </div>

      <div className="page-title">
        <h2>Climate Change Vulnerability</h2>
      </div>

      <div>
        <p className="fix-climate-issues">How Do We Fix This Issues</p>
      </div>

      <div className="climate-grid">
        <div className="column image-column">
          {/* Replace with actual image */}
          <img src={climateImage} alt="Insecurity" />
        </div>
        <div className="column video-column">
          {/* Replace with actual YouTube embed link */}
          <iframe
            src="https://www.youtube.com/embed/8sbLSXLdd0g?si=_6OxdeuRq187DEl-"
            frameBorder="0"
            allowFullScreen
            title="Climate Video"
          ></iframe>
        </div>
      </div>
      <div className="climate-info">
        <div className="watermark">
          {/* Replace with actual watermark image */}
          <img className="water-logo" src={watermarkLogo} alt="Watermark" />
        </div>
        <h2>Enhance Adaptive Capacity and Build Resilience</h2>
        <p>
        To bolster resilience against climate impacts in the Niger Delta, it's critical to establish and enhance early warning systems for natural disasters such as floods and droughts, enabling communities to prepare and reduce potential damage. Supporting the transition to climate-smart agricultural practices, including the use of drought-resistant crops and efficient irrigation techniques, will help farmers adapt to shifting climate conditions. Upgrading critical infrastructure, including the construction of seawalls, levees, and improved drainage, is essential for mitigating the effects of floods and sea-level rise. Additionally, investing in the restoration of mangrove ecosystems is vital, as these natural barriers play a key role in protecting coastlines from erosion and storm impacts.
        </p>
      </div>
      
      <div className="climate-info">
        <div className="watermark">
          {/* Replace with actual watermark image */}
          <img className="water-logo" src={watermarkLogo} alt="Watermark" />
        </div>
        <h2>Integrate Climate Change Considerations into Planning and Development</h2>
        <p>
        Incorporating climate change considerations into planning and development is essential for the Niger Delta's future resilience. This involves conducting detailed climate risk assessments to understand the unique challenges faced by different communities, guiding the creation of tailored adaptation strategies. It's crucial to embed climate resilience into all facets of development planning, from infrastructure projects and land use to economic strategies, ensuring that climate adaptability is a core component. Investing in climate-resilient housing and community infrastructure will make settlements more durable against extreme weather events. Furthermore, supporting community-led adaptation efforts allows for the development of solutions that are informed by local knowledge and directly address the specific needs of communities, enhancing overall resilience.
        </p>
      </div>
      
      <div className="climate-info">
        <div className="watermark">
          {/* Replace with actual watermark image */}
          <img className="water-logo" src={watermarkLogo} alt="Watermark" />
        </div>
        <h2>Access Finance and Resources for Adaptation</h2>
        <p>
        Securing finance and resources is crucial for climate adaptation in the Niger Delta. Establishing climate funds at both national and international levels will provide essential support for local adaptation initiatives. Enhancing the availability and accessibility of climate-related insurance products can offer a safety net for communities to bounce back from climate-induced damages. It's also important to ensure the Niger Delta has access to climate-resilient technologies, including drought-resistant seeds and renewable energy solutions, through facilitated technology transfer. Additionally, investing in research and development focused on innovative, region-specific adaptation strategies will further equip the Niger Delta to effectively respond to climate challenges.
        </p>
      </div>
      
      <div className="climate-info">
        <div className="watermark">
          {/* Replace with actual watermark image */}
          <img className="water-logo" src={watermarkLogo} alt="Watermark" />
        </div>
        <h2>Advocate for Stronger Climate Action and International Cooperation</h2>
        <p>
        Championing robust climate mitigation is essential, supporting both national and global efforts to curb greenhouse gas emissions and cap global warming, benefiting the Niger Delta over time. It's critical to push for fair climate solutions, ensuring that international collaboration and financial backing are available for developing nations like Nigeria to adapt to climate change effects. Advocating for policies that make major emitters responsible for their contributions to the climate crisis is also key. Participation in regional and international climate discussions allows for the exchange of effective practices, representation of the Niger Delta's interests, and the acquisition of international support for local adaptation initiatives.
        </p>
      </div>

    </div>
  );
};

export default Climate;
