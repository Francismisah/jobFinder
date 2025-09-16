import Image from "next/image";
import FadeInOnScroll from "./FadeInOnScroll";
const SuccessStories = () => {
  return (
    <div className="bg-white  lg:relative pt-20 pb-48 px-10  ">
      <FadeInOnScroll>
        <div className="container mx-auto text-center flexCenter flex-col ">
          <div className="bg-blue-700 text-white px-2 py-2 flexCenter text-center rounded-full w-1/4">
            <p className="medium-16"> Case Study</p>
          </div>
          <h1 className="capitalize bold-20 w-1/2  font-paragraph my-8 lg:bold-40 ">
            success stories that speak for themselves
          </h1>
        </div>
      </FadeInOnScroll>

      <div className="lg:absolute lg:-bottom-52 lg:z-[100] ">
        <FadeInOnScroll>
          {" "}
          <div className="grid grid-cols-1 gap-8 lg:gap-2   md:grid-cols-2 lg:grid-cols-4">
 
          <Card
            backgroundImage="bg-bg-img-1"
            title="IT Solution"
            description="Tech strategies for business growth."
          />
          <Card
            backgroundImage="bg-bg-img-2"
            title="Business Consultation"
            description="Expert advice for confident decisions."
          />
          <Card
            backgroundImage="bg-pattern-2"
            title="Digital Agency"
            description="Creative digital growth"
          />
          <Card
            backgroundImage="bg-pattern-3"
            title="Cyber Security"
            description="strong data protection"
          /></div>
        </FadeInOnScroll>
      </div>
    </div>
  );
};

interface CardProps {
  backgroundImage: string;
  title: string;
  description: string;
}

const Card = ({ backgroundImage, title, description }: CardProps) => {
  return (
    <div
      className={`  ${backgroundImage} bg-cover bg-no-repeat bg-blend-multiply bg-opacity-50 bg-center
   rounded-md px-8 pt-40 pb-2 shadow-md transition-shadow duration-300 hover:shadow-lg dark:bg-gray-800 items-end justify-items-end align-bottom`}
    >
      <div className="bg-white text-left    mx-auto rounded-md px-6 py-8 bg-opacity-95 relative  ">
        <p className=" medium-14 my-4 lg:medium-16   text-gray-800 mb-2 ">
          {title}
        </p>
        <h3 className="text-black   bold-18 lg:bold-24 ">{description}</h3>
        <div className=" bg-gray-900 right-6 -top-8 absolute p-4 rounded-full ">
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

export default SuccessStories;
