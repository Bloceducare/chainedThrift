import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Web3ReactProvider} from '@web3-react/core'
import { getLibrary } from './web3'


ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <Web3ReactProvider getLibrary={getLibrary}>
        <App />
      </Web3ReactProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

