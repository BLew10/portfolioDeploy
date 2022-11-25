
import React, { useEffect, useState } from 'react';

import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import MainSection from '../components/MainSection';
import Footer from '../components/Footer';
import {
    Routes,
    Route,
    Link,
    useNavigate
} from "react-router-dom"


const Home = (props) => {


    return (
        <div>
            <NavBar />
            <div className=' flex flex-col xl:flex-row justify-around items-start my-20 '>
                <SideBar />
                <MainSection />
            </div>
            <Footer/>
        </div>

    )
}

export default Home

