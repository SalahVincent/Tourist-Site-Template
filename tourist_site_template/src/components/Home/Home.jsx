import React from 'react'
import './home.css'

const Home = () => {
  return (
    <>
    <div className='hero-sec'>
      <h1>Experience the beauty of Rwanda with us</h1>
    <p>Discover the Land of A Thousand Hills</p>
  </div>
  <div className='book-box'>
    <form action="">
    <input type="text" placeholder='Search activities or Destinations' className=' border-2 border-[#304f47]'/>
    </form>
    <div>
      <span>Guest(s)</span>
      <div>
        <p>2 Adults</p>
        <img src="" alt="" />
        </div>
      </div>
      <div>
        <span>Date</span>
        <div>
          <p>12 - 13 April 2021</p>
          <img src="" alt="" />
        </div>
      </div>
      <div>
        <span>Package</span>
        <div>
          <p>All</p>
          <img src="" alt="" />
        </div>
      </div>
  </div>
  </>
  )
}

export default Home