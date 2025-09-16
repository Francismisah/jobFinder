'use client';
import FadeInOnScroll from "./FadeInOnScroll";

const Work = () => {
     const scrollToSuccess = () => {
    const successPage = document.getElementById("success");
    if (successPage) {
      successPage.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <FadeInOnScroll>
      <div id="portfolio" className="bg-gray-10 py-20 px-10 dark:bg-gray-900 ">
        <div className="container mx-auto text-center flexCenter flex-col ">
          <div className="bg-blue-700 text-white px-2 py-2 flexCenter text-center rounded-full w-1/4">
            <p className="medium-16"> HOW IT WORKS</p>
          </div>
          <h1 className="capitalize bold-20  font-paragraph my-8 lg:bold-40 ">
            A Clear Look At How We Guide You To Success
          </h1>

          <div className="grid grid-cols-1 gap-8 lg:gap-2   md:grid-cols-2 lg:grid-cols-4">
            <Card
              number="01"
              title="Strategic Growth"
              description="We develop tailored strategies that drive long-term business expansion and competitive advantage."
            />
            <Card
              number="02"
              title="Fuel Innovation"
              description="We help you embrace change and implement creative solutions to stay ahead in a fast-moving market."
            />
            <Card
              number="03"
              title="Financial Planning"
              description="Our experts provide data-driven financial strategies to optimize your resources and achieve your goals."
            />
            <Card
              number="04"
              title="Sustainable Success"
              description="We focus on building resilient systems that ensure lasting impact and measurable growth."
            />
          </div>
          <div className="mt-12 text-lg text-gray-700 dark:text-gray-300">
            Innovate boldly, adapt quickly, and lead with confidence.{" "}
          
            <button onClick={scrollToSuccess} className="font-bold text-green-500 hover:underline">
              Consult Now
            </button>
          </div>
        </div>
      </div>
    </FadeInOnScroll>
  );
};

interface CardProps {
  number: string;
  title: string;
  description: string;
}

const Card = ({ number, title, description }: CardProps) => {
  return (
    <div className="bg-none  px-8 py-12 shadow-md transition-shadow duration-300 hover:shadow-lg dark:bg-gray-800">
      <div className=" bold-32 text-gray-300 mb-2 dark:text-gray-600">
        {number}
      </div>
      <h3 className="bold-24 font-semibold text-gray-800 mb-2 dark:text-white">
        {title}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed dark:text-gray-400">
        {description}
      </p>
    </div>
  );
};

export default Work;
