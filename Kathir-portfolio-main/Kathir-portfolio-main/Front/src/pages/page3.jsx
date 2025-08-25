import React, { useState } from 'react';
import Archivements from '../coponents/archivements';
import imagegreek from '../assets/Blrimg.jpg';
import bubblerose from '../assets/gpic.jpg';
import bubblerose1 from '../assets/The Joy of Computing using Python.jpg';
import guvi from '../assets/GuviCertification - 015Iu77306sBWqH921.png';
import DatascienceIntern from '../assets/Screenshot_2024_0322_175146.jpg';
import Allience from '../assets/Allience.jpeg';
import codsoft from '../assets/Screenshot_2024_0322_085934.jpg';
import robotrose from '../assets/kiot.jpg';
import skillvertex from '../assets/skillvertex.jpg'

const Page3 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="w-full scale-90 px-4 py-6">
      {/* Dropdown Header */}
      <div
        className="cursor-pointer bg-slate-950 hover:bg-blue-900/45 text-white text-center flex flex-row justify-between px-6 items-center rounded-lg py-4 shadow-lg shadow-black/60 transition-all duration-200 "
        onClick={toggleDropdown}
      >
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-boldy">
          Achievements
        </h1>
        <span className="p-4 text-white">{isOpen ? '▲' : '▼'}</span>
      </div>

      {/* Dropdown Content */}
      {isOpen && (
        <div className="mt-8 scale-95 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <Archivements
              topic="Hackathon  JSR College"
              imagename={robotrose}
              detailing="Secured 2nd place in the state-level hackathon hosted by Jai Sri Ram Engineering College, winning a cash prize for innovative problem-solving."
            />

            <Archivements
              topic="Skill Vertex with Stipend "
              imagename={skillvertex}
              detailing="Completed Skill Vertex AI & Machine Learning internship with a stipend of ₹15,000, gaining hands-on experience in Prompt Engineering, Deep Learning, and model deployment. Worked on real-world projects
               involving NLP, computer vision, and AI-powered solutions"
            />

            <Archivements
              topic="Alliance University Hackathon"
              imagename={bubblerose}
              detailing="Ranked among the Top 5 teams in Alliance University Goal Tracking Hackathon, showcasing teamwork and creativity in solution design."
            />

             <Archivements
              topic="Guvi Certification"
              imagename={guvi}
              detailing="Successfully completed a certified online course with Guvi, including a hands-on mini project in full-stack development."
            />

            <Archivements
              topic="Reva University GameForce"
              imagename={imagegreek}
              detailing="Achieved Top 15 finalist position in the GameForce Game Development Challenge at Reva University, competing among 100+ teams."
            />

            <Archivements
              topic="CodSoft Internship"
              imagename={codsoft}
              detailing="Completed a software development internship with CodSoft during my third year, gaining real-world experience and project exposure."
            />

            

            <Archivements
              topic="Data Science Internship"
              imagename={DatascienceIntern}
              detailing="Completed a virtual internship focused on Data Science fundamentals and applied analytics through online project modules."
            />

            <Archivements
              topic="Alliance Hackathon Certificate"
              imagename={Allience}
              detailing="Recognized for active participation in the Alliance University Hackathon, demonstrating problem-solving and rapid prototyping skills."
            />

            <Archivements
              topic="NPTEL – Python Course"
              imagename={bubblerose1}
              detailing="Completed the NPTEL-certified course 'The Joy of Computing using Python' in my first year, laying a strong programming foundation."
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Page3;
