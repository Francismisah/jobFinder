import React from "react";
import Image from "next/image";
import FadeInOnScroll from "./FadeInOnScroll";

const Strategy = () => {
  return (
    <FadeInOnScroll>
      <div
        
        className="max-container mb-10 gap-20 padding-container py-20 lg:pt-72 lg:pb-14 flex flex-col-reverse lg:flex-row flexBetween flexCenter bg-gray-10 bg-cover bg-no-repeat bg-blend-multiply bg-center"
      >
        {" "}
        <div className="mt-2 relative shadow-2xl">
          <Image
            className="rounded-sm  border-white border-[10px]  "
            src="/s4.jpg"
            alt="person"
            width={500}
            height={500}
          />

          <Image
            className="absolute w-1/2   rounded-md right-0 top-2/4 lg:-right-10 shadow-xl border-[2px] border-white "
            src="/trade.jpg"
            alt="person"
            width={200}
            height={200}
          />
        </div>
        <div className=" space-y-3 w-1/2 text-left">
          <div className="bg-blue-700 text-white px-2 py-2 text-center rounded-full lg:w-1/2">
            <p className="medium-16">BUSINESS STRATEGY</p>
          </div>
          <h1 className="capitalize bold-20 lg:max-w-[500px] font-paragraph my-8 lg:bold-40 ">
            Smart strategic for smarter business
          </h1>

          <div className="mt-10">
            {" "}
            <div className="mt-10 bg-white px-3 py-5">
              <h2 className=" capitalize bold-16 lg:bold-20">
                ensure business contnuity
              </h2>
              <p className="regular-14 mt-2 lg:max-w-[500px] text-gray-30 lg:regular-16">
                we help you build resilient systems and strategic plans that
                keep your business running smoothly through disruptions,
                ensuring stability and long-term success
              </p>
            </div>
          </div>

          <h2 className="mt-6 capitalize  bold-16 lg:bold-20">
            Browser Safety & Protection
          </h2>
          <h2 className="mt-6 capitalize  bold-16 lg:bold-20">
            Cutting-edge IT Solutions
          </h2>
          <h2 className="mt-6 capitalize  bold-16 lg:bold-20">
            Expert Guidance & Assistance
          </h2>
        </div>
      </div>
    </FadeInOnScroll>
  );
};

export default Strategy;
