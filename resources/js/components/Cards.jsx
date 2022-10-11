import React from 'react'

export default function Cards(props){
    return (
       

            <div >
                <div className=" md:w-[274px] md:h-[242px] h-[140px] w-[140px] px-[20px] pt-[20px] pb-[10px] gap-6 md:px-[46px] md:pt-[46px] md:pb-[36px] md:gap-8 bg-white rounded-xl ">
                    <div className="flex flex-col justify-between gap-5">
                        <img src={props.img} alt="" className="w-[40px] h-[40px]" />

                        <p className="font-semibold text-[15px]">{props.title}</p>
                    </div>
                </div>
            </div>

    );
}