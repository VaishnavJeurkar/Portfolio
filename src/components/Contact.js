import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] text-gray-300 flex justify-center items-center p-4 py-[440px]'>

        <form method='POST' action='https://getform.io/f/2549c261-811d-440c-a829-29806ad4495e' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Let's Talk</p>
                <p className='py-4'>// Submit the form below</p>
            </div>
                <input type='text' placeholder='Name' name='name' className='p-2 bg-[#ccd6f6]  text-gray-950 placeholder:text-gray-700'></input>
                <input type='email' name='email' placeholder='Email' className='my-4 p-2 bg-[#ccd6f6]  text-gray-950 placeholder:text-gray-700'></input>
                <textarea name='messsage'  rows='10' placeholder='Message. . .' className='bg-[#ccd6f6] p-2  text-gray-950 placeholder:text-gray-700'></textarea>
                <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 duration-300 px-4 py-3 my-8 mx-auto flex item-center rounded'>Proceed</button>
        </form>

    </div>
  )
}

export default Contact