import React from 'react';
import '../scss/Cookie.scss';

class Cookie extends React.Component {
  constructor(props) {
    super(props);
    // Check localStorage for the user's cookie preference
    const userDecision = localStorage.getItem('cookieDecision');
    // State to control the visibility of the cookie banner
    this.state = { isVisible: !userDecision }; // isVisible is false if userDecision exists
  }

  // Function to handle "Accept All" action
  handleAccept = () => {
    console.log("All cookies accepted.");
    // Implement the code to accept all cookies here
    localStorage.setItem('cookieDecision', 'accepted'); // Save decision in localStorage
    this.setState({ isVisible: false }); // Hide the banner
  };

  // Function to handle "Reject All" action
  handleReject = () => {
    console.log("All cookies rejected.");
    // Implement the code to reject all cookies here
    localStorage.setItem('cookieDecision', 'rejected'); // Save decision in localStorage
    this.setState({ isVisible: false }); // Hide the banner
  };

  render() {
    // Only render the banner if isVisible is true
    if (!this.state.isVisible) return null;

    return (
      <div className="cookieBanner">
        <p>
          At Niger Delta Consortium, we value your privacy and strive to be transparent about the data we collect and how it is used. In line with the General Data Protection Regulation (GDPR), we use cookies to personalize content and ads, to provide social media features, and to analyze our traffic. We also share information about your use of our site with our social media, advertising, and analytics partners.
          <br /><br />
          By clicking "Accept All Cookies," you agree to the use of all cookies. You can also manage your cookie preferences by clicking "Cookie Settings." For more information about how we process and protect your personal data, please see our Privacy Policy.
          <br /><br />
          Thank you for being a part of the Niger Delta Consortium community.
        </p>
        <div className="buttons">
          <button onClick={this.handleAccept}>Accept All</button>
          <button onClick={this.handleReject}>Reject All</button>
        </div>
      </div>
    );
  }
}

export default Cookie;
