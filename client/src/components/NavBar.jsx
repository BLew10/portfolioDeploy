import React, { useState } from 'react'
import './style.css'
import Home from '../views/Home'
import logo from '../images/logo.png'


const NavBar = () => {
    const [menuItems, setMenuItems] = useState(false)


    return (
        <div>
            <div className=" h-[150px] flex justify-between bg-[#dad7c8] w-full items-center">
                <h1 className='font-bold text-[#4C3831] text-2xl   text-left mx-3 mb-3'>
                    <img src={logo} alt="" className='w-2/3 md:w-1/2' />
                </h1>

                <div className='basis-1/4 flex justify-end lg:justify-between lg:mx-5 '>
                    <a href="https://github.com/BLew10" className='hidden lg:flex flex-col justify-center items-center  text-[#4C3831] font-bold lg:mx-5'>
                        <img src="https://img.icons8.com/wired/64/4C3831/github.png" className='h-[60px]' />
                        <p className='font-semibold'>GitHub</p>
                    </a>
                    <a href="https://www.linkedin.com/in/brandon-lewis-88974811b/" className=' hidden lg:flex flex-col justify-center items-center  text-[#4C3831] font-bold lg:mx-5' >
                        <img src="https://img.icons8.com/ios/50/4C3831/linkedin.png" className='h-[60px]' />
                        <p>LinkedIn</p>
                    </a>
                    <a href="https://www.instagram.com/bleww10/" className=' hidden lg:flex flex-col justify-center items-center text-[#4C3831] font-bold lg:mx-5'>
                        <img src="https://img.icons8.com/wired/64/4C3831/instagram--v1.png" className='h-[60px]' />
                        <p>Instagram</p>
                    </a>
                    <img src="https://img.icons8.com/external-creatype-outline-colourcreatype/64/4C3831/external-hamburger-basic-creatype-outline-colourcreatype-3.png" className=' lg:hidden hover:cursor-pointer h-[60px]' onClick={() => setMenuItems(!menuItems)} />
                </div>

            </div>
            {menuItems ? <ul className='bg-[#dad7c8] border-t-2 border-b-2 border-[#4C3831] [&>*]:my-3 lg:hidden'>
                <li className='hover:scale-105 hover:font-bold hover:cursor-pointer'><a href="https://github.com/BLew10">GitHub</a></li>
                <li className='hover:scale-105 hover:font-bold hover:cursor-pointer'><a href="https://www.linkedin.com/in/brandon-lewis-88974811b/">LinkedIn</a></li>
                <li className='hover:scale-105 hover:font-bold hover:cursor-pointer'> <a href="https://www.instagram.com/bleww10/">Instagram</a></li>

            </ul> : ""}
        </div>


    )
}

export default NavBar

