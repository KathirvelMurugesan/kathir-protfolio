import React from 'react'
import {motion} from 'framer-motion'

const Educationbar = ({topic,details}) => {
  return (
    <>   
    <motion.div  initial={{opacity:0,x:105}}
        animate={{opacity:1,x:0}}
        transition={{
          type:"keyframes",
            stiffness: 100,
            damping:20,
            duration:0.7,
            delay:0.3
          }} className=''>   
       <div className=' text-white  text-xl font-EagleLake px-2 py-2 my-2    '>
       {`${topic}`}</div>
  

        <div className='text-xl py-3 scale-95
         font-boldy text-white p-2 m-2 hover:bg-white hover:text-blue-600 bg-blue-700 hover:scale-105 duration-200 delay-1505 rounded-lg px-4 '>
            {details}
        </div>
      
    </motion.div>
    
    </>
  )
}

export default Educationbar
