"use client";
import Image from "next/image";
import Button from "./Button";
import { PEOPLE_URL } from "@/constants";
import { useState, useRef, useEffect, useCallback } from "react"; // Import useCallback

interface Slide {
  id: number;
  src: string;
  alt: string;
}

const Hero = () => {
  const slides: Slide[] = [
    {
      id: 1,
      src: "/s3.png",
      alt: "gadgets1",
    },
    {
      id: 2,
      src: "/s1.png",
      alt: "gadgets2",
    },
    {
      id: 3,
      src: "/s2.png",
      alt: "gadgets3",
    },
    {
      id: 4,
      src: "/s6.png",
      alt: "gadgets4",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const slideIntervalRef = useRef<number | null>(null);
  const slideDuration: number = 10000;

  // Function to show a specific slide
  const showSlide = useCallback(
    (index: number): void => {
      setCurrentSlide((index + slides.length) % slides.length);
    },
    [slides.length]
  );

  // Function to advance to the next slide
  const nextSlide = useCallback((): void => {
    showSlide(currentSlide + 1);
  }, [currentSlide, showSlide]);

  // Function to stop the automatic slide show
  const stopAutoSlide = useCallback((): void => {
    if (slideIntervalRef.current !== null) {
      clearInterval(slideIntervalRef.current);
      slideIntervalRef.current = null;
    }
  }, []); // No dependencies, as it only interacts with the ref

  // Function to start the automatic slide show
  const startAutoSlide = useCallback((): void => {
    stopAutoSlide(); // Stop any existing timer first
    slideIntervalRef.current = window.setInterval(nextSlide, slideDuration);
  }, [nextSlide, stopAutoSlide, slideDuration]); // All used dependencies are here

  // useEffect to handle the initial start of the auto-slide and cleanup on unmount
  useEffect(() => {
    startAutoSlide();

    return () => {
      stopAutoSlide(); // Cleanup: clear the interval when the component unmounts
    };
  }, [startAutoSlide, stopAutoSlide]); // Dependencies ensure this effect re-runs if these functions change

  // useEffect to handle restarting auto-slide when currentSlide changes due to manual interaction
  useEffect(() => {
    // Stop any existing timer to avoid multiple timers running
    stopAutoSlide();

    // Small delay before restarting auto-slide, allowing manual interaction to complete
    const timer = setTimeout(() => {
      startAutoSlide();
    }, 500);

    // Cleanup: clear the timeout if the component unmounts or dependencies change before it fires
    return () => clearTimeout(timer);
  }, [currentSlide, startAutoSlide, stopAutoSlide]); // Dependencies ensure this effect re-runs when currentSlide changes

  return (
    <section
      className="relative  flex items-center justify-center overflow-hidden
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

      <div
        className="relative z-10 rounded-b-lg lg:rounded-5xl padding-container
                   flex-col-reverse md:flex-col flex gap-20 py-12 pb-32
                   md:gap-28 lg:py-36 max-container xl:flex-row justify-around w-full h-full"
      >
        <div className=" flex flex-1 flex-col mt-12 xl:w-1/2">
          <h1 className="bold-45 lg:bold-62 text-red-400">
            Experience Gadgets
          </h1>
          <h1 className="bold-45 lg:bold-64 text-white">
            That Works Efficiently!
          </h1>

          <div className="my-11 flex flex-wrap gap-5">
            <span className="flex -space-x-2 overflow-hidden">
              {PEOPLE_URL.map((url) => (
                <Image
                  className="inline-block h-10 w-10 rounded-full"
                  src={url}
                  key={url}
                  alt="person"
                  width={200}
                  height={200}
                />
              ))}
            </span>
            <p className="bold-16 lg:bold-20 text-red-500">
              200k
              <span className="regular-16 lg:regular-20 ml-1 ">
                People Patronized
              </span>
            </p>
          </div>
          <div className="flex flex-col w-full gap-3 sm:flex-row">
            <Button
              type="button"
              title="Shop Now"
              icon="/red.svg"
              variant="btn_red"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
