import React from "react";
import {electricalI, fashiondesignI, fooddeliveryI, groceryI, hairstyleI, laundryI, makeupI, plumbingI} from "../assets"
import Cards from "./Cards";
export default function ServiceCards(props) {

    return (
        <div className="flex flex-col bg-offWhite px-[20px] py-[40px] md:py-[96px] justify-center items-center  gap-10 ">

            <div className="relative sm:w-[595px]  gap-2 flex flex-col mx-auto items-center text-center">
                <h2 className="md:text-[40px]  text-[30px]  leading-[50px] font-bold">{props.heading}</h2>
                <p className="w-full sm:text-[18px] leading-[25px] text-[16px] text-grey">{props.text}
                </p>
            </div>

            <div className="flex flex-col gap-[32px] py-[20px] w-full ">
                <div className="flex flex-row gap-10 px-[20px] overflow-x-auto lg:mx-auto">

                    <Cards img={electricalI} title="Electrical Repair" />
                    <Cards img={laundryI} title="Laundry Repair" />
                    <Cards img={fooddeliveryI} title="Food Delivery" />
                    <Cards img={makeupI} title="Make up" />

                </div>   
                <div className="flex flex-row gap-10 px-[20px] overflow-x-auto lg:mx-auto">

                    <Cards img={plumbingI} title="Plumbing" />
                    <Cards img={groceryI} title="Grocery shopping" />
                    <Cards img={hairstyleI} title="Hair dressing" />
                    <Cards img={fashiondesignI} title="Fashion design" />

                </div>   
            </div>
            
        </div>
    );
}