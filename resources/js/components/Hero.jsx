import React from 'react'
import styles from '../style';
import Navbar from './Navbar';



export default function Hero(props){


    return (
        <section id="home" className={`bg-primary bg-vector flex  flex-col `}>
            <Navbar />

            <div className={`flex-1 w-full lg:w-[814px]  sm:w-full mx-auto ${styles.flexCenter} flex-col gap-8  `}>

                <div className='flex flex-col justify-center items-center gap-8 w-full'>
                    <h1 className=' px-[50px] lg:p-[10px] ss:text-[72px]  text-[44px] text-center xs:text-[30px] text-white ss:leading-[100px] xs:leading-[80px] leading-[60px] font-semibold'>{props.heading} </h1>

                    <div className='flex flex-col items-center text-center text-white px-[50px]'>

                    <p className='text-[18px]'>{props.text}
                    </p>

                    </div>

                    <div className='sm:w-[150px] w-[111px] h-[56px] flex flex-row items-center justify-around gap-2'>
                        <img src={props.badge1} alt="badge" /> <img src={props.badge2} alt="badge" />
                    </div>

                    <div className='xl:w-full  sm:w-[560px] xs:w-[460px] w-[300px]'>
                        <img src={props.img} alt="image" />
                    </div>
                </div>
            </div>
        </section>
    );
}