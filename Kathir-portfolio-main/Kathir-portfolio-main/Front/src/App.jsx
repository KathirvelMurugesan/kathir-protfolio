import React from 'react'
import Header from './Header'
import Mainpage from './pages/mainpage'
import Page2 from './pages/page2'
import Page3 from './pages/page3'
import Page4 from './pages/page4'
import Page5 from './pages/page5'
import ContactUs from './coponents/ContactUs.jsx'


const App = () => {
  return (
    <div className='' >
    <Header/>
    <Mainpage/>
       <p className='text-base lg:text-2xl md:text-lg text-blue-600 font-raw py-2 my-4 px-3 scale-75 sm:scale-90'>
Driven, detail-oriented full-stack developer with strong foundations in AI, ML, and modern web technologies.
Passionate about building intelligent, scalable solutions while maintaining precision and quality. </p>
    <Page2/>
         <p className='text-base lg:text-2xl md:text-lg text-blue-600 font-raw py-2 my-4 px-3 scale-75 sm:scale-90'>
"Worked on AI & Machine Learning projects involving NLP, deep learning model development, and predictive analytics. Designed and deployed containerized workflows
 using Docker, enabling scalable, efficient, and production-ready AI solutions </p>
    {/* <CertificationsPage/> */}

    
    <Page4/>

      <p className='text-base lg:text-2xl md:text-lg text-blue-500 font-raw py-2 mt-8 px-3 scale-75 sm:scale-90'>
Achievements & Milestones
Recognized for excellence in academics, technical innovation, and collaborative projects.
Dedicated to continuous growth through challenges, competitions, and impactful contributions. </p>
    <Page3/>

      <p className='text-base lg:text-2xl md:text-lg text-blue-500 font-raw py-2 mt-8 px-3 scale-75 sm:scale-90'>
Passionate full-stack developer with a strong foundation in AI, ML, and modern web technologies.
Focused on building intelligent, scalable, and user-friendly solutions with precision and creativity. </p>
    <Page5/>

      <p className='text-base lg:text-2xl md:text-lg text-blue-500 font-raw py-2 my-16 px-3 scale-75 sm:scale-90'>
Contact
Let's connect to collaborate, innovate, and create impactful solutions.
Reach out via phone, email, or social platforms to start the conversation. </p>
    <ContactUs/>
    <p className='text-base lg:text-2xl md:text-lg text-blue-500 sm:text-blue-100 sm:scale-95 font-raw py-2 my-16 px-3 scale-75 sm:scale-90'>
Thank you for taking the time to explore my portfolio.
I hope this journey through my work, skills, and achievements has given you a glimpse of my passion for technology and innovation.
Your visit means a lot — and I look forward to potential collaborations, new ideas, and exciting opportunities ahead. </p>
    </div>
  )
}

export default App

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from "./Header.jsx";
// import Page4 from "./pages/page4.jsx";
// import Page2 from "./pages/page2.jsx";
// import Page3 from "./pages/page3.jsx";
// import Mainpage from './pages/mainpage.jsx';

// export default function App() {
//   return (
//     <Router>
//       <Header />
//       <main className="p-6">
//         <Routes>
//           <Route path="/" element={<Mainpage />} />
//           <Route path="/about" element={<Page4 />} />
//           <Route path="/skills" element={<Page2 />} />
//           <Route path="/experience" element={<Page3 />} />
//         </Routes>
//       </main>
//     </Router>
//   );
// }
