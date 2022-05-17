import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import './App.scss';
import MainLayout from './layouts/mainLayout'


function App() {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
}

export default App;
