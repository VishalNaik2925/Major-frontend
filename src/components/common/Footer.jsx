import React from 'react';
import { useTheme } from '../../context/ThemeContext';

const Footer = () => {
  const { isDarkMode } = useTheme();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={`${isDarkMode ? 'bg-gray-900' : 'bg-gray-800'} text-white py-12`}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-between">
          {/* Company Info */}
          <div className="space-y-4 md:justify-self-start">
            <h3 className="text-2xl font-bold text-blue-400">Health Care Center</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Advanced AI-powered medical analysis for accurate disease prediction and personalized health recommendations.
              Our system leverages deep learning technology to assist healthcare professionals in making faster and more
              accurate diagnoses.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4 md:justify-self-end">
            <h3 className="text-xl font-bold text-blue-400">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 text-gray-400">
                <i className="fas fa-map-marker-alt text-blue-400"></i>
                <span>123 Medical Center Ave, Health City</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <i className="fas fa-phone text-blue-400"></i>
                <span>+1 (123) 456-7890</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <i className="fas fa-envelope text-blue-400"></i>
                <span>info@healthcarecenter.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Health Care Center. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 