import React from 'react';
import Weather from './Weather';
import logo from './logo.svg';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Weather <img src={logo} className="App-logo" alt="logo" /> Forecast
        </h1>
      </header>
      <main>
          <Weather />
      </main>
      <footer>
        <p>
          This project is coded with 🩷 by <a href='https://github.com/rose-sky-sun'> LunaFreya Dragonborn</a> is 
          <a href='https://github.com/rose-sky-sun/react-weather'> open-sourced on GitHub</a> and <a href='https://reactweatherforecastapp.netlify.app'> hosted on Netlify.</a>
          </p>
      </footer>
    </div>
  );
}

