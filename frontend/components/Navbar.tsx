"use client";
import React, { useCallback, useState } from "react";
import { NAV_LINKS, SOCIALS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import FadeInOnScroll from "./FadeInOnScroll";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  const handleScroll = useCallback(
    (href: string) => {
      const targetId = href.substring(1); // Remove the '#'
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
        // Optionally update the URL with the hash for better navigation
        router.push(href, { scroll: false });
      }
    },
    [router]
  );

  const [categoriesContent, setCategoriesContent] = useState(false);

  const handleCategorySelection = () => {
    setCategoriesContent(!categoriesContent);
  };

  return (
    <nav className="  bg-white py-4 fixed top-0 right-0 left-0 z-[1000] justify-between">
      <FadeInOnScroll>
        <div className=" pl-4 lg:flexCenter overflow-hidden hidden items-center gap-24 border-b-gray-20  border-b-[1px] ">
          <div className="flex flex-row">
            <div className="flexCenter gap-4">
              <Image
                src="/message.png"
                alt="menu"
                width={50}
                height={50}
                className="cursor-pointer "
              />
              <div className="gap-2">
                <p className="bold-16 text-blue-70">lawalmisah4@gmail.com</p>
              </div>
            </div>
            <div className="flexCenter mx-4 gap-2">
              <Image
                src="/map-pin.svg"
                alt="menu"
                width={50}
                height={50}
                className="h-5 w-5 cursor-pointer "
              />
              <div className="gap-2">
                <p className="bold-16 text-blue-70">Rivers State Nigeria</p>
              </div>
            </div>
          </div>
          <div className="px-4 py-4 gap-4 bg-blue-600 flexCenter">
            <p className="bold-16 text-white">PrivacyPolicy</p>
            <p className="bold-16 text-white">Faqs</p>
            <p className="bold-16 text-white">Contact</p>
            {SOCIALS.links.map((link) => (
              // ✨ Correct: Key is on the list item `li`
              <li key={link}>
                <Link href="/">
                  <Image src={link} alt="social icon" width={25} height={25} />
                </Link>
              </li>
            ))}
          </div>
        </div>
      </FadeInOnScroll>{" "}
      <FadeInOnScroll>
        <div className=" flexCenter overflow-hidden flexBetween px-2 flex items-center gap-24   py-1">
          <Link href="/" className="flex items-center justify-center ml-3">
            <Image src="/logo.png" alt="logo" width={90} height={60} />
          </Link>

          {/* Desktop navigation links */}
          <ul className="hidden h-full gap-12 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.key}>
                <button
                  onClick={() => handleScroll(link.href)}
                  className="regular-16 text-black flex-center cursor-pointer pb-1.5 transition-all hover:font-bold border-2 border-y-transparent border-x-transparent hover:border-b-blue-700"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Desktop action buttons/icons */}
          <div className="lg:flexCenter gap-3 hidden">
            <Link href="/">
              <Button type="button" title="Contact Now" variant="btn_green" />
            </Link>
            <div className="flexCenter gap-4">
              <Image
                src="/call.png"
                alt="menu"
                width={50}
                height={50}
                className="cursor-pointer rounded-full border-2 p-3 border-gray-500"
              />
              <div className="gap-2">
                <p className="bold-14 text-blue-70">PHONE:</p>
                <p className="bold-14 text-black">+234 704 019 2470</p>
              </div>
            </div>

            {/* Mobile menu toggle button */}
            <section
              className="flexCenter
 lg:hidden"
            >
              <button onClick={handleCategorySelection}>
                {categoriesContent ? (
                  <div>
                    <Button
                      type="button"
                      title=""
                      icon="/mesu.svg"
                      variant="btn_red"
                    />
                  </div>
                ) : (
                  <div>
                    <Button
                      type="button"
                      title=""
                      icon="/mesu.svg"
                      variant="btn_red"
                    />
                  </div>
                )}
              </button>
            </section>
          </div>
        </div>
        <div
          className="flexCenter
 lg:hidden"
        >
          {/* Mobile dropdown menu (conditionally rendered) */}
          {categoriesContent && (
            <ul className="absolute top-14 gap-12 left-0 right-0 ml-2 mb-2 padding-container justify-around py-12 md:hidden lg:hidden bg-white">
              {NAV_LINKS.map((link) => (
                <li key={link.key}>
                  <button
                    onClick={() => handleScroll(link.href)}
                    className="regular-14 text-black flexCenter flex flex-col cursor-pointer pb-1.5 transition-all hover:font-bold border-2 border-y-transparent border-x-transparent hover:border-b-blue-700"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </FadeInOnScroll>
    </nav>
  );
};

export default Navbar;
