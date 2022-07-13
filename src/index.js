import React from 'react';
//import ReactDOM from 'react-dom';
// After
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { Web3ReactProvider } from "@web3-react/core";
import Web3 from "web3";

import reportWebVitals from './reportWebVitals';

/*ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(
  <React.StrictMode>
    <Web3ReactProvider getLibrary={getLibrary}>
      <App />
    </Web3ReactProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
*/
  const getLibrary = (provider) => {
    const library = new Web3(provider)
    library.pollingInterval = 12000
    return library;
  }
  
  /*const getLibrary = (provider) => {
    return new Web3(provider);
  };*/

  const container = document.getElementById('root');
  const root = createRoot(container); // createRoot(container!) if you use TypeScript
  root.render(
    <React.StrictMode>
      <Web3ReactProvider getLibrary={getLibrary}>   
        <App tab="home" />
      </Web3ReactProvider>
    </React.StrictMode>
  );

  reportWebVitals();

  //https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#updates-to-client-rendering-apis
  // Before
  /*
  import { render } from 'react-dom';
  const container = document.getElementById('app');
  render(<App tab="home" />, container);
  */
  // After
  /*
  import { createRoot } from 'react-dom/client';
  const container = document.getElementById('app');
  const root = createRoot(container); // createRoot(container!) if you use TypeScript
  root.render(<App tab="home" />);
  */