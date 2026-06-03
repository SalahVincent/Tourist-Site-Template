import React from "react";
import Form from "../Form/Form.jsx";
import "./Contact.css";
import { Hero } from "../ui/Hero.jsx";
import { Text } from "../ui/Text.jsx";

const Contact = () => {
  return (
    <>
      <Hero
      head={`Contact`}
      items={"center"}
      tc={"center"}>
        <Text shead={`Home`} det={`Contact`} />
      </Hero>

    <section className="my-16 px-[9%] text-center">
      <h1 className="chead">Get in Touch</h1>
      <p>We would love to hear from you! If you have any comments or suggestions about our website or our tours, please don't hesitate to get in touch. We are always looking for ways to improve and make your travel experience even better.</p>
    </section>

      <Form />
      <div className="flex justify-center gap-[8%] m-[5%]">
        <div className="box border-[#e1e1e1] border-[2px] rounded-[25px] px-[25px] py-[15px] leading-[40px] w-[300px]">
          <p>Social media</p>
          <div className="flex justify-between">
            <img src="./Social button (4).png" alt="" />
            <img src="./Social button (5).png" alt="" />
            <img src="./Social button (6).png" alt="" />
            <img src="./Social button (7).png" alt="" />
          </div>
        </div>
        <div className="box box border-[#e1e1e1] border-[2px] rounded-[25px] px-[25px] py-[15px] leading-[30px] w-[300px]">
          <p>Email & phone</p>
          <div className="flex items-center">
            <img className="h-[20px]" src="./Vector (2).png" alt="contact_num" />
            <span>+250 784 688 641</span>
          </div>
          <div className="flex items-center">
            <img className="h-[20px]" src="./Vector (3).png" alt="contact_email" />
            <span>bbonteemma@gmail.com</span>
          </div>
        </div>
        <div className="box box border-[#e1e1e1] border-[2px] rounded-[25px] px-[25px] py-[15px] leading-[30px] w-[300px]">
          <p>Address</p>
          <p>kk 600 st</p>
          <p>Kigali, Rwanda</p>
        </div>
      </div>
    </>
  );
};

export default Contact;
