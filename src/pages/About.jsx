import React from 'react';
import { useTheme } from '../context/ThemeContext';
import Team from './Team';
import Contact from './Contact';

const About = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`min-h-screen pt-16 sm:pt-20 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Project Overview */}
        <section className="mb-12 sm:mb-16">
          <h1 className={`text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            About Our Project
          </h1>
          <div className={`prose ${isDarkMode ? 'prose-invert' : ''} max-w-none`}>
            <p className="text-base sm:text-lg mb-3 sm:mb-4">
              Our project focuses on developing an advanced chest X-ray analysis system using Convolutional Neural Networks (CNNs)
              to detect various thoracic diseases. The system can identify conditions such as pneumonia, tuberculosis,
              lung cancer, and pleural effusion from chest X-ray images with high accuracy.
            </p>
            <p className="text-base sm:text-lg mb-3 sm:mb-4">
              By leveraging deep learning technology, we aim to assist healthcare professionals in making faster and more
              accurate diagnoses, particularly in areas where access to radiologists is limited. Our system includes
              Grad-CAM visualization to provide transparent and explainable results, showing exactly which areas of the
              X-ray influenced the model's decision.
            </p>
          </div>
        </section>

        {/* Project Goals */}
        <section className="mb-12 sm:mb-16">
          <h2 className={`text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Project Goals
          </h2>
          <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6`}>
            <div className={`p-4 sm:p-6 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
              <h3 className={`text-lg sm:text-xl font-semibold mb-2 sm:mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Accuracy
              </h3>
              <p className={`text-sm sm:text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Achieve high accuracy in detecting multiple thoracic diseases from chest X-ray images using advanced CNN models.
              </p>
            </div>
            <div className={`p-4 sm:p-6 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
              <h3 className={`text-lg sm:text-xl font-semibold mb-2 sm:mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Accessibility
              </h3>
              <p className={`text-sm sm:text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Make advanced diagnostic tools available to healthcare facilities in rural and underserved areas.
              </p>
            </div>
            <div className={`p-4 sm:p-6 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
              <h3 className={`text-lg sm:text-xl font-semibold mb-2 sm:mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Explainability
              </h3>
              <p className={`text-sm sm:text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Provide clear visual explanations of model decisions through Grad-CAM visualization for better trust and understanding.
              </p>
            </div>
            <div className={`p-4 sm:p-6 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
              <h3 className={`text-lg sm:text-xl font-semibold mb-2 sm:mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Efficiency
              </h3>
              <p className={`text-sm sm:text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Reduce diagnosis time and workload for radiologists while maintaining high accuracy in disease detection.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-12 sm:mb-16">
          <Team />
        </section>

        {/* Contact Section */}
        <section>
          <Contact />
        </section>
      </div>
    </div>
  );
};

export default About; 