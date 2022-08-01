import React from 'react'
import Footer from '../../common/footer/footer'

function About() {
  return (
    <>
    <section className='flex flex-col items-center justify-center mb-10 dark:text-white'> 
      <div>
        <h1 className='m-5 text-4xl font-bold'>About Chained Thrift</h1>
      </div>
      <p className="w-1/2 m-2 text-lg">
        ChainedThrift is a secure DeFi application built on the Polygon Chain focused on providing
         its users with a safe cooperative system to achieve financial goals. </p>
      <p className="w-1/2 m-2 text-lg">
        The major feature of the Chainedthrift DApp is the Purse. It holds the collateral
         deposited by users and pays out each participant till the last person gets paid.
      </p>
      <p className="w-1/2 m-2 text-lg">
        The deposited funds are managed by a third-party yield farm to maximize profit. 
        The whole system is automated by the Purse feature.
      </p>
      <p className="w-1/2 m-2 text-lg">Chainedthrift Dapp offers its users the opportunity to attain their financial realities
        with a trustless decentralized cooperative system all in one DApp. 
      </p>
     
    </section>
    <Footer />
    </>
  )
}

export default About