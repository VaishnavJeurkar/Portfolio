import React, { useState } from 'react'
import logo from '../assets/logo.png'
import {FaBars, FaGithub, FaLinkedin, FaTimes} from 'react-icons/fa'
// import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {Link} from 'react-scroll'


function Navbar() {

    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
 
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] shadow border-b-4 border-[#172b47] text-gray-300 z-10'>

        <div>
            <img src={logo} alt='Logo' style={{width:'50px'}}></img>
        </div>

        {/* Menu */}
        
            <ul className='hidden md:flex'>
                <li className='hover:text-pink-600'>
                <Link to="home" smooth={true} offset={50} duration={500} >
                Home
                </Link>
                </li>
                <li className='hover:text-pink-600'>
                <Link to="about" smooth={true} offset={50} duration={500} >
                About
                </Link>
                </li>
                <li className='hover:text-pink-600'>
                <Link to="skills" smooth={true} offset={50} duration={500} >
                Skills
                </Link>
                </li>
                <li className='hover:text-pink-600'>
                <Link to="work" smooth={true} offset={50} duration={500} >
                Work
                </Link>
                </li>
                <li className='hover:text-pink-600'>
                <Link to="contact" smooth={true} offset={50} duration={500} >
                Contact
                </Link>
                </li>
            </ul>
           

        {/* Hamburger */}
            <div onClick={handleClick} className='md:hidden z-10 cursor-pointer'>
                {!nav ?  <FaBars></FaBars> : <FaTimes></FaTimes>}
            </div>

        {/* Mobile Menu */}
            
                <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl hover:text-pink-600'> 
                <Link onClick={handleClick} to="home" smooth={true} offset={50} duration={500} >
                Home
                </Link></li>
                <li className='py-6 text-4xl hover:text-pink-600'>
                <Link onClick={handleClick} to="about" smooth={true} offset={50} duration={500} >
                About
                </Link>
                </li>
                <li className='py-6 text-4xl hover:text-pink-600'> 
                <Link onClick={handleClick} to="skills" smooth={true} offset={50} duration={500}>
                Skills
                </Link></li>
                <li className='py-6 text-4xl hover:text-pink-600'> 
                <Link onClick={handleClick} to="work" smooth={true} offset={50} duration={500} >
                Work
                </Link></li>
                <li className='py-6 text-4xl hover:text-pink-600'>
                <Link onClick={handleClick} to="contact" smooth={true} offset={50} duration={500} >
                Contact
                </Link></li>
                </ul>
        

        {/* Social Icons */}
            <div className='hidden lg:flex fixed flex-col top-[30%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600  '>
                        <a className='flex justify-between items-center w-full text-gray-300' href='https://www.linkedin.com/in/vaishnav-jeurkar-64a235250/' target='blank'>
                            Linkedin <FaLinkedin size={30}></FaLinkedin>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-center items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                        <a className='flex justify-between items-center w-full text-gray-300' href='https://github.com/VaishnavJeurkar' target='blank'>
                            GitHub <FaGithub size={30}></FaGithub>
                        </a>
                    </li>
                    {/* <li className='w-[160px] h-[60px] flex justify-center items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#cf0000]'>
                        <a className='flex justify-between items-center w-full text-gray-300' href='jeurkarvaishnav@gmail.com' target='_blank'>
                            Email <HiOutlineMail size={30}></HiOutlineMail>  
                        </a>
                    </li> */}
                    <li className='w-[160px] h-[60px] flex justify-center items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-600'>
                        <a className='flex justify-between items-center w-full text-gray-300' href='/'>
                            Resume <BsFillPersonLinesFill size={30}></BsFillPersonLinesFill>
                        </a>
                    </li>
                </ul>
            </div>

    </div>
  )
}

export default Navbar