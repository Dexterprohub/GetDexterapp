import React from "react";
import styles from '../style';
import { Hero, Servicecards, Feature, FeatureTwo, FeatureThree, Footer} from './';
import {androidBadge, appleBadge, woman, downloadbtn, iPhone, selectI, signupI, starI} from "../assets";

export default function ForBusiness(){
    return(
        <div className='w-full overflow-hidden font-manrope bg-white'>
            {/* <div className={` ${styles.paddingX} ${styles.flexCenter}`}>
                <div className={` bg-primary ${styles.boxWidth}`}>
                    <Navbar />
                </div>
            </div> */}
            <div className={`${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Hero badge1={appleBadge} badge2={androidBadge} img={woman} heading="Providing Services has never been easier" text="Dexter provides you with the stage you need for your services to be known and for you to get paid. Get notified when someone needs your service and climb the leader-board as you complete tasks in record time." />                        
                </div>
            </div>
            
            <div className={` ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Servicecards />

                </div>
            </div>
            <div className={`   ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Feature />

                </div>
            </div>
            <div className={`   ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <FeatureTwo phone={iPhone} heading="Get started with Dexter" icon1={downloadbtn} icon2={signupI} icon3={selectI} icon4={starI} title1="Download Dexter from the Appstore or Play Store" title2="Sign up and create your profile" title3="Select your prefered service." title4="Sit back and wait for your task to be completed." text="We might have to verify your request. You’ll get notified when we match you with a service provider." />

                </div>
            </div>

            <div className={` ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <FeatureThree />
                </div>

            </div>

            <div className={`   ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Footer />
                </div>
                
            </div>

        </div>
    );
}