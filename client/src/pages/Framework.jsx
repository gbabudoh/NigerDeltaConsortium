// Updated Framework.jsx with watermark image in the last grid column
import React from "react";
import '../scss/Framework.scss';
import {Helmet} from "react-helmet";

//import image
import frameworkImage from '../assets/images/frontpage/framework.jpg'

//import logo
import watermarkLogo from '../assets/images/ndcicon/ndcicon.png'


const Framework = () => {
  return (
    <div className="framework">

      <div>
      <Helmet>
        <title>Lack Of Sustainable Framework - Niger Delta Consortium</title>
        <meta name="description" content="Niger Delta Consortium is dedicated to addressing Community Engagement issues in Niger delta region, Nigeria."/>
        <link rel="canonical" href="https://nigerdeltaconsortium.com/lack-of-sustainable-framework"/>        
      </Helmet>
      <h1 className="frameworks-h1">Lack Of Sustainable Framework - Niger Delta Consortium</h1>      
      </div>

      <div className="page-title">
        <h2>Lack Of Sustainable Framework</h2>
      </div>

      <div>
        <p className="fix-framework-issues">How Do We Fix This Issues</p>
      </div>

      <div className="framework-grid">
        <div className="column image-column">
          {/* Replace with actual image */}
          <img src={frameworkImage} alt="Community" />
        </div>
        <div className="column video-column">
          {/* Replace with actual YouTube embed link */}
          <iframe
            src="https://www.youtube.com/embed/Snxbgj3v0DM?si=ESc_Iu9cSDZ2M8OB"
            frameBorder="0"
            allowFullScreen
            title="Framework Video"
          ></iframe>
        </div>
      </div>
      
      <div className="framework-info">
        <div className="watermark">
          {/* Replace with actual watermark image */}
          <img className="water-logo" src={watermarkLogo} alt="Watermark" />
        </div>
        <h2>Develop and Implement a Comprehensive Sustainable Development Framework</h2>
        <p>
        Creating a comprehensive sustainable development framework requires the collaboration of all relevant stakeholders, including government entities, local communities, NGOs, and businesses, to ensure a diverse range of perspectives and a sense of shared responsibility. Adopting a holistic approach is crucial, encompassing environmental protection, social equity, and economic viability, while also incorporating considerations for climate resilience, biodiversity conservation, sustainable livelihoods, and human rights. Setting clear, measurable, achievable, relevant, and time-bound (SMART) objectives is essential to articulate a long-term vision for sustainability. Furthermore, an effective monitoring and evaluation system is vital to track progress, facilitating timely adjustments to address new challenges and integrate lessons learned, ensuring the framework remains dynamic and effective.
        </p>
      </div>
      
      <div className="framework-info">
        <div className="watermark">
          {/* Replace with actual watermark image */}
          <img className="water-logo" src={watermarkLogo} alt="Watermark" />
        </div>
        <h2>Enhance Governance and Accountability</h2>
        <p>
        Improving governance and accountability involves bolstering the capacity of institutions tasked with environmental conservation, resource management, and fostering community development. It's crucial to combat corruption through robust anti-corruption strategies, promoting transparency and accountability in both decision-making and the distribution of resources. Empowering local communities to actively participate in governance and enabling them to demand accountability from authorities is essential. Additionally, reinforcing legal frameworks dedicated to environmental and social safeguards, ensuring their strict enforcement, and holding transgressors responsible are key steps toward enhanced governance and accountability.
        </p>
      </div>

      <div className="framework-info">
        <div className="watermark">
          {/* Replace with actual watermark image */}
          <img className="water-logo" src={watermarkLogo} alt="Watermark" />
        </div>
        <h2>Integrate Sustainable Practices in Key Sectors</h2>
        <p>
        To advance sustainability, the oil and gas sector must embrace cleaner energy alternatives, enforce stringent environmental standards, and adopt responsible extraction techniques. In agriculture and fisheries, the focus should be on sustainable practices, livelihood diversification, and the conservation of aquatic resources to safeguard food security and ecosystem health. Infrastructure projects should prioritize designs that reduce environmental degradation and enhance climate adaptability. Additionally, efforts in forestry and biodiversity conservation are essential, with investments directed towards the protection and rehabilitation of mangroves, forests, and critical habitats, ensuring the preservation of the region's ecological balance.
        </p>
      </div>

      <div className="framework-info">
        <div className="watermark">
          {/* Replace with actual watermark image */}
          <img className="water-logo" src={watermarkLogo} alt="Watermark" />
        </div>
        <h2>Secure Financing and Resources for Sustainability</h2>
        <p>
        Securing the necessary financing and resources for sustainability in the Niger Delta requires tapping into international support to bring in both funding and global expertise for local sustainable development projects. It's crucial to diversify the region's revenue sources by developing sectors like ecotourism, renewable energy, and sustainable agriculture, reducing reliance on oil. Ensuring that the management of resources is conducted with transparency and accountability is essential for the equitable support of sustainable initiatives. Additionally, innovative financing mechanisms, such as green bonds and impact investing, should be explored to provide additional funding avenues for projects aimed at sustainable development.
        </p>
      </div>

    </div>
  );
};

export default Framework;
