import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { useAuth } from '../../context/AuthContext';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { isDarkMode, toggleTheme } = useTheme();
  const { logout } = useAuth();
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  
  const isActive = (path) => {
    return location.pathname === path;
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/symptom-analyzer', label: 'Symptom Analyzer' },
    { path: '/xray-detection', label: 'X-ray Detection' },
    { path: '/dashboard', label: 'Dashboard' }
  ];

  return (
    <nav className={`sticky top-0 z-50 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow`}>
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2" onClick={closeMobileMenu}>
          <img src="/ai.png" alt="Health Care Center Logo" className="h-10 w-10 object-contain" />
          <span className={`font-bold text-xl tracking-wide ${isDarkMode ? 'text-white' : 'text-blue-700'}`}>
            Health Care Center
          </span>
        </Link>

        <div className="md:hidden flex items-center gap-4">
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className={`w-10 h-10 flex items-center justify-center rounded-lg focus:outline-none transition-colors ${
              isDarkMode
                ? 'bg-gray-700 hover:bg-gray-600' 
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
            aria-label="Open menu"
          >
            <img 
              src="/ham.png" 
              alt="Menu" 
              className={`w-6 h-6 object-contain ${isDarkMode ? 'brightness-200' : ''}`}
            />
          </button>
        </div>

        {/* Navigation Links */}
        <ul className={`fixed md:static top-0 right-0 h-full w-72 md:w-auto 
          ${isDarkMode ? 'bg-gray-800 md:bg-transparent' : 'bg-white md:bg-transparent'}
          shadow-lg md:shadow-none flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4 p-6 md:p-0 
          transition-all duration-300 z-40 
          ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'}`}
        >
          {/* Close Button for Mobile Menu */}
          <li className="w-full md:hidden mb-4 flex justify-end">
            <button 
              onClick={closeMobileMenu}
              className={`flex items-center justify-center w-10 h-10 rounded-lg transition-colors ${
                isDarkMode 
                  ? 'bg-gray-700 hover:bg-gray-600' 
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
              aria-label="Close menu"
            >
              <img 
                src="/personal.png" 
                alt="Close" 
                className={`w-6 h-6 object-contain ${isDarkMode ? 'brightness-200' : ''}`}
              />
            </button>
          </li>

          {/* Navigation Items */}
          <li className="w-full md:w-auto">
            <Link 
              to="/" 
              className={`flex items-center justify-between px-3 py-2 rounded-md text-base font-medium transition-colors w-full ${
                isActive('/') 
                  ? (isDarkMode ? 'bg-gray-700 text-white' : 'bg-blue-100 text-blue-700')
                  : (isDarkMode ? 'text-gray-300 hover:bg-gray-700 hover:text-white' : 'text-gray-700 hover:bg-blue-50 hover:text-blue-700')
              }`}
              onClick={closeMobileMenu}
            >
              <div className="flex items-center gap-2">
                <i className="fas fa-home"></i>
                Home
              </div>
              <i className="fas fa-chevron-right md:hidden text-sm opacity-50"></i>
            </Link>
          </li>
          <li className="w-full md:w-auto">
            <Link 
              to="/symptom-analyzer" 
              className={`flex items-center justify-between px-3 py-2 rounded-md text-base font-medium transition-colors w-full ${
                isActive('/symptom-analyzer')
                  ? (isDarkMode ? 'bg-gray-700 text-white' : 'bg-blue-100 text-blue-700')
                  : (isDarkMode ? 'text-gray-300 hover:bg-gray-700 hover:text-white' : 'text-gray-700 hover:bg-blue-50 hover:text-blue-700')
              }`}
              onClick={closeMobileMenu}
            >
              <div className="flex items-center gap-2">
                <i className="fas fa-stethoscope"></i>
                Symptom Analyzer
              </div>
              <i className="fas fa-chevron-right md:hidden text-sm opacity-50"></i>
            </Link>
          </li>
          <li className="w-full md:w-auto">
            <Link 
              to="/xray-detection" 
              className={`flex items-center justify-between px-3 py-2 rounded-md text-base font-medium transition-colors w-full ${
                isActive('/xray-detection')
                  ? (isDarkMode ? 'bg-gray-700 text-white' : 'bg-blue-100 text-blue-700')
                  : (isDarkMode ? 'text-gray-300 hover:bg-gray-700 hover:text-white' : 'text-gray-700 hover:bg-blue-50 hover:text-blue-700')
              }`}
              onClick={closeMobileMenu}
            >
              <div className="flex items-center gap-2">
                <i className="fas fa-x-ray"></i>
                X-ray Detection
              </div>
              <i className="fas fa-chevron-right md:hidden text-sm opacity-50"></i>
            </Link>
          </li>
          <li className="w-full md:w-auto">
            <Link 
              to="/dashboard" 
              className={`flex items-center justify-between px-3 py-2 rounded-md text-base font-medium transition-colors w-full ${
                isActive('/dashboard')
                  ? (isDarkMode ? 'bg-gray-700 text-white' : 'bg-blue-100 text-blue-700')
                  : (isDarkMode ? 'text-gray-300 hover:bg-gray-700 hover:text-white' : 'text-gray-700 hover:bg-blue-50 hover:text-blue-700')
              }`}
              onClick={closeMobileMenu}
            >
              <div className="flex items-center gap-2">
                <i className="fas fa-chart-line"></i>
                Dashboard
              </div>
              <i className="fas fa-chevron-right md:hidden text-sm opacity-50"></i>
            </Link>
          </li>
          <li className="w-full md:w-auto">
            <Link 
              to="/about" 
              className={`flex items-center justify-between px-3 py-2 rounded-md text-base font-medium transition-colors w-full ${
                isActive('/about')
                  ? (isDarkMode ? 'bg-gray-700 text-white' : 'bg-blue-100 text-blue-700')
                  : (isDarkMode ? 'text-gray-300 hover:bg-gray-700 hover:text-white' : 'text-gray-700 hover:bg-blue-50 hover:text-blue-700')
              }`}
              onClick={closeMobileMenu}
            >
              <div className="flex items-center gap-2">
                <i className="fas fa-info-circle"></i>
                About
              </div>
              <i className="fas fa-chevron-right md:hidden text-sm opacity-50"></i>
            </Link>
          </li>

          {/* Logout Button */}
          <li className="w-full md:w-auto">
            <button
              onClick={handleLogout}
              className={`flex items-center justify-between px-3 py-2 rounded-md text-base font-medium transition-colors w-full ${
                isDarkMode 
                  ? 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  : 'text-gray-700 hover:bg-blue-50 hover:text-blue-700'
              }`}
            >
              <div className="flex items-center gap-2">
                <i className="fas fa-sign-out-alt"></i>
                Logout
              </div>
              <i className="fas fa-chevron-right md:hidden text-sm opacity-50"></i>
            </button>
          </li>

          {/* Theme Toggle - Now at the end */}
          <li className="w-full md:w-auto flex items-center">
            <button
              onClick={toggleTheme}
              className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200 ${
                isDarkMode
                  ? 'bg-gray-700 text-yellow-400 hover:bg-gray-600 hover:text-yellow-300'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'
              }`}
              aria-label="Toggle theme"
            >
              <span className="text-xl" role="img" aria-label={isDarkMode ? "Light mode" : "Dark mode"}>
                {isDarkMode ? '☀️' : '🌙'}
              </span>
            </button>
          </li>
        </ul>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-30 md:hidden"
            onClick={closeMobileMenu}
          ></div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 