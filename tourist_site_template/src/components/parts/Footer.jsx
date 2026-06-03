import React from 'react'
import '../../App.css'

const Footer = () => {
  return (
    <footer className='bg-[#304f47] text-white px-[10%] pt-[2%]'>
        <div className='flex justify-between'>
          <section className='w-[40%]'>
          <h3>If you have any question, Let us help you!</h3>
          <p className='my-[8px]'>If you have any questions or would like to book a tour with, please don't hesitate to contact us.</p>
          <ul className='my-[18px]'>
            <li>Phone: +250 788 123 456</li>
            <li>Email: <u>info@rwandatourism.com</u></li>
            <li>Address: Kigali, Rwanda</li>
          </ul>
          <p className='font-[700] py-[6px]'>Subscribe to our newspaper</p>
          <div className='flex gap-[5px]'>
            <form action="" className='bg-white w-[75%] h-[50px] rounded-[8px] p-[10px] flex justify-center items-center'>
    <input type="text" placeholder='Input your email here' className=' border-none text-black text-[15px] w-[100%]'/>
    </form>
    <button className='flex justify-center items-center rounded-[8px] bg-[#c7923e] w-[50px]'>
      <div><img src="./Group 18.png" alt="" /></div></button>
          </div>
          </section>
        <section className='w-[45%]'>
          <div className='flex justify-between my-[10px]'>
            <img src="./Rectangle 1.png" alt="" className='rounded-[50%]' />
            <div className='socials'>
          <div><img src="./Social button.png" alt="" /></div>
          <div><img src="./Social button (1).png" alt="" /></div>
          <div><img src="./Social button (2).png" alt="" /></div>
          <div><img src="./Social button (3).png" alt="" /></div>
        </div>
          </div>
          <p className='my-[10px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <div className='flex justify-between'>
            <ul className='ul'>
              <li><a href="">Home</a></li>
              <li>Testimonials</li>
              <li>Destinations</li>
              <li>sign in</li>
            </ul>
            <ul className='ul'>
              <li>About Us</li>
              <li>Packages</li>
              <li>Events</li>
              <li>Gallery</li>
            </ul>
            <ul className='ul'>
              <li>Our Team</li>
              <li>Blog</li>
              <li>Contact Us</li>
              </ul>
          </div>
        </section>
        </div>
        <div className='flex items-center justify-center h-[40px]'>Copyright Africa Wizzy Safari 2022</div>
      </footer>
  )
}

export default Footer