import React from 'react';
import './App.css';

import {Suspense} from "react";
import {Styles} from './styles/styles';
import Header from './Components/Header';
import Footer from './Components/Footer';
import {Route, Routes} from 'react-router-dom';
import {Contract} from "near-api-js";
import Dashboard from './Components/Dashboard';
import Home from './Components/Home'
import {VerifyAccount} from './Components/VerifyAccount';
import Whitepaper from './Components/Whitepaper';
import Play from "./Components/Play";


const Router = () => {
    return (
        <Suspense fallback={null}>
            <Styles/>
            <Header/>

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/nft" element={<Dashboard/>}/>
                <Route path="/verify" element={<VerifyAccount/>}/>
                <Route path="/map"/>
                <Route path="/whitepaper" element={<Whitepaper/>}/>
                <Route path="/play" element={<Play/>}/>
            </Routes>
            <Footer/>
        </Suspense>
    );
}

export default Router;
