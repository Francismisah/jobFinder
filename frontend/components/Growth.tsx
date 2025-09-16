'use client';
import Button from "./Button";
import FadeInOnScroll from "./FadeInOnScroll";

const Growth = () => {
     const scrollToWork = () => {
    const accomadationPage = document.getElementById("portfolio");
    if (accomadationPage) {
      accomadationPage.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <div id="growth" className="padding-container flex flex-col lg:flex-row gap-16 lg:gap-44 items-center py-10 px-6 lg:py-36 bg-bg-img-1 lg:px-10 mt-8 bg-cover bg-no-repeat bg-blend-multiply bg-bottom bg-opacity-50 bg-blue-70">
  <FadeInOnScroll>  
      <div className=" ml-4 space-y-1  text-center lg:text-left">
        <div className="bg-blue-700 text-white px-2 py-2 text-center my-9 lg:my-2 rounded-full lg:w-1/4">
          <p className="medium-16">ABOUT US</p>
        </div>
        <h1 className="capitalize text-white bold-32  font-paragraph my-8 lg:bold-62 ">
          Strategic partners in
        </h1>
        <h1 className="capitalize text-white bold-32  font-paragraph my-8 lg:bold-62 ">
          career growth
        </h1>
      </div></FadeInOnScroll>
      <FadeInOnScroll>  
      <div className=" justify-end">
        <Button type="button" title="Discover More" variant=" btn_green1  " onClick={scrollToWork} />
      </div></FadeInOnScroll>
    </div>
  );
};

export default Growth;
