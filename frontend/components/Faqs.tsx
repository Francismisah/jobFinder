import React from "react";
import FadeInOnScroll from "./FadeInOnScroll";
import Button from "./Button";
import Image from "next/image";
import { SKILLED_URL } from "@/constants";

const Faqs = () => {
  return (
    <FadeInOnScroll>
      <div
        id="blog"
        className=" mb-10  items-center flexCenter    bg-bg-img-1  mt-8 bg-cover bg-no-repeat bg-blend-multiply bg-bottom bg-opacity-80  bg-black  flex flex-col-reverse lg:flex-row  flexCenter"
      >
        {" "}
        <div className="w-1/2 hidden lg:block">
          <Image src="/r1.jpg" alt="person" width={500} height={500} />
        </div>
        <div className=" text-left flexCenter py-6 lg:py-0 flex flex-col lg:flex-row gap-6">
          <div className=" space-y-6 w-1/2  text-left justify-start items-start">
            <div className="bg-blue-700 text-white px-2 py-2 text-center rounded-full lg:w-1/4">
              <p className="medium-16">FAQ'S</p>
            </div>
            <h1 className="capitalize bold-20 lg:max-w-[300px] text-white font-paragraph my-8 lg:bold-40 ">
              Frequently Asked Questions
            </h1>
            <p className="regular-12  my-2 lg:max-w-[290px] text-white lg:regular-16">
              {" "}
              Find quick answers to the most common questions about our
              services, process, and how Business Wire can help your business
              thrive
            </p>{" "}
            <Button type="button" title="Get A Quote" variant=" btn_blue1  " />
          </div>
          <div className=" w-1/2 space-y-6 mx-auto">
            {" "}
            <div className="py-4 px-2 lg:max-w-[300px] bg-gray-50 bg-opacity-50 rounded-md">
              <h2 className=" capitalize text-white bold-14 lg:bold-16">
                how do i get started with business wire?
              </h2>
            </div>
            <div className="-space-y-0 lg:max-w-[300px]">
              <h2 className=" capitalize py-4 px-2 bg-blue-70  rounded-t-md text-white bold-14 lg:bold-16">
                What services does business wire specialize in?
              </h2>
              <p className="regular-12 text-white capitalize  py-4 px-2 bg-gray-50 bg-opacity-50 rounded-b-md lg:regular-14">
                business wire offers expert consulting in financial strategy.
                digital transformation and business development helping clients
                grow sustainbly and confidently.
              </p>
            </div>
            <div className="py-4 px-2 bg-gray-50 lg:max-w-[300px] bg-opacity-50 rounded-md">
              <h2 className=" capitalize text-white bold-14 lg:bold-16">
                what industries do you typically work with?
              </h2>
            </div>
            <div className="py-4 px-2 bg-gray-50 lg:max-w-[300px] bg-opacity-50 rounded-md">
              <h2 className=" capitalize text-white bold-14 lg:bold-16">
                do you offer custom consulting solutions?
              </h2>
            </div>
            <div className="py-4 px-2 bg-gray-50 lg:max-w-[300px] bg-opacity-50 rounded-md">
              <h2 className=" capitalize text-white bold-14 lg:bold-16">
                how do i get started with business wire?
              </h2>
            </div>
          </div>
        </div>
      </div>
    </FadeInOnScroll>
  );
};

export default Faqs;
