"use client";
import Button from "./Button";
import Image from "next/image";
import FadeInOnScroll from "./FadeInOnScroll";
import { SKILLED_URL } from "@/constants";

const About = () => {
   const scrollToServices = () => {
    const accomadationPage = document.getElementById("services");
    if (accomadationPage) {
      accomadationPage.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <section id="about">
      <FadeInOnScroll>
        <div className="max-container mb-10 gap-20 padding-container py-20 lg:py-30 flex flex-col-reverse lg:flex-row flexBetween flexCenter">
          {" "}
          <div className="mt-2 relative shadow-2xl">
            <Image
              className="rounded-sm  border-white border-[10px]  "
              src="/r2.jpg"
              alt="person"
              width={500}
              height={500}
            />

            <Image
              className="absolute w-1/2  -bottom-10 rounded-md right-0 lg:-right-10 shadow-xl border-[2px] border-white "
              src="/r5.jpg"
              alt="person"
              width={200}
              height={200}
            />
            <div className="absolute w-1/2 flexCenter bg-white px-6 py-4 -bottom-2 rounded-lg left-10 lg:right-10 shadow-xl border-[2px] border-white flex flex-col-reverse flex-wrap  gap-3">
              {" "}
              <span className="flex -space-x-2 overflow-hidden">
                {SKILLED_URL.map((url) => (
                  <Image
                    className="inline-block  h-10 w-10 rounded-full"
                    src={url}
                    key={url}
                    alt="person"
                    width={50}
                    height={80}
                  />
                ))}
              </span>
              <p className="bold-16 text-center lg:bold-20 ml-1 text-black">
                Skilled Team
              </p>
            </div>
          </div>
          <div className=" space-y-3 w-1/2 text-left">
            <div className="bg-blue-700 text-white px-2 py-2 text-center rounded-full lg:w-1/4">
              <p className="medium-16">ABOUT US</p>
            </div>
            <h1 className="capitalize bold-20 lg:max-w-[500px] font-paragraph my-8 lg:bold-40 ">
              Strategic partners in career growth
            </h1>
            <p className="regular-12 text-gray-30 my-2 lg:max-w-[500px] lg:regular-16">
              {" "}
              We help people navigate to thier dream career path or job with
              tailored strateges, pratical insights, and long-term vision
            </p>
            <div className="mt-10">
              {" "}
              <div className="mt-10">
                <h2 className=" capitalize bold-16 lg:bold-20">
                  Creative solutions
                </h2>
                <p className="regular-14 mt-2 lg:max-w-[500px] text-gray-30 lg:regular-16">
                  innovative thinking meets smart strategy to solve today's
                  toughest business challenges
                </p>
              </div>
            </div>
            <div>
              {" "}
              <div className="mt-6">
                <h2 className=" capitalize  bold-16 lg:bold-20">
                  Actionable Solutions
                </h2>
                <p className="regular-14 text-gray-30 mt-2 lg:max-w-[500px] lg:regular-16">
                  Real-world recommendations that offers the perfect space or
                  company for your carrer path
                </p>
              </div>
            </div>
            <div className=" border-4 border-x-transparent border-t-transparent border-b-blue-950 rounded-sm ">
              <h2 className=" capitalize bold-16  mt-4 lg:bold-20">
                Business Sucess
              </h2>
            </div>
            <div className="flex flex-col-reverse justify-start lg:flex-row mt-3 gap-4">
              <Button
                type="button"
                title="Explore Services"
                icon="/users1.svg"
                variant=" btn_blue1"
                onClick={scrollToServices}
              />
              <div className="flex flex-row items-center justify-center flexCenter gap-3 ml-4">
                <Image
                  className=" h-16 w-16 border-2 border-yellow-50  rounded-full"
                  src="/p4.jpg"
                  alt="person"
                  width={50}
                  height={80}
                />
                <div className="block text-left">
                  <h1 className="bold-16 lg:bold-20 text-black  capitalize">
                    lawal misah
                  </h1>
                  <p className="regular-16 lg:regular-20 font-paragraph  text-blue-700 ">
                    founder
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeInOnScroll>
    </section>
  );
};

export default About;
