import React from 'react'
// import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'


function PurseSkeleton() {
  return (
    <div className="h-44 animate-pulse  w-100 dark:bg-dark-2 bg-blue-7 p-4 rounded-2xl cursor-pointer">

    <div className="flex justify-between">
      <span className="Poppins text-xl w-1/2 bg-gray-300 h-4 font-extrabold text-purple-1"></span>
      <div>
        {/* <img src={"/assets/lock.png"} className="w-1/2  h-6 bg-gray-300" /> */}
      </div>
    </div>
    <div className="flex   bg-gray-300 justify-between mt-6">
      <div >
        <span className="block dark:text-white-1 w-1/2  h-6 bg-gray-300 text-dark-2 font-thin text-sm"></span>
        <span className="block dark:text-white-1 w-1/2  h-6 bg-gray-300 text-dark-2 font-bold"></span>
      </div>
      <div className="">
        <span className="block dark:text-white-1 w-1/2  h-6 bg-gray-300 text-dark-2 font-thin text-sm"></span>
        <span className="block dark:text-white-1 w-1/2  h-6 bg-gray-300 text-dark-2 font-bold"></span>
      </div>
      <div>
        <span className="Poppins block dark:text-white-1 w-1/2  h-6 bg-gray-300 text-dark-2 font-thin text-sm"></span>
        <span className="Poppins block dark:text-white-1 w-1/2  h-6 bg-gray-300 text-dark-2 font-bold"></span>
      </div>
    </div>
    </div>
  // </Skeleton>
  )
}

 export default PurseSkeleton;


