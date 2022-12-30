import React from 'react'
import ReactPlayer from 'react-player';

export const LeftMed = () => {
    return (
        <div className='my-10'>
            <ReactPlayer url={"https://youtu.be/VXiA9iGJ-D8"} pip={true} width="100%" height="500px" controls={true} loop={true} playing={true} />
        </div>
    )
}
