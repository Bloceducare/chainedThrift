import React from 'react'

const CreatePurseModal = () => {
  return (
    <div className="justify-center items-center backdrop-blur-sm shadow-lg flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative px-4 w-full max-w-md h-full md:h-auto">
              {/*content*/}
              <div className="border-0 rounded-lg bg-dark-4 shadow-lg relative flex flex-col w-full  outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between py-5 px-4 rounded-t">
                  <h3 className="text-base font-semibold text-white-1">
                    Create a Purse
                  </h3>
                  <button
                    className="p-1 ml-auto border-0 text-white-1 opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setCreatePurseModal(false)}
                  >
                    <span className="text-white-1 opacity-100 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <form className="px-2 pb-4 space-y-1 lg:px-4" action="#">
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-thin text-white-1"
                    >
                      Amount in DAI
                    </label>
                    <input
                      type="text"
                      name="amount"
                      id="amount"
                      className="border border-gray-7 bg-dark-4 text-sm text-white-1 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      placeholder="name@company.com"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="members"
                      className="block mb-2 text-sm font-thin text-white-1"
                    >
                      Number of Members
                    </label>
                    <input
                      type="text"
                      name="members"
                      id="members"
                      placeholder="2"
                      className="bg-dark-4 border border-gray-300 text-sm text-white-1 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="frequency"
                      className="block mb-2 text-sm font-thin text-white-1"
                    >
                      Frequency (In Days)
                    </label>
                    <input
                      type="text"
                      name="members"
                      id="members"
                      placeholder="2"
                      className="bg-dark-4 border border-gray-300 text-sm text-white-1 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="members"
                      className="block mb-2 text-sm font-thin text-white-1"
                    >
                      Number of Members
                    </label>
                    <input
                      type="text"
                      name="members"
                      id="members"
                      placeholder="2"
                      className="bg-dark-4 border border-gray-300 text-sm text-white-1 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      required
                    />
                  </div>
                  <p className="text-white-1 text-sm font-thin">
                    Total Amount: 0 DAI
                  </p>
                  {/*footer*/}
                  <button className="py-3 px-6 w-full text-sm text-white-1 bg-gray-2 rounded-3xl w-100">
                    Create Purse
                  </button>
                </form>
              </div>
            </div>
          </div>
  )
}

export default CreatePurseModal