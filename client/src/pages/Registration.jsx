import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import '../scss/Registration.scss';

//import registration form logo
import registrationLogo from '../assets/images/ndcicon/ndcicon.png'

const Registration = () => {
  // Initialize form data state
  const [formData, setFormData] = useState({
    firstname: '',
    surname: '',
    email: '',
    phone: '',
    country: '',
    city: '',
    eventName: '',
    eventCode: '',
  });

  // Handle input changes for text inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle country selection
  const selectCountry = (val) => {
    setFormData(prevState => ({
      ...prevState,
      country: val,
    }));
  };

  // Handle city selection
  const selectCity = (val) => {
    setFormData(prevState => ({
      ...prevState,
      city: val,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailJsServiceId = 'service_atvcn29';
    const emailJsTemplateId = 'template_m37mcse';
    const emailJsUserId = 'Vx3HoK0xP92MQBX7C';

    // Format formData for EmailJS
    const emailData = {
      ...formData,
      from_name: `${formData.firstname} ${formData.surname}`, // Combine first name and surname
      from_email: formData.email, // Direct mapping
      message: `Phone: ${formData.phone}\nCountry: ${formData.country}\nCity: ${formData.city}\nEvent Name: ${formData.eventName}\nEvent Code: ${formData.eventCode}`, // Format message
    };

    try {
      await emailjs.send(emailJsServiceId, emailJsTemplateId, emailData, emailJsUserId);
      alert('Thank you for completing your registration.'); // Show thank you message
      clearForm(); // Clear form after OK is clicked
    } catch (error) {
      console.error('Failed to send email:', error);
      alert('There was an error processing your registration. Please try again.');
    }
  };

  // Clear form data
  const clearForm = () => {
    setFormData({
      firstname: '',
      surname: '',
      email: '',
      phone: '',
      country: '',
      city: '',
      eventName: '',
      eventCode: '',
    });
  };

  return (
    <div className="registration-container">
      <img src={registrationLogo} alt="Event Logo" className="registration-logo" />
      <h1>REGISTER FOR THE EVENT</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="firstname" placeholder="First Name" value={formData.firstname} onChange={handleChange} required />
        <input type="text" name="surname" placeholder="Surname" value={formData.surname} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
        <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
        <CountryDropdown value={formData.country} onChange={selectCountry} name="country" className="dropdown" required />
        <RegionDropdown country={formData.country} value={formData.city} onChange={selectCity} name="city" className="dropdown" required />
        <input type="text" name="eventName" placeholder="Event Name" value={formData.eventName} onChange={handleChange} required />
        <input type="text" name="eventCode" placeholder="Event Code" value={formData.eventCode} onChange={handleChange} required />
        <button type="submit">REGISTER</button>
      </form>
    </div>
  );
};

export default Registration;

