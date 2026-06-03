import React from 'react'
import './home.css'
import BestPackage from '../bestpackage/BestPackage'
import {Hero} from '../ui/Hero'
import { BookBox } from '../ui/BookBox'
import { Buttons } from '../ui/Buttons'
import { Client } from '../ui/Client'

export const Home = () => {

  return (
    <>
    <Hero
    head="Experience the beauty of Rwanda with us"
    par="Discover the Land of A Thousand Hills"/>
  <BookBox
  display={`flex`}
  bg={`#304f47`}
  position={`relative`}
  />
  <section className='packages'>
    <div className='package-intro'>
      <p className='p'>Choose your Package</p>
    <h2>Select your Best Package for your Travel</h2>
    </div>
    <BestPackage />
    <BestPackage />
    <div className='packages'>
      <div className='package-intro'><p className='p'>Popular Destinations</p>
      <h2>Select Our Best Popular Destinations</h2>
    </div>
    </div>

    <Buttons/>
    
      <div className='flex gap-[3%] py-[2%] px-[9%]'>
        <div>
          <img className='h-[250px] mb-2' src="Image Placeholder (28).png" alt="" />
          <h3 className=''>Kigali</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat elit sed pretum, egestas sed sit.</p>
        </div>
        <div>
        <img className='h-[250px] mb-2' src="Image Placeholder (29).png" alt="" />
        <h3>Huye</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat elit sed pretum, egestas sed sit.</p>
        </div>
        <div>
        <img className='h-[250px] mb-2' src="Image Placeholder (30).png" alt="" />
        <h3>Rubavu</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat elit sed pretum, egestas sed sit.</p>
        </div>
        <div>
        <img className='h-[250px] mb-2' src="Image Placeholder (31).png" alt="" />
        <h3>Musanze</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat elit sed pretum, egestas sed sit.</p>
      </div>
      </div>

      
    
    <div className='packages'>
      <p className='p'>Why Us?</p>
      <h2>Why Travel with Africa wizzy Safari</h2>
    </div>

    <div className='flex gap-[2%] text-white py-[2%]'>
      <div className='w-[250px] bg-[#304f47] flex flex-col items-center justify-center rounded-[12px] p-[15px] text-center'>
        <img src="./CarOutlined.png" alt="" />
        <p>100+ tours around Rwanda</p>
      </div>
      <div className='w-[250px] bg-[#304f47] flex flex-col items-center justify-center rounded-[12px] p-[15px] text-center'>
        <img src="./CheckCircleOutlined.png" alt="" />
        <p>100% Trusted travel agency</p>
      </div>
      <div className='w-[250px] bg-[#304f47] flex flex-col items-center  justify-center rounded-[12px] p-[15px] text-center'>
        <img src="./ContactsOutlined.png" alt="" />
        <p>10 years of travel experience</p>
      </div>
      <div className='w-[250px] bg-[#304f47] flex flex-col items-center  justify-center rounded-[12px] p-[15px] text-center'>
        <img src="LikeOutlined.png" alt="" />
        <p>90% of travelors are happy</p>
      </div>
    </div>

    <div className='packages'>
      <p className='p'>Our Traveller Say</p>
      <h2>What Our Clients Say About Us</h2>
    </div>

    <div className='grid grid-cols-3 px-[11%] py-17 gap-9'>
    <Client />
    <Client />
    <Client />
    </div>
  </section>
  </>
  )
}

export default Home