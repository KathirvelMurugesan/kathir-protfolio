import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaTwitter } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-row bg-slate-900 px-5 h-24 md:px-8 sm:px-12 justify-between items-center z-50 relative sm:w-screen md:w-screen">
      
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

      {/* Social Icons - hidden on small screens */}
      <motion.div
        initial={{ opacity: 0, x: 105 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 35, delay: 0.9 }}
        className="hidden sm:flex items-center gap-4"
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

      {/* Mobile Menu Button (optional use) */}
      <button
        className="text-white focus:outline-none lg:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <FiMenu size={30} />
      </button>
    </div>
  );
};

export default Header;
