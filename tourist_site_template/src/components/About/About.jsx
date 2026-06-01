import React from "react";
import './About.css'
import { BookBox } from "../Home/Home";

const About = () => {
  return (
    <>
      <div className="hero-sec-about flex">
        <div className="w-[60%] relative flex flex-col justify-center gap-3">
          <h1 className="leading-17">We are dedicated to providing the best travel experience</h1>
          <p>Discover the Land of a Thousand Hills</p>
          <div className="flex p-4 justify-between rounded-[8px] bg-white relative left-40">
            <div className="flex gap-6">
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
          <button className="px-6 rounded-[8px] bg-[#304f47] text-white">Book Now</button>
        </div>
        </div>
        <div>
          <img
          className="w-[45rem]"
          src="./Image Placeholder (32).png" alt="" />
        </div>
      </div>

      <section className="welcome px-[9%] py-16 flex flex-col gap-15">
        <h1 className="head">Welcome to Africa Wizzy Safari</h1>

        <div className="flex gap-30">
          <img
          className="h-full"
          src="./Image Placeholder (36).png" alt="" />
          <p>Welcome to Africa Wizzy Safari, a leading tourism company based in Rwanda. We have been in business for over 5 years and are committed to providing top-quality tours and services to our clients. Our mission is to showcase the beauty and culture of Rwanda to visitors from around the world, and to contribute to the sustainable development of the country through responsible tourism practices.</p>
        </div>
        <div className="flex gap-30">
          <p>At Africa Wizzy safari, we offer a wide range of tours and activities, including cultural and historical tours, wildlife safaris, mountain gorilla trekking, and more. Our experienced and knowledgeable guides will ensure that you have a safe and enjoyable experience while exploring the stunning landscapes and rich culture of Rwanda.</p>
          <img
          className="h-full"
          src="./Image Placeholder (37).png" alt="" />
        </div>
        <div className="flex gap-30">
          <img
          className="h-full"
          src="./Image Placeholder (38).png" alt="" />
          <div className="">
            <p className="pb-8">We are proud to have received numerous awards and accolades for our commitment to excellence, including the RDD award and the Excellence award.</p>
            <p>Thank you for choosing Africa Wizzy Safari for your travel needs in Rwanda. We look forward to welcoming you on one of our tours soon!</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
