import React from "react";
import {logo, instagram, twitter, youtube, linkedin, appleBadge, androidBadge, supportI, headphoneI, locationI} from "../assets";

export default function Footer(){
    return(

        <div className="absolute flex flex-row justify-between items-start text-white bg-black w-full gap-[30px] pt-[100px] px-[40px] pb-[36px] mt-[200px]">

            <div className="bg-primary absolute bottom-[286px] flex flex-row items-center justify-between text-white rounded-3xl w-[80%] gap-[41px] p-[54px] "> 
                <div className="flex flex-row items-start justify-between gap-[41px] ">
                    <div className="flex flex-col gap-[28px]">
                        <h2 className="font-manrope font-bold text-[20px] leading-[50px] tracking-[0.2px]">
                            Stay updated with our Newsletter
                        </h2> 
                        <p className="font-normal text-[18px] leading-[30px] tracking-[.32px] text-offWhite">
                            Be the first to receive our lates news updates and everything in between
                        </p>

                    </div>
                    
                    <div className="flex flex-col justify-start gap-[16px]">
                        <form action="" className="flex flex-col gap-[16px]">
                            <input type="text" placeholder=" Your email " className="flex flex-col items-start w-[335px] h-[56px] rounded-3xl"/>
                            <input type="submit" value="Signup" className="flex flex-row justify-center items-center text-center p-4 bg-secondary text-black leading-[24px] tracking-[.1px] rounded-3xl w-[335px] text-[16px] font-semibold"/>
                            
                        </form>

                    </div>
                </div>
            </div>

            <div className="flex flex-row justify-between w-[80vw] h-[206px]">

                <div className="flex flex-col gap-[24px]">
                    <div className="flex flex-row justify-start items-center gap-[24px]">
                        <img src={logo} alt="logo" />
                        <h1 className="text-[26px] text-shadeGrey2 leading-[34px] font-semibold font-normal font-manrope">Dexter</h1>
                    </div>


                    <small className="text-[14px] leading-[24px] text-shadeGrey2" >
                    &#169; 2022 Dexterprolimited. All rights reserved
                    </small>

                    <div className="flex flex-row gap-[24px]">
                        <img src={instagram} alt="instagram" />
                        <img src={twitter} alt="twitter" />
                        <img src={youtube} alt="youtube" />
                        <img src={linkedin} alt="linkedin" />
                    </div>

                    <div className="flex flex-row gap-[24px] justify-start items-center w-[171px] h-[56px]">
                        <img src={appleBadge} alt=""  className=" border border-solid rounded-[32px] border-white"/>
                        <img src={androidBadge} alt=""  className=" border border-solid rounded-[32px] border-white"/>
                    </div>
                </div>

                <div className="flex flex-row gap-[64px] items-start">
                    <div className="w-[160px] gap-[12px] flex flex-col items-start">
                        <h2 className="font-manrope font-bold text-[20px] leading-[26px]">Quick Links</h2>

                        <div className="flex flex-col gap-[12px] font-manrope text-shadeGrey3">
                            <a href="" className="text-[14px] font-manrope leading-[20px]">About</a>
                            <a href="" className="text-[14px] font-manrope leading-[20px]">Contact</a>
                            <a href="" className="text-[14px] font-manrope leading-[20px]">FAQs</a>
                            <a href="" className="text-[14px] font-manrope leading-[20px]">Terms of Service</a>
                            <a href="" className="text-[14px] font-manrope leading-[20px]">Image credits</a>
                        </div>
                       
                    </div>

                    <div className="w-[255px] gap-[24px] flex flex-col items-start ">
                        <h2 className="text-[20px] leading-[26px] text-white">Contact</h2>

                        <div className="flex flex-row items-center justify-between gap-[10px]">
                            <img src={supportI} alt="" /> 
                            <a href="" className="text-shadeGrey3">
                                <small className="text-[14px]">Support@dexterapp.com</small>
                            </a>
                        </div>

                        <div className="flex flex-row items-center justify-between gap-[10px]">
                            <img src={headphoneI} alt="" /> <a href="" className="text-[14px]">+ 123456789</a>
                        </div>
                        <div className="flex flex-row items-center justify-between gap-[10px]">
                            <img src={locationI} alt="" /> <a href="" className="text-[14px]">36b jay jay Oladimeji Stree, off Freedom Way, Ikate Lekki, Lagos State</a>
                        </div>

                    </div>

                </div>
            </div>

           
        </div>
    );
}