import React from "react";
import "./BestPackage.css";

const BestPackage = () => {
  return (
    <>
      <div className="package-row">
        <div className="pack">
          <img src="./Image Placeholder.png" alt="" />
          <div className="pack-text">
            <div className="text1">
            <h3>Akagera National Park</h3>
            <p>
              Visitors to Akagera National Park can take part in a range of
              activities, including game drives, boat safaris, bird watching and
              nature walks.
            </p>
            </div>
          <button className="text-white bg-[#c7923e] rounded-[8px] px-10.5 py-2.5">Learn More</button>
          </div>
        </div>
        <div className="pack">
          <img src="./Image Placeholder (1).png" alt="" />
          <div className="pack-text">
            <div className="text1">
            <h3>Bisoke Hike</h3>
            <p>
              The Bisoke hike is a popular mountain trek in Rwanda, located in
              the Volcanoes National Park. It is one of the most challenging
              hikes in the park.
            </p>
            </div>
            <button className="text-white bg-[#c7923e] rounded-[8px] px-10.5 py-2.5">Learn More</button>
          </div>
        </div>
        <div className="pack">
          <img src="./Image Placeholder (2).png" alt="" />
          <div className="pack-text">
            <div className="text1">
              <h3>Lake Kivu trip</h3>
          <p>
            A trip to Lake Kivu can be a truly unique and memeorable experience.
          </p>
          </div>
          <button className="text-white bg-[#c7923e] rounded-[8px] px-10.5 py-2.5">Learn More</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BestPackage;
