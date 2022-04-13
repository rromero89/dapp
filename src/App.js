import logo from './logo.svg';
import './App.css';
import detectEthereumProvider from '@metamask/detect-provider';

 export const AVALANCHE_MAINNET_PARAMS = {
            chainId: '0xA86A',
            chainName: 'Avalanche Mainnet C-Chain',
            nativeCurrency: {
              name: 'Avalanche',
              symbol: 'AVAX',
              decimals: 18
            },
            rpcUrls: ['https://api.avax.network/ext/bc/C/rpc'],
            blockExplorerUrls: ['https://snowtrace.io/']
  }//fin AVALANCHE_MAINNET_PARAMS

  export const AVALANCHE_TESTNET_PARAMS = {
    chainId: '0xA869',
    chainName: 'Avalanche Testnet C-Chain',
    nativeCurrency: {
      name: 'Avalanche',
      symbol: 'AVAX',
      decimals: 18
    },
    rpcUrls: ['https://api.avax-test.network/ext/bc/C/rpc'],
    blockExplorerUrls: ['https://testnet.snowtrace.io/']
  } //fin AVALANCHE_TESTNET_PARAMS

const configureMoonbaseAlpha = async () => {
  const provider = await detectEthereumProvider({
    mustBeMetaMask: true
  })
  if (provider) {
    try {
      await provider.request({ method: 'eth_requestAccounts'})
      await provider.request({
        method: 'wallet_addEthereumChain',
        params: [AVALANCHE_TESTNET_PARAMS]
      })
    } catch(e) {
      console.error(e);
    }  
  } else {
    console.error('Please install MetaMask');
  }
}

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
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
        <button onClick={configureMoonbaseAlpha()}>Connect to Moonbase Alpha</button>
      </header>
    </div>
  );
}

export default App;
