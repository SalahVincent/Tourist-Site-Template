import React, { useState } from 'react'
import './App.css'
import Home from './components/Home/Home'
import About from './components/About/About'
import Gallery from './components/Gallery/Gallery'
import Package from './components/Package/Package'
import Contact from './components/Contact/Contact'

const HomePage = () => {
  const [page, setPage] = useState('Home')

  const handleChange = (component) => {
    setPage(component)
  }

  const display = () => {
    switch (page) {
      case 'Home':
        return <Home />
      case 'About':
        return <About />
      case 'Gallery':
        return <Gallery />
      case 'Package':
        return <Package />
      case 'Contact':
        return <Contact />
        default:
          return 'Home'
    }
  }
  return (
  <>
  <div className='header'>
  <div className='header1'>
        <div className='address-box'>
          <div className='address1'>
            <div><img src="./Vector.png" alt="" /></div>
            +250 784 688 641
          </div>
          <div className='address2'>
            <div><img src="./Vector (1).png" alt="" /></div>
            bbonteemma@gmail.com
          </div>
        </div>
        <div className='socials'>
          <div><img src="./Social button.png" alt="" /></div>
          <div><img src="./Social button (1).png" alt="" /></div>
          <div><img src="./Social button (2).png" alt="" /></div>
          <div><img src="./Social button (3).png" alt="" /></div>
        </div>
      </div>
      <nav className='header2'>
        <ul className='navtext'>
        <div><img className='rounded-[50%]'src="./Rectangle 1.png" alt="" /></div>
        <li onClick={() => handleChange('Home')}>Home</li>
        <li onClick={() => handleChange('About')}>About</li>
        <li onClick={() => handleChange('Package')}>Tour package</li>
        <li onClick={() => handleChange('Gallery')}>Gallery</li>
        <li onClick={() => handleChange()}>Blog</li>
        <li onClick={() => handleChange('Contact')}>Contact us</li>
        </ul>
        <div className='flex items-center'>
          <button className='text-white border border-[#304f47] bg-[#c7923e] rounded-[8px] px-13.5 py-2.5'>Sign In</button></div>
      </nav>
      </div>

      <main>
        {display()}
      </main>

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
            <form action="" className='bg-white w-[75%] h-[50px] rounded-[8px] p-[10px]'>
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

  </>
  )

}

export default HomePage