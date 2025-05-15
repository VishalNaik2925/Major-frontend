import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const XrayDetection = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const { isDarkMode } = useTheme();

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAnalyze = () => {
    if (selectedFile) {
      setIsAnalyzing(true);
      // TODO: Implement X-ray analysis logic
      setTimeout(() => {
        setIsAnalyzing(false);
      }, 2000);
    }
  };

  return (
    <div className={`min-h-screen py-12 px-4 sm:px-6 lg:px-8 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <div className="max-w-4xl mx-auto">
        <div className={`text-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          <h1 className="text-4xl font-bold mb-4">X-ray Detection</h1>
          <p className={`text-lg mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Upload a chest X-ray image for AI-powered analysis and detection
          </p>
        </div>

        {/* Upload Section */}
        <div className={`p-6 rounded-lg shadow-lg mb-8 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <div className="mb-6">
            <label
              htmlFor="xray-upload"
              className={`flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer
                ${isDarkMode
                  ? 'border-gray-600 hover:border-gray-500'
                  : 'border-gray-300 hover:border-gray-400'
                }
              `}
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <i className={`fas fa-cloud-upload-alt text-4xl mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}></i>
                <p className={`mb-2 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  <span className="font-semibold">Click to upload</span> or drag and drop
                </p>
                <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  Supported formats: PNG, JPG, JPEG (max. 10MB)
                </p>
              </div>
              <input
                id="xray-upload"
                type="file"
                className="hidden"
                accept="image/*"
                onChange={handleFileSelect}
              />
            </label>
          </div>

          {/* Preview */}
          {preview && (
            <div className="mb-6">
              <h3 className={`text-lg font-medium mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Selected Image
              </h3>
              <div className="relative">
                <img
                  src={preview}
                  alt="X-ray preview"
                  className="w-full h-auto rounded-lg shadow-md"
                />
                <button
                  onClick={() => {
                    setSelectedFile(null);
                    setPreview(null);
                  }}
                  className="absolute top-2 right-2 p-2 rounded-full bg-red-500 text-white hover:bg-red-600 transition-colors"
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>
            </div>
          )}

          {/* Analyze Button */}
          <button
            onClick={handleAnalyze}
            disabled={!selectedFile || isAnalyzing}
            className={`w-full py-3 rounded-lg font-medium transition-colors ${
              !selectedFile || isAnalyzing
                ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                : isDarkMode
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            {isAnalyzing ? (
              <>
                <i className="fas fa-spinner fa-spin mr-2"></i>
                Analyzing...
              </>
            ) : (
              'Analyze X-ray'
            )}
          </button>
        </div>

        {/* Information Sections */}
        <div className={`grid md:grid-cols-2 gap-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          <div className={`p-6 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              <i className="fas fa-brain mr-2"></i>AI Detection Capabilities
            </h3>
            <ul className="space-y-2">
              <li>• Pneumonia detection</li>
              <li>• Tuberculosis screening</li>
              <li>• Lung nodule detection</li>
              <li>• Cardiomegaly assessment</li>
              <li>• Pleural effusion identification</li>
            </ul>
          </div>
          <div className={`p-6 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              <i className="fas fa-info-circle mr-2"></i>How It Works
            </h3>
            <ol className="space-y-2">
              <li>1. Upload a chest X-ray image</li>
              <li>2. Our AI analyzes the image</li>
              <li>3. Get detailed analysis results</li>
              <li>4. View highlighted areas of concern</li>
              <li>5. Receive preliminary findings</li>
            </ol>
          </div>
        </div>

        {/* Disclaimer */}
        <div className={`mt-8 p-4 rounded-lg ${isDarkMode ? 'bg-red-900/20 text-red-200' : 'bg-red-50 text-red-800'}`}>
          <div className="flex items-center">
            <i className="fas fa-exclamation-triangle mr-2"></i>
            <p className="font-medium">Important Disclaimer</p>
          </div>
          <p className="mt-2 text-sm">
            This tool is designed to assist healthcare professionals and should not be used as a substitute for professional medical diagnosis. Always consult with a qualified healthcare provider for proper interpretation of X-ray results.
          </p>
        </div>
      </div>
    </div>
  );
};

export default XrayDetection; 