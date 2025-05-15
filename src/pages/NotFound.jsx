import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 py-12">
      <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center max-w-lg w-full">
        <h1 className="text-7xl font-extrabold text-blue-700 mb-2">404</h1>
        <h2 className="text-2xl font-bold mb-2 text-gray-800">Page Not Found</h2>
        <p className="text-gray-500 mb-6 text-center">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link to="/" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold shadow">
          <i className="fas fa-home mr-2"></i> Back to Home
        </Link>
        <div className="mt-8 w-full flex justify-center">
          <img src="/static/img.png" alt="Not Found" className="h-32 w-32 object-contain rounded-full shadow" />
        </div>
      </div>
    </div>
  );
};

export default NotFound; 