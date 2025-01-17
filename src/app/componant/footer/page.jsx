import React from "react";
import Image from "next/image";
import footerImage from "./images/footer.svg"; // Adjust the path if necessary

const Footer = () => {
  return (
    <div className="relative bg-[#94CEEE] overflow-hidden">
      {/* Background Illustration */}
      <div className="w-full h-[400px] bg-white flex justify-end max-460:hidden">
        <Image
          src={footerImage}
          alt="Footer Illustration"
          className="absolute mt-40"
        />
      </div>

      {/* Footer Content */}
      <div className="container justify-start gap-[220px] mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row  items-start pt-10 pb-6 max-460:justify-center max-460:items-center max-460:gap-5">
        {/* Left Section */}
        <div className="max-w-md">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Ready To Work With Us?
          </h2>
          <p className="text-gray-600 mt-4">
            Iusto nulla repellendus mollitia vel molestias.
          </p>
          <form className="mt-6 flex items-center">
            <input
              type="email"
              placeholder="E-Mail"
              className="w-full max-w-sm px-4 py-2 rounded-l-lg border-2 border-blue-500 focus:outline-none"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-[#94CEEE] text-white font-medium rounded-r-lg hover:bg-blue-600 transition"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Middle Section (Links) */}
        <div className="flex flex-col mt-10 md:mt-0">
          <ul className="space-y-2 flex flex-col gap-2 text-white ">
            <li>
              <a
                href="/about"
                className=" hover:text-[#94CEEE] transition"
              >
                Buy
              </a>
            </li>
            <li>
              <a
                href="/services"
                className=" hover:text-[#94CEEE] transition"
              >
                Sell
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-[#94CEEE] transition"
              >
                Rent
              </a>
            </li>
            <li>
              <a
                href="/faq"
                className=" hover:text-[#94CEEE] transition"
              >
                Loans Home
              </a>
            </li>
            <li>
              <a
                href="/faq"
                className=" hover:text-[#94CEEE] transition"
              >
                Find an Agent
              </a>
            </li>
            <li>
              <a
                href="/faq"
                className=" hover:text-[#94CEEE] transition"
              >
                About us
              </a>
            </li>
            <li>
              <a
                href="/faq"
                className=" hover:text-[#94CEEE] transition"
              >
                Contact us
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section (Social Media and Address) */}
   
      </div>


    </div>
  );
};

export default Footer;
