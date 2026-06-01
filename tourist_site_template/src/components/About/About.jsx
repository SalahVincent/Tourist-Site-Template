import React from "react";
import './About.css'

const About = () => {
  return (
    <>
      <div className="hero-sec-about flex">
        <div className="w-[60%] flex flex-col justify-center">
          <h1>We are dedicated to providing the best travel experience</h1>
          <p>Discover the Land of a Thousand Hills</p>
          <div className="flex border rounded-[8px]">
            <div className="flex">
            <div>
              <div><span>Guest</span>
              <div>2 Adult <img src="" alt="" /></div></div>
            </div>
            <div>
              <div><span>Date</span>
              <div>12 -13 April 2021<img src="" alt="" /></div></div>
            </div>
            <div>
              <div><span>Package</span>
              <div>Akgera Tour<img src="" alt="" /></div></div>
            </div>
          </div>
          <button>Book Now</button>
        </div>
        </div>
        <div>
          <img src="./Image Placeholder (32).png" alt="" />
        </div>
      </div>
    </>
  );
};

export default About;
