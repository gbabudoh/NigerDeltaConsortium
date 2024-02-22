import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import initializeAnalytics from './analytics'; // Assuming you have this from previous steps
import './scss/Main.scss'

// Initialize Google Analytics
initializeAnalytics();

// Dynamically create and append the GA4 script
const gaScript = document.createElement('script');
gaScript.async = true;
gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-BPVFPRS8TE';
document.head.appendChild(gaScript);

// Inline GA4 configuration script
const gaInlineScript = document.createElement('script');
gaInlineScript.innerHTML = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-BPVFPRS8TE');
`;
document.head.appendChild(gaInlineScript);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
