import logo from './logo.svg';
import './App.css';
//import configureAvax from './configureAvax';
import MetamaskProvider from './metamaskProvider';


/*function App() {
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
}*/

function App() {
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <StylesProvider injectFirst>
        <Paper>
          <Router>
            <Web3ReactProvider getLibrary={getLibrary}>
              <MetamaskProvider>
              {...children components}
              </MetamaskProvider>
            </Web3ReactProvider>
          </Router>
        </Paper>
      </StylesProvider>
    </ThemeProvider>
  );

}

export default App;
