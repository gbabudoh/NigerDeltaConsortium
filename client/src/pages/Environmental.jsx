// Updated Environmental.jsx with watermark image in the last grid column
import React from "react";
import '../scss/Environmental.scss';
import {Helmet} from "react-helmet";

//import image
import environImage from '../assets/images/frontpage/environ.jpg'

//import logo
import watermarkLogo from '../assets/images/ndcicon/ndcicon.png'


const Environmental = () => {
  return (
    <div className="environmental">

      <div>
      <Helmet>
        <title>Environmental Devastation - Niger Delta Consortium</title>
        <meta name="description" content="Niger Delta Consortium is dedicated to addressing Environmental Devastation issues in Niger Delta Region, Nigeria." />        
        <link rel="canonical" href="https://nigerdeltaconsortium.com/environmental-devastation" />        
      </Helmet>
      <h1 className="environmental-devastation-h1">Climate Change Vulnerability - Niger Delta Consortium</h1>      
      </div>

      <div className="page-title">
        <h2>Environmental Devastation</h2>
      </div>

      <div>
        <p className="fix-environmental-issues">How Do We Fix This Issues</p>
      </div>

      <div className="environmental-grid">
        <div className="column image-column">
          {/* Replace with actual image */}
          <img src={environImage} alt="Environmental" />
        </div>
        <div className="column video-column">
          {/* Replace with actual YouTube embed link */}
          <iframe
            src="https://www.youtube.com/embed/9yeNLrxclPw?si=hYYGc5cDM-9Nbwpw"
            frameBorder="0"
            allowFullScreen
            title="Environmental Video"
          ></iframe>
        </div>
      </div>
      <div className="environmental-info">

      <div className="watermark">
        {/* Replace with actual watermark image */}
        <img className="water-logo" src={watermarkLogo} alt="Watermark" />
        </div>
        <h2>Prioritise Clean-up, Remediation, and Carbon Reduction</h2>
        <p>
        Addressing environmental challenges effectively requires comprehensive clean-up plans and carbon reduction measures, not just in specific areas but across the entire Niger Delta. This necessitates the Nigerian government and companies involved to commit to extensive environmental restoration and carbon mitigation strategies. The success of these efforts hinges on adopting stricter environmental regulations and ensuring their rigorous enforcement, particularly against oil companies responsible for spills and pollution. Equally important is the development of local expertise and the promotion of community involvement in both remediation and monitoring activities. Such an inclusive approach is key to achieving sustainable and environmentally responsible outcomes in the region.
        </p>
      </div>
      
      <div className="environmental-info">
        <div className="watermark">
          {/* Replace with actual watermark image */}
          <img className="water-logo" src={watermarkLogo} alt="Watermark" />
        </div>
        <h2>Transition away from Oil Dependence</h2>
        <p>
        To shift the region's reliance on oil, a significant investment in renewable energy sources such as solar and wind power is essential for diversifying the economy. This transition should also include bolstering sustainable agriculture and fisheries, encouraging practices that enhance livelihoods while minimizing environmental impact. Further, the promotion of ecotourism and sustainable development initiatives can play a pivotal role, fostering tourism that supports local communities and conserves the natural environment. Additionally, fostering the growth of new industries and businesses that do not depend on the oil sector is crucial for creating alternative employment opportunities, thereby supporting a more sustainable and diversified economic future.
        </p>
      </div>

      <div className="environmental-info">
        <div className="watermark">
          {/* Replace with actual watermark image */}
          <img className="water-logo" src={watermarkLogo} alt="Watermark" />
        </div>
        <h2>Address Governance and Accountability</h2>
        <p>
        To enhance governance and accountability, it's imperative to tackle corruption and promote transparency within both government bodies and the oil industry. This involves fortifying institutions to effectively combat corrupt practices. Equally important is the empowerment of local communities, ensuring their active involvement in decision-making processes related to resource management and development projects. Improving access to justice is also crucial, particularly for communities impacted by environmental degradation. This approach should be complemented by stringent enforcement of environmental laws, holding polluters responsible for spill clean-ups and rectifying environmental damage, thereby upholding a standard of accountability and ecological stewardship.
        </p>
      </div>

      <div className="environmental-info">
        <div className="watermark">
          {/* Replace with actual watermark image */}
          <img className="water-logo" src={watermarkLogo} alt="Watermark" />
        </div>
        <h2>Prioritise Health and Social Impact</h2>
        <p>
        Enhance the region's healthcare and educational facilities, countering the adverse effects of environmental issues. Guarantee access to clean water and sanitation for all communities. Offer mental health support to those affected by environmental degradation and displacement. Assist in diversifying livelihoods beyond pollution-dependent activities.
        </p>
      </div>

    </div>
  );
};

export default Environmental;
