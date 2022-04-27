import logo from './logo.svg';
import './App.css';
import configureAvax from './configureAvax';


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
        <button onClick={()=>configureAvax()}>Connect to Wallet</button>
      </header>
    </div>
  );
}

export default App;
