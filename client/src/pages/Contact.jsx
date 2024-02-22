import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { CountryDropdown } from 'react-country-region-selector'; // Step 1: Import the CountryDropdown
import '../scss/Contact.scss';
import contactImage from '../assets/images/contact/contact.jpg';
import { Helmet } from "react-helmet";

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [emailSent, setEmailSent] = useState(false);
  const [country, setCountry] = useState(''); // Step 2: Add state for the selected country

  const clearForm = () => {
    setName('');
    setEmail('');
    setPhone('');
    setSubject('');
    setMessage('');
    setCountry(''); // Clear the country state as well
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    clearForm();
    setEmailSent(false);

    const templateParams = {
      from_name: name,
      from_email: email,
      from_phone: phone,
      subject_selection: subject,
      country: country, // Include country in the template params
      message: message,
    };

    const serviceID = 'service_kvv0n2d';
    const templateID = 'template_njcwm38';
    const userID = 'u8mKlO8TN9ElhFSaL';

    try {
      const response = await emailjs.send(serviceID, templateID, templateParams, userID);
      console.log('SUCCESS!', response.status, response.text);
      setEmailSent(true);
    } catch (error) {
      console.log('FAILED...', error);
    }
  };

  return (
    <div className="contact-page">
      <Helmet>
        <title>Contact - Niger Delta Consortium</title>
        <meta name="description" content="Niger Delta Consortium is dedicated to addressing Community Engagement issues in Niger delta region, Nigeria."/>
        <link rel="canonical" href="https://nigerdeltaconsortium.com/contact"/>
      </Helmet>
      <h1 className="community-h1">Contact - Niger Delta Consortium</h1>

      <h2 className="contact-title">Get in Touch</h2>
      <div className="grid-container">
        <div className="image-grid">
          <img src={contactImage} alt="Contact" style={{ width: '100%', height: 'auto' }} />
        </div>
        <div className="form-grid">
          <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Sender's Name" required />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Sender's Email Address" required />
            <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Sender's Mobile Phone" />
            <CountryDropdown // Step 3: Insert the CountryDropdown component
              value={country}
              onChange={(val) => setCountry(val)} // Step 4: Update the state when a new country is selected
              classes="country-dropdown"
              defaultOptionLabel="Select a country"
            />
            <select value={subject} onChange={(e) => setSubject(e.target.value)} required>
              <option value="">Select a Subject</option>
              <option value="Inquiry">Inquiry</option>
              <option value="Partnership">Partnership</option>
              <option value="Investment">Investment</option>
            </select>
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Write your email content here" required />
            <button type="submit">SEND</button>
          </form>
        </div>
      </div>
      {emailSent && <p className="success-message">Email sent successfully!</p>}
    </div>
  );
};

export default Contact;

