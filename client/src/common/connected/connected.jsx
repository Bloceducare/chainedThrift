import React from 'react'
import { shortenAddress } from '../../utils'
import { createIcon } from '@download/blockies';
import clsx from 'clsx'

const generateIdenticon = (address) => {
    let Identicon = createIcon({
        seed: address.toLowerCase(),
    });
    return Identicon

}

const Connected = ({balance, address}) => {
  return (
    <div className='text-white flex border-purple-1 border-2 rounded-xl font-bold text-md cursor-pointer'>
        <div className="bg-purple-1 py-2 px-4 rounded-tl-xl rounded-bl-xl">
            2.25ETH
        </div>
        <div className="p-2 flex items-center">
            <span className="mr-2">
                {shortenAddress(address)}
            </span>
            <img src = {generateIdenticon(address).toDataURL()} className = "rounded-full w-6" />
        </div>
    </div>
  )
}

export default Connected