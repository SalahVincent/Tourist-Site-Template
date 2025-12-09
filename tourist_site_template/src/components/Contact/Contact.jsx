import React from 'react'
import Form from '../Form/Form.jsx'
import './Contact.css'

const Contact = () => {
  return (
    <>
      <div className='hero-sec items-center'>
        <div className='text-center'><h1>Contact</h1>
        <h2>Home <span className='text-[#c7923e] f-[Lora]'>Contact</span></h2>
        </div>
      </div>
      <Form />
      <div className='flex justify-center gap-[8%] m-[5%]'>
        <div className='box border-[#e1e1e1] border-[2px] rounded-[25px] px-[25px] py-[15px] leading-[40px] w-[300px]'>
          <p>Social media</p>
          <div className='flex justify-between'>
            <img src="./Social button (4).png" alt="" />
            <img src="./Social button (5).png" alt="" />
            <img src="./Social button (6).png" alt="" />
            <img src="./Social button (7).png" alt="" />
          </div>
        </div>
        <div className='box box border-[#e1e1e1] border-[2px] rounded-[25px] px-[25px] py-[15px] leading-[30px] w-[300px]'>
          <p>Email & phone</p>
          <div><img src="" alt="" />+250 784 688 641</div>
          <div><img src="" alt="" />bbonteemma@gmail.com</div>
        </div>
        <div className='box box border-[#e1e1e1] border-[2px] rounded-[25px] px-[25px] py-[15px] leading-[30px] w-[300px]'>
          <p>Address</p>
          <p>kk 600 st</p>
          <p>Kigali, Rwanda</p>
        </div>
      </div>
    </>
  )
}

export default Contact