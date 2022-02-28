import React, {useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import {BrowserRouter as Router} from 'react-router-dom'
// import {connectWallet} from './redux/wallet/actions'
import './App.scss';
import MainLayout from './layouts/mainLayout'
// import {openModal} from './common/modalWrapper';


function App() {
  const dispatch = useDispatch();
  const modal = useSelector(state => state.modal);
  console.log(modal);

  // useEffect(() => {

  //     // this is just to test the wallet reducer
  //     dispatch(openModal());

  // }, [dispatch])





  return (
    <div className="dark:bg-dark-1 dark:text-white-1 min-h-screen">
      <Router>
        <MainLayout />
      </Router>
    </div>
  );
}

export default App;
