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
  <div className='header1'>
        <div className='address-box'>
          <div className='address1'>
            <img src="./Vector.png" alt="" />
            +250 784 688 641
          </div>
          <div className='address2'>
            <img src="./Vector (1).png" alt="" />
            bbonteemma@gmail.com
          </div>
        </div>
        <div className='socials'>
          <img className='' src="./Social button.png" alt="" />
          <img src="./Social button (1).png" alt="" />
          <img src="./Social button (2).png" alt="" />
          <img src="./Social button (3).png" alt="" />
        </div>
      </div>
      <nav className='header2'>
        <ul className=''>
        <div><img src="./Rectangle 1.png" alt="" /></div>
        <li onClick={() => handleChange('Home')}>Home</li>
        <li onClick={() => handleChange('About')}>About</li>
        <li onClick={() => handleChange('Package')}>Tour package</li>
        <li onClick={() => handleChange('Gallery')}>Gallery</li>
        <li onClick={() => handleChange()}>Blog</li>
        <li onClick={() => handleChange('Contact')}>Contact us</li>
        </ul>
        <div className='flex items-center'><button className='border-2 border-[#304f47] bg-[#c7923e] rounded-[8px] px-4.5 py-1'>Sign In</button></div>
      </nav>

      <main>
        {display()}
      </main>

      <footer></footer>

  </>
  )

}

export default HomePage