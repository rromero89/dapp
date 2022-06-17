import { useWeb3React } from "@web3-react/core";
import React, { useEffect, useState } from "react";
import logo from './logo.svg';
import './App.css'; 
import { useAvalancheConnect } from "./utils/hooks";

const App = () => {   
 
var connected;
const [loading, setLoading] = useState(false);

 useAvalancheConnect();

//here we can destructure out various things from web3React such as
//active (which is true if the user is connected and false otherwise)
//activate and deactiveate which we use to instansiate and break the users
//connection
const { active, account, library, connector, activate, deactivate } = useWeb3React();

//set up an elemnt in local storage that we use to hold the connected account
var acc = localStorage.getItem("account");
console.log("Cuenta, en App.js: " + acc);

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

  return (
    //remember the active boolean from useReactWeb3() stores a bool
    //depending on if the user is or is not connected there for we can 
    //use this as a conditon to render the button saying "Connect Wallet"
    //or displaying their address as the text. 
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
                     <div>
              {active ? <button onClick={connectOnClick}>{account.substring(0, 6)}...{account.substring(account.length - 4)}</button> : <button onClick={connectOnClick}>Connect Wallet</button>}
        </div>                    
              </header>
            </div>         
  );
};

export default App;
