import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import detectEthereumProvider from '@metamask/detect-provider';
import { useWeb3React } from "@web3-react/core"
import { InjectedConnector } from '@web3-react/injected-connector'

//declare supportated chains
//Identificador de cadena
//43113
export const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42, 1337, 43114,43113],
})


export default function connButton() {

var web3;
var accounts;
var connected

const [loading, setLoading] = useState(false)

//here we can destructure out various things from web3React such as
//active (which is true if the user is connected and false otherwise)
//activate and deactiveate which we use to instansiate and break the users
//connection
const { active, account, library, connector, activate, deactivate } = useWeb3React()

//set up an elemnt in local storage that we use to hold the connected account
var acc = localStorage.getItem("account")



//function that initialises web3.js
const connectWalletHandler = () => {
    if (window.ethereum && window.ethereum.isMetaMask) {
        console.log('MetaMask Here!');
        web3 = new Web3(window.ethereum);

        window.ethereum.request({ method: 'eth_requestAccounts'})
        
    } else {
        console.log('Need to install MetaMask');
        // setErrorMessage('Please install MetaMask browser extension to interact');
    }
    console.log(web3.eth.currentProvider)
}

//function that is called on page load if and only if their exists and
//item for the user accoun tin local storage
async function connectOnLoad() {

     try {
        
        //here we use activate to create the connection
        await activate(injected)
        connected = true
      } catch (ex) {
        console.log(ex)
      }

      //we use web3.eth to get the accounts to store it in local storage
      var accounts1 = await web3.eth.getAccounts();
      acc = localStorage.setItem("account", accounts1);
}

//here we use a useEffect so that on page load we can check if there is
//an account in local storage. if there is we call the connect onLoad func
//above which allows us to presist the connection and i also call connectWalletHandler
//which sets up web3.js so we can call web3.eth.getAccounts()
useEffect(() => {

        
    if (acc != null) {
    connectOnLoad()
    }
    connectWalletHandler()
}, [])


//however in the case where there is no item in local storage we use this
//function to connect which is called when we click the connect button. its
//essentially the same but we check if local storage is null if it is we activate
//if its not then we disconnect. And when we disconnect we remove the acccount from local storage
async function connectOnClick() {
    
    if (localStorage.getItem("account") == null) {

        setLoading(true);
        try {
            await activate(injected)
            connected = true
        } catch (ex) {
            console.log(ex)
        }
        // window.location.reload();
        var accounts1 = await web3.eth.getAccounts();
        console.log(accounts1)
        acc = localStorage.setItem("account", accounts1);
        console.log(acc)
        setTimeout(function(){
            setLoading(false)
         }, 1600);//wait 2 seconds
        
    } else {

        disconnect();
        connected = false
    }

}

async function disconnect() {
    try {
    deactivate()
    localStorage.removeItem("account");
    } catch (ex) {
    console.log(ex)
    }
}



return (
  
    //remember the active boolean from useReactWeb3() stores a bool
    //depending on if the user is or is not connected there for we can 
    //use this as a conditon to render the button saying "Connect Wallet"
    //or displaying their address as the text.
    <div>
          {active ? <button onClick={connectOnClick}>{account.substring(0, 6)}...{account.substring(account.length - 4)}</button> : <button onClick={connectOnClick}>Connect Wallet</button>}
    </div>
  );
}