import { useState, React} from 'react';

import styles from '../style';
import {logo, menu, close} from "../assets";
import navLinks from "../constants";
import { Link } from 'react-router-dom';
// import { BrowserRouter, Routes, Link } from 'react-router-dom';



export default function Navbar() {
    const [toggle, setToggle] = useState(false);
    return (

        <nav className={`  ${styles.paddingX} ${styles.flexCenter} w-full flex py-6 justify-between items-center navbar`}>
        
            <div className='flex flex-row items-center justify-between xs:gap-1 gap-2'>
            <img src={logo} alt="logo" className="w-[30px] h-[34px]" /><h2 className='text-white font-semibold text-[28px]'>Dexter</h2>

            </div>

            <ul className="list-none sm:flex hidden justify-end items-center">

                {navLinks.map((nav, index) => (
                    <li key={nav.id}
                        className={`font-normal cursor-pointer text-[16px] text-white ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}  `}>
                           <Link to={nav.id}>{nav.title}</Link>
                        </li>
                ))}

            </ul>

            <div className='sm:hidden flex flex-1 justify-end items-center'>
               
                <img src={ toggle ? close : menu }  alt="menu" className='w-[28px] h-[28px] object-container' onClick={() => setToggle((prev) => !prev)} />

                <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-primary absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar] `}>

                    <ul className="list-none flex flex-col justify-end items-center">

                        {navLinks.map((nav, index) => (
                        <li key={nav.id}
                            className={`font-normal cursor-pointer text-[16px]  ${index === navLinks.length - 1 ? 'mb-4' : 'mb-4'}  `}>
                                <a href={`#${nav.id}`}>{nav.title}</a>
                            </li>
                        ))}

                    </ul>
                </div>
            </div>

        </nav>
    );

}
