import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa6';
import { FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-row bg-slate-900 px-5 h-24 md:px-8 sm:px-12 justify-between items-center z-50 relative sm:w-screen md:w-screen">
      <div className="flex flex-row items-center">
        <motion.div initial={{ opacity: 0, x: -105 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay:0.3
            }} className="bg-gradient-to-tr from-white via-violet-200 to-white text-2xl font-extrabold text-black p-5 rounded-md">
          K
        </motion.div>
        <motion.h1 initial={{ opacity: 0, x: -105 }}
            animate={{ opacity: 1, x: 0}}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 35,
              delay:0.7
            }}  className="text-2xl font-semibold text-white p-4 dark:text-violet-900 font-sans">
          Portfolio
        </motion.h1>
      </div>

      <div className="lg:flex hidden space-x-4 p-3 rounded-lg px-14">
        {["Just Scroll","Down"," And Explore"].map((item, index) => (
          <motion.a
            key={item}
            initial={{ opacity: 0, y: -35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 0.7 + index * 0.2,
            }}
            href="#"
            className="relative text-white dark:text-gray-200 text-xs hover:text-violet-500 font-bold transition-colors duration-300 group"
          >
            {item}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-violet-600 group-hover:w-full duration-300"></span>
          </motion.a>
        ))}
      </div>

      <motion.div initial={{ opacity: 0, x: 105 }}
            animate={{ opacity: 1, x: 0}}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 35,
              delay:0.9
            }}  className="flex items-center gap-4">
       <a
  href="https://github.com/KathirvelMurugesan"
  target="_blank"
  rel="no opener no referrer"
>
  <FaGithub
    size={30}
    className="text-white hover:scale-125 cursor-pointer transition duration-300"
  />
</a>

<a
  href="https://x.com/murugesank93812?s=08"
  target="_blank"
  rel="no opener no referrer"
>
  <FaTwitter
    size={30}
    className="text-white hover:scale-125 cursor-pointer transition duration-300"
  />
</a>

<a
  href="https://wa.me/919025666734"
  target="_blank"
  rel="no opener no referrer"
>
  <FaWhatsapp
    size={30}
    className="text-white hover:scale-125 cursor-pointer transition duration-300"
  />
</a>

        <button
          className="text-white focus:outline-none lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
        </button>
      </motion.div>

{/*       
      {isMenuOpen && (
        <motion.div
          initial={{ x: 150, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 150, opacity: 0 }}
          transition={{ type: "spring", stiffness: 120 }}
          className="absolute top-28 right-5 w-48 bg-white rounded-lg shadow-lg px-6 py-6 z-50 flex flex-col space-y-4 lg:hidden"
        >
          {["home", "about", "skills", "experience"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-slate-800 font-bold hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full duration-300"></span>
            </a>
          ))}
        </motion.div>
      )} */}
    </div>
  );
};

export default Header;

// // src/components/Header.jsx
// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { FaGithub, FaTwitter, FaWhatsapp } from 'react-icons/fa';
// import { FiMenu } from 'react-icons/fi';
// import { Link } from 'react-router-dom';

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const navItems = ["home", "about", "skills", "experience"];

//   return (
//     <div className="flex flex-row bg-slate-900 px-5 h-24 md:px-8 sm:px-12 justify-between items-center z-50 relative sm:w-screen md:w-screen">
//       {/* Logo */}
//       <div className="flex flex-row items-center">
//         <motion.div
//           initial={{ opacity: 0, x: -105 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{
//             type: "spring",
//             stiffness: 100,
//             damping: 20,
//             delay: 0.3
//           }}
//           className="bg-gradient-to-tr from-white via-violet-200 to-white text-2xl font-extrabold text-black p-5 rounded-md"
//         >
//           K
//         </motion.div>
//         <motion.h1
//           initial={{ opacity: 0, x: -105 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{
//             type: "spring",
//             stiffness: 100,
//             damping: 35,
//             delay: 0.7
//           }}
//           className="text-2xl font-semibold text-white p-4 dark:text-violet-900 font-sans"
//         >
//           Portfolio
//         </motion.h1>
//       </div>

//       {/* Desktop Nav */}
//       <div className="lg:flex hidden space-x-8 p-3 rounded-lg px-14">
//         {navItems.map((item, index) => (
//           <motion.div
//             key={item}
//             initial={{ opacity: 0, y: -35 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{
//               type: "spring",
//               stiffness: 100,
//               damping: 20,
//               delay: 0.7 + index * 0.2,
//             }}
//           >
//             <Link
//               to={`/${item === "home" ? "" : item}`}
//               className="relative text-white dark:text-gray-200 text-xl hover:text-violet-500 font-bold transition-colors duration-300 group capitalize"
//             >
//               {item}
//               <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-violet-600 group-hover:w-full duration-300"></span>
//             </Link>
//           </motion.div>
//         ))}
//       </div>

//       {/* Social Icons + Mobile Menu Button */}
//       <motion.div
//         initial={{ opacity: 0, x: 105 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{
//           type: "spring",
//           stiffness: 100,
//           damping: 35,
//           delay: 0.9
//         }}
//         className="flex items-center gap-4"
//       >
//         <a
//           href="https://github.com/KathirvelMurugesan"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <FaGithub size={30} className="text-white hover:scale-125 transition duration-300" />
//         </a>
//         <a
//           href="https://x.com/murugesank93812?s=08"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <FaTwitter size={30} className="text-white hover:scale-125 transition duration-300" />
//         </a>
//         <a href="#">
//           <FaWhatsapp size={30} className="text-white hover:scale-125 transition duration-300" />
//         </a>
//         <button
//           className="text-white focus:outline-none lg:hidden"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//         >
//           <FiMenu size={30} />
//         </button>
//       </motion.div>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <motion.div
//           initial={{ x: 150, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           exit={{ x: 150, opacity: 0 }}
//           transition={{ type: "spring", stiffness: 120 }}
//           className="absolute top-28 right-5 w-48 bg-white rounded-lg shadow-lg px-6 py-6 z-50 flex flex-col space-y-4 lg:hidden"
//         >
//           {navItems.map((item) => (
//             <Link
//               key={item}
//               to={`/${item === "home" ? "" : item}`}
//               className="text-slate-800 font-bold hover:text-blue-600 transition-colors capitalize"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               {item}
//             </Link>
//           ))}
//         </motion.div>
//       )}
//     </div>
//   );
// };

// export default Header;
