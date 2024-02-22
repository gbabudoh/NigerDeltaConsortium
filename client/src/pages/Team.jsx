// Team.jsx
import React from 'react';
import '../scss/Team.scss'
import {Helmet} from "react-helmet";


//import team images
import sunnyImage from '../assets/images/team/sunny.png'
import patrickImage from '../assets/images/team/patrick.png'
import godwinImage from '../assets/images/team/godwin.png'
import toyinImage from '../assets/images/team/toyin.png'
import alexImage from '../assets/images/team/alex.png'
import gbengaImage from '../assets/images/team/gbenga.png'
import rotimiImage from '../assets/images/team/rotimi.png'
import kolaImage from '../assets/images/team/kola.png'
import victoriaImage from '../assets/images/team/victoria.png'
import ebiImage from '../assets/images/team/ebi.png'
import ucheImage from '../assets/images/team/uche.png'
import ifeImage from '../assets/images/team/ife.png'


const Team = () => {
  const teamMembers = [
    // Dummy data - replace with actual team member details
    
    { 
    name: 'Comrade Sunny Ofehe', 
    description: 'A political leader, global activist and campaigner driving the Development of the Niger Delta region of Nigeria', 
    imageUrl: sunnyImage, 
    },


    { 
    name: 'Dr.Patrick Ofolu', 
    description: 'A leader and an advocate for Niger Delta Development and Specialist in Development Matters', 
    imageUrl: patrickImage 
    },


    {
    name: 'Godwin Babudoh', 
    description: 'CEO of Egobas Limited, and the founder of Niger Delta Consortium.', 
    imageUrl: godwinImage 
    },


    { 
    name: 'Toyin Elebe', 
    description: 'CEO of Hamiltons Elebe, and the Founder of Elebe Institute, a problem solving Entrepreneur', 
    imageUrl: toyinImage 
    },


    { 
    name: 'Alex Babudoh', 
    description: 'A UK Qualified Practioner in the UK Ministry of Justice, with many years of experience in legal frameworks and interventions', 
    imageUrl: alexImage 
    },


    { 
    name: 'Gbenga Uwadia', 
    description: 'An IT Business Analayst in ideation soultions. A creative and problem solving Entrepreneur', 
    imageUrl: gbengaImage 
    },


    { 
    name: 'Rotimi Uwadia', 
    description: 'A high level Business Analyst with many years experince in various industry', 
    imageUrl: rotimiImage 
    },


    { 
    name: 'Kola Elebe', 
    description: 'An IT and System Architect Expert, many years experience in system solutions frameworks', 
    imageUrl: kolaImage 
    },


    { 
    name: 'Victoria Arafiri', 
    description: 'An NGO Expert, with many years of experience working with organisations solving Issues ', 
    imageUrl: victoriaImage 
    },


    { 
    name: 'Ebi Ariye', 
    description: 'Expert in Women Affairs and NGO work, with experience in interventions and poverty alleviation', 
    imageUrl: ebiImage 
    },


    { name: 'Uche Eke', description: 'A Qualified computer engineer and programmer with many years of experience developing digital solutions, AI and complex problem solving', imageUrl: ucheImage },


    { 
      name: 'Ife Akinyosade', 
      description: 'A media experts, and an entrepreneur with a vision to aleviate poverty through media prospects', 
      imageUrl: ifeImage 
    },

  ];



  return (
    <div className="team-page">

      <div>
      <Helmet>
        <title>Our Team - Niger Delta Consortium</title>
        <meta name="description" content="Niger Delta Consortium team members and management." />
        <link rel="canonical" href="https://nigerdeltaconsortium.com//team" />        
      </Helmet>      
      </div>

      <div className="team-title">
        <h1>Niger Delta Consortium Team</h1>
      </div>      

      <div className="team">
        {teamMembers.map((member, index) => (
          <div className="team__member" key={index}>
            <img src={member.imageUrl} alt={member.name} className="team__member-image" />
            <h2 className='team-h2'>{member.name}</h2>
            <p>{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
