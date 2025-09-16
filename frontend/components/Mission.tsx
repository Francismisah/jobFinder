"use client";
import Image from "next/image";
import { useState } from "react";
import Button from "./Button";
import FadeInOnScroll from "./FadeInOnScroll";

interface ItemData {
  id: number;
  img: string;
  name: string;
  description: string;
}

const Mission = () => {
  const items: ItemData[] = [
    {
      id: 1,
      img: "/s2.jpg",
      name: "Our vision",
      description:
        "at business wire, our vision is to empower individuals and businesses to achieve financial clarity and success through tailored consulting and innovative solutions. we are dedicated to delivering strategic guidance, fostering trust, and driving sustainable growth with integrity and expertise.",
    },
    {
      id: 2,
      img: "/s3.jpg",
      name: "Our Mission",
      description:
        "at business wire, our mission is to empower individuals and businesses to achieve financial clarity and success through tailored consulting and innovative solutions. we are dedicated to delivering strategic guidance, fostering trust, and driving sustainable growth with integrity and expertise.",
    },
  ];

    const scrollToGrowth = () => {
    const accomadationPage = document.getElementById("growth");
    if (accomadationPage) {
      accomadationPage.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const [selectedItem, setSelectedItem] = useState<ItemData >(items[0]);
  const handleItemClick = (item: ItemData) => {
    setSelectedItem(item);
  };
 
  return (
    <section id="mission" className=" flexCenter flexBetween padding-container gap-10 lg:gap-32 flex flex-col lg:flex-row   text-center  py-4 pb-32  ">
   <FadeInOnScroll>
      <div className=" flex flex-col space-y-2  max-container  justify-start items-start text-left ">
        <div className="py-4 text-left ">
          <div className="bg-blue-700 text-white px-1 py-2 text-center w-40 rounded-full lg:w-1/2">
            <p className="medium-16"> MISSION & VISION</p>
          </div>
          <h1 className=" medium-32 capitalize w-10/12  lg:medium-45 text-black ">
            our vision for lasting success
          </h1>
        </div>

        <ul className="text-left  -space-x-2  flex flex-row justify-start items-start ">
          {items.map((item) => (
            <li
              key={item.id}
              onClick={() => handleItemClick(item)}
              style={{ cursor: "pointer" }}
              className="regular-20 px-12 text-gray-20 flex-center cursor-pointer pb-1.5 transition-all hover:font-bold border-2 border-t-transparent border-b-gray-30 border-x-transparent hover:border-b-blue-70 hover:text-blue-70"
            >
              {item.name}
            </li>
          ))}
        </ul>
        {/* right side */}
        <div className="  max-container ">
          {selectedItem && (
            <div
              className="flex flexCenter flex-col lg:flex-row  "
              style={{ padding: "15px" }}
            >
              <div className="  text-left  capitalize space-y-2 justify-start items-start">
                <p className="regular-14 max-w-[500px] lg:regular-18 text-gray-400">
                  {selectedItem.description}
                </p>
                <div className="flexCenter  space-x-3 my-4 gap-6">
                  <ul className="space-y-2 text-left my-4">
                    <li className="list-disc capitalize medium-15 lg:medium-18 ">
                      optimized sprint planning
                    </li>
                    <li className="list-disc capitalize medium-15 lg:medium-18 ">
                      continuous improvement
                    </li>
                  </ul>
                  <ul className="space-y-2 text-left  my-4">
                    <li className="list-disc capitalize medium-15 lg:medium-18 ">
                      incremental delivery approach
                    </li>
                    <li className="list-disc capitalize medium-15 lg:medium-18 ">
                      delivering innovative
                    </li>
                  </ul>
                </div>
                <Button
                  type="button"
                  title="Discover More"
                  variant="btn_green1"
                  onClick={scrollToGrowth}
                />
              </div>
            </div>
          )}
        </div>
      </div> </FadeInOnScroll>{" "}
      <FadeInOnScroll> {selectedItem && (
        <div
          className="
         mt-2 relative  shadow-2xl"
        >
          <Image
            className="rounded-md   "
            src={selectedItem.img}
            alt="person"
            width={500}
            height={500}
          />

          <div className="w-2/3 absolute -bottom-10 lg:gap-10 gap-4  left-0 lg:-left-28 space-y-3 lg:-right-10 justify-start items-start   px-8 py-8 bg-blue-70 shadow-xl rounded-md flex flex-col flex-wrap  ">
            <div className="flex flexCenter gap-10">
              <Image
                className="rounded-full bg-none border-4 border-r-white  border-b-white  border-l-blue-700 p-4 "
                src="/s-icon.svg"
                alt="person"
                width={80}
                height={80}
              />
              <div className="text-left flex flex-col text-white ">
                <p className="bold-16 lg:bold-24">75%</p>
                <p className="regular-14 lg:medium-15">Project Done</p>
              </div>
            </div>
            <div className="flex flexCenter gap-8">
              <Image
                className="rounded-full bg-none border-4 border-b-white  border-t-blue-700 p-4  "
                src="/s-icon.svg"
                alt="person"
                width={80}
                height={80}
              />
              <div className="text-left  flex flex-col text-white ">
                <p className="bold-16 lg:bold-24">80%</p>
                <p className="regular-14 lg:medium-15">Complete Project</p>
              </div>
            </div>
          </div>
        </div>
      )}</FadeInOnScroll>
    </section>
  );
};

export default Mission;
