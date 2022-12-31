import React from 'react'
import GithubCard from './GithubCard';

import { DiJavascript1, DiReact, DiNodejs, DiMongodb, DiPython, DiGit, DiMysql } from "react-icons/di";
import { SiAmazonaws, SiGithub, SiPostman, SiJinja, SiFlask, SiBlazor, SiTailwindcss, SiCsharp, SiBootstrap } from "react-icons/si";



const TechnicalSkills = () => {
    return (
        <div className='w-full mx-auto text-[#4C3831]'>
            <div className='text-2xl font-semibold my-5'>Technical Skillset </div>
            <div className=" grid grid-cols-4 justify-start items-center mx-auto [&>*]:my-[11px] w-full [&>*]:text-md ">
                <div>
                    <div className='rounded bg-white  border-2 border-[#dad7c8]  p-3 flex flex flex-col  items-center w-[80%] shadow-md shadow-[#4C3831] mx-auto '>
                        <DiJavascript1 size={35} />
                        <span className='text-[10px] lg:text-sm'> JavaScript </span>
                    </div>
                </div>
                <div>
                    <div className='rounded bg-white  border-2 border-[#dad7c8]  p-3 flex flex flex-col  items-center w-[80%] shadow-md shadow-[#4C3831] mx-auto '>
                        <DiReact size={35} />
                        <span className='text-[10px] lg:text-sm'> React </span>
                    </div>
                </div>
                <div>
                    <div className='rounded bg-white  border-2 border-[#dad7c8]  p-3 flex flex flex-col  items-center w-[80%] shadow-md shadow-[#4C3831] mx-auto '>
                        <DiNodejs size={35} />
                        <span className='text-[10px] lg:text-sm'> Node.js </span>
                    </div>
                </div>
                <div>
                    <div className='rounded bg-white  border-2 border-[#dad7c8]  p-3 flex flex flex-col  items-center w-[80%] shadow-md shadow-[#4C3831] mx-auto '>
                        <DiMongodb size={35} />
                        <span className='text-[10px] lg:text-sm'> MongoDB </span>
                    </div>
                </div>
                <div>
                    <div className='rounded bg-white  border-2 border-[#dad7c8]  p-3 flex flex flex-col  items-center w-[80%] shadow-md shadow-[#4C3831] mx-auto '>
                        <DiPython size={35} />
                        <span className='text-[10px] lg:text-sm'> Python </span>
                    </div>
                </div>
                <div>
                    <div className='rounded bg-white  border-2 border-[#dad7c8]  p-3 flex flex flex-col  items-center w-[80%] shadow-md shadow-[#4C3831] mx-auto '>
                        <SiCsharp size={35} />
                        <span className='text-[10px] lg:text-sm'> C# </span>
                    </div>
                </div>
                <div>
                    <div className='rounded bg-white  border-2 border-[#dad7c8]  p-3 flex flex flex-col  items-center w-[80%] shadow-md shadow-[#4C3831] mx-auto '>
                        <DiGit size={35} />
                        <span className='text-[10px] lg:text-sm'> Git </span>
                    </div>
                </div>
                <div>
                    <div className='rounded bg-white  border-2 border-[#dad7c8]  p-3 flex flex flex-col  items-center w-[80%] shadow-md shadow-[#4C3831] mx-auto '>
                        <DiMysql size={35} />
                        <span className='text-[10px] lg:text-sm'> MySQL </span>
                    </div>
                </div>
                <div>
                    <div className='rounded bg-white  border-2 border-[#dad7c8]  p-3 flex flex flex-col  items-center w-[80%] shadow-md shadow-[#4C3831] mx-auto '>
                        <SiTailwindcss size={35} />
                        <span className='text-[10px] lg:text-sm'> Tailwind </span>
                    </div>
                </div>
                <div>
                    <div className='rounded bg-white  border-2 border-[#dad7c8]  p-3 flex flex flex-col  items-center w-[80%] shadow-md shadow-[#4C3831] mx-auto '>
                        <SiBootstrap size={35} />
                        <span className='text-[10px] lg:text-sm'> Bootstrap </span>
                    </div>
                </div>
                <div>
                    <div className='rounded bg-white  border-2 border-[#dad7c8]  p-3 flex flex flex-col  items-center w-[80%] shadow-md shadow-[#4C3831] mx-auto '>
                        <SiFlask size={35} />
                        <span className='text-[10px] lg:text-sm'> Flask </span>
                    </div>
                </div>
                <div>
                    <div className='rounded bg-white  border-2 border-[#dad7c8]  p-3 flex flex flex-col  items-center w-[80%] shadow-md shadow-[#4C3831] mx-auto '>
                        <SiGithub size={35} />
                        <span className='text-[10px] lg:text-sm'> Github </span>
                    </div>
                </div>
                <div>
                    <div className='rounded bg-white  border-2 border-[#dad7c8]  p-3 flex flex flex-col  items-center w-[80%] shadow-md shadow-[#4C3831] mx-auto '>
                        <SiAmazonaws size={35} />
                        <span className='text-[10px] lg:text-sm'> AWS </span>
                    </div>
                </div>
                <div>
                    <div className='rounded bg-white  border-2 border-[#dad7c8]  p-3 flex flex flex-col  items-center w-[80%] shadow-md shadow-[#4C3831] mx-auto '>
                        <SiPostman size={35} />
                        <span className='text-[10px] lg:text-sm'> Postman </span>
                    </div>
                </div>
                <div>
                    <div className='rounded bg-white  border-2 border-[#dad7c8]  p-3 flex flex flex-col  items-center w-[80%] shadow-md shadow-[#4C3831] mx-auto '>
                        <SiJinja size={35} />
                        <span className='text-[10px] lg:text-sm'> Jinja </span>
                    </div>
                </div>
                <div>
                    <div className='rounded bg-white  border-2 border-[#dad7c8]  p-3 flex flex flex-col  items-center w-[80%] shadow-md shadow-[#4C3831] mx-auto '>
                        <SiBlazor size={35} />
                        <span className='text-[10px] lg:text-sm'> Blazor </span>
                    </div>
                </div>
            </div>
            <GithubCard />
        </div >
    )
}

export default TechnicalSkills