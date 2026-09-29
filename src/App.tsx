import React from 'react';
import './App.css';

export function App() {
  return (
    <main className="app-container">
      <div className="content-card">
        <img
          src="/TYSONMediaGroupBanner.png"
          alt="TYSON Media Group"
          className="banner-logo"
        />
        <p className="status-message">
          This TYSON WebApp is currently un-available. If you see this message, please contact Tyler Custine immidietaly.
        </p>
      </div>
    </main>
  );
}

export default App;
