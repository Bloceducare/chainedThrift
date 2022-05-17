import { Web3ReactProvider } from '@web3-react/core';
import { ToastProvider } from 'react-toast-notifications';

import React from 'react'
import { getLibrary } from '../web3'

const AppProvider = ({children}) => {
  return (
    <ToastProvider newestOnTop = {true} autoDismiss = {true} >
      <Web3ReactProvider getLibrary={getLibrary}>
          {children}
      </Web3ReactProvider>
    </ToastProvider>
  )
}

export default AppProvider