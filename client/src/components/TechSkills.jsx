import React from 'react'
import GithubCard from './GithubCard';
import './CardFlip.css'
import { skillList } from './SkillListInfo';

import { DiJavascript1, DiReact, DiNodejs, DiMongodb, DiPython, DiGit, DiMysql } from "react-icons/di";
import { SiAmazonaws, SiGithub, SiPostman, SiJinja, SiFlask, SiBlazor, SiTailwindcss, SiCsharp, SiBootstrap } from "react-icons/si";



const TechnicalSkills = () => {
    return (
        <div className='w-full mx-auto text-[#4C3831]'>
            <div className='text-2xl font-semibold my-5'>Technical Skillset </div>
            <div className=" grid grid-cols-4 justify-start items-center mx-auto [&>*]:my-[11px] w-full [&>*]:text-md [&>*]:mx-auto">
                {skillList.map(skill =>
                    skill.projectsUsingSkill.length > 0 ?
                        <div className="flip-container">
                            <div className="flip-card">
                                <div className="flip-card-front">
                                    <div>{skill.icon}</div>
                                    <div>{skill.name}</div>
                                </div>

                                <div className={`flip-card-back ${skill.projectsUsingSkill.length > 4 && "long"}`}>
                                    <strong className='underline'>Projects</strong>
                                    <ul>
                                        {skill.projectsUsingSkill.map(project =>
                                            <li className="listItem">{project}</li>
                                        )}
                                    </ul>
                                </div>



                            </div>
                        </div> :
                        <div className="flip-container">
                            <div className="flip-card">
                                <div className="flip-card-front">
                                    <div>{skill.icon}</div>
                                    <div>{skill.name}</div>
                                </div>

                                <div className={`flip-card-back ${skill.projectsUsingSkill.length > 3 && "long"}`}>
                                    <div>{skill.icon}</div>
                                    <div>{skill.name}</div>
                                </div>



                            </div>
                        </div>


                )}
            </div>
            <GithubCard />
        </div >
    )
}

export default TechnicalSkills