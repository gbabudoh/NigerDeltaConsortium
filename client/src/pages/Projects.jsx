import React, { useState } from 'react';
import '../scss/Projects.scss';
import { Helmet } from 'react-helmet';



const Project = () => {

  const [tabs, setTabs] = useState([
    
    { id: 1, name: <p>BAYELSA WATER PROJECT<br/></p>,     
    timeline: 'Months',
    description: <p>Water project in Bayelsa to provide water for local communities. Type of Water project: Manual Pump in strategic locations. Targeted Communities in Yenagoa: Abasere, Agbia, Agbobiri, Aorogbene, Agudama, Agudama-Epie, Akada, Akpide, Akunomi, Amarata, Amasso, Anyamabele, Atissa, Azikoro, Bebelibiri, Betaland, Biogbolo, Biseni, Bumodi, Ede-Pie, gbebiri, Ekeki, Ekpetiama, Emblama, Epie, Fangbe, Freetown, Gbarain, Gbaramtoru, Ibia, Igbogene, Ikarama, Ikibiri, Ikolo, Jackbiri, Kaiama, Kalaba, Karama, Korama, Kpansia, Nyanbiri, Obungha, Ogbolomo, Ogoniforu, Ogu, Ojogbolo, Okolobiri, Okorodia, Okotiama, Okutukutu, Omom, Onura, Opolo, Ovelemini, Polaku, Tein, Tombia, Tuburu, Yenegoa, Yeniozue-Epie, Zarama, Zarama Epie</p>, 
    status: 'ongoing' },

   
    { id: 2, name: <p>CARBON REDUCTION<br/></p>, 
    timeline: 'Months', 
    description: <p>
    Implement community-based reforestation projects, promote renewable energy sources, enforce regulations on gas flaring, and invest in eco-friendly agricultural practices to significantly reduce carbon emissions in the Niger Delta region.
    </p>,
    status: 'ongoing' },
    

    { id: 3, name: <p>ENVIRONMENTAL CLEAN UP</p>, 
    timeline: '', 
    description: '',
    status: 'not-started' },
    

    { id: 4, name: 'RENEWABLE ENERGY INITIATIVE', 
    timeline: '2021 - 2023', 
    description: <p>Project aimed at increasing the use of renewable energy sources across multiple regions.    
    </p>, 
    status: 'completed' },    
    


  ]);
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const updateStatus = (tabId, newStatus) => {
    const updatedTabs = tabs.map(tab => tab.id === tabId ? { ...tab, status: newStatus } : tab);
    setTabs(updatedTabs);
  };

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };


  return (
      <div className="project"> 

       <Helmet>
       <title>Projects - Niger Delta Consortium</title>
       <meta name="description" content="Niger Delta Consortium is dedicated to addressing multifaceted challenges in Nigeria's Niger Delta Region." />    
       <link rel="canonical" href="https://nigerdeltaconsortium.com/projects" />       
       </Helmet>

      <div className="tabs">

        <div>
          <h2 className='projects-h2'>PROJECT LIST</h2>
        </div>

        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`tab ${tab.id === activeTab ? 'active' : ''} ${tab.status}`}
            onClick={() => handleTabClick(tab.id)}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#e6e6e6'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#f7f7f7'} // Uniform background color on mouse out
          >
            {tab.name}
          </div>
        ))}
      </div>
      <div className="divider"></div>
      <div className="tab-content">
        {tabs.filter((tab) => tab.id === activeTab).map((tab) => (
          <div key={tab.id} className="content">
            <h2>{tab.name} ({tab.status.charAt(0).toUpperCase() + tab.status.slice(1)})</h2>
            <p>Timeline: {tab.timeline}</p>
            <p>Description: {tab.description}</p>
            <div className={`tracker ${tab.status}`}>
              {tab.status === 'completed' ? 'Completed' : tab.status === 'ongoing' ? 'Ongoing Progress...' : 'Not Started'}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
