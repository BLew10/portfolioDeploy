import React, { useEffect, useState, useReducer } from 'react';
import AboutMe from './AboutMe';
import Projects from './Projects';
import MyStory from './MyStory';
import { LeftMed } from './LeftMed';
import TechnicalSkills from './TechSkills';

const MainSection = () => {
    const initialState = { section: <AboutMe />, name: "About Me" }

    const reducer = (state, action) => {
        switch (action.type) {
            case 'About Me':
                return { section: <AboutMe />, name: "About Me" }
            case 'Projects':
                return { section: <Projects />, name: "Projects" }
            case 'My Story':
                return { section: <MyStory />, name: "My Story" }
            case 'Technical Skills':
                return { section: <TechnicalSkills />, name: "Technical Skills" }
            case 'Why I Left Medicine':
                return { section: <LeftMed />, name: "Why I Left Medicine" }
            default:
                throw new Error()
        }
    }
    const [currentSubSection, dispatch] = useReducer(reducer, initialState)


    return (
        <div className={`w-[95%] mx-auto lg:basis-[60%] my-10 lg:y-0`}>
            <div className='flex flex-col lg:flex-row w-full justify-between items-center [&>*]:basis-[20%] border-2 border-[#4C3831] [&>*]:h-[50px]  '>
                <div onClick={() => dispatch({ type: "About Me" })} className={`w-full  hover:bg-[#92847f] hover:text-white  border-b-2 border-l-2 border-[#4C3831] ${currentSubSection.name === "About Me" ? "bg-[#4C3831] text-white": "bg-[#dad7c8] "} hover:cursor-pointer flex items-center justify-center `}> <span> About Me</span></div>
                <div onClick={() => dispatch({ type: "Technical Skills" })} className={`w-full hover:bg-[#92847f] hover:text-white  border-b-2 border-l-2 lg: border-l-none border-[#4C3831]  ${currentSubSection.name === "Technical Skills" ? "bg-[#4C3831] text-white": "bg-[#dad7c8] "} hover:cursor-pointer flex items-center justify-center`}>Technical Skills</div>
                <div onClick={() => dispatch({ type: "Projects" })} className={`w-full border-b-2 hover:bg-[#92847f] hover:text-white  border-[#4C3831]  border-l-2 lg: border-l-none ${currentSubSection.name === "Projects" ? "bg-[#4C3831] text-white": "bg-[#dad7c8] "} hover:cursor-pointer flex items-center justify-center`} >Projects</div>
                <div onClick={() => dispatch({ type: "My Story" })} className={`w-full border-b-2  hover:bg-[#92847f] hover:text-white border-[#4C3831] h-full border-l-2 lg: border-l-none ${currentSubSection.name === "My Story" ? "bg-[#4C3831] text-white": "bg-[#dad7c8] "} hover:cursor-pointer flex items-center justify-center`}>My Story</div>
                <div onClick={() => dispatch({ type: "Why I Left Medicine" })} className={`w-full  hover:bg-[#92847f] hover:text-white border-b-2 border-[#4C3831] border-l-2 lg: border-l-none ${currentSubSection.name === "Why I Left Medicine" ? "bg-[#4C3831] text-white": "bg-[#dad7c8] "} hover:cursor-pointer flex items-center justify-center`}>Why I Left Medicine</div>
            </div>
            <div className={`rounded `}>
                {currentSubSection.section}
            </div>
        </div>
    )
}

export default MainSection