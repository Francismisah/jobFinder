"use client";
import React, { useRef, useEffect, useState, ReactNode } from "react";

// Define the props for the component, including children
type FadeInOnScrollProps = {
  children: ReactNode;
};

// This component uses an IntersectionObserver to detect when an element is in view
const FadeInOnScroll = ({ children }: FadeInOnScrollProps) => {
  // A ref is used to reference the DOM element we want to observe
  const domRef = useRef<HTMLDivElement>(null);
  // State to track if the element is visible in the viewport
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    // Check if the domRef exists before creating the observer
    const currentRef = domRef.current;
    if (!currentRef) return;

    // Create a new IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        // Loop through the entries
        entries.forEach((entry) => {
          // If the element is intersecting (in the viewport), set isVisible to true
          if (entry.isIntersecting) {
            setVisible(true);
            // Stop observing once it has been seen to prevent re-triggering
            observer.unobserve(entry.target);
          }
        });
      },
      {
        // Configure the observer to trigger when 10% of the element is visible
        threshold: 0.1,
      }
    );

    // Start observing the element
    observer.observe(currentRef);

    // Cleanup function to stop observing when the component unmounts
    return () => {
      observer.unobserve(currentRef);
    };
  }, []);

  return (
    // The div uses a dynamic class to apply the fade-in effect
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-in-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      }`}
    >
      {children}
    </div>
  );
};

export default FadeInOnScroll;
