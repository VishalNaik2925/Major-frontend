import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Health Care Center</h3>
            <p className="text-gray-400 text-sm">
              Advanced AI-powered medical analysis for accurate disease prediction and personalized health recommendations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white">Home</Link>
              </li>
              <li>
                <Link to="/symptom-analyzer" className="text-gray-400 hover:text-white">Symptom Analyzer</Link>
              </li>
              <li>
                <Link to="/xray-detection" className="text-gray-400 hover:text-white">X-ray Detection</Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-gray-400 hover:text-white">Dashboard</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-gray-400 text-sm">
                123 Medical Center Ave, Health City
              </li>
              <li className="text-gray-400 text-sm">
                +1 (123) 456-7890
              </li>
              <li className="text-gray-400 text-sm">
                info@healthcarecenter.com
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-4 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Health Care Center. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 