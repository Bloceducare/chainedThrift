import React from 'react'

function Vote({voteField,vote,depositFundsToBentoBox,withdrawFundsFromBentoBox}) {
    return (
        <React.Fragment>
            <div className='h-auto lg:w-1/2  dark:bg-gray-16 bg-blue-7 p-6 rounded-xl mt-8'>
            {/* bentoBox Implementation */}
            <div>
                <p className="Poppins text-xl font-extrabold capitalize text-purple-1">
                    {/* Vote to disburse fund to a member */}
                    Transfer and withdraw investment
                </p>
                <p className={`Poppins dark:text-white capitalize text-dark-1 text-xs`}>
                    {/* It is time for another round of disbursement */}
                    deposit or withdraw your invested funds
                    
                </p>
                <div className="Poppins mt-6 flex w-full">
                <button  onClick={depositFundsToBentoBox} className="Poppins bg-btn ml-4 cursor-pointer rounded-md h-10 flex  capitalize items-center justify-center font-medium p-4 text-white-1 text-sm">move funds to bentoBox</button>
                    <button  onClick={withdrawFundsFromBentoBox} className="Poppins capitalize bg-btn ml-4 cursor-pointer rounded-md h-10 flex items-center justify-center font-medium p-4 text-white-1 text-sm">
                        withdraw from bentoBox
                    </button>
                </div>
            </div>
            {/* voting implementation  */}
            <div className='mt-4'>
                <p className="Poppins text-xl font-extrabold capitalize text-purple-1">
                    Vote to disburse fund to a member
                </p>
                <p className={`Poppins dark:text-white capitalize text-dark-1 text-xs`}>
                    It is time for another round of disbursement
                    
                </p>
                <div className="Poppins mt-4 flex w-full">
                    <div className="grow">
                        <input
                            ref={voteField}
                            className="Poppins w-full rounded-md h-10 p-4 text-gray-7"
                            placeholder="Member wallet address"
                        />
                    </div>
                    <button  onClick={vote} className="Poppins capitalize bg-btn ml-4 cursor-pointer rounded-md h-10 flex items-center justify-center p-4 text-white-1 text-sm">
                        vote
                    </button>
                </div>
            </div>
            </div>
        </React.Fragment>
    )
}

export default Vote