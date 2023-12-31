import React from 'react'
import Redux from '../assets/JavaScript.png'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen bg-[#0a192f] text-gray-300 py-[100px]'>
        <div className='max-w-[1000px] mx-auto p-4 pt-10 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Work</p>
                <p className='py-6'>// Check out some of my recent work.</p>
            </div>

                {/* Grid Container */}
            <div  
                className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {/* Grid Item */}
                <div style={{backgroundImage:`url(${Redux})`}}
                 className='shadow-lg shadow-[#0a192f] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-black tracking-wider'>
                        JavaScript Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-900 font-bold text-lg'>
                                    Demo
                                </button>
                            </a>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-900 font-bold text-lg'>
                                    Code
                                </button>
                            </a>
                        </div>                        
                    </div>
                </div>
                <div style={{backgroundImage:`url(${Redux})`}}
                 className='shadow-lg shadow-[#0a192f] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-black tracking-wider'>
                        JavaScript Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-900 font-bold text-lg'>
                                    Demo
                                </button>
                            </a>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-900 font-bold text-lg'>
                                    Code
                                </button>
                            </a>
                        </div>                        
                    </div>
                </div>
                <div style={{backgroundImage:`url(${Redux})`}}
                 className='shadow-lg shadow-[#0a192f] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-black tracking-wider'>
                        JavaScript Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-900 font-bold text-lg'>
                                    Demo
                                </button>
                            </a>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-900 font-bold text-lg'>
                                    Code
                                </button>
                            </a>
                        </div>                        
                    </div>
                </div>
                <div style={{backgroundImage:`url(${Redux})`}}
                 className='shadow-lg shadow-[#0a192f] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-black tracking-wider'>
                        JavaScript Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-900 font-bold text-lg'>
                                    Demo
                                </button>
                            </a>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-900 font-bold text-lg'>
                                    Code
                                </button>
                            </a>
                        </div>                        
                    </div>
                </div>
                <div style={{backgroundImage:`url(${Redux})`}}
                 className='shadow-lg shadow-[#0a192f] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-black tracking-wider'>
                        JavaScript Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-900 font-bold text-lg'>
                                    Demo
                                </button>
                            </a>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-900 font-bold text-lg'>
                                    Code
                                </button>
                            </a>
                        </div>                        
                    </div>
                </div>
                <div style={{backgroundImage:`url(${Redux})`}}
                 className='shadow-lg shadow-[#0a192f] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-black tracking-wider'>
                        JavaScript Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-900 font-bold text-lg'>
                                    Demo
                                </button>
                            </a>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-900 font-bold text-lg'>
                                    Code
                                </button>
                            </a>
                        </div>                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work