"use client";
import Image from "next/image";
import Button from "./Button";
import { PEOPLE_URL } from "@/constants";

const Hero = () => {
  return (
    <section
      className="relative h-screen   flex items-center justify-center overflow-hidden
              padding-container    mb-12 "
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 object-cover w-full h-full"
      >
        <source src="/offices.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black opacity-50 z-5"></div>

      <div
        className="relative z-10 rounded-b-lg lg:rounded-5xl padding-container
                   flex-col-reverse md:flex-col flex gap-20 py-12 pb-32
                   md:gap-28 lg:py-36 max-container xl:flex-row justify-around w-full h-full"
      >
        <div className=" flex flex-1 flex-col  mt-28 xl:w-1/2">
          <h1 className="bold-45 lg:bold-62  text-blue-900 uppercase">
            innovative it solutions
          </h1>
          <h1 className="bold-45 lg:bold-64 text-blue-400 uppercase">
            tailored for modern
          </h1>
          <h1 className="bold-45 lg:bold-64 text-blue-100 uppercase">
            job-hunting
          </h1>

          <div className="flex flex-col w-full gap-3 sm:flex-row">
            <Button
              type="button"
              title="Get Started"
              icon="/users1.svg"
              variant="btn_red"
            />
          </div>
        </div>
        <div className=" absolute bottom-11 right-2 ">
          <div className="mt-20 flex   flex-col-reverse flex-wrap  gap-5 ">
            {" "}
            <span className="flex space-x-2   overflow-hidden">
              {PEOPLE_URL.map((url) => (
                <Image
                  className="inline-block h-20 w-20 rounded-full"
                  src={url}
                  key={url}
                  alt="person"
                  width={200}
                  height={250}
                />
              ))}
            </span>
            <p className="bold-16 lg:bold-20 text-white">
              200k
              <span className="regular-16 lg:regular-20 ml-1 ">
                People Joined
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
