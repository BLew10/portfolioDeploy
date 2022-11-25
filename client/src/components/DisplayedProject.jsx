import React, { useState, useEffect } from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ReactPlayer from 'react-player';
import { projectInfo } from './ProjectInfo'



const DisplayedProject = (props) => {
    const { displayProjectIdx } = props
    const [displayed, setDisplayed] = useState(projectInfo[0])

    useEffect(() => {
        setDisplayed(projectInfo[displayProjectIdx])
    }, [displayProjectIdx])



    return !displayed.isWireFrame ? (
        <div className='flex flex-col items-center justify-start [&>*]:w-full'>
            <div className='flex justify-around my-5 w-full'>
                {displayed.youtube && <a href={displayed.youtube} className="hover:cursor-pointer hover:font-bold hover:underline text-lg">YouTube <img src="https://img.icons8.com/dotty/80/4C3831/youtube-play.png" /></a>}

                {displayed.deployed && <a href={displayed.deployed} className="hover:cursor-pointer hover:font-bold hover:underline text-lg">Site <img src="https://img.icons8.com/wired/64/4C3831/globe-earth.png" /></a>}


                <a href={displayed.github} className="hover:cursor-pointer hover:underline hover:font-bold text-lg">Repo <img src="https://img.icons8.com/wired/64/4C3831/folder-invoices.png" /></a>
            </div>


            <div className='flex justify-between w-[full] items-center'>
                <Carousel showArrows={true} className={`w-[90%] mx-auto`}>
                    {displayed.videos.map(video =>
                        <div>
                            <p className='text-xl font-semibold text-[#4C3831]'>{video.description}</p>
                            <ReactPlayer url={video.src} pip={true} width="100%" controls={true} loop={true} playing={true} />

                        </div>
                    )}

                </Carousel>
            </div>
            <div>
                <ul className='[&>*]:text-left [&>*]:my-3 list-disc     
                    bg-white
                    relative
                    before:absolute
                    before:w-full
                    before:h-full
                    before:-z-10
                    before:bg-gradient-to-r
                    before:from-[#ffd438]
                    before:to-[#fb3434]
                    before:left-0
                    before:top-0
                    before:blur-[5px] px-8 py-4 my-4 w-[90%] mx-auto'>
                      <li className=' text-[#4C3831] list-none text-center'> <span className='font-semibold'> Built Using: </span> {displayed.technologies}</li>
                            <li className='text-[#4C3831] list-none'> <span className='font-semibold'> Description: </span> {displayed.description}</li>

                    {displayed.highlights.map(highlight => <li>{highlight}</li>)}

                </ul>
            </div>
        </div>
    ) :
        <div>
            {displayed.projects.map(wireframe =>
                <div className='flex flex-col items-center justify-start [&>*]:w-full'>
                    <h1 className='text-2xl font-semibold text-[#4C3831]'>{wireframe.title}</h1>
                    <div className='flex justify-around my-5 w-full'>

                        {/* {displayed.deployed && <a href={displayed.deployed} className="hover:cursor-pointer hover:font-bold hover:underline text-lg">Site <img src="https://img.icons8.com/wired/64/4C3831/globe-earth.png" /></a>} */}


                        <a href={wireframe.github} className="hover:cursor-pointer hover:underline hover:font-bold text-lg">Repo <img src="https://img.icons8.com/wired/64/4C3831/folder-invoices.png" /></a>
                    </div>

                    <div className='flex justify-between w-[full] items-center'>
                        <Carousel showArrows={true} className={`w-[90%] mx-auto`}>
                            {wireframe.videos.map(video =>
                                <div>
                                    <p className='text-xl font-semibold text-[#4C3831]'>{video.description}</p>
                                    <ReactPlayer url={video.src} pip={true} width="100%" controls={true} loop={true} playing={true} />

                                </div>
                            )}

                        </Carousel>
                    </div>
                    <div>
                        <ul className='[&>*]:text-center [&>*]:my-3 list-disc     
                    bg-white
                    relative
                    before:absolute
                    before:w-full
                    before:h-full
                    before:-z-10
                    before:bg-gradient-to-r
                    before:from-[#ffd438]
                    before:to-[#fb3434]
                    before:left-0
                    before:top-0
                    before:blur-[5px] px-8 py-4 my-4 w-[90%] mx-auto'>
                            <li className=' text-[#4C3831] list-none text-center'> <span className='font-semibold'> Built Using: </span> {wireframe.technologies}</li>
                            <li className='text-[#4C3831] list-none'> <span className='font-semibold'> Description: </span> {wireframe.description}</li>

                        </ul>
                    </div>
                </div>
            )}
        </div>
}

export default DisplayedProject

