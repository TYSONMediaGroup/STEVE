import React from 'react';
import './App.css';

export function App() {
  return (
    <div className="eas-screen">
      <div className="eas-scanlines" />
      <div className="eas-container">
        <div className="eas-header-bar">
          <span className="eas-indicator">● BROADCAST ALERT</span>
          <span className="eas-timestamp">{new Date().toLocaleDateString()}</span>
        </div>

        <div className="eas-content-box">
          <h1 className="eas-headline">
            Your device has been prohibited from accessing TYSON
          </h1>

          <div className="eas-reason-box">
            <p className="eas-reason-text">
              Reason: sfrench1 - [Devices: Stephen_Computer-smalls_iPad-smalls_phone] has been banned from the project steve.audhdapp.custineprojects.
            </p>
          </div>

          <div className="eas-contact-box">
            <p className="eas-contact-text">
              Think this is a mistake? Contact <a href="mailto:ty@tysonmediagroup.org" className="eas-link">ty@tysonmediagroup.org</a>, or Text/Leave a voicemail to the TYSON Media Group Phone line - <a href="tel:7193578620" className="eas-link">719-357-8620</a>
            </p>
          </div>
        </div>

        <div className="eas-footer-bar">
          <span>TYSON MEDIA GROUP &bull; ALL RIGHTS RESERVED</span>
          <span>TERMINATION CODE: SF1-BAN</span>
        </div>
      </div>
    </div>
  );
}

export default App;
