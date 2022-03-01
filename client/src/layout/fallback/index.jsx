import React from 'react'
import Loader from '../../components/loader'

const Fallback = () => {
    return (
        <div className='flex items-center justify-center m-8'>
            <Loader />
        </div>
    )
}

export default Fallback
