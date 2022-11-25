import React, { useState, useEffect } from 'react'
import DisplayedProject from './DisplayedProject';
import { projectInfo } from './ProjectInfo';

const Projects = () => {
  let projects = {}
  projectInfo.forEach((project, i) => i !== 0 ? projects[project.title] = false : projects[project.title] = true)

  let [projectsToggle, setProjectsToggle] = useState(projects)
  let [displayProjectIdx, setDisplayedProjectIdx] = useState(0)


  const handleClick = (projectTitle, idx) => {
    let projects = {}
    for (let project in projectsToggle) {
      projects[project] = false
    }
    projects[projectTitle] = true
    setProjectsToggle({ ...projects })

    setDisplayedProjectIdx(idx)



  }

  console.log(projectInfo[0].bgColor)

  return (
    <div className="">

      <div className=' border-black lg:w-2/3 items-center justify-center rounded flex mx-auto my-5 '>
        {projectInfo.map((project, idx) =>
          <div className={` basis-1/2 hover:cursor-pointer ${projectsToggle[project.title] && "bg-gradient-to-r px-[5px] py-[5px] from-[#3c68ff] via-[#27996b] to-[#f78748] rounded-lg hover:scale-[97%] duration-300 "}`}>
            <div className={` bg-[#dad7c8]  font-semibold text-black basis-1/2  items-center justify-center text-center ${projectsToggle[project.title] ? "font-bold border-2 border-black rounded " : ""}`} onClick={() => handleClick(project.title, idx)}>{project.title}</div>

          </div>
        )}

      </div>
      <DisplayedProject displayProjectIdx={displayProjectIdx} />
    </div>
  )
}

export default Projects