import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { teamMembers } from '../data/teamData';

const TeamMember = ({ name, year, photo, email, linkedin, github, role, description }) => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`rounded-lg shadow-lg overflow-hidden ${isDarkMode ? 'bg-gray-800' : 'bg-white'} h-full`}>
      <div className="relative h-48 sm:h-56 md:h-64">
        <img
          src={photo}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4 sm:p-6">
        <h3 className={`text-lg sm:text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          {name}
        </h3>
        <p className={`text-sm font-semibold mb-2 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
          {role}
        </p>
        <p className={`text-sm mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          Year {year} Student
        </p>
        <p className={`text-sm mb-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          {description}
        </p>
        <div className="space-y-2">
          <a
            href={`mailto:${email}`}
            className={`block text-sm ${isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500'}`}
          >
            {email}
          </a>
          <div className="flex space-x-4">
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-sm ${isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500'}`}
            >
              LinkedIn
            </a>
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-sm ${isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500'}`}
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Team = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`min-h-screen pt-16 sm:pt-20 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <h1 className={`text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-center ${isDarkMode ? 'text-white' : 'text-blue-800'}`}>
          Our Team
        </h1>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>

        {/* Project Idea Section */}
        <div className={`mt-12 sm:mt-16 rounded-lg shadow-lg p-4 sm:p-6 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <h2 className={`text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 ${isDarkMode ? 'text-white' : 'text-blue-800'}`}>
            Project Overview
          </h2>
          
          <div className="prose max-w-none">
            <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
              Chest X-ray Based Thoracic Disease Detection Using CNN
            </h3>
            
            <p className="mb-4">
              Our project leverages deep learning technology, specifically Convolutional Neural Networks (CNNs),
              to automatically detect thoracic diseases from chest X-ray images. The system can identify various
              conditions including pneumonia, tuberculosis, lung cancer, and pleural effusion with high accuracy.
            </p>

            <h4 className={`text-lg font-semibold mb-3 ${isDarkMode ? 'text-blue-300' : 'text-blue-700'}`}>
              System Architecture
            </h4>
            
            <div className="mb-6">
              <img
                src="/system.png"
                alt="System Architecture"
                className="w-full rounded-lg shadow-md"
              />
            </div>

            <h4 className={`text-lg font-semibold mb-3 ${isDarkMode ? 'text-blue-300' : 'text-blue-700'}`}>
              Key Components
            </h4>
            
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li>Image Preprocessing Module</li>
              <li>CNN Model (ResNet/DenseNet)</li>
              <li>Disease Classification Engine</li>
              <li>Grad-CAM Visualization System</li>
              <li>User Interface and Results Display</li>
            </ul>

            <h4 className={`text-lg font-semibold mb-3 ${isDarkMode ? 'text-blue-300' : 'text-blue-700'}`}>
              How It Works
            </h4>
            
            <ol className="list-decimal list-inside space-y-2 mb-6">
              <li>Upload chest X-ray image</li>
              <li>Preprocess and normalize the image</li>
              <li>Analyze using CNN model</li>
              <li>Generate disease prediction</li>
              <li>Create Grad-CAM visualization</li>
              <li>Display results with visual explanation</li>
            </ol>

            <h4 className={`text-lg font-semibold mb-3 ${isDarkMode ? 'text-blue-300' : 'text-blue-700'}`}>
              Benefits
            </h4>
            
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li>Faster and more accurate diagnoses</li>
              <li>Support for healthcare facilities in rural areas</li>
              <li>Reduced workload for radiologists</li>
              <li>Transparent and explainable results</li>
              <li>Early detection of thoracic diseases</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team; 