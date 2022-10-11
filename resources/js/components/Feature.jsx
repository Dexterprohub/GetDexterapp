import React from 'react';
import {flagI} from "../assets";

export default function Feature(){
  return (
    <div className="bg-darkGrey flex flex-col justify-center items-center py-[96px] sm:px-[135px] px-[40px] gap-6">
      
        <h2 className="font-bold md:text-[40px] text-[25px] font-normal text-center text-black font-manrope">Currently available in:</h2>
      
      <div className="flex flex-row justify-start items-center gap-4">
        <img src={flagI} alt="flag" /> <h5 className="font-semibold xs:text-[20px] text-[15px]">Lagos, Nigeria </h5>
      </div>
    
        <p className="sm:text-[18px] text-[14px] text-center leading-[25px] text-darkBrown lg:w-[814px]">
          Our goal is to bring Dexter to as many states as possible in Nigeria. We’re just getting started. Join our newsletter to recieve updates from Dexter as soon as our services are available in your state  or area.
        </p>
      
    </div>
  );
}