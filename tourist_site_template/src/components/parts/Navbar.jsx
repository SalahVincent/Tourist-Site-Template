import React from 'react'
import '../../App.css'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()

  return (
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
        <li
        onClick={() => navigate('/home')}>Home</li>
        <li
        onClick={() => navigate('/about')}>About</li>
        <li
        onClick={() => navigate('/package')}>Tour package</li>
        <li
        onClick={() => navigate('/gallery')}>Gallery</li>
        <li
        onClick={() => navigate('/contact')}>Contact us</li>
        </ul>
        <div className='flex items-center'>
          <button className='text-white border border-[#304f47] bg-[#c7923e] rounded-[8px] px-13.5 py-2.5'>Sign In</button></div>
      </nav>
      </div>
  )
}

export default Navbar