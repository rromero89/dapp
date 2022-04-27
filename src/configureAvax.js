import detectEthereumProvider from '@metamask/detect-provider';
 
 const configureAvax = async () => {
   const AVALANCHE_MAINNET_PARAMS = {
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

    const AVALANCHE_TESTNET_PARAMS = {
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
};

export default configureAvax;