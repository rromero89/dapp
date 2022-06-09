import React, { useState, useEffect } from 'react'; 
import logo from './logo.svg';
import './App.css';  
import connButton from './connect';


function App() {  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reservoapp.com/"
          target="_blank"
          rel="noopener noreferrer">
          Reservo app
        </a>
      </header>
    </div> 
  );
}

export default App;