
import React from 'react';

import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import MainSection from '../components/MainSection';
import Footer from '../components/Footer';




const Home = (props) => {


    return (
        <div>
            <NavBar />
            
            <div className=' flex flex-col xl:flex-row justify-around items-start my-20 w-[100vw] mx-auto'>
                <SideBar />
                <MainSection />
            </div>
            <Footer/>
        </div>

    )
}

export default Home

