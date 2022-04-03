import { Web3ReactProvider } from '@web3-react/core'
import React from 'react'
import { getLibrary } from '../web3'

const AppProvider = ({children}) => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
        {children}
    </Web3ReactProvider>
  )
}

export default AppProvider