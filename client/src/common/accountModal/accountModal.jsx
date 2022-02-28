import React from 'react'
import { shortenAddress } from '../../utils'
import Backdrop from '../backdrop/backdrop'


const AccountModal = ({show, dismisModal, balance, address}) => {
  return (
    <div>
        {show && <Backdrop diamissModal = {dismisModal} />}
        <div className=''>
            
        </div>
    </div>
  )
}

export default AccountModal