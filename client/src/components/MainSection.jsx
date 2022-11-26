import React, { useEffect, useState } from 'react';
import AboutMe from './AboutMe';
import Projects from './Projects';
import MyStory from './MyStory';

const MainSection = () => {
    const [tabs, setTabs] = useState({
        "About Me": true,
        "Projects": false,
        "My Story": false
    })
    const [currentTab, setCurrentTab] = useState("About Me")
    const [currentSubSection, setCurrentSubSection] = useState(<AboutMe />)

    const handleClick = (e) => {
        let refreshTabs = Object.keys(tabs).reduce((accumulator, key) => {
            return { ...accumulator, [key]: false };
        }, {});
        refreshTabs[e.target.innerHTML] = true
        setTabs({ ...refreshTabs })
        console.log(refreshTabs)
        subsection(e.target.innerHTML)

    }

    const subsection = (tab = "About Me") => {
        if (tab === "About Me") {
            setCurrentSubSection(<AboutMe />)
        } else if (tab === "Projects") {
            setCurrentSubSection(<Projects />)
        } else {
            setCurrentSubSection(<MyStory />)
        }
        console.log(tab)
    }
    return (
        <div className={`w-[90%]  mx-auto lg:basis-1/2 my-1`}>
            <div className='flex justify-center items-center [&>*]:basis-1/3 border-2 border-[#4C3831] '>
                <div onClick={handleClick} className={`${tabs["About Me"] ? "bg-[#4C3831] text-white" : ""} basis-1/3 hover:cursor-pointer `}>About Me</div>
                <div onClick={handleClick} className={`${tabs["Projects"] ? "bg-[#4C3831] text-white" : ""} hover:cursor-pointer `} >Projects</div>
                <div onClick={handleClick} className={`${tabs["My Story"] ? "bg-[#4C3831] text-white" : ""} hover:cursor-pointer `}>My Story</div>
            </div>
            <div className={`rounded ${tabs["My Story"] && "-mx-[22px]"}`}>
                {currentSubSection}
            </div>
        </div>
    )
}

export default MainSection