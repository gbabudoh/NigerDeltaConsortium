// Updated Community.jsx with watermark image in the last grid column
import React from "react";
import '../scss/Community.scss';
import {Helmet} from "react-helmet";

//import image
import communityImage from '../assets/images/frontpage/community.jpg'

//import logo
import watermarkLogo from '../assets/images/ndcicon/ndcicon.png'


const Community = () => {
  return (
    <div className="community">

      <div>
      <Helmet>
        <title>Community Engagement - Niger Delta Consortium</title>
        <meta name="description" content="Niger Delta Consortium is dedicated to addressing Community Engagement issues in Niger delta region, Nigeria."/>
        <link rel="canonical" href="https://nigerdeltaconsortium.com/community-engagement"/>        
      </Helmet>
      <h1 className="community-h1">Community Engagement - Niger Delta Consortium</h1>      
      </div>

      <div className="page-title">
        <h2>Community Engagement</h2>
      </div>

      <div>
        <p className="fix-community-issues">How Do We Fix This Issues</p>
      </div>

      <div className="community-grid">
        <div className="column image-column">
          {/* Replace with actual image */}
          <img src={communityImage} alt="Community" />
        </div>
        <div className="column video-column">
          {/* Replace with actual YouTube embed link */}
          <iframe
            src="https://www.youtube.com/embed/kYrlSoGmHTU?si=OvXppVY179c1vmCZ"
            frameBorder="0"
            allowFullScreen
            title="Community Video"
          ></iframe>
        </div>
      </div>
      
      <div className="community-info">
        <div className="watermark">
          {/* Replace with actual watermark image */}
          <img className="water-logo" src={watermarkLogo} alt="Watermark" />
        </div>
        <h2>Build Trust and Transparency</h2>
        <p>
        To foster trust and transparency, it's crucial to recognise and address past wrongs, including injustices and environmental harm from oil activities, with sincere apologies. Transparent decision-making is essential, requiring the active involvement of communities in planning and decisions, facilitated by open communication and the sharing of clear, accessible information. Engaging with communities through their traditional leaders and respecting established leadership and decision-making structures is vital. Moreover, fulfilling commitments to communities is key to building trust and establishing enduring relationships, ensuring that promises made are promises kept.
        </p>
      </div>
      
      <div className="community-info">
        <div className="watermark">
          {/* Replace with actual watermark image */}
          <img className="water-logo" src={watermarkLogo} alt="Watermark" />
        </div>
        <h2>Foster Inclusive and Meaningful Participation</h2>
        <p>
        Achieving inclusive and meaningful participation demands authentic engagement that transcends mere formalities, focusing on real dialogue and collaboration. It's imperative to empower marginalized groups, including women, youth, and others, ensuring their perspectives are acknowledged and addressed. Communication should be culturally sensitive, employing methods and languages that reflect the diversity of the community. Additionally, providing capacity-building opportunities, through training and resources, is essential to equip communities with the skills needed for effective involvement in participatory processes.
        </p>
      </div>

      <div className="community-info">
        <div className="watermark">
          {/* Replace with actual watermark image */}
          <img className="water-logo" src={watermarkLogo} alt="Watermark" />
        </div>
        <h2>Share Benefits and Responsibilities</h2>
        <p>
        To ensure a fair distribution of benefits, it's crucial to establish transparent agreements that allocate a just portion of oil revenues to community development. Promoting joint ownership in development projects fosters community involvement and ensures projects align with local needs and priorities. Implementing clear accountability mechanisms is essential for ensuring companies fulfill their social and environmental duties to communities. Furthermore, investing in initiatives that are conceived and implemented by the communities themselves can more directly address their unique needs and goals, empowering local voices and actions.
        </p>
      </div>

      <div className="community-info">
        <div className="watermark">
          {/* Replace with actual watermark image */}
          <img className="water-logo" src={watermarkLogo} alt="Watermark" />
        </div>
        <h2>Promote Conflict Resolution and Peacebuilding</h2>
        <p>
        To foster peace, it's essential to tackle the root causes of conflict, including historical grievances, economic disparities, and environmental injustices. Supporting initiatives that facilitate dialogue and mediation can help bridge divides between communities and stakeholders, paving the way for peaceful resolutions. Investing in programs that encourage reconciliation, mutual understanding, and cooperation through educational, cultural, and interfaith activities is crucial for long-term peacebuilding. Additionally, acknowledging and bolstering traditional conflict resolution methods within communities can enhance local capacities for maintaining harmony.
        </p>
      </div>

    </div>
  );
};

export default Community;
