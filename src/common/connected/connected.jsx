import React from 'react'
import { shortenAddress } from '../../utils'
import { createIcon } from '@download/blockies';

const generateIdenticon = (address) => {
    let Identicon = createIcon({
        seed: address.toLowerCase(),
    });
    return Identicon

}

const Connected = ({balance, address,onClose}) => {
  return (
    <div onClick={onClose} className='w-72 text-white flex border-purple-3 border-2 rounded-lg font-black text-md cursor-pointer'>
        <div className="w-2/6 bg-purple-3 py-2 px-4 rounded-tl-md rounded-bl-md">
            {0} <span className="text-xs">ETH</span>
        </div>
        <div className="w-4/6 p-2 flex items-center justify-between">
            <span className="text-purple-3 dark:text-white-1">
                {shortenAddress(address)}
            </span>
            <img alt = "wallet jazicon" src = {generateIdenticon(address).toDataURL()} className = "rounded-full w-8 border-2 border-purple-3" />
        </div>
    </div>
  )
}

export default Connected