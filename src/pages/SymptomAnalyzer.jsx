import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const SymptomAnalyzer = () => {
  const [symptoms, setSymptoms] = useState([]);
  const [customSymptom, setCustomSymptom] = useState('');
  const { isDarkMode } = useTheme();
  
  const commonSymptoms = [
    'Fever', 'Cough', 'Headache', 'Fatigue', 'Nausea',
    'Sore Throat', 'Body Aches', 'Shortness of Breath',
    'Dizziness', 'Loss of Appetite'
  ];

  const handleAddSymptom = (symptom) => {
    if (!symptoms.includes(symptom)) {
      setSymptoms([...symptoms, symptom]);
    }
  };

  const handleRemoveSymptom = (symptom) => {
    setSymptoms(symptoms.filter(s => s !== symptom));
  };

  const handleAddCustomSymptom = (e) => {
    e.preventDefault();
    if (customSymptom.trim() && !symptoms.includes(customSymptom.trim())) {
      setSymptoms([...symptoms, customSymptom.trim()]);
      setCustomSymptom('');
    }
  };

  const handleAnalyze = () => {
    // TODO: Implement symptom analysis logic
    console.log('Analyzing symptoms:', symptoms);
  };

  return (
    <div className={`min-h-screen py-12 px-4 sm:px-6 lg:px-8 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <div className="max-w-4xl mx-auto">
        <div className={`text-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          <h1 className="text-4xl font-bold mb-4">Symptom Analyzer</h1>
          <p className={`text-lg mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Select your symptoms for AI-powered health analysis and recommendations
          </p>
        </div>

        {/* Symptom Selection */}
        <div className={`p-6 rounded-lg shadow-lg mb-8 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <h2 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Common Symptoms</h2>
          <div className="flex flex-wrap gap-2 mb-6">
            {commonSymptoms.map((symptom) => (
              <button
                key={symptom}
                onClick={() => handleAddSymptom(symptom)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                  ${symptoms.includes(symptom)
                    ? (isDarkMode ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-800')
                    : (isDarkMode
                        ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200')
                  }`}
              >
                {symptom}
              </button>
            ))}
          </div>

          {/* Custom Symptom Input */}
          <form onSubmit={handleAddCustomSymptom} className="mb-6">
            <div className="flex gap-2">
              <input
                type="text"
                value={customSymptom}
                onChange={(e) => setCustomSymptom(e.target.value)}
                placeholder="Enter custom symptom"
                className={`flex-1 px-4 py-2 rounded-lg border ${
                  isDarkMode
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                }`}
              />
              <button
                type="submit"
                className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                  isDarkMode
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                Add
              </button>
            </div>
          </form>

          {/* Selected Symptoms */}
          {symptoms.length > 0 && (
            <div className="mb-6">
              <h3 className={`text-lg font-medium mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Selected Symptoms
              </h3>
              <div className="flex flex-wrap gap-2">
                {symptoms.map((symptom) => (
                  <span
                    key={symptom}
                    className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                      isDarkMode
                        ? 'bg-blue-600 text-white'
                        : 'bg-blue-100 text-blue-800'
                    }`}
                  >
                    {symptom}
                    <button
                      onClick={() => handleRemoveSymptom(symptom)}
                      className="ml-2 focus:outline-none"
                    >
                      <i className="fas fa-times"></i>
                    </button>
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Analyze Button */}
          <button
            onClick={handleAnalyze}
            disabled={symptoms.length === 0}
            className={`w-full py-3 rounded-lg font-medium transition-colors ${
              symptoms.length === 0
                ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                : isDarkMode
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            Analyze Symptoms
          </button>
        </div>

        {/* Information Section */}
        <div className={`grid md:grid-cols-2 gap-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          <div className={`p-6 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              <i className="fas fa-info-circle mr-2"></i>How it Works
            </h3>
            <ul className="space-y-2">
              <li>1. Select or enter your symptoms</li>
              <li>2. Our AI analyzes your symptoms</li>
              <li>3. Get detailed health insights</li>
              <li>4. Receive personalized recommendations</li>
            </ul>
          </div>
          <div className={`p-6 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              <i className="fas fa-exclamation-triangle mr-2"></i>Important Note
            </h3>
            <p>
              This tool is for informational purposes only and should not replace professional medical advice. Always consult with a healthcare provider for proper diagnosis and treatment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SymptomAnalyzer; 