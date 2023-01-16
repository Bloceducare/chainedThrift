import React from 'react'
import Footer from '../../common/footer/footer'
import Faq from './components/faq'

function About() {
  return (
    <>
      <section className=' dark:text-white'>
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center justify-center w-1/2 text-center my-28">
            <h1 className="pb-4 text-5xl font-bold">Transforming the idea of <span className=" text-purple-2">thrift</span> globally.</h1>
            <p className="text-lg lg:px-16">Our goal is to enable easy access to decentralized savings and various rewarding mechanisms for all. We want everyone to equally benefit from a
              changing financial landscape and speed up the global advent crypto adoption
            </p>
          </div>
        </div>
        <div className="mx-10">
          <div className="items-center justify-center grid-cols-1 text-lg lg:grid-cols-2 lg:grid">
            <div>
              <h1 className="py-4 text-2xl font-bold" ><span className="py-2 border-t-4 border-purple-2">About</span> ChainedThrift</h1>
              <p className="mb-6">
                ChainedThrift is a secure DeFi application built on the Polygon Chain focused on providing its users with a safe cooperative system to achieve financial goals.
              </p>
              <p>
                The major feature of the Chainedthrift DApp is the Purse. It holds the collateral deposited by users and pays out each participant till the last person gets paid.
                The deposited funds are managed by a third-party yield farm to maximize profit. The whole system is automated by the Purse feature.
                Chainedthrift Dapp offers its users the opportunity to attain their financial realities with a trustless decentralized cooperative system all in one DApp.
              </p>
            </div>
            <div>
              <img
                className="block mx-auto"
                src="/assets/Rectangle.svg"
                alt="safe-svg"
              />
            </div>
          </div>
        </div>
        <div className="mx-10">
          <div className="grid items-center justify-center grid-cols-1 text-lg lg:grid-cols-2 lg:grid">
            <div className="order-2 lg:order-1">
              <img
                className="block mx-auto"
                src="/assets/coin2.svg"
                alt="safe-svg"
              />
            </div>
            <div className="order-1 py-8 lg:order-2">
              <h1 className="py-4 text-2xl font-bold" ><span className="py-2 border-t-4 border-purple-2">Our</span> Approach/How it works</h1>
              <p className="mb-6">
                Chained Thrift is trustless. You don’t have to worry about trust because every member pays collateral. This will solve the issue of non-commitment to contributions after collection as in the traditional thrift.
              </p>
              <p>
                Purse operates as a decentralized automated payment system that pays as at when due.
              </p>
            </div>
          </div>
        </div>
        <Faq />
        <div className="grid lg:grid-cols-3 lg:grid">
          <div className="flex flex-col items-center py-20">
            <img
              className="block py-8 mx-auto"
              src="/assets/shield.svg"
              alt="shield-svg"
            />
            <p>100% Secure</p>
          </div>
          <div className="flex flex-col items-center py-20">
            <img
              className="block py-8 mx-auto"
              src="/assets/web.svg"
              alt="web-svg"
            />
            <p>100% Decentralized</p>
          </div>
          <div className="flex flex-col items-center py-20">
            <img
              className="block py-8 mx-auto"
              src="/assets/card.svg"
              alt="wallet-svg"
            />
            <p>100% Secure</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default About