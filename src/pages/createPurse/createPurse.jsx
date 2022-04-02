import React from "react";
import { IoIosArrowBack, IoIosHelpCircleOutline } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const CreatePurse = () => {
  const navigate = useNavigate();
  return (
    <main className="bg-overlay-img-light dark:bg-overlay-img bg-cover min-h-screen">
      <section className="container mx-auto px-4 sm:px-6 md:px-0 mt-12 dark:text-white-1">
        <div className="mb-2">
          <button
            className="align-middle font-black"
            onClick={() => navigate(-1)}
          >
            <IoIosArrowBack className="inline" />
            <span>Go back</span>
          </button>
        </div>
        <div className="md:w-mini_large lg:w-semi_large mx-auto mt-8">
          <h1 className="text-3xl font-black mb-4">Create Purse</h1>
          <p className="">
            As the purse creator, you automatically become the first member of
            the purse, and you get to decide the amount to be contributed, the
            frequency of the contribution, and the number of members allowed in
            the purse
          </p>
          <form className="bg-white-1 dark:bg-dark-1 p-4 rounded mt-4">
            <div className="grid gap-2 grid-cols-3 mb-6">
              <div className="col-span-1">
                <span className="block text-xs">
                  <IoIosHelpCircleOutline className="inline text-xl" /> token
                </span>
                <button
                  className="block align-middle text-sm bg-gray-2 text-white-1 py-2 px-4 rounded"
                  type="button"
                >
                  <span>DAI</span>
                  <RiArrowDropDownLine className="inline text-xl" />
                </button>
              </div>
              <div className="col-span-2">
                <label htmlFor="amount" className="block text-xs">
                  <IoIosHelpCircleOutline className="inline text-xl" /> Amount
                </label>
                <input
                  type="text"
                  name="amount"
                  className="bg-transparent px-2 py-1 border border-gray-10 rounded w-full"
                />
              </div>
            </div>
            <div className="grid gap-2 grid-cols-2 mb-6">
              <div className="col-span-1">
                <label htmlFor="members" className="block text-xs">
                  <IoIosHelpCircleOutline className="inline text-xl" /> Members
                  count
                </label>
                <input
                  type="number"
                  inputMode="numeric"
                  min="1"
                  name="member"
                  className="bg-transparent px-2 py-1 border border-gray-10 rounded w-full"
                />
              </div>
              <div className="col-span-1">
                <label htmlFor="frequncy" className="block text-xs">
                  <IoIosHelpCircleOutline className="inline text-xl" />{" "}
                  Frequency in days
                </label>
                <input
                  type="number"
                  name="frequncy"
                  className="bg-transparent px-2 py-1 border border-gray-10 rounded w-full"
                />
              </div>
            </div>
            <div className="grid gap-2 grid-cols-2 mb-6">
              <div className="col-span-1">
                <label htmlFor="collateral" className="block text-xs">
                  <IoIosHelpCircleOutline className="inline text-xl" />{" "}
                  Collateral
                </label>
                <input
                  type="text"
                  name="collateral"
                  className="bg-transparent px-2 py-1 border border-gray-10 rounded w-full"
                />
              </div>
              <div className="col-span-1">
                <label htmlFor="total" className="block text-xs">
                  <IoIosHelpCircleOutline className="inline text-xl" /> Total
                  amount
                </label>
                <input
                  type="text"
                  name="total"
                  className="bg-transparent px-2 py-1 border border-gray-10 rounded w-full"
                />
              </div>
            </div>
            <div className="w-full">
              <button
                className="w-full block align-middle text-sm bg-gray-2 text-white-1 py-2 px-4 rounded"
                type="button"
              >
                Connect wallet
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default CreatePurse;
