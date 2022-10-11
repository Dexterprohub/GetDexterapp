import React from 'react';


export default function FeatureTwo(props){
  return (
    <div className="flex flex-col items-center justify-between mx-auto md:py-[96px] md:px-[135px] py-[80px] px-[40px] gap-2 bg-white">
      <div className="flex  sm:flex-row items-center justify-between smw-[80vw] mx-auto gap-[72px] flex-col">
        <img src={props.phone} alt="phone" className="w-[180px]"/>
        <div className="flex flex-col gap-[28px] md:w-[458px] "> 
          <h2 className='text-black font-manrope font-bold text-[25px] leading-[40px]'>{props.heading}</h2>

          <div className="flex flex-row items-center justify-start gap-[20px]">
            
            <img src={props.icon1} alt="" /><span className="font-bold text-[16px] leading-[20px]">{props.title1}</span> 
          </div>
          
          <div className="flex flex-row items-center justify-start gap-[20px]">
            <img src={props.icon2} alt="" /><span className="font-bold text-[16px] leading-[20px] font-manrope text-black"> {props.title2}</span>
          </div>

          <div className="flex flex-row items-center justify-start gap-[20px]">
            <img src={props.icon3} alt="" />
            <div>
              <span className="font-bold text-[16px] leading-[20px] font-manrope text-black">{props.title3}</span>
              <p className="text-shadeGrey text-[13px] leading-[20px] font-semibold sm:w-[300px] w-[250px] mt-2">{props.text}</p>
            </div>
          
          </div>

          <div className="flex flex-row items-center justify-start gap-[20px]">
            <img src={props.icon4} alt="" /><span className="font-bold text-[16px] leading-[20px] font-manrope text-black"> {props.title4}</span>
          </div>
        </div>
      </div>
    </div>
  );
}