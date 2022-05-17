import React, { useState } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';

function Notification() {
    const [seeMore, setSeeMore] = useState(false);
    const seeMoreHandler = () => {
        setSeeMore(!seeMore);
    }
    return (
        <React.Fragment>
            <div className='text-white-1 mt-4 bg-gray-4 min-w-400 absolute right-0 rounded-lg'>
                <div>
                    <h4 className='text-gray-0 font-Poppins p-5 uppercase'>Notifications</h4>
                    <div className=" hover:bg-blue-5 p-4">
                        <div className="flex items-start justify-between mt-2 w-full">
                            <div className="w-full">
                                <div className="flex mt-2 justify-between">
                                    <div className="flex w-full">
                                        <div className="mr-4">
                                            <img src="/assets/Base.svg" alt="notification-icon" />
                                        </div>
                                        <div>
                                            <h5 className="text-gray-0 font-Poppins font-bold">0xdb4e...d455cct</h5>
                                            <p className="text-gray-14 font-Poppins font-medium">Deposited 10 DAI</p>
                                            <small className="text-gray-14 font-Poppins font-medium">2 hours ago</small>
                                        </div>
                                    </div>
                                    <div>
                                        <BsThreeDotsVertical />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className=" hover:bg-blue-5 p-4">
                        <div className="flex items-start justify-between mt-2 w-full">
                            <div className="w-full">
                                <div className="flex mt-2 justify-between">
                                    <div className="flex w-full">
                                        <div className="mr-4">
                                            <img src="/assets/Base.svg" alt="notification-icon" />
                                        </div>
                                        <div>
                                            <h5 className="text-gray-0 font-Poppins font-bold">0xdb4e...d455cct</h5>
                                            <p className="text-gray-14 font-Poppins font-medium">Deposited 10 DAI</p>
                                            <small className="text-gray-14 font-Poppins font-medium">2 hours ago</small>
                                        </div>
                                    </div>
                                    <div>
                                        <BsThreeDotsVertical />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {seeMore && <div className=" hover:bg-blue-5 p-4">
                    <div className="flex items-start justify-between mt-2 w-full">
                        <div className="w-full">
                            <div className="flex mt-2 justify-between">
                                <div className="flex w-full">
                                    <div className="mr-4">
                                        <img src="/assets/base2.svg" alt="notification-icon" />
                                    </div>
                                    <div>
                                        <h5 className="text-gray-0 font-Poppins font-bold">0xdb4e...d455cct</h5>
                                        <p className="text-gray-14 font-Poppins font-medium">Deposited 10 DAI</p>
                                        <small className="text-gray-14 font-Poppins font-medium">3 hours ago</small>
                                    </div>
                                </div>
                                <div>
                                    <BsThreeDotsVertical />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>}
                <button onClick={seeMoreHandler} className="text-center font-Poppins translate-x-40 text-blue-4 p-1">See All</button>
            </div>
        </React.Fragment>
    )
}

export default Notification