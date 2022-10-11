import React from "react";
import {logo, instagram, twitter, youtube, linkedin, appleBadge, androidBadge, supportI, headphoneI, locationI} from "../assets";

export default function Footer(){
    return(

        <div className=" flex flex-col absolute  justify-between items-start text-white bg-black w-full py-[40px] px-[20px] sm:px-[40px] mt-[450px] md:mt-[350px] ">

            <div className="bg-primary absolute bottom-[490px] sm:bottom-[180px] md:bottom-[260px] flex md:flex-row flex-col items-center justify-between text-white rounded-3xl left-[20px] sm:left-[40px] w-[90%] gap-[41px] p-[40px] md:p-[64px] "> 
                <div className="flex md:flex-row flex-col items-start justify-between gap-[41px] ">
                    <div className="flex flex-col gap-[28px]">
                        <h2 className="font-manrope font-bold sm:text-[40px] text-[20px] leading-[50px] tracking-[0.2px]">
                            Stay updated with our Newsletter
                        </h2> 
                        <p className="font-normal text-[18px] leading-[30px] tracking-[.32px] text-offWhite">
                            Be the first to receive our lates news updates and everything in between
                        </p>

                    </div>
                    
                    <div className="flex flex-col justify-center items-center gap-[16px]">
                        <form action="" className="flex flex-col gap-[16px]">
                            <input type="text" placeholder=" Your email " className="flex flex-col items-start w-[335px] h-[56px] rounded-3xl"/>
                            <input type="submit" value="Signup" className="flex flex-row justify-center items-center text-center p-4 bg-secondary text-black leading-[24px] tracking-[.1px] rounded-3xl w-[335px] text-[16px] font-semibold"/>
                            
                        </form>

                    </div>
                </div>
            </div>

            <div className="flex sm:flex-row flex-col-reverse justify-between gap-[10px] sm:gap-[30px]">

                <div className="flex flex-col gap-[24px] mt-[20px] sm:mt-0 sm:w-[30vw]" >
                    <div className="flex flex-row justify-start items-center gap-[24px]">
                        <img src={logo} alt="logo" />
                        <h1 className="text-[26px] text-shadeGrey2 leading-[34px] font-semibold font-normal font-manrope">Dexter</h1>
                    </div>
                    
                        <small className=" bottom-0 text-[14px] leading-[24px] text-shadeGrey2" >
                            &#169; 2022 Dexterprolimited. All rights reserved
                        </small>

                    <div className="flex flex-row gap-[24px]">
                        <img src={instagram} alt="instagram" />
                        <img src={twitter} alt="twitter" />
                        <img src={youtube} alt="youtube" />
                        <img src={linkedin} alt="linkedin" />
                    </div>

                    <div className=" flex flex-row gap-[24px] justify-start items-center w-[101px] h-[56px]">
                        <img src={appleBadge} alt=""  className=" border border-solid rounded-[32px] border-white"/>
                        <img src={androidBadge} alt=""  className=" border border-solid rounded-[32px] border-white"/>
                    </div>
                </div>

                <div className="flex flex-row gap-[30px] items-start justify-between w-[90vw] sm:w-[50vw]">
                    <div className=" w-1/2 gap-[12px] flex flex-col items-start">
                        <h2 className="font-manrope font-bold text-[20px] leading-[26px]">Quick Links</h2>

                        <div className="flex flex-col gap-[12px] font-manrope text-shadeGrey3">
                            <a href="" className="text-[14px] font-manrope leading-[20px]">About</a>
                            <a href="" className="text-[14px] font-manrope leading-[20px]">Contact</a>
                            <a href="" className="text-[14px] font-manrope leading-[20px]">FAQs</a>
                            <a href="" className="text-[14px] font-manrope leading-[20px]">Terms of Service</a>
                            <a href="" className="text-[14px] font-manrope leading-[20px]">Image credits</a>
                        </div>
                       
                    </div>
 
                    <div className="w-1/2 gap-[24px] sm:gap-[12px] flex flex-col items-start ">
                        <h2 className="font-manrope font-bold text-[20px] leading-[26px] text-white">Contact</h2>

                        <div className="flex flex-row items-center justify-between gap-[10px]">
                            <img src={supportI} alt="" className="hidden sm:block"/> 
                            <a href="" className="text-shadeGrey3">
                                <small className="text-[14px]">Support@dexterapp.com</small>
                            </a>
                        </div>

                        <div className="flex flex-row items-center justify-between gap-[10px]">
                            <img src={headphoneI} alt="" className="hidden sm:block" /> <a href="" className="text-[14px]">+ 123456789</a>
                        </div>
                        <div className="flex flex-row items-center justify-between gap-[10px]">
                            <img src={locationI} alt="" className="hidden sm:block"/> <a href="" className="text-[14px]">36b jay jay Oladimeji Stree, off Freedom Way, Ikate Lekki, Lagos State</a>
                        </div>

                    </div>

                </div>
            </div>

           
        </div>
    );
}