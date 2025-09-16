import React from "react";
import Image from "next/image";
import FadeInOnScroll from "./FadeInOnScroll";

const Consultants = () => {
  return (
    <div
      id="success"
      className="bg-white  lg:py-24 lg:px-16 pt-20 pb-48 px-10 "
    >
      <FadeInOnScroll>
        <div className="container mx-auto text-center flexCenter flex-col ">
          <div className="bg-blue-700 text-white px-2 py-2 flexCenter text-center rounded-full w-1/4">
            <p className="medium-16"> Top Consultants</p>
          </div>
          <h1 className="capitalize bold-20 w-1/2  font-paragraph my-8 lg:bold-40 ">
            Top Minds In Finance & Strategy
          </h1>
        </div>
      </FadeInOnScroll>
      <FadeInOnScroll>
        <div className=" grid grid-cols-1 gap-8 lg:gap-2   md:grid-cols-2 lg:grid-cols-4">
          <Card title="Guy Hawkins" subtitle="Admin" backgroundImage="bg-p1" />
          <Card
            title="Jacob Jones"
            subtitle="Manager"
            backgroundImage="bg-p2"
          />
          <Card
            title="Kristin Watson"
            subtitle="Consultant"
            backgroundImage="bg-p3"
          />
          <Card
            title="Bessie Copper"
            subtitle="Founder"
            backgroundImage="bg-p4"
          />
        </div>
      </FadeInOnScroll>
    </div>
  );
};

interface CardProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
}

const Card = ({ backgroundImage, title, subtitle }: CardProps) => {
  return (
    <div className="-space-y-1 shadow-md transition-shadow duration-300 hover:shadow-lg bg-none">
      <div
        className={`  ${backgroundImage} bg-cover bg-no-repeat bg-blend-multiply bg-opacity-50 bg-top
      rounded-md px-8 pt-40 pb-2  dark:bg-gray-800 items-end justify-items-end align-bottom`}
      ></div>
      <div className="bg-white text-left    px-6 py-4  relative  ">
        <p className=" medium-14 my-4 lg:medium-16   text-gray-800 mb-2 ">
          {subtitle}
        </p>
        <h3 className="text-black   bold-18 lg:bold-24 ">{title}</h3>
        <div className=" bg-gray-900 right-3 -top-8 absolute p-4 rounded-full ">
          <Image
            src="/s-icon.svg"
            height={35}
            width={35}
            alt=""
            className="  w-4"
          />
        </div>
      </div>
    </div>
  );
};

export default Consultants;
