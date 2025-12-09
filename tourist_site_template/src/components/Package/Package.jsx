import React from 'react'
import BestPackage from '../bestpackage/BestPackage'
import '../Home/home.css'

const Package = () => {
  return (
    <>
    <div className='hero-sec items-center'>
        <div className='align-center flex flex-col text-center'><h1 className='w-[100%]'>Tour Package</h1>
        <h2>Home <span className='text-[#c7923e] f-[Lora]'>Package</span></h2>
        </div>
      </div>
  <section className="packages">
        <div className="package-intro">
          <p className="p">Choose your Package</p>
          <h2>Select your Best Package for your Travel</h2>
        </div>
    <BestPackage />
    <BestPackage />
    <BestPackage />
    <BestPackage />
      </section>

    
    </>
  )
}

export default Package