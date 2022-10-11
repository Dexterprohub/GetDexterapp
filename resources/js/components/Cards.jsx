import React from 'react'

export default function Cards(props){
    return (
          
        <div className="md:w-[274px] md:h-[242px] h-[140px] w-[140px] px-[20px] pt-[20px] pb-[10px] gap-6 md:pl-[48px] md:pt-[56px] md:pb-[56px] md:pr-[56px] md:gap-[32px] bg-white rounded-xl ">
            <div className="flex flex-col justify-between gap-5">
                <img src={props.img} alt="" className="w-[40px] h-[40px] md:w-[72px] md:h-[72px]" />

                <p className="font-bold font-manrope text-[15px] md:text-[20px]">{props.title}</p>
            </div>
        </div>
        

    );
}