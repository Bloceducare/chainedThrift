import React from 'react';
import Button from '../../../common/buttons/button';

function Deposit() {
    const [depositHistModal, setDepositHistModal] = React.useState(false);
    const openDepositHistoryModal = () => {
      setDepositHistModal(true);
    };
    return (
        <React.Fragment>
        <div className={`h-auto lg:w-1/2 dark:bg-gray-16 bg-blue-7  p-6 rounded-xl mt-8`}>
        <p className="Poppins text-xl font-extrabold text-purple-1">
          Deposit for the next round
        </p>
        <p className={`Poppins dark:text-white-1 text-dark-1 text-xs`}>
          It is time for another round of deposit
        </p>
        <div className="Poppins text-white-1 mt-4 flex flex-col md:flex-row gap-4">
          <Button
            className="Poppins text-white-1 font-medium lg:mr-8  cursor-pointer px-12"
            action={() => {}}
          >
            Deposit Now
          </Button>
          <Button
            className="Poppins text-white-1 font-medium  cursor-pointer px-12"
            action={openDepositHistoryModal}
          >
            Deposit History
          </Button>
        </div>

        {/* Deposit History modal */}
        {depositHistModal ? (
        <>
          <div onClick={() =>setDepositHistModal(false)} className="justify-center items-center backdrop-blur-sm shadow-lg top-60 md:top-0 flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative px-4 w-full max-w-md h-full md:h-auto">
              {/*content*/}
              <div  className="border-0 rounded-lg bg-dark-4 shadow-lg relative flex flex-col w-full outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between py-5 px-4 rounded-t">
                  <h3 className="text-base font-semibold text-white-1">
                    Deposit History
                  </h3>
                  <button
                    className="p-1 ml-auto border-0 text-white-1 opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setDepositHistModal(false)}
                  >
                    <span className="text-white-1 opacity-100 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div class="table w-full px-4 pb-8">
                  <div class="table-header-group ...">
                    <div class="table-row">
                      <div class="table-cell text-left text-sm font-semibold">
                        Address
                      </div>
                      <div class="table-cell text-left text-sm font-semibold">
                        Total Deposited
                      </div>
                      <div class="table-cell text-left text-sm font-semibold">
                        Vote Count
                      </div>
                      <div class="table-cell text-left text-sm font-semibold">
                        Recieved
                      </div>
                    </div>
                  </div>
                  <div class="table-row-group ">
                    <div class="table-row h-10 bg-gray-5rounded-tl-xl rounded-tr-xl rounded-bl-xl rounded-br-xl">
                      <div class="table-cell text-xs rounded-tl-xl rounded-bl-xl pt-3 pl-1">
                        0xBBB6...e96e
                      </div>
                      <div class="table-cell text-xs text-center">50.0 DAI</div>
                      <div class="table-cell text-xs text-center">0</div>
                      <div class="table-cell text-xs text-center rounded-tr-xl rounded-br-xl">
                        False
                      </div>
                    </div>
                    <div class="table-row h-10 bg-gray-5rounded-tl-xl rounded-tr-xl rounded-bl-xl rounded-br-xl">
                      <div class="table-cell text-xs rounded-tl-xl rounded-bl-xl pt-3 pl-1">
                        0xBBB6...e96e
                      </div>
                      <div class="table-cell text-xs text-center">50.0 DAI</div>
                      <div class="table-cell text-xs text-center">0</div>
                      <div class="table-cell text-xs text-center rounded-tr-xl rounded-br-xl">
                        False
                      </div>
                    </div>
                    <div class="table-row h-10 bg-gray-5rounded-tl-xl rounded-tr-xl rounded-bl-xl rounded-br-xl">
                      <div class="table-cell text-xs rounded-tl-xl rounded-bl-xl pt-3 pl-1">
                        0xBBB6...e96e
                      </div>
                      <div class="table-cell text-xs text-center">50.0 DAI</div>
                      <div class="table-cell text-xs text-center">0</div>
                      <div class="table-cell text-xs text-center rounded-tr-xl rounded-br-xl">
                        False
                      </div>
                    </div>
                    <div class="table-row h-10 bg-gray-5rounded-tl-xl rounded-tr-xl rounded-bl-xl rounded-br-xl">
                      <div class="table-cell text-xs rounded-tl-xl rounded-bl-xl pt-3 pl-1">
                        0xBBB6...e96e
                      </div>
                      <div class="table-cell text-xs text-center">50.0 DAI</div>
                      <div class="table-cell text-xs text-center">0</div>
                      <div class="table-cell text-xs text-center rounded-tr-xl rounded-br-xl">
                        False
                      </div>
                    </div>
                  </div>
                </div>
              
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      </div>
        </React.Fragment>
    )
}

export default Deposit