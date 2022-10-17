import React from "react";
import styles from '../style';
import { Hero, Servicecards, Feature, FeatureTwo, FeatureThree, Footer } from './';
import {androidBadge, appleBadge,devices, downloadbtn, iPhone, selectI, signupI, starI} from "../assets";

export default function Home(){
    return(
        <div className='w-full overflow-hidden font-manrope bg-white'>
            {/* <div className={` ${styles.paddingX} ${styles.flexCenter}`}>
                <div className={` bg-primary ${styles.boxWidth}`}>
                    <Navbar />
                </div>
            </div> */}
            <div className={`${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Hero 
                        badge1={appleBadge} 
                        badge2={androidBadge} 
                        img={devices} 
                        heading="Save time Outsourcing Daily Tasks" 
                        text="Do you have any task or chore you want done anywhere, The Dexter App provides you with a pool of services to pick from. Get qualified service personnel assigned to your tasks in minutes." 
                    />                          
                </div>
            </div>
            
            <div className={` ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Servicecards   
                        heading="Discover Our Services" 
                        text="We cover a whole lot of services and we are still adding " 
                    />

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

            {/* <Router>

                <div className={`   ${styles.flexCenter}`}>
                    <div className={`${styles.boxWidth}`}>
                        <Switch>
                            <Route path="/forbusiness">
                                <ForBusiness />
                            </Route>
                        </Switch>
                    </div>
                    
                </div>

            </Router> */}


            </div>
    );
}