import detectEthereumProvider from '@metamask/detect-provider'
export const configureMoonbaseAlpha = async () => {
  const provider = await detectEthereumProvider({
    mustBeMetaMask: true
  })
  if (provider) {
    try {
      await provider.request({ method: 'eth_requestAccounts'})
      await provider.request({
        method: 'wallet_addEthereumChain',
        params: [{
          chainId: '0x507', // Moonbase Alpha's chainId is 1287, which is 0x507 in hex
          chainName: 'Moonbase Alpha',
          nativeCurrency: {
            name: 'DEV',
            symbol: 'DEV',
            decimals: 18
           },
          rpcUrls: ['https://rpc.testnet.moonbeam.network'],
          blockExplorerUrls: ['https://moonbase-blockscout.testnet.moonbeam.network/']
        }]
      })
    } catch(e) {
      console.error(e);
    }  
  } else {
    console.error('Please install MetaMask');
  }
}