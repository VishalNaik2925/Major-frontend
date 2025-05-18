import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const DeviceConnection = () => {
  const [isConnected, setIsConnected] = useState(false);
  const { isDarkMode } = useTheme();

  const handleConnect = () => {
    // Simulate connection process
    setIsConnected(true);
  };

  return (
    <div className={`p-6 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
        Device Connection
      </h2>
      
      <div className="space-y-4">
        <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
          <div className="flex items-center justify-between">
            <div>
              <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                {isConnected ? 'Device Connected' : 'Connect Your Device'}
              </h3>
              <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {isConnected ? 'Your device is successfully connected' : 'Connect your device to start monitoring'}
              </p>
            </div>
            <button
              onClick={handleConnect}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                isConnected
                  ? (isDarkMode ? 'bg-green-600 text-white' : 'bg-green-500 text-white')
                  : (isDarkMode ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-blue-500 text-white hover:bg-blue-600')
              }`}
            >
              {isConnected ? 'Connected' : 'Connect'}
            </button>
          </div>
        </div>

        {isConnected && (
          <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
            <h3 className={`text-lg font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Connection Status
            </h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Status
                </span>
                <span className={`text-sm font-medium ${isDarkMode ? 'text-green-400' : 'text-green-600'}`}>
                  Active
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Last Sync
                </span>
                <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Just now
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DeviceConnection; 