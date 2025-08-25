import React from 'react'
import { FaGithub, FaLinkedin, FaLocationDot, FaPhone } from 'react-icons/fa6'
import predator from '../assets/Profilepic.jpeg'
const Page5 = () => {
  return (
    <div className='flex flex-col align-middle justify-center items-center scale-90  '>
        <h1 className='text-6xl text-white font-boldy mt-6 -mb-8'>About</h1>

       <img src={predator} width={600}         className="w-[450px] h-[350px] relative top-24 z-50 sm:scale-90 sm:rounded-xl mt-6 object-cover hover:scale-105 duration-300 rounded-md mb-0"
 alt="" srcset="" />
 <div className='bg-gradient-to-br from-black  via-slate-950  to-blue-950  mx-12 py-10 h-fit sm:w-[100%] md:w-[100%]   flex flex-col align-middle rounded-md rounded-b-3xl scale-90 my-4'>
       <div className='my-9 font-semibold px-6 sm:scale-90'>
     I’m a passionate AI & Machine Learning Engineer with a strong focus on Prompt Engineering, Deep Learning, and intelligent data-driven solutions. My expertise lies in designing and fine-tuning advanced language models, creating AI-powered tools, and developing deep learning architectures that solve complex real-world problems. I specialize in integrating large language models with cutting-edge NLP techniques, building robust machine learning pipelines, and leveraging cloud platforms like AWS for scalable AI deployments. With hands-on experience in Python, TensorFlow, PyTorch, and modern AI frameworks, I thrive on transforming ideas into impactful, future-ready AI 
     solutions — from predictive analytics to generative AI applications.
       </div>
       <div className='flex lg:flex-row justify-between bg-gradient-to-r from-black to-blue-700 px-12 mx-10 md:flex-col sm:flex-col rounded-md hover:from-black hover:to-black hover:text-white ease-in-out py-5 sm:scale-90 hover:scale-100 scale-90 duration-300 delay-100  '>
        <div className='flex flex-row  align-middle items-center  px-2 py-4  p-12 m-2 '>
        <FaLocationDot size={30}/> <h1 className='px-4'>Rasipuram, Nammakal, India</h1>
        </div>

        <div className='flex flex-row align-middle items-center px-2 py-4 m-2 '>
         <FaPhone size={30}/> <h1 className='px-4'>+91 90256 66734</h1>
        </div>

        <div className='flex flex-row  align-middle items-center px-2 py-4 m-2 '>
        <FaLinkedin size={30}/> <h1 className='px-4'><a href='https://www.linkedin.com/in/kathirvel-m-07b315278?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'>Kathirvel-m</a></h1>
        </div>
        <div className='flex flex-row  align-middle items-center px-2 py-4 m-2 '>
        <FaGithub size={30}/> <h1 className='px-4 '><a href='https://github.com/KathirvelMurugesan'>Kathirvelmurugesan1</a></h1>
        </div>


       </div>
       </div>




    </div>
  )
}

export default Page5
