import React from "react";
import {hands} from "../assets";

export default function FeatureThree(){
    return (
        <div className="bg-primary bg-vector w-full py-[96px] px-[40px] lg:px-[155px] ">
            <div className="flex flex-col sm:flex-row justify-around items-center gap-[48px]">
                <div className="flex flex-col justify-center items-start w-[80vw] gap-8">
                    
                    <h2 className="font-manrope font-bold text-[30px] md:text-[35px] leading-[50px] text-white ">Our support team is always ready to help</h2>

                    <p className="font-400 text-[16px] text-white text-justify font-manrope font-nomral leading-[25px]">Trust and credibility is a single item on our list, our support team are a mix of supply chain experts and IT professionals always ready to guide you through any concerns you may have. You won’t be having issues with Dexter but we are doing this incase...</p>

                    <a href="#" className="flex flex-row justify-center items-center text-center p-4 bg-secondary text-black rounded-3xl w-[335px]">Contact us</a>
                    
                    
                </div>

                <div className="w-[80vw] h-[300px] md:h-[400px]">
                    <div className="w-full h-full">
                        <img src={hands} alt="image" className="w-full h-full"/>
                    </div>
                </div>
            </div>
        </div>
    );

}