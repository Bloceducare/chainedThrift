import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import "./auth.scss"

const AuthModal = () => {
    const [isOpen, setIsOpen] = useState(true);

    const closeModal = () => {
        setIsOpen(false);
    };
    return (
        <>
            <div className="fixed inset-0 flex items-center justify-center"></div>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-black dark:bg-white-1 p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    ></Dialog.Title>
                                    <div className="mt-2 text-white-1 dark:text-black font-semibold my-4">
                                        Sign-in and start building your savings
                                        with ChainedThrift.
                                    </div>

                                    <div className="flex justify-center">
                                        <img
                                            src="/assets/thrift.png"
                                            alt="thrift-logo"
                                        />
                                    </div>
                                    <form>
                                        <div className="mb-4">
                                            <label
                                                htmlFor="username"
                                                className="block text-xs text-white-1 dark:text-black mb-2"
                                            >
                                                Username
                                            </label>
                                            <input
                                                type="text"
                                                className="w-full px-2 py-2 text-white-1 dark:text-black bg-transparent border rounded border-gray-10"
                                            />
                                        </div>

                                        <div className="mb-6">
                                            <label className="block block text-xs text-white-1 dark:text-black mb-2">
                                                Email Address
                                            </label>
                                            <input
                                                type="email"
                                                className="w-full px-2 py-2 text-white-1 dark:text-black  bg-transparent border rounded border-gray-10"
                                            />
                                        </div>
                                    </form>

                                    <div className="flex items-center space-x-2 my-4">
                                        <div>
                                            <img
                                                src="/assets/fa.png"
                                                alt="icon"
                                            />
                                        </div>
                                        <div>
                                            <p className="text-white-1 dark:text-black text-xs">
                                                Select your preferred username
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <div>
                                            <img
                                                src="/assets/famark.png"
                                                alt="icon"
                                            />
                                        </div>
                                        <div>
                                            <p className="text-white-1 dark:text-black text-xs">
                                                Input an e-mail address for
                                                purpose of setting reminders.
                                            </p>
                                        </div>
                                    </div>

                                    <p className=" my-4 text-white-1 dark:text-black ">
                                        By inputing your email address and
                                        connecting your wallet using
                                        ChainedThrift, you agree to{" "}
                                        <a
                                            className="text-base font-normal font-Poppins mr-1 underline"
                                            href="https://drive.google.com/file/d/1LH0tX4qrbQyagSFtEcDTrJIE7VqkpmHp/view?usp=sharing"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            Terms of Service
                                        </a>
                                        and{" "}
                                        <a
                                            href="/privacy-policy"
                                            className="underline"
                                        >
                                            {" "}
                                            Privacy Policy.
                                        </a>
                                    </p>

                                    <div className="flex item-center justify-center space-x-2">
                                      <button className=" font-semibold border-linear rounded-full p-4 before:bg-white-1 w-full dark:text-black" onClick={closeModal}>Cancel</button>
                                      <button className="bg-pallet-5 font-semibold w-full rounded-full p-4">Sign</button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
};

export default AuthModal;
