import React from 'react'

function Vote() {
    return (
        <React.Fragment>
            <div className="h-auto lg:w-1/2 bg-gray-16 p-6 rounded-xl mt-8">
                <p className="Poppins text-xl font-extrabold text-purple-1">
                    Vote to disburse fund to a member
                </p>
                <p className="Poppins text-white-1 text-xs">
                    It is time for another round of disbursement
                </p>
                <div className="Poppins mt-6 flex w-full">
                    <div className="grow">
                        <input
                            className="Poppins w-full rounded-md h-10 p-4 text-gray-7"
                            placeholder="Member wallet address"
                        />
                    </div>
                    <div className="Poppins bg-btn ml-4 cursor-pointer rounded-md h-10 flex items-center justify-center p-4 text-white-1 text-sm">
                        Vote
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Vote