import React from 'react'
import './style.css'

const SubSection = (props) => {

  const attributes = ["Creator", "Lifelong Learner"]

  const { currentTab } = props
  return (
    <div className="text-md lg:text-lg my-10 w-[90%] mx-auto">
      <div className="wrapper  mx-auto flex flex-col items-center justify-center">
        <div className="static-txt font-bold text-black basis-1/2 text-5xl text-right">I am a</div>
        <ul className="dynamic-txts  [&>*]:font-bold mx-0  text-3xl text-center text-[25px] w-full">
          <li><span className="text-[#ff3535] border-[#ff3535] font-bold ">Creator.</span></li>
          <li><span className="text-[#3c68ff] border-[#3c68ff] font-bold ">Developer.</span></li>
          <li><span className="text-[#f78748] border-[#f78748] font-bold ">Team Player.</span></li>
          <li><span className="text-[#27996b] border-[#27996b] font-bold w-full "> Lifelong Learner.</span></li>

        </ul>
      </div>
      
      <p className='text-left flex flex-col justify-around [&>*]:my-3 my-10
       px-5 py-10 bg-white flex flex-col items-center justify-around basis-3/4 rounded shadow-2xl shadow-[#dad7c8]
    
                    bg-white
                    relative
                    before:absolute
                    before:w-full
                    before:h-full
                    before:-z-10
                    before:bg-gradient-to-r
                    before:from-[#3c68ff]
                    before:to-[#27996b]
                    before:left-0
                    before:top-0
                    before:blur-[5px]
      '>

        <p>
          Hello! My name is Brandon Lewis. I am a Full-Stack Engineer located in Sacramento, CA. For the past seven years, I had been pursuing a career in medicine. However, after a year in medical school and careful reflection on my values and passions, I decided to pivot toward a career in technology, a field that I have always admired. My natural inclination towards a technical and systematic approach, along with my degree in mathematics, has made this transition into programming an extremely smooth one!
        </p>

        <p>Life to me is about growth, overcoming obstacles, and being better than you were yesterday in all facets. I will never grow weary of improving as a developer, teammate/coworker and individual. I look forward to connecting with you! Feel free to reach out via LinkedIn, email or cell.
        </p>

      </p>
    </div>

  )
}

export default SubSection