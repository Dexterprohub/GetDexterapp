import React from "react";
import {electricalI, fashiondesignI, fooddeliveryI, groceryI, hairstyleI, laundryI, makeupI, plumbingI} from "../assets"
import Cards from "./Cards";
export default function ServiceCards() {

    return (
        <div className="flex flex-col bg-offWhite px-[20px] py-[40px] md:py-[96px] justify-center items-center  gap-10 ">

            <div className="relative sm:w-[595px]  gap-2 flex flex-col mx-auto items-center text-center">
                <h2 className="xs:text-[35px] text-[25px] leading-[50px] font-bold">Discover Our Services</h2>
                <p className="w-full xs:text-[18px] leading-[25px] text-[14px] text-grey">We cover a whole lot of services and we are still adding more to the list
                </p>
            </div>

            <div className="flex flex-col gap-[32px] py-[20px] ">
                <div className="flex flex-row gap-10 px-[20px] overflow-x-auto w-full">

                    <Cards img={electricalI} title="Electrical Repair" />
                    <Cards img={laundryI} title="Laundry Repair" />
                    <Cards img={fooddeliveryI} title="Food Delivery" />
                    <Cards img={makeupI} title="Make up" />

                </div>   
                <div className="flex flex-row gap-10 px-[20px] overflow-x-auto w-full">

                    <Cards img={plumbingI} title="Plumbing" />
                    <Cards img={groceryI} title="Grocery shopping" />
                    <Cards img={hairstyleI} title="Hair dressing" />
                    <Cards img={fashiondesignI} title="Fashion design" />

                </div>   
            </div>
            
        </div>
    );
}