"use client";
import Image from "next/image";
import Button from "./Button";
import FadeInOnScroll from "./FadeInOnScroll";
import { useEffect, useState } from "react";
import Link from "next/link";
import Services from "./Services";

const Hero = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [description, setDescription] = useState("");
  const [termsChecked, setTermsChecked] = useState(false);
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(true);

  const scrollToAbout = () => {
    const accomadationPage = document.getElementById("about");
    if (accomadationPage) {
      accomadationPage.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // New states for API consumption
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Function to validate the phone number format
  const validatePhoneNumber = (number: string) => {
    // Regex for a general international phone number format
    const phoneRegex = /^\+?[0-9\s-()]{7,25}$/;
    return phoneRegex.test(number);
  };
  useEffect(() => {
    // Check if all fields are non-empty and terms are checked
    const isValid =
      email.trim() !== "" &&
      name.trim() !== "" &&
      phoneNumber.trim() !== "" &&
      companyName.trim() !== "" &&
      description.trim() !== "" &&
      termsChecked &&
      isPhoneNumberValid; // Also check if phone number is valid
    setIsFormValid(isValid);
  }, [
    email,
    name,
    phoneNumber,
    companyName,
    description,
    termsChecked,
    isPhoneNumberValid,
  ]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Only submit if the form and phone number are valid
    if (!isFormValid) return;

    setIsLoading(true);
    setError(null);
  };
  return (
    <section
      id="home"
      className="relative flex items-center justify-center overflow-hidden
        padding-container mb-12"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/offices.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black opacity-50 z-5"></div>

      <div
        className="relative z-10 rounded-b-lg lg:rounded-5xl 
          flex-col md:flex-col flex gap-20 lg:pt-44 py-12 pb-32
          md:gap-28 lg:py-36 max-container  xl:flex-row justify-between w-full"
      >
        <div className="flex flex-1  mt-28 xl:w-2/3">
          <FadeInOnScroll>
            {" "}
            <p className="regular-12  lg:regular-18 my-2 flexCenter gap-1  justify-start text-left items-start  text-white uppercase">
              <span className="border-b-2 lg:px-12  px-4  border-white" />
              <span>empowering businesses to grow smarter</span>
            </p>
            <h1 className="bold-24 lg:bold-45 my-2 text-blue-900 uppercase">
              Where Great Websites and
            </h1>
            <h1 className="bold-24 lg:bold-45 my-2 text-blue-400 uppercase">
              Great Partnerships Begin
            </h1>
            <h1 className="bold-24 lg:bold-45 my-2 text-blue-100 uppercase">
              for lasting impact.
            </h1>
            <p className="regular-14 lg:regular-16  mt-5  mb-10  text-left lg:max-w-[400px]  text-white ">
              We connect businesses with vetted web developers to build, scale,
              and launch with confidence. Eliminate the guesswork of hiring. Get
              a dedicated developer perfectly suited for your project&apos;s
              success.
            </p>
            <div className="mt-4">
              <Button
                type="button"
                title="Get Started"
                icon="/users1.svg"
                variant="btn_red"
                onClick={scrollToAbout}
              />
            </div>
          </FadeInOnScroll>
        </div>
        <div className="lg:absolute lg:w-1/2 py-3 px-4  lg:-right-16  bg-white flexCenter flex-col">
          <FadeInOnScroll>
            <div className="flex flex-col flex-1 ">
              <h1 className="bold-26  tracking-widest my-4 text-left leading-relaxed text-blue-70">
                Book a Web Developer
              </h1>
              <p className="regular-14 lg:regular-16 text-gray-50 mb-2 text-left max-w-[400px]">
                fill out the form below, and we&apos;ll arrange a web developer
                that is suitable for you.
              </p>
              {error && (
                <div
                  className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4"
                  role="alert"
                >
                  <span className="block sm:inline">Error: {error}</span>
                </div>
              )}

              {isSubmitted ? (
                <div
                  className="bg-blue-100 border border-green-400 text-blue-700 px-4 py-3 rounded relative"
                  role="alert"
                >
                  <span className="block sm:inline">
                    Thank you! Your web developer has been arranged.
                  </span>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className=" py-8 flex flex-col flex-1   justify-start space-y-2"
                >
                  <div className="flex lg:flexCenter  flex-col lg:flex-row gap-6 mb-2">
                    {/* Name Input */}
                    <div>
                      <input
                        type="text"
                        placeholder="Full Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full font-cormorant italic border border-gray-300 rounded-xl py-4 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    {/*company Name Input */}
                    <div>
                      <input
                        type="text"
                        placeholder="Company Name"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        className="w-full font-cormorant italic border border-gray-300 rounded-xl py-4 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                  </div>
                  <div className="flex lg:flexCenter flex-col lg:flex-row my-4 gap-2">
                    {/* Email Input */}
                    <div className="relative">
                      <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full font-cormorant italic border border-gray-300 rounded-xl py-4 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                      <Image
                        src="/mail.svg"
                        width={20}
                        height={20}
                        alt="mail icon"
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                      />
                    </div>
                    {/* Phone Number Input */}
                    <div>
                      <input
                        type="text"
                        placeholder="Phone Number (e.g. +1234567890)"
                        value={phoneNumber}
                        onChange={(e) => {
                          setPhoneNumber(e.target.value);
                          setIsPhoneNumberValid(
                            validatePhoneNumber(e.target.value)
                          );
                        }}
                        className={`w-full border font-cormorant italic rounded-xl py-4 px-4 focus:outline-none focus:ring-2 ${
                          isPhoneNumberValid
                            ? "border-gray-300 focus:ring-blue-500"
                            : "border-red-500 focus:ring-red-500"
                        }`}
                        required
                      />
                      {!isPhoneNumberValid && (
                        <p className="text-red-500 text-sm mt-1 text-left">
                          Please enter a valid phone number.
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="mb-6">
                    <textarea
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      rows={4}
                      className="shadow-sm appearance-none border border-gray-300 rounded-md w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200 ease-in-out"
                      placeholder="Tell us about your company"
                    ></textarea>
                  </div>
                  {/* Terms and Conditions Checkbox */}
                  <div className="flex justify-between items-center text-sm">
                    <label className="flex items-center text-gray-700">
                      <input
                        type="checkbox"
                        className="mr-1 accent-blue-500 rounded"
                        checked={termsChecked}
                        onChange={(e) => setTermsChecked(e.target.checked)}
                        required
                      />
                      <Link href="#" className=" text-black">
                        I agree to the{" "}
                        <span className="text-yellow-50 ml-1 font-bold hover:underline">
                          {" "}
                          Terms and Conditions
                        </span>
                      </Link>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={!isFormValid || isLoading}
                    className={`w-full text-white font-semibold py-4 rounded-xl transition-colors ${
                      isFormValid && !isLoading
                        ? "bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }`}
                  >
                    {isLoading ? "Submitting..." : "Submit"}
                  </button>
                </form>
              )}
            </div>{" "}
          </FadeInOnScroll>
        </div>
      </div>
    </section>
  );
};

export default Hero;
