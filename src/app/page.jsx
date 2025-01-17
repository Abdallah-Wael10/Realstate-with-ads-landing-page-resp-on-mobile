"use client"
import Image from "next/image";
import Spinner from "./componant/Spinner/page";
import Card from "./componant/card/page";
import Nav from "./componant/nav/page";
import back from "./homeimages/baa.jpg"
import bedo from "./homeimages/bedo.jpg"
import location from "./homeimages/location.svg"
import building from "./homeimages/building.svg"
import money from "./homeimages/money.svg"
import bed from "./homeimages/bed.svg"
import bath from "./homeimages/bath.svg"
import seaa from "./homeimages/seaa.svg"
import s3 from "./homeimages/s3.jpg"
import Footer from "./componant/footer/page";
import Ads from "./componant/ads/page";
import React, { useState, useEffect } from 'react';

export default function Home() {
  const [showAds, setShowAds] = useState(false);


  useEffect(() => {
    const interval = setInterval(() => {
      setShowAds(true); // Show the ad every 10 seconds if it's not already visible
    }, 10000);

    return () => clearInterval(interval); // Cleanup interval
  }, []);

  const handleClose = () => {
    setShowAds(false); // Hide the ad manually
  };

  const agents = [
    {
      id: 1,
      name: 'Alicia Ratke',
      rating: 5.0,
      sold: 453,
      avatar: bedo, // Add the actual image path
    },
    {
      id: 2,
      name: 'Sara Adam',
      rating: 4.9,
      sold: 453,
      avatar: bedo, // Add the actual image path
    },
    {
      id: 3,
      name: 'Joe Wael',
      rating: 4.7,
      sold: 453,
      avatar: bedo, // Add the actual image path
    },
    {
      id: 4,
      name: 'Lesa Ratke',
      rating: 5.0,
      sold: 453,
      avatar: bedo, // Add the actual image path
    },
  ];
  return (
    <div className="bg-white">
      <Nav/>
      <main className="w-full h-[600px] flex bg-white max-460:flex-col max-460:justify-center max-460:items-center">
            <div className="w-[70%] h-[600px]  animate-slide-in flex justify-center items-center max-460:hidden"> <Image src={back} alt="icon" className=" rounded-xl max-460:hidden"/></div>
            <div className="w-[30%] h-[600px]  flex justify-center items-center">
            <div className="max-w-sm mx-auto bg-white border border-gray-200 rounded-2xl shadow-lg">
      <div className="p-6 text-center animate-slide-in2">
        {/* Location Header */}
        <h3 className="text-lg font-semibold text-gray-800">
          sandy springs, GA
        </h3>

        {/* Beds, Bath, and Area Info */}
        <div className="flex justify-between mt-4">
          <div className="w-[23%] h-[71px] border-[1px] rounded-[10px] border-black/15 flex flex-col justify-center items-center">
            <span className="text-xl font-bold text-blue-900">4</span>
            <p className="text-sm text-gray-500">beds</p>
          </div>
          <div className="w-[23%] h-[71px] border-[1px] rounded-[10px] border-black/15 flex flex-col justify-center items-center">
            <span className="text-xl font-bold text-blue-900">2</span>
            <p className="text-sm text-gray-500">bath</p>
          </div>
          <div className="w-[23%] h-[71px] border-[1px] rounded-[10px] border-black/15 flex flex-col justify-center items-center">
            <span className="text-xl font-bold text-blue-900">1,786</span>
            <p className="text-sm text-gray-500">sqft</p>
          </div>
        </div>

        {/* Price and Instalment Button */}
        <div className="mt-6 flex justify-center items-center gap-[30px] w-full h-[30px] text-[20px]">
          <h2 className="text-2xl font-bold text-gray-800">$1,800,000</h2>
          <button className="px-4 py-2 mt-2 text-sm font-medium text-white bg-blue-400 rounded-lg hover:bg-blue-500">
            instalment options
          </button>
        </div>
      </div>

      {/* Agent Info */}
      <div className="p-4 mt-4 bg-blue-50 rounded-xl animate-slide-in">
        <div className="flex items-center gap-4">
          {/* Agent Image */}
          <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-300">
            {/* Placeholder for agent image */}
            <Image src={bedo} alt="Agent" width={48} height={48} />
          </div>
          {/* Agent Details */}
          <div className="flex-1">
            <p className="text-sm font-semibold text-gray-800">Abdallah Wael</p>
            <p className="text-sm text-gray-500">Agent</p>
          </div>
          <button className="px-4 py-1 text-sm font-medium text-gray-700 border border-gray-300 rounded-full hover:bg-gray-100">
            Contact
          </button>
        </div>
      </div>

      {/* Request Meeting Button */}
      <div className="p-4">
        <button className="w-full px-6 py-2 text-white bg-blue-400 rounded-lg hover:bg-blue-500">
          Request a meeting
        </button>
      </div>
    </div>  

            </div>
      </main>
      <section className="w-full h-[130px] bg-white flex justify-center items-center">
        <div className="w-[80%] h-[80px] bg-white rounded-tr-[20px] rounded-bl-[20px] border-[1px] border-gray-300 flex justify-center gap-5 items-center max-460:flex-wrap max-460:w-full max-460:h-max max-460:pt-5 max-460:pb-5 max-330:mt-[100px]">
                <div className="w-[174px] h-[55px] bg-white flex rounded-[15px] border-[1px] border-gray-300">
                  <div className="w-[20%] h-[55px]  flex justify-center items-center">
                    <Image src={location} alt="location"/>
                  </div>
                  <div className="w-[80%] h-[55px]  flex flex-col  pl-2 pt-1">
                    <h1 className="w-full h-[20px] text-[#8D8D8D] text-[14px] font-normal">location</h1>
                    <span className="w-full h-[24px] text-[16px] text-black font-normal">San Jose , CA</span>
                  </div>
                </div>
                <div className="w-[174px] h-[55px] bg-white flex rounded-[15px] border-[1px] border-gray-300">
                  <div className="w-[20%] h-[55px]  flex justify-center items-center">
                    <Image src={building} alt="location"/>
                  </div>
                  <div className="w-[80%] h-[55px]  flex flex-col  pl-2 pt-1">
                    <h1 className="w-full h-[20px] text-[#8D8D8D] text-[14px] font-normal">Property Type</h1>
                    <span className="w-full h-[24px] text-[16px] text-black font-normal">Apartments</span>
                  </div>
                </div>
                <div className="w-[174px] h-[55px] bg-white flex rounded-[15px] border-[1px] border-gray-300">
                  <div className="w-[20%] h-[55px]  flex justify-center items-center">
                    <Image src={money} alt="location"/>
                  </div>
                  <div className="w-[80%] h-[55px]  flex flex-col  pl-2 pt-1">
                    <h1 className="w-full h-[20px] text-[#8D8D8D] text-[14px] font-normal">Price</h1>
                    <span className="w-full h-[24px] text-[16px] text-black font-normal">$2,000,000</span>
                  </div>
                </div>
                <div className="w-[174px] h-[55px] bg-white flex rounded-[15px] border-[1px] border-gray-300">
                  <div className="w-[20%] h-[55px]  flex justify-center items-center">
                    <Image src={bed} alt="location"/>
                  </div>
                  <div className="w-[80%] h-[55px]  flex flex-col  pl-2 pt-1">
                    <h1 className="w-full h-[20px] text-[#8D8D8D] text-[14px] font-normal">Beds Room</h1>
                    <span className="w-full h-[24px] text-[16px] text-black font-normal">3-4</span>
                  </div>
                </div>
                <div className="w-[174px] h-[55px] bg-white flex rounded-[15px] border-[1px] border-gray-300">
                  <div className="w-[20%] h-[55px]  flex justify-center items-center">
                    <Image src={bath} alt="location"/>
                  </div>
                  <div className="w-[80%] h-[55px]  flex flex-col  pl-2 pt-1">
                    <h1 className="w-full h-[20px] text-[#8D8D8D] text-[14px] font-normal">Bath Room</h1>
                    <span className="w-full h-[24px] text-[16px] text-black font-normal">1-2</span>
                  </div>
                </div>
        </div>
      </section>
      <section className="w-full h-[350px] bg-white flex justify-center items-center max-460:mt-16 max-330:mt-44">
          <div className="w-[70%] h-[290px] bg-white gap-7 flex max-460:flex-wrap max-460:w-full max-460:justify-center max-460:items-center">
                <div className="w-1/2 h-[290px] bg-white flex flex-col justify-center items-center max-460:w-full">
                  <h1 className="w-full h-[40px] text-[24px] text-[#8D8D8D] font-semibold text-center">Your Tru<span className="text-[#94CEEE]">sted Real Est</span>ate Adv<span className="text-[#94CEEE]">iso</span>rs</h1>
                      <div className="w-[80%] h-[240px] bg-white flex flex-wrap gap-3 justify-center items-center max-460:w-full max-460:flex-wrap">
                          <div className="w-[35%] h-[95px] bg-white text-center border-[1px] border-gray-300  rounded-[10px] flex flex-col justify-center items-center max-460:w-[45%]">
                            <h1 className="w-full h-[21px] text-[14px] text-[#8D8D8D] font-normal">Satishfied customers</h1>
                            <span className="w-full h-[48px] text-[#81ACC3] text-[32px] font-medium">17k+</span>
                          </div>
                          <div className="w-[35%] h-[95px] bg-white text-center border-[1px] border-gray-300  rounded-[10px] flex flex-col justify-center items-center max-460:w-[45%]">
                            <h1 className="w-full h-[21px] text-[14px] text-[#8D8D8D] font-normal">Year of Experience</h1>
                            <span className="w-full h-[48px] text-[#81ACC3] text-[32px] font-medium">21k+</span>
                          </div>
                          <div className="w-[35%] h-[95px] bg-white text-center border-[1px] border-gray-300  rounded-[10px] flex flex-col justify-center items-center max-460:w-[45%]">
                            <h1 className="w-full h-[21px] text-[14px] text-[#8D8D8D] font-normal">Property Collection</h1>
                            <span className="w-full h-[48px] text-[#81ACC3] text-[32px] font-medium">26k+</span>
                          </div>
                          <div className="w-[35%] h-[95px] bg-white text-center border-[1px] border-gray-300  rounded-[10px] flex flex-col justify-center items-center max-460:w-[45%]">
                            <h1 className="w-full h-[21px] text-[14px] text-[#8D8D8D] font-normal">Award Winning</h1>
                            <span className="w-full h-[48px] text-[#81ACC3] text-[32px] font-medium">226k+</span>
                          </div>
                      </div>
                </div>
                <div className="w-1/2 h-[290px] bg-white flex justify-center max-460:w-full">
                    <div className="w-[80%] h-[290px] rounded-[15px] border-[1px] max-460:w-full border-gray-300 bg-white flex flex-col justify-center items-center">
                      <p className="w-full h-[60px] text-[12px] text-black font-normal pl-2">We have witnessed the ever-evolving landscape of the real estate market and become a trusted partner by thousands of clients</p>
                      <Image src={s3} alt="icon" className=" rounded-[15px]"/>
                    </div>
                </div>
          </div>
      </section>
      <section className="w-full  px-4 py-8 bg-gray-50 max-460:mt-72">
      <h1 className="text-center text-gray-700 text-3xl font-normal">
        Sell <span className="text-[#94CEEE]">With Top Agents</span>
      </h1>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {agents.map((agent) => (
          <div
            key={agent.id}
            className="border border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center shadow-md"
          >
            <Image
              src={agent.avatar}
              alt={agent.name}
              width={60}
              height={60}
              className="rounded-full"
            />
            <div className="mt-2 text-center">
              <h3 className="text-gray-800 text-lg font-semibold">{agent.name}</h3>
              <p className="text-gray-500 text-sm">{agent.sold} properties sold</p>
            </div>
            <div className="mt-4 flex items-center justify-center gap-2">
              <span className="text-yellow-500 text-xl font-bold">{agent.rating}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5 text-yellow-500"
              >
                <path d="M12 2l2.833 6.668 6.987.571-5.42 4.739 1.697 6.883L12 17.471l-6.097 3.39L7.6 13.978l-5.419-4.74 6.986-.57z" />
              </svg>
            </div>
            <button className="mt-4 text-[#94CEEE] border border-[#94CEEE] rounded-lg px-4 py-2 hover:bg-[#94CEEE] hover:text-white transition">
              Contact
            </button>
          </div>
        ))}
      </div>
    </section>
    <section className="w-full h-[600px] mt-5">
          <div className="w-full h-[170px] bg-white flex flex-col gap-3 justify-center items-center ">
              <div className="w-[25%] border-[1px] border-gray-300 rounded-[20px] h-[70px] bg-white flex justify-center items-center gap-3 max-460:w-[90%] ">
                <button className="w-[20%] h-[26px] bg-[#94CEEE] text-white text-[10px] text-center rounded-[28px] border-[1px] border-gray-300">Buy</button>
                <button className="w-[20%] h-[26px] bg-white text-[#94CEEE] text-[10px] text-center rounded-[28px] border-[1px] border-gray-300 hover:bg-[#94CEEE] ease-in-out duration-700 hover:text-white">Sell</button>
                <button className="w-[20%] h-[26px] bg-white text-[#94CEEE] text-[10px] text-center rounded-[28px] border-[1px] border-gray-300 hover:bg-[#94CEEE] ease-in-out duration-700 hover:text-white">Rent</button>
              </div>
              <div className="w-[30%] h-[45px] relative max-w-2xl max-460:w-[80%]">
  <Image
    src={seaa}
    alt="icon"
    className="absolute left-3 top-1/2 transform -translate-y-1/2 w-6 h-6"
  />
  <input
    type="text"
    placeholder="Address , neighborhood , city , zip code"
    className="w-full pl-12 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring focus:border-blue-300"
  />
              </div>
          </div>
          <div className="w-full h-[400px] flex justify-center flex-wrap gap-6 items-center bg-white  max-460:h-max">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          </div>
          <section className="w-full h-[200px] flex flex-col justify-center items-center bg-white max-460:h-[300px] max-460:gap-20">
        <h1 className="w-full h-[70px] text-center text-[32px] text-black font-medium">Dont Tr<span className="text-[#94CEEE]">ust Us , Trust Thei</span>r Voice</h1>
        <Spinner/>
    </section>
    <Footer/>

    </section>
 

    {/* {showAds && <Ads onClose={handleClose} />} */}
  
    </div>
  );
}
