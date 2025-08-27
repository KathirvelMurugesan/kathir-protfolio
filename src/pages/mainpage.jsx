import React, { useState } from 'react';
import tecky from "../assets/tecky.jpg";
import { motion } from 'framer-motion';
import PdfDoc from '../assets/KATHIR CV.pdf';
import { GoDownload } from 'react-icons/go';
import { FaGithub, FaTwitter } from 'react-icons/fa';
import { FiMenu, FiX } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';


const Mainpage = () => {
  return (
    <div className='relative min-h-screen'>
      {/* Background image */}
      <motion.div  
        className='absolute inset-0 bg-cover bg-center z-0'
        style={{ backgroundImage: `url(${tecky})` }}
      />
      <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

      <section className='relative z-20 min-h-screen flex flex-col justify-center items-center px-4 lg:px-20'>
        <Header />
        
        <motion.div
          className="flex flex-col-reverse lg:flex-row w-full items-center justify-between gap-8 py-10"
        >
          {/* Left Content */}
          <div className='w-full lg:w-1/2 text-center lg:text-left'>
            <motion.div
              initial={{ opacity: 0, x: -120 }}
              animate={{ opacity: 1, x: 2 }}
              transition={{ stiffness: 20, damping: 70, duration: 0.7, delay: 0.3 }}
            >
              <h1 className='text-7xl md:text-6xl lg:text-7xl font-bold text-blue-400 py-4'>
                Kathirvel Murugesan
              </h1>
            </motion.div>

            <h3 className='text-3xl animate-pulse md:text-2xl font-semibold text-white py-2 px-3'>
              AI ML  --  Prompt Engineer
            </h3>
            <h3 className='text-3xl animate-pulse md:text-2xl font-semibold text-white py-2 px-3'>
              MLOPS Engineer
            </h3>
            <p className='text-base lg:text-2xl md:text-lg text-white font-raw py-2 px-3'>
              With expertise in AI, ML, and Python frameworks, I build creative and artistic applications.
            </p>

            {/* Centered Button */}
            <div className='w-full flex justify-center mt-6'>
              <div className='flex items-center bg-blue-600 text-xl gap-3 px-6 py-3 rounded-md hover:scale-105 hover:text-blue-800 hover:bg-white duration-200'>
                <GoDownload size={30}/>   
                <a href={PdfDoc} download="KATHIR CV.pdf" type='application/pdf'>
                  Download Resume
                </a> 
              </div>
            </div>
          </div>

          {/* Right Column (optional) */}
          <div className='w-full lg:w-1/2 relative flex justify-center'>
            {/* Optional image or animation */}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div className='flex flex-col lg:my-2 sm:-my-4 md:flex-row sm:flex-row justify-around items-center bg-transparent bg-opacity-35 shadow-blue-400 shadow-md p-6 rounded-3xl w-full scale-50 max-w-6xl gap-6 mt-40'> 
          <div className='text-center hover:scale-110 duration-300'>
            <span className='text-5xl font-extrabold text-white'>15+</span>
            <h2 className='text-xl md:text-2xl font-bold text-white mt-2'>Projects</h2>
          </div>

          <div className='text-center hover:scale-110 duration-300'>
            <span className='text-5xl font-extrabold text-white'>2+</span>
            <h2 className='text-xl md:text-2xl font-bold text-white mt-2'>Years of Practicing</h2>
          </div>

          <div className='text-center hover:scale-110 duration-300'>
            <span className='text-5xl font-extrabold text-white'>10+</span>
            <h2 className='text-xs md:text-2xl font-bold text-white mt-2'>Tools & Technologies</h2>
          </div>

          <div className='text-center hover:scale-110 duration-300'>
            <span className='text-5xl font-extrabold text-white'>50+</span>
            <h2 className='text-xs md:text-2xl font-bold text-white mt-2'>Certificates</h2>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Mainpage;
