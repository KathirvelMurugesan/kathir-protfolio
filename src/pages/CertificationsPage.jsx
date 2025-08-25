import React from 'react';
import CertificationCard from '../coponents/CertificationCard';
import guvi from '../assets/GuviCertification - 015Iu77306sBWqH921.png' 

// import aws from '../assets/certifications/aws.png';
// import python from '../assets/certifications/python.png';
// import ml from '../assets/certifications/ml.png';

const CertificationsPage = () => {
  const certifications = [
    {
      name: 'Guvi certification',
      provider: 'Guvi course provider',
      year: '2024',
      image: guvi,
    },
    {
      name: 'Python for Everybody',
      provider: 'University of Michigan (Coursera)',
      year: '2022',
      // image: python,
    },
    {
      name: 'Machine Learning Specialization',
      provider: 'DeepLearning.AI',
      year: '2024',
      // image: ml,
    },
    // Add more certs as needed
  ];

  return (
    <div className="min-h-screen px-6 py-12 bg-transparent text-white">
      <h1 className="text-4xl font-bold mb-8 text-center">My Certifications</h1>
      <div className="space-y-6 max-w-4xl mx-auto">
        {certifications.map((cert, index) => (
          <CertificationCard key={index} {...cert} />
        ))}
      </div>
    </div>
  );
};

export default CertificationsPage;
