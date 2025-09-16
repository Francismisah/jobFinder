import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faPinterestP,
} from "@fortawesome/free-brands-svg-icons";
import FadeInOnScroll from "./FadeInOnScroll";

const Footer = () => {
  return (
     <FadeInOnScroll>
    <footer className="bg-[#011f41] text-gray-200">
      <div className="flex flex-col lg:flex-row">
        {/* Main Content Area */}
        <div className="flex-1 py-16 px-12 md:px-24">
          {/* Top Section */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 border-b border-gray-600 pb-8">
            <div className="flex items-center space-x-4">
              <div className="bg-[#032666] rounded-full p-3">
                <FontAwesomeIcon icon={faPhone} className="text-[#5b90a9] " />
              </div>
              <div>
                <p className="text-sm text-gray-400">Call Us:</p>
                <p className="text-lg">+234 0704 019 2470</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-[#032666] rounded-full p-3">
                <FontAwesomeIcon icon={faEnvelope} className="text-[#84A95B] " />
              </div>
              <div>
                <p className="text-sm text-gray-400">Email Us:</p>
                <p className="text-lg">lawalmisah4@gmail.com</p>
              </div>
            </div>
          </div>
          {/* Middle Section - Links and Newsletter */}
          <div className="flex flex-col lg:flex-row justify-between gap-4 mb-12">
            <div>
              <h4 className="text-xl font-semibold mb-6">Services</h4>
              <ul className="space-y-3 text-sm">
                <li>Digital Marketing</li>
                <li>Innovation Space</li>
                <li>Competitive Analysis</li>
                <li>Market Research</li>
                <li>HR Management</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-6">Pages</h4>
              <ul className="space-y-3 text-sm">
                <li>Our Blog</li>
                <li>Success Stories</li>
                <li>Customers Review</li>
                <li>Contact Us</li>
                <li>About Us</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-6">
                Subscribe Newsletter
              </h4>
              <form className="flex flex-col space-y-4">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="bg-white p-3 rounded-md text-gray-900"
                />
                <button
                  type="submit"
                  className="bg-[#84A95B] text-gray-900 p-3 rounded-md gap-12 font-semibold flex items-center justify-center space-x-2"
                >
                  <span>Subscribe</span>
                  <FontAwesomeIcon icon={faArrowRight} className="w-8 h-8" />
                </button>
              </form>
              <div className="flex space-x-4 mt-6">
                <div className="bg-[#385968] rounded-full p-2 w-8 h-8 flex items-center justify-center">
                  <FontAwesomeIcon icon={faFacebookF} />
                </div>
                <div className="bg-[#385968] rounded-full p-2 w-8 h-8 flex items-center justify-center">
                  <FontAwesomeIcon icon={faTwitter} />
                </div>
                <div className="bg-[#385968] rounded-full p-2 w-8 h-8 flex items-center justify-center">
                  <FontAwesomeIcon icon={faInstagram} />
                </div>
                <div className="bg-[#385968] rounded-full p-2 w-8 h-8 flex items-center justify-center">
                  <FontAwesomeIcon icon={faPinterestP} />
                </div>
              </div>
            </div>
          </div>
          {/* Bottom Section - Copyright */}
          <div className="border-t border-gray-600 pt-8 text-sm text-gray-400">
            <p>
              © Copyright 2025, All Right - Designed by{" "}
              <span className="text-[#84A95B]">Lawal Misah</span>
            </p>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="bg-[#a6f1f7] text-[#1C3A33] py-10  lg:w-1/4 flex-shrink-0 flex flex-col items-center justify-center relative">
          <div className="absolute top-0 right-0 w-14 lg:w-24  h-14 lg:h-24 bg-[#72b1e6] rounded-bl-full"></div>
          <div className="absolute bottom-0 left-0 w-14 h-14 lg:w-24 bg-[#7ccaf7] rounded-tr-full"></div>

          <h3 className="text-2xl font-bold mb-8  text-center px-4">
            Have a Project in your Mind?
          </h3>
          <div className="bg-[#013e41] rounded-full w-48 h-48 flex items-center justify-center text-white p-4">
            <div className="text-center">
              <span className="block text-lg font-semibold">Contact Us</span>
              <FontAwesomeIcon icon={faArrowRight} className="mt-2 " />
            </div>
          </div>
          <p className="mt-8 text-center text-sm font-medium">
            09:00 AM - 10:30 PM
          </p>
          <p className="text-center text-sm">Monday - Sunday</p>
        </div>
      </div>
    </footer></FadeInOnScroll>
  );
};

export default Footer;
