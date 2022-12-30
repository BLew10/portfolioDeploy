import React from 'react'
import './style.css'
import TechnicalSkills from './TechSkills'




const SideBar = () => {

    return (

        <div className=" flex flex-col items-center lg:basis-1/4 w-full">
            <div className=" flex flex-col items-center justify-center">
                <img src="https://i.imgur.com/i30nwTk.png" alt="" className='rounded bg-[#dad7c8] my-8 h-[300px] w-[300px] border-[5px] border-white' />

                <div
                    className=" px-5 py-10 bg-white flex flex-col items-center justify-around basis-3/4 rounded shadow-2xl shadow-[#dad7c8]
    
                    bg-white
                    relative
                    before:absolute
                    before:w-full
                    before:h-full
                    before:-z-10
                    before:bg-gradient-to-r
                    before:from-[#f78748]
                    before:to-[#27996b]
                    before:left-0
                    before:top-0
                    before:blur-[5px]">
                    <p className="text-xl ">Brandon Lewis</p>
                    <p className="text-sm text-gray-500">Full-Stack Engineer</p>
                    <div id="phone" className="flex justify-evenly items-center mx-0 my-5 hover:shadow-lg py-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                            className="bi bi-phone w-8 h-8 shadow-md shadow-[#dad7c8] mx-3 px-1 py-1 rounded text-[#dad7c8]"
                            viewBox="0 0 16 16">
                            <path
                                d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
                            <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                        </svg>
                        <div className="flex flex-col justify-around items-center">
                            <span className="text-gray-500 text-sm">phone</span>
                            <span className="mx-3">(916) 509 0306</span>
                        </div>
                    </div>
                    <div id="email" className="flex justify-center items-center mx-0 my-5 hover:shadow-lg py-4"><svg
                        xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                        className="bi bi-envelope w-8 h-8 shadow-md shadow-[#dad7c8] mx-3 px-1 py-1 rounded text-[#dad7c8]"
                        viewBox="0 0 16 16">
                        <path
                            d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                    </svg>
                        <div className="flex flex-col justify-around items-center">
                            <span className="text-gray-500 text-sm">email</span>
                            <span className="mx-3">brandonlewis.10@gmail.com</span>
                        </div>
                    </div>
                    <div id="location" className="flex justify-center items-center mx-0 my-5 hover:shadow-lg py-4"><svg
                        xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                        className="bi bi-geo-alt-fill w-8 h-8 shadow-md shadow-[#dad7c8] mx-3 px-1 py-1 rounded text-[#dad7c8]"
                        viewBox="0 0 16 16">
                        <path
                            d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                    </svg>
                        <div className="flex flex-col justify-around items-center">
                            <span className="text-gray-500 text-sm">location</span>
                            <span className="mx-3">Sacramento, CA</span>
                        </div>
                    </div>
                    <div className="flex justify-center items-center mx-0 my-5  shadow-[#dad7c8] py-4 hover:bg-gradient-to-r px-[5px] py-[5px] from-[#3c68ff] via-[#27996b] to-[#f78748] rounded-lg hover:scale-[97%] duration-300">
                        <button
                            className=" self-center bg-[#dad7c8]  duration-300 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                            <svg className="fill-current w-4 h-4 mr-2 text-[#" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20">
                                <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                            </svg>
                            <a href='BrandonLewisResume.pdf' download={'BrandonLewisResume.pdf'}>Download Resume</a>
                        </button>
                    </div>
            
                </div>
                
            </div>

        </div>
    )
}

export default SideBar