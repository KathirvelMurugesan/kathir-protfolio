import React, { useState } from 'react';
import { FiX } from 'react-icons/fi';

const CertificationCard = ({ name, provider, year, image }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      {/* Card */}
      <div
        onClick={openModal}
        className="cursor-pointer flex flex-col justify-center sm:flex-row items-start sm:items-center gap-4 p-4 scale-90 border border-white/30 rounded-lg shadow-md bg-white/25 hover:bg-blue-400/40 duration-200"
      >
        {image && (
          <img
            src={image}
            alt={name}
            className="w-20 h-20 object-cover rounded-md border border-white"
          />
        )}
        
        <div className=' flex flex-col justify-center align-middle items-center'>
          <h2 className="text-lg sm:text-xl font-semibold text-white">{name}</h2>
          <p className="text-white/80 text-sm">{provider}</p>
          {year && <p className="text-white/50 text-xs">{year}</p>}
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 px-4 py-6">
          <div className="relative max-w-4xl w-full">
            {/* Close button */}
            <FiX
              className="absolute top-4 right-4 text-white text-3xl cursor-pointer"
              onClick={closeModal}
            />

            {/* Fullscreen Image */}
            <img
              src={image}
              alt={name}
              className="w-full h-auto max-h-[90vh] object-contain rounded-md border border-white p-2 bg-black"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default CertificationCard;
