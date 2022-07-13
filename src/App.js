import logo from './logo.svg';
import './App.css';
import  Wallet  from './utils/stackOverFlowConect';


const App = () => {
  return (
    <div className="App">
      <header className="App-header">
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
        <Wallet>
           Connect to Wallet 
        </Wallet>
      </header>
    </div>
  );
}

export default App;
// Copia del Archivo App.js