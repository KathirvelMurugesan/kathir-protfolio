import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaTwitter } from 'react-icons/fa';
import { FiMenu, FiX } from 'react-icons/fi'; // Added FiX for close icon
import { HiOutlineMail } from 'react-icons/hi';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-row bg-slate-900 px-5 h-24 md:px-8 sm:px-12 justify-between items-center z-50 relative w-screen">
      
      {/* Logo and Title */}
      <div className="flex flex-row items-center">
        <motion.div
          initial={{ opacity: 0, x: -105 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.3 }}
          className="bg-gradient-to-tr from-white via-violet-200 to-white text-xl font-extrabold text-black px-4 py-2 rounded-md"
        >
          K
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, x: -105 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 35, delay: 0.7 }}
          className="text-2xl font-semibold text-white p-4 font-sans"
        >
          Portfolio
        </motion.h1>
      </div>

      {/* Desktop Social Icons */}
      <motion.div
        initial={{ opacity: 0, x: 105 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 35, delay: 0.9 }}
        className="hidden md:flex items-center gap-4"
      >
        <a
          href="https://github.com/KathirvelMurugesan"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={30} className="text-white hover:scale-125 cursor-pointer transition duration-300" />
        </a>

        <a
          href="https://x.com/murugesank93812?s=08"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter size={30} className="text-white hover:scale-125 cursor-pointer transition duration-300" />
        </a>

        <a href="mailto:kathirvelmurugesan1@gmail.com">
          <HiOutlineMail size={30} className="text-white hover:scale-125 cursor-pointer transition duration-300" />
        </a>
      </motion.div>

      {/* Mobile Menu Button */}
      <button
        className="text-white focus:outline-none md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="absolute top-24 left-0 w-full bg-slate-900 flex flex-col items-center gap-6 py-6 md:hidden z-40"
        >
          <a
            href="https://github.com/KathirvelMurugesan"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white text-lg hover:text-violet-200 transition duration-300"
          >
            <FaGithub size={24} /> GitHub
          </a>

          <a
            href="https://x.com/murugesank93812?s=08"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white text-lg hover:text-violet-200 transition duration-300"
          >
            <FaTwitter size={24} /> Twitter
          </a>

          <a
            href="mailto:kathirvelmurugesan1@gmail.com"
            className="flex items-center gap-2 text-white text-lg hover:text-violet-200 transition duration-300"
          >
            <HiOutlineMail size={24} /> Email
          </a>
        </motion.div>
      )}
    </div>
  );
};

export default Header;
