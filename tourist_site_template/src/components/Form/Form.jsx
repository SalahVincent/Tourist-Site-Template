import React from 'react'
import './Form.css'

const Form = () => {
  return (
    <>
    <div className='contact-container'>
        <h2>Contact us</h2>
        <form action="" className='contact-form'>
            <div className='flex justify-between my-[10px]'>
                <div className='w-[48%] '>
                    <p>First Name</p>
                    <input className='w-[100%] px-[10px]' type="text" placeholder='Input your First Name in Here'/>
                </div>
                <div className='w-[48%]'>
                    <p>Last Name</p>
                    <input className='w-[100%] px-[10px]' type="text" placeholder='Input your Last Name Here' />
                </div>
            </div>
            <div className='w-[48%] my-[10px]'>
                <p>Email Address</p>
                <input type="text"  className='w-[100%] px-[10px]' placeholder='Input your Email Address in Here'/>
            </div>
            <div className='w-[48%] my-[10px]'>
                <p>Phone Number</p>
                <div className='input'>
                    <select>
                        <option value="value2">+250</option>
                        <option value="value3">+237</option><img src='./chevron-bottom (1).png'/></select>
                        <input type="text" placeholder='Input your Phone Number'/></div>
            </div>
            <div className='w-[100%] my-[10px]'>
                <p>Message</p>
                <input type="text"  className='message-input pb-[100px] pt-[10px] px-[10px]' placeholder='Write a message'/>
            </div>
        </form>
        <button className='text-white bg-[#c7923e] rounded-[8px] px-13.5 py-2.5' action='submit'>Submit</button>
    </div></>
  )
}

export default Form