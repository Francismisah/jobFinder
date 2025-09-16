"use client";
import React, { useState } from "react";
import FadeInOnScroll from "./FadeInOnScroll";

// Define the type for a single testimonial object
interface TestimonialData {
  quote: string;
  author: string;
  title: string;
  stars: number;
  avatar: string;
}

// Dummy data for the slider. Add more objects to expand the slider.
const testimonials: TestimonialData[] = [
  {
    quote:
      "Business Wire helped us refine our strategy and improve operations across the board. Their insights were practical, timely, and made a real difference in our growth and decision-making.",
    author: "Jacob Jones",
    title: "Business Owner",
    stars: 5,
    avatar:
      "https://images.unsplash.com/photo-1519085360753-af0f107a462e?q=80&w=1770&auto=format&fit=crop",
  },
  {
    quote:
      "The team at Business Wire exceeded our expectations. Their professional approach and deep industry knowledge were invaluable in helping us achieve our goals.",
    author: "Maria Sanchez",
    title: "Marketing Director",
    stars: 4,
    avatar:
      "https://images.unsplash.com/photo-1534528736940-bf7f65a1219b?q=80&w=1770&auto=format&fit=crop",
  },
  {
    quote:
      "We've seen a significant increase in our productivity since we started working with Business Wire. I highly recommend their services to any business looking to grow.",
    author: "John Doe",
    title: "Project Manager",
    stars: 5,
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1770&auto=format&fit=crop",
  },
];

const TestimonialSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <FadeInOnScroll>
    <div className="relative flex  flexCenter   md:items-start flex-col items-center justify-center p-8 bg-white rounded-lg shadow-lg md:flex-row md:space-x-12 padding-container lg:py-24 lg:px-10">
      {/* Background swirl pattern */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-gray-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 left-0 w-48 h-48 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>

      {/* Avatar and Quote Icon */}
      <div className="relative flex-shrink-0">
        <img
          src={currentTestimonial.avatar}
          alt={`Avatar of ${currentTestimonial.author}`}
          className="w-32 h-32 rounded-full object-cover shadow-md"
        />
        <span className="absolute top-0 right-0 -mt-2 -mr-2 p-2 bg-green-500 rounded-full text-white shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M9.99 15.68c-1.46-1.58-2.67-3.41-3.66-5.46-.86-1.84-1.29-3.79-1.29-5.83h2.99c.01.81.11 1.63.3 2.44.19.81.47 1.6.84 2.36.37.76.84 1.48 1.42 2.15l1.62 1.99L9.99 15.68zM18.99 15.68c-1.46-1.58-2.67-3.41-3.66-5.46-.86-1.84-1.29-3.79-1.29-5.83h2.99c.01.81.11 1.63.3 2.44.19.81.47 1.6.84 2.36.37.76.84 1.48 1.42 2.15l1.62 1.99L18.99 15.68z" />
          </svg>
        </span>
        {/* Star Rating */}
      </div>

      {/* Text content */}
      <div className="mt-6 md:mt-0 flex-1 flexCenter flex-col  text-center md:text-left">
        <p className="text-gray-700 text-lg w-[200px] lg:w-full lg:bold-24 italic pb-4 shadow-b-md  border-l-none border-t-none border-b-gray-20  border-b-[1px]  leading-relaxed">
          {currentTestimonial.quote}
        </p>
        <div className="mt-4 flex flex-row flexStart">
          <h3 className="text-lg font-semibold text-gray-900">
            {currentTestimonial.author} /
          </h3>
          <p className="text-sm text-gray-500"> {currentTestimonial.title}</p>
        </div>
        <div className="flex space-x-1 flexStart  rounded-full  mt-2 text-yellow-400">
          {Array.from({ length: 5 }, (_, i) => (
            <svg
              key={i}
              className={`h-5 w-5 ${
                i < currentTestimonial.stars
                  ? "text-yellow-400"
                  : "text-gray-300"
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.381-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      </div>

      {/* Star Rating and Navigation Arrows */}
      <div className="mt-6 md:mt-0 md:self-end flex flex-col items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
        {/* Navigation Arrows */}
        <div className="flex space-x-2">
          <button
            onClick={handlePrev}
            className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div></FadeInOnScroll>
  );
};

export default TestimonialSlider;
