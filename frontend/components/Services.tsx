"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import FadeInOnScroll from "./FadeInOnScroll";

interface CampProps {
  icon: string;
  fig: string;
  title: string;
  subtitle: string;
  img: string;
}
const CampSite = ({ icon, img, title, fig, subtitle }: CampProps) => {
  return (
    <div className="lg:bg-blue-950 relative min-w-[800px]  flexCenter flex-row lg:flex-row ">
      <div className="w-1/2 absolute left-56 lg:left-0 lg:z-0 lg:relative  z-[1000] lg:pl-10 pl-2  lg:bg-none text-left content-start items-start justify-start ">
        <div className="w-20 flexCenter p-4 rounded-full bg-white">
          <Image src={icon} height={80} width={80} alt="" />
        </div>
        <div className=" align-bottom space-y-2 mt-60">
          <p className="bold-16 lg:bold-18 text-blue-200">{fig}</p>
          <h2 className="bold-14 lg:bold-24 text-white">{title}</h2>
          <p className="max-w-[300px] regular-14 lg:regular-16 text-white">
            {subtitle}
          </p>
        </div>
      </div>
      <div className="w-1/2 relative">
        <Image src={img} height={800} width={800} alt="" />
      </div>

      <div className="">
        <Image
          src="/s-icon.svg"
          height={35}
          width={35}
          alt=""
          className="hidden bg-gray-900 w-20   lg:absolute py-4 px-2 rounded-full "
        />
      </div>
    </div>
  );
};
const Services = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const maxScroll = container.scrollWidth - container.clientWidth;
        const newPosition = (scrollPosition + 1) % (maxScroll + 1);

        container.scrollTo({
          left: newPosition,
          behavior: "smooth",
        });

        setScrollPosition(newPosition);

        // Optional: Reset scroll position when it reaches the end
        if (newPosition === 0 && container.scrollLeft > 0) {
          container.scrollLeft = 0;
          setScrollPosition(0);
        }
      }
    }, 30); // Adjust interval time for scroll speed

    return () => clearInterval(scrollInterval);
  }, [scrollPosition]);
  return (
    <section id='services' 
      className=" 2xl:max-container bg-pattern bg-cover bg-no-repeat bg-opacity-50 bg-black bg-blend-multiply relative
   flex flex-col-reverse  py-10 lg:mb-10 lg:p-20 mx-auto
   xl:mb-20"
    >
      <FadeInOnScroll>
        <div
          ref={scrollContainerRef}
          className="hide-scrollbar flex h-[340px] w-full items-start justify-start lg:gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]"
        >
          <CampSite
            icon="/si2.png"
            fig="03"
            title="Financial Consulting"
            subtitle="Get expert guidance to optimize your financial strategies, improve cash flow, and maximize profitability."
            img="/s1.jpg"
          />
          <CampSite
            icon="/si3.png"
            fig="02"
            title="Branding Consulting"
            subtitle="Craft a powerful brand identity that resonates with your audience and sets you apart from the competition."
            img="/s1.jpg"
          />
          <CampSite
            icon="/si1.png"
            fig="01"
            title="Marketing plan"
            subtitle="Craft a powerful brand identity that resonates with your audience and sets you apart from the competition."
            img="/s1.jpg"
          />
        </div>
      </FadeInOnScroll>
      <FadeInOnScroll>
        <div className=" flex-col lg:flex-row flexCenter gap-4 ml-10  ">
          <div className="py-4 text-left">
            <h2
              className="uppercase bold-16
             lg:bold-18 lg:border-l-red-20 text-white"
            >
              our services
            </h2>
            <h1 className=" bold-28 lg:bold-60 text-white ">
              Comprehensive Financial Solutions.
            </h1>
          </div>{" "}
          <div className="flexEnd mt-10 ">
            <div
              className="bg-blue-500 p-8 lg:-mb-40 lg:mr-6  lg:max-w-[500px] xl:max-w-[734px]
      xl:rounded-5xl xl:px-16 xl:py-20 relative w-full
      overflow-hidden rounded-3xl "
            >
              <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
                <strong>Feeling Unsure</strong> About trusting Us
              </h2>
              <p className="regular-14 xl:regular-16 mt-5 text-white">
                Starting from the anxiety of the new date when visiting a new
                firm, the possibility of getting the wrong service is very
                large. That&apos;s why we are here for those of you who want to have
                great service and Consultation.
              </p>
            </div>
          </div>
        </div>
      </FadeInOnScroll>
    </section>
  );
};

export default Services;
