import React, {useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import {BrowserRouter as Router} from 'react-router-dom'
import {connectWallet} from './redux/wallet/actions'
import './App.scss';
import Layout from './layout'

function App() {
  const dispatch = useDispatch();
  const wallet = useSelector(state => state.wallet);
  console.log(wallet);

  // useEffect(() => {

  //     // this is just to test the wallet reducer
  //     dispatch(connectWallet({
  //       address: "0x67dBAF6D282E42F1374300284d439222C08D8dd2",
  //       connectedWallet: "trust wallet",
  //       ethBalance: 1.2,
  //       tokenBalance: 164
  //     }));
  // }, [dispatch])


  return (
    <div className="dark:bg-dark-1 dark:text-white-1 min-h-screen">
      <Router>
        <Layout />
      </Router>
    </div>
  );
}

export default App;
