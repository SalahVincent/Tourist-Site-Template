import React from "react";
import { Hero } from "../ui/Hero";
import { Text } from "../ui/Text";

const Gallery = () => {
  return (
    <>
      <Hero
          head={`Gallery`}
          items={'center'}
          tc={'center'}>
            <Text
            shead={`Home`}
            det={`Gallery`}
            />
          </Hero>
      <section className="packages">

        <div className="flex m-[20px] gap-[5px] p-[5px]">
          <div className="flex flex-col justify-around gap-[8px]">
            <img src="./Image Placeholder (4).png" alt="" />
            <img src="./Image Placeholder (5).png" alt="" />
          </div>
          <div>
            <img src="./Image Placeholder (6).png" alt="" />
          </div>
          <div className="flex flex-col justify-around gap-[8px]">
            <img src="./Image Placeholder (7).png" alt="" />
            <img src="./Image Placeholder (8).png" alt="" />
          </div>
          <div className="flex flex-col justify-around gap-[8px]">
            <div>
              <img src="./Image Placeholder (9).png" alt="" />
            </div>
            <div className="flex justify-around gap-[5px]">
              <img src="./Image Placeholder (10).png" alt="" />
              <img src="./Image Placeholder (11).png" alt="" />
            </div>
          </div>
        </div>

        <div className="flex m-[20px] gap-[5px] p-[5px]">
          <div className="flex flex-col justify-around gap-[8px]">
            <img src="./Image Placeholder (12).png" alt="" />
            <div className="flex justify-around gap-[5px]">
              <img src="./Image Placeholder (13).png" alt="" />
              <img src="./Image Placeholder (14).png" alt="" />
            </div>
          </div>
          <div className="flex gap-[5px]">
            <div className="flex flex-col justify-around gap-[8px]">
              <img src="./Image Placeholder (15).png" alt="" />
              <img src="./Image Placeholder (16).png" alt="" />
            </div>
            <div>
              <img src="./Image Placeholder (17).png" alt="" />
            </div>
          </div>
          <div className="flex flex-col justify-around gap-[8px]">
            <img src="./Image Placeholder (18).png" alt="" />
            <img src="./Image Placeholder (19).png" alt="" />
          </div>
        </div>

        <div>
          <img src="./Image Placeholder (20).png" alt="" />
        </div>
      </section>
    </>
  );
};

export default Gallery;
