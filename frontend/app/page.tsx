import About from "@/components/About";
import Blog from "@/components/Blog";
import Consultants from "@/components/Consultants";
import Faqs from "@/components/Faqs";
import Growth from "@/components/Growth";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Services from "@/components/Services";
import Strategy from "@/components/Strategy";
import SuccessStories from "@/components/SuccessStories";
import TestimonialSlider from "@/components/TestimonialSlider";
import Work from "@/components/Work";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Mission />
      <Growth />
      <Work />
      <SuccessStories />
      <Strategy />
      <Consultants />
      <Faqs />
      <TestimonialSlider />
      <Blog />
    </>
  );
}
