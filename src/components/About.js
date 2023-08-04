import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        
        <div className='flex flex-col justify-center items-center w-full h-full'>
            {/* Here making 2 grid coloums for About and other description */}

            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>

                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl inline font-bold border-b-4 border-pink-600'>About</p>
                </div>

                 <div>

                </div>

            </div>

                 <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>

                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Hi. I'm Vaishnav, nice to meet you. Please take a look around.</p>
                    </div>

                    <div className=''>
                        <p className='text-xl'>
                        I'm a front-end developer who enjoys creating beautiful and user-friendly websites. I love learning to create amazing software that makes people's lives better. I am enthusiastic about contributing my front-end development skills to projects that make a positive impact on users lives.
                        </p>
                    </div>

                 </div>
        </div>

    </div>
  )
}

export default About