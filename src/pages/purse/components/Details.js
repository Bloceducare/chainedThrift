import React from 'react'

function Details({theme}) {
    return (
        <React.Fragment>
            <div className="flex flex-col items-center">
                <div className="h-32 w-32 bg-members-gradient rounded-full text-white-1 flex justify-center items-center mt-16">
                    <div className="h-28 w-28 bg-gray-16 rounded-full"></div>
                </div>
                <div className="text-white-1 mt-12 flex justify-between w-full lg:w-2/5">
                    <p className={`Poppins ${theme === 'dark'? 'text-white-1' : 'text-dark-1'} font-medium text-xs md:text-sm`}>Available Members</p>
                    <p className={`Poppins ${theme === 'dark'? 'text-white-1' : 'text-dark-1'} font-medium text-xs md:text-sm`}>Members Expected</p>
                </div>
                <div className="mt-8">
                    <p className={`Poppins ${theme === 'dark'? 'text-white-1' : 'text-dark-1'} font-semibold text-lg text-center`}>
                        Dont know about BentoBox?
                    </p>
                    <p className="Poppins font-normal text-sm text-center text-purple-1 underline underline-offset-4 cursor-pointer">
                        Learn more about BentoBox
                    </p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Details