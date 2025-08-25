import React, { useState, useEffect } from 'react';
import ProgressBar from '../coponents/Progressbarcomp';
import Educationbar from '../coponents/educationbar';
import Techcomp from '../coponents/techcomp';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const Section = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024); // lg breakpoint

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      const isLarge = window.innerWidth >= 1024;
      setIsLargeScreen(isLarge);
      setIsOpen(isLarge); // force open on large screens
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleOpen = () => {
    if (!isLargeScreen) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className="h-fit w-fit sm:w-[95vh] sm:ml-16 sm:px-4 md:w-[90%] md:mx-10 sm:mx-2 sm:my-3 lg:mx-2 bg-white/5 shadow-lg shadow-black rounded-md p-4">
      {/* Section Header */}
      <div
        className={`flex justify-between items-center cursor-pointer ${
          isLargeScreen ? '' : 'p-2 rounded-md'
        } transition`}
        onClick={toggleOpen}
      >
        <h1 className="text-5xl sm:text-4xl font-bold text-blue-500">{title}</h1>
        {!isLargeScreen && (
          <span>
            {isOpen ? <FiChevronUp size={24} /> : <FiChevronDown size={24} />}
          </span>
        )}
      </div>

      {/* Collapsible Content */}
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-[1000px]' : 'max-h-0'
        }`}
      >
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
};

const Page2 = () => {
  return (
    <>
      <center>
        <h1 className="text-6xl font-boldy mt-12 -mb-24">Personals</h1>
      </center>
      <div className="flex lg:flex-row flex-col justify-around align-middle mt-32  scale-90 gap-6  sm:mr-16">
      
        {/* Education */}
        <Section title="Education" className='p-9 '>
          <Educationbar topic="Graduation" details="Bachelor of Technology" />
          <Educationbar topic="Domain" details="Information Technology" />
          <Educationbar topic="Percentage" details="71%" />
        </Section>


        


        {/* Tech */}
        <Section title="Tech | Tools">
          <Techcomp techname="Pycharm" />
          <Techcomp techname="VS Code" />
          <Techcomp techname="Anaconda" />
          <Techcomp techname="Azure | AWS | mLops" />
          <Techcomp techname="Dockers" />
          <Techcomp techname="Jenkins | Kubernets" />
          <Techcomp techname="GIT HUB" />
          <Techcomp techname="Mongo DB" />
        </Section>

        
       

        
          {/* Skills */}

        <Section title="Skills" className="p-10 ">
          <ProgressBar progress={90} techname="Python" />
          <ProgressBar progress={60} techname="React JS" />
          <ProgressBar progress={75} techname="Machine Learning" />
          <ProgressBar progress={70} techname="Deep Learning" />
          <ProgressBar progress={90} techname="Flask" />
          <ProgressBar progress={70} techname="Database" />
          <ProgressBar progress={75} techname="Data Science" />
        </Section>
        
      </div>
    </>
  );
};

export default Page2;
