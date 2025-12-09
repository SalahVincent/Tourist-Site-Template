import React from 'react'
import './home.css'
import BestPackage from '../bestpackage/BestPackage'

const Home = () => {
  return (
    <>
    <div className='hero-sec'>
      <h1>Experience the beauty of Rwanda with us</h1>
    <p>Discover the Land of A Thousand Hills</p>
  </div>
  <div className='book-box'>
    <form action="" className='flex bg-gray-100 rounded-[10px] h-[60%] self-center w-[30%] p-[10px] border-none'>
    <input type="text" placeholder='Search activities or Destinations' className=' border-none text-black text-[15px] w-[100%]'/>
    <img src="./search.png" alt="" />
    </form>
    <div>
      <span>Guest(s)</span>
      <div className='flex items-center gap-[5px]'>
        <p>2 Adults</p>
        <img src="./chevron-bottom.png" alt="" />
        </div>
      </div>
      <div>
        <span>Date</span>
        <div className='flex items-center gap-[5px]'>
          <p>12 - 13 April 2021</p>
          <img src="./chevron-bottom.png" alt="" />
        </div>
      </div>
      <div>
        <span>Package</span>
        <div className='flex items-center gap-[5px]'>
          <p>All</p>
          <img src="./chevron-bottom.png" alt="" />
        </div>
      </div>
      <div>
        <button className='text-white border border-[#304f47] bg-[#c7923e] rounded-[8px] px-13.5 py-2.5'>Book Now</button>
      </div>
  </div>
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

    <div className='gap-[8px] flex self-end mx-[10%] my-[3%]'>
        <button className='p-[12px] rounded-[8px] flex items-center border-[2px] border-[#c7923e]'>
          <img className='' src="./Group 18 (1).png" alt="" /></button>
        <button className='bg-[#c7923e] p-[14px] rounded-[8px] flex items-center'>
          <img src="./Group 18 (2).png" alt="" />
      </button>
      </div>
    
      <div className='flex gap-[3%] py-[2%]'>
        <div>
          <img src="Image Placeholder (28).png" alt="" />
          <h3 className=''>Kigali</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat elit sed pretum, egestas sed sit.</p>
        </div>
        <div>
        <img src="Image Placeholder (29).png" alt="" />
        <h3>Huye</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat elit sed pretum, egestas sed sit.</p>
        </div>
        <div>
        <img src="Image Placeholder (30).png" alt="" />
        <h3>Rubavu</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat elit sed pretum, egestas sed sit.</p>
        </div>
        <div>
        <img src="Image Placeholder (31).png" alt="" />
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
  </section>
  </>
  )
}

export default Home