import React from 'react';
import { motion } from 'framer-motion';

const ProgressBar = ({ progress,techname }) => {
  return (
    <div className='hover:scale-95 scale-75  duration-200 '>
             <p className='text-2xl py-5  font-raw ' >{techname}</p>
    <div className="w-full bg-white  rounded-full h-1.5 overflow-hidden hover:scale-110 duration-200 ">
      <motion.div
        initial={{opacity:0,x:-105}}
        animate={{opacity:1,x:0}}
        transition={{
            stiffness: 90,
            damping:25,
          }}

        className="bg-blue-500 h-full  text-white text-sm font-medium text-center leading-6 transition-all  duration-300 ease-in-out"
        style={{ width: `${progress}%` }}
      >
      </motion.div>
      {progress}
    </div>
    </div>
  );
};

export default ProgressBar;
