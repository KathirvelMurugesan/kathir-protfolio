import React, { useState } from 'react';
import { FiX } from 'react-icons/fi';

const Archivements = ({ topic, detailing, imagename }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      {/* Card */}
      <div
        className="bg-slate-950 rounded-md shadow-lg shadow-black/50 overflow-hidden w-full p-4 hover:shadow-xl hover:scale-105 hover:bg-white group duration-200
                   flex flex-col sm:flex-col md:flex-col"
      >
        {/* Image first on small screens */}
        <img
          src={imagename}
          alt={topic}
          onClick={openModal}
          className="w-full h-48 sm:h-52 md:h-64 object-cover rounded-md mb-4 cursor-pointer order-1"
        />

        {/* Text content */}
        <div className="order-2">
          <h1 className="lg:text-lg sm:text-xl font-bold text-blue-700 group-hover:text-black mb-2">
            {topic}
          </h1>
          <p className="lg:text-md sm:text-md sm:py-6 py-3 text-white group-hover:text-black font-sans">
            {detailing}
          </p>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 sm:hidden flex items-center justify-center bg-black bg-opacity-80 px-4 py-8"
          onClick={closeModal}
        >
          <div className="relative max-w-5xl w-full">
            {/* Image Container with Close Button */}
            <div className="relative inline-block w-full">
              {/* Close Icon on Top-Right */}
              <FiX
                className="absolute top-2 right-2 text-white text-3xl shadow-2xl shadow-black cursor-pointer z-50"
                onClick={closeModal}
                size={45}
              />
              <img
                src={imagename}
                alt={topic}
                className="w-full h-auto rounded-xl border-white bg-black object-contain"
                style={{ maxHeight: '90vh' }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Archivements;
