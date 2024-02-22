import React from 'react';
import '../scss/Events.scss';
import {Helmet} from "react-helmet";


// Import images
import eventImage1 from '../assets/images/eventsimages/events1.jpg';
import eventImage2 from '../assets/images/eventsimages/events2.jpg';
import eventImage3 from '../assets/images/eventsimages/events3.jpg';

const Events = () => {
  // Updated array of events with additional details

  <div>
  <Helmet>
    <title>Events - Niger Delta Consortium</title>
    <meta name="description" content="Niger Delta Consortium is dedicated to addressing multifaceted challenges in Nigeria's Niger Delta Region." />    
    <link rel="canonical" href="https://nigerdeltaconsortium.com/events" />        
  </Helmet>
  <h1>Events - Niger Delta Consortium</h1>      
  </div>

  const events = [
    { id: 1, title: 'Niger Delta Consortium Summit', 
    name: 'Event mame: Niger Delta Consortium Summit',    
    code: 'Code: 260324NDCS',    
    date: 'Date: 26 March 2024', 
    location: 'Location: London, United Kingdom', 
    time: 'Time: 10:00 am - 16:00 pm', 
    imageUrl: eventImage1, 
    link: '/registration' },


    { id: 2, title: 'Niger Delta Carbon Credit Summit', 
    name: 'Event mame: Niger Delta Carbon Credit Summit',    
    code: 'Code: 240624NDCCS', 
    date: 'Date: 24 June 2024', 
    location: 'Location: Yenagoa, Bayelsa State Nigeria', 
    time: 'Time: 10:30 am - 16:00 pm', 
    imageUrl: eventImage2, 
    link: '/registration' },

    { id: 3, title: 'Niger Delta Tech Summit', 
    name: 'Event mame: Niger Delta Tech Summit',    
    code: 'Code: 300824NDCTS', 
    date: 'Date: 30 August 2024', 
    location: 'Delta State, Asaba', 
    time: 'Time: 10:30 am - 16:30 pm', 
    imageUrl: eventImage3, 
    link: '/registration' },
    // Add more events as needed
  ];

  return (
    <div className="events-container">
      {events.map(event => (
        <div key={event.id} className="event">
          <img src={event.imageUrl} alt={event.title} />
          <h2>{event.title}</h2>
          <p>{event.date}</p>
          <p>{event.location}</p> {/* Event Location */}
          <p>{event.name}</p> {/* Event Location */}
          <p>{event.code}</p> {/* Event Location */}
          <p>{event.time}</p> {/* Event Time */}
          {/* Updated to use an anchor tag for opening in a new tab */}
          <a href={event.link} target="_blank" rel="noopener noreferrer" className="register-button">Register</a>
        </div>
      ))}
    </div>
  );
};

export default Events;
