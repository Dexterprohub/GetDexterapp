import React from "react";

export default function Featurelists(props) {

    return (
        <div className="flex flex-row items-center justify-between gap-[72px]">
            <img src={props.phone} alt="phone" className="w-[200px]"/>

            <div className="flex flex-col gap-[28px]"> 
                <h2 className='text-black font-manrope font-bold text-[40px] leading-[50px]'>{props.heading}</h2>

                <div className="flex flex-row items-center justify-start gap-[24px]">
                    
                    <img src={props.icon} alt="" /><span>{props.title}.</span> 
                </div>
                
                {/* <div className="flex flex-row items-center justify-start gap-[24px]">
                    <img src={props.icon} alt="" /><span> {props.title}.</span>
                </div>

                <div className="flex flex-row items-center justify-start gap-[24px]">
                    <img src={props.icon} alt="" /><span>{props.title}.</span>
                
                </div>

                <div className="flex flex-row items-center justify-start gap-[24px]">
                    <img src={props.icon} alt="" /><span> {props.title}.</span>
                </div> */}
            </div>
        </div>
    );
}