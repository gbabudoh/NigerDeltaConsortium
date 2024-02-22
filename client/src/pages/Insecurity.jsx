// Updated Insecurity.jsx with watermark image in the last grid column
import React from "react";
import '../scss/Insecurity.scss';
import {Helmet} from "react-helmet";

//import image
import insecurityImage from '../assets/images/frontpage/insecurity.jpg'

//import logo
import watermarkLogo from '../assets/images/ndcicon/ndcicon.png'


const Insecurity = () => {
  return (
    <div className="insecurity">
      
      <div>
      <Helmet>
        <title>Insecurity and Conflict - Niger Delta Consortium</title>
        <meta name="description" content="Niger Delta Consortium is dedicated to addressing Community Engagement issues in Niger delta region, Nigeria."/>
        <link rel="canonical" href="https://nigerdeltaconsortium.com/contact"/>        
      </Helmet>
      <h1 className="insecurity-h1">Insecurity and Conflict - Niger Delta Consortium</h1>      
      </div>


      <div className="page-title">
        <h2>Insecurity and Conflict</h2>
      </div>

      <div>
        <p className="fix-insecurity-issues">How Do We Fix This Issues</p>
      </div>

      <div className="insecurity-grid">
        <div className="column image-column">
          {/* Replace with actual image */}
          <img src={insecurityImage} alt="Insecurity" />
        </div>
        <div className="column video-column">
          {/* Replace with actual YouTube embed link */}
          <iframe
            src="https://www.youtube.com/embed/0WN2pADMJYg?si=3ntHIfQCI-84UMdr"
            frameBorder="0"
            allowFullScreen
            title="Insecurity Video"
          ></iframe>
        </div>
      </div>
      <div className="insecurity-info">
        <div className="watermark">
          {/* Replace with actual watermark image */}
          <img className="water-logo" src={watermarkLogo} alt="Watermark" />
        </div>
        <h2>Strengthen Security and Law Enforcement</h2>
        <p>
        Enhancing security in the Niger Delta requires reforming and investing in the security forces to ensure they are well-trained, properly equipped, and adhere to ethical standards, including respect for human rights. Emphasizing community policing is crucial, involving local communities in security measures to build trust and develop collaborative solutions for area-specific challenges. Tackling illegal activities like piracy and oil bunkering demands effective law enforcement and addressing underlying issues such as poverty and limited opportunities. Additionally, promoting regional cooperation is key, facilitating collaboration among neighboring countries to counter cross-border security threats and exchange effective practices.
        </p>
      </div>
      
      <div className="insecurity-info">
        <div className="watermark">
          {/* Replace with actual watermark image */}
          <img className="water-logo" src={watermarkLogo} alt="Watermark" />
        </div>
        <h2>Address Grievances and Promote Justice</h2>
        <p>
        To foster justice in the Niger Delta, it's essential to acknowledge and address historical injustices and the ongoing environmental impact of oil extraction, as this is key to reconciliation and trust-building. Equitable resource distribution is crucial, necessitating transparent mechanisms that allow communities to directly benefit from their natural resources. Investigating and addressing human rights abuses is also vital, with a focus on holding perpetrators accountable and ensuring access to justice, thereby upholding human rights. Furthermore, promoting genuine dialogue and conflict resolution involves facilitating inclusive discussions among all stakeholders, including local communities, government entities, and oil companies, to peacefully resolve grievances and conflicts.
        </p>
      </div>

      <div className="insecurity-info">
        <div className="watermark">
          {/* Replace with actual watermark image */}
          <img className="water-logo" src={watermarkLogo} alt="Watermark" />
        </div>
        <h2>Focus on Economic Development and Livelihoods</h2>
        <p>
        To drive economic growth in the Niger Delta, it's crucial to diversify the economy beyond oil. Investments should be channeled into sectors like agriculture, fisheries, tourism, and renewable energy to create sustainable economic opportunities. Enhancing skills training and education is vital to equip residents with the competencies needed for better job prospects and improved living standards. Special attention should be given to empowering youth and women, addressing their marginalization by providing them with education and employment opportunities and encouraging women's active economic participation. Additionally, investing in infrastructure development, including transportation, communication, and market access, is key to facilitating overall economic development and establishing a more stable and prosperous environment.
        </p>
      </div>

      <div className="insecurity-info">
        <div className="watermark">
          {/* Replace with actual watermark image */}
          <img className="water-logo" src={watermarkLogo} alt="Watermark" />
        </div>
        <h2>Promote Peacebuilding and Social Cohesion</h2>
        <p>
        Enhancing peace and social unity in the Niger Delta involves backing local peace initiatives, empowering community organizations to lead dialogues, build trust, and resolve conflicts amicably. Fostering interfaith and intercultural dialogue is crucial for overcoming prejudices and strengthening social bonds. Investing in educational and awareness campaigns is key to promoting non-violent conflict resolution, human rights awareness, and environmental stewardship, contributing to a sustainable future. Additionally, supporting mental health programs is essential to address the psychological effects of violence and conflict, offering trauma counseling and comprehensive mental health services.
        </p>
      </div>

    </div>
  );
};

export default Insecurity;
