import React from 'react'
import { Disclosure } from '@headlessui/react'
import { MdKeyboardArrowUp } from 'react-icons/md'

const Faq = () => {
return (
    <div>
        <div className="w-full px-16 py-16 pt-16 bg-gray-8">
            <div>
                <div className="pl-36">
                    <p className="pl-2 font-bold text-md text-purple-2">FAQs</p>
                </div>
                <h1 className="text-2xl font-bold font-Montserrat text-purple-2"><span className="pt-2 border-t-4 border-purple-2"> Frequently</span> asked questions</h1>
                <p className="font-semibold font-Montserrat text-purple-2">Below you will find some information, but if have any questions,</p>
                <p className="font-semibold font-Montserrat text-purple-2">please get in touch with us</p>
            </div>
            <div className="container py-4">
                <Disclosure>
                    {({ open }) => (
                <>
                    <Disclosure.Button className="flex justify-between w-full px-4 py-4 text-sm font-medium text-left text-white bg-[#833EF1] hover:bg-purple-200 hover:text-[#833FE1] focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <span>How does ChainedThrift work?</span>
                    <MdKeyboardArrowUp
                    className={`${
                        open ? 'rotate-180 transform' : ''
                    } h-5 w-5 text-white hover:text-[#833EF1]`}
                    />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-white text-md">
                        <ul className="px-4 list-decimal">
                            <li>Launch App</li>
                            <li>Connect your wallet</li>
                            <li>Create a purse or Join a purse</li>
                        </ul>
                    </Disclosure.Panel>
                </>
                    )}
                </Disclosure>
                <Disclosure as="div" className="mt-2">
                    {({ open }) => (
                <>
                    <Disclosure.Button className="flex justify-between w-full px-4 py-4 text-sm font-medium text-left text-white bg-[#833EF1] hover:bg-white hover:text-[#833EF1] focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <span>What happens to the collateral paid?</span>
                    <MdKeyboardArrowUp
                    className={`${
                        open ? 'rotate-180 transform' : ''
                    } h-5 w-5 text-white hover:text-[#833EF1]`}
                    />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-white text-md">
                        The deposited collateral is managed by a third party yield farming protocol, which yields return for you during the contribution rounds.
                        Your collateral as well as its returns are deposited back into your wallet by the end of the whole contribution rounds.
                    </Disclosure.Panel>
                </>
                )}
                </Disclosure>
                <Disclosure as="div" className="mt-2">
                    {({ open }) => (
                <>
                    <Disclosure.Button className="flex justify-between w-full px-4 py-4 text-sm font-medium text-left text-white bg-[#833EF1] hover:bg-white hover:text-[#833EF1]  focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <span>Do I have to request for collateral by the end of the contribution period?</span>
                    <MdKeyboardArrowUp
                    className={`${
                        open ? 'rotate-180 transform' : ''
                    } h-5 w-5 text-white hover:text-[#833EF1]`}
                    />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-white text-md">
                        The whole system is automated by the <italic>Purse</italic> feature which automatically sends your funds and returns back to your wallet
                    </Disclosure.Panel>
                </>
                )}
                </Disclosure>
                <Disclosure as="div" className="mt-2">
                    {({ open }) => (
                <>
                    <Disclosure.Button className="flex justify-between w-full px-4 py-4 text-sm font-medium text-left text-white bg-[#833EF1] hover:bg-white hover:text-[#833EF1]  focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <span>Who do I talk to if I have more questions?</span>
                    <MdKeyboardArrowUp
                    className={`${
                        open ? 'rotate-180 transform' : ''
                    } h-5 w-5 text-white hover:text-[#833EF1]`}
                    />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-white text-md">
                        You can send an email to us via <a href='mailto:hello@chainedthrift.com'>hello@chainedthrift.com</a>. You can also reach us on Twitter
                    </Disclosure.Panel>
                </>
                )}
                </Disclosure>
                
            </div>
        </div>
    </div>
)
}

export default Faq