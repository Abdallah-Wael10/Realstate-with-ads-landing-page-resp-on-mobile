"use client"

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import card from "./images/card.svg";
import bed1 from "./images/bed1.svg";
import bath1 from "./images/bath1.svg";
import map from "./images/map.svg";
import date from "./images/date.svg";

const Card = () => {
  const [isVisible, setIsVisible] = useState(false); // State to track visibility
  const cardRef = useRef(null); // Ref to track the card element

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true); // Set visibility to true when the card is in view
            observer.unobserve(entry.target); // Stop observing once the card is visible
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the card is visible
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current); // Start observing the card
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current); // Cleanup observer on unmount
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`w-[17%] h-[305px] rounded-lg bg-white border-[1px] border-gray-300 max-460:w-[70%] max-330:w-[90%] ${
        isVisible ? 'animate-slide-in' : 'opacity-0'
      }`}
    >
      <Image src={card} alt='icon' className='w-full h-[229px] rounded-lg' />
      <h1 className='w-full h-[20px] text-[12px] text-black font-medium text-center mt-1'>
        1744 Keeling RD Virginia Beach, VA 23455
      </h1>
      <div className='w-full h-[55px] gap-1 text-[#767676] text-[11px] font-normal flex justify-center flex-wrap items-center'>
        <div className='w-[10%] h-[12px] flex items-center gap-1'>
          <Image src={bed1} alt='beds' />
          <span>3</span>
        </div>
        <div className='w-[10%] h-[12px] flex items-center gap-1'>
          <Image src={bath1} alt='bath' />
          <span>2</span>
        </div>
        <div className='w-[29%] h-[12px] flex items-center gap-1'>
          <Image src={map} alt='map' />
          <span>1,834 Sq Ft</span>
        </div>
        <div className='w-[38%] h-[12px] flex items-center gap-1'>
          <Image src={map} alt='map' />
          <span>Sat 6 April, 2024</span>
        </div>
      </div>
    </div>
  );
};

export default Card;