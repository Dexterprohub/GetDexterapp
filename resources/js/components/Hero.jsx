import React from 'react'
import styles from '../style';
import Navbar from './Navbar';
import { appleBadge, androidBadge, devices } from '../assets';

export default function Hero(){


    return (
        <section id="home" className={`bg-primary bg-vector flex  flex-col `}>
            <Navbar />

            <div className={`flex-1 w-full lg:w-[814px] sm:w-full mx-auto ${styles.flexCenter} flex-col gap-8  `}>

                <div className='flex flex-col justify-center items-center gap-8 w-full'>
                    <h1 className=' px-[50px] lg:p-[10px] ss:text-[72px] xs:text-[68px] text-[44px] text-center xs:text-[30px] text-white ss:leading-[100px] xs:leading-[80px] leading-[60px] font-semibold'>Save time Outsourcing 
                    Daily Tasks</h1>

                    <div className='flex flex-col items-center text-center text-white px-[50px]'>

                    <p className='text-[18px]'>Do you have any task or chore you want done anywhere, The Dexter App provides you with a pool
                    of services to pick from. Get qualified service personnel assigned to your tasks in minutes.
                    </p>

                    </div>

                    <div className='xxs:w-[150px] w-[111px] h-[56px] flex flex-row items-center justify-around gap-2'>
                        <img src={appleBadge} alt="apple-badge" /> <img src={androidBadge} alt="" />
                    </div>

                    <div className='xl:w-full  sm:w-[560px] xs:w-[460px] w-[300px]'>
                        <img src={devices} alt="" />
                    </div>
                </div>
            </div>
        </section>
  );
    }