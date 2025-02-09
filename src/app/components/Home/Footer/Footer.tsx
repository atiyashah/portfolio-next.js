
import Link from 'next/link';
import React from 'react';
import { BiEnvelope, BiMapPin, BiPhone } from 'react-icons/bi';
import { FaLinkedin, FaGithub } from 'react-icons/fa'; 

const Footer = () => {
  return (
    <div className='pt-[5rem] pb-[3rem] bg-black'>
      <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem] border-b-[1.4px] pb-5 border-gray-600 border-opacity-40'>
        {/*first part */}
        <div>
          <div className='text-[35px] font-semibold text-white'>
            At<span className='text-red-600'>i</span>ya
          </div>
          <h1 className='text-gray-400 mt-4'>
          Full-Stack Developer | Problem Solver
       Building innovative solutions with code.
          </h1>
          
          {/* Social Media Icons */}
          <div className='flex items-center gap-4 mt-4'>
            <a href='https://www.linkedin.com/' target='_blank' rel='noopener noreferrer'>
              <FaLinkedin className='text-gray-400 text-[30px] hover:text-yellow-600' />
            </a>
            <a href='https://github.com/' target='_blank' rel='noopener noreferrer'>
              <FaGithub className='text-gray-400 text-[30px] hover:text-yellow-600' />
            </a>
             </div>
             
             </div>

             {/* 2nd part */ }
             <div className='md:mx-auto'>
                <h1 className='text-white font-semibold mb-[1.4rem] text-[17px]'>Quick Links</h1>
                <Link href={'/about'}> <p className='text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer hover:text-yellow-300
                '>About</p></Link>
          
        <Link href={'/project'}>  <p className='text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer hover:text-yellow-300
                '>Project</p></Link>
          
       <Link href={'/skills'}>  <p className='text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer hover:text-yellow-300
                '>Skills</p> </Link> 
          
      <Link href={'/contact'}>   <p className='text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer hover:text-yellow-300
                '>Contact</p> </Link> 
          
        </div>
        {/* 3rd part */}
        <div className='lg:mx-auto'>
        <h1 className='text-white font-semibold mb-[1.4rem] text-[17px]'>Address</h1>
      <div className='flex items-center mt-[1rem] space-x-2 '>
        <BiMapPin  className='w-[1rem] h-[1rem] text-yellow-400'/>
        <p className='text-[17px] font-normal text-white opacity-75 '>Karachi, Pakistan</p>
      </div>

      <div className='flex items-center mt-[1rem] space-x-2 '>
        <BiEnvelope  className='w-[1rem] h-[1rem] text-yellow-400'/>
        <p className='text-[17px] font-normal text-white opacity-75 '>atiyashah890@gmail.com</p>
      </div>

      <div className='flex items-center mt-[1rem] space-x-2 '>
        <BiPhone  className='w-[1rem] h-[1rem] text-yellow-400'/>
        <p className='text-[17px] font-normal text-white opacity-75 '>031 43 456789</p>
      </div>
        </div>
        
      </div>
      <div className='mt-[1.4rem] w-[80%] mx-auto text-white opacity-70 '>
        &#169; copyright Atiya Shah 2024
      </div>
    </div>
  );
}

export default Footer;
