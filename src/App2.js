import { useWeb3React } from "@web3-react/core";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import Dashboard from "./pages/dashboard";

//import Modal from "./patterns/modal";

import { useEagerConnect } from "./utils/hooks";

const App = () => {
   

    //here we can destructure out various things from web3React such as
    //active (which is true if the user is connected and false otherwise)
    //activate and deactiveate which we use to instansiate and break the users
    //connection
   
    const { active, account, library, connector, activate, deactivate } = useWeb3React();
    useEagerConnect();
    const [loading, setLoading] = useState(false);

  return (
    //remember the active boolean from useReactWeb3() stores a bool
    //depending on if the user is or is not connected there for we can 
    //use this as a conditon to render the button saying "Connect Wallet"
    //or displaying their address as the text. 
    <Router>
       <Switch>
         <Route path="/" exact>   
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
                 {active ? <button onClick={connectOnClick}>{account.substring(0, 6)}...{account.substring(account.length - 4)}</button> : <button onClick={connectOnClick}>Connect Wallet</button>}
             </header>
            </div>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
