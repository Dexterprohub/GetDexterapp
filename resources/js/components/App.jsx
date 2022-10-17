import React from 'react';
import styles from '../style';
import {Home, About, FAQs, Feature, FeatureTwo, FeatureThree, Footer, ForBusiness } from './';
import {downloadbtn, iPhone, selectI, signupI, starI} from "../assets";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { BrowserRouter, Route, Router } from 'react-router-dom';


export default function App() {

    return (

        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='for-business' element={<ForBusiness />} />
                <Route path='about' element={<About />} />
                <Route path='faqs' element={<FAQs />} />
            </Routes>

           
        </BrowserRouter>

        
    );
}




