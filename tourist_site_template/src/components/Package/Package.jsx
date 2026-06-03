import React from 'react'
import BestPackage from '../bestpackage/BestPackage'
import '../Home/home.css'
import { Hero } from '../ui/Hero'
import { Buttons } from '../ui/Buttons'
import { Text } from '../ui/Text'

const Package = () => {
  return (
    <>
    <Hero
    head={`Tour Package`}
    items={'center'}
    tc={'center'}>
      <Text
      shead={`Home`}
      det={`Package`}
      />
    </Hero>
  <section className="packages">
        <div className="package-intro">
          <p className="p">Choose your Package</p>
          <h2>Select your Best Package for your Travel</h2>
        </div>
    <BestPackage />
    <BestPackage />
    <BestPackage />
    <BestPackage />
    <Buttons/>
      </section>

    
    </>
  )
}

export default Package