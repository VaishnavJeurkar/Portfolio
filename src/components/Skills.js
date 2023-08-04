import cPlus from '../assets/C++.png'
import cSharp from '../assets/C-Sharp.png' 
import Python from '../assets/Python.png' 
import HTML from '../assets/HTML.png' 
import CSS from '../assets/CSS.png' 
import JavaScript from '../assets/JavaScript.png' 
import React from '../assets/React.png'
import Tailwind from '../assets/tailwind.png' 
import MaterialUI from '../assets/Material-ui-01.png'
import MySQL from '../assets/MySQL.jpg' 
import Firebase from '../assets/Firebase.png' 
import GitHub from '../assets/Github.jpg' 

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300 py-[650px] lg:py-[450px]'>
            {/* Container */}
            
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
                <p className='text-xl py-4'>// These are the technologies I've worked with</p>
            </div>            
                
                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 cursor-pointer'>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={cPlus} alt='C++'></img>
                        <p className='py-4'>C++</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={cSharp} alt='C-Sharp'></img>
                        <p className='py-4'>C-Sharp</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Python} alt='Python'></img>
                        <p className='py-4'>Python</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={HTML} alt='HTML'></img>
                        <p className='py-4'>HTML</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={CSS} alt='CSS'></img>
                        <p className='py-4'>CSS</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={JavaScript} alt='JavaScript'></img>
                        <p className='py-4'>JavaScript</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={React} alt='React'></img>
                        <p className='py-4'>React</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Tailwind} alt='Tailwind'></img>
                        <p className='py-4'>Tailwind</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={MaterialUI} alt='MaterialUI'></img>
                        <p className='py-4'>Material UI</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={MySQL} alt='MySQL'></img>
                        <p className='py-4'>MySQL</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Firebase} alt='Firebase'></img>
                        <p className='py-4'>Firebase</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={GitHub} alt='GitHub'></img>
                        <p className='py-4'>GitHub</p>
                    </div>

            </div>
        </div>
    </div>
  )
}

export default Skills