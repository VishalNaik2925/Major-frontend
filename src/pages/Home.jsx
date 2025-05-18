import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Home = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Hero Section */}
      <section className={`py-20 ${isDarkMode ? 'bg-gradient-to-r from-blue-900 to-blue-700' : 'bg-gradient-to-r from-blue-600 to-blue-800'}`}>
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 text-white mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Personalized Health Recommendations</h1>
              <p className="text-xl mb-8">
                Advanced AI-powered medical analysis for accurate disease prediction and personalized health recommendations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/symptom-analyzer" className={`inline-flex items-center px-6 py-3 ${isDarkMode ? 'bg-blue-500 text-white hover:bg-blue-400' : 'bg-white text-blue-600 hover:bg-blue-50'} rounded-lg transition-colors shadow`}>
                  <i className="fas fa-stethoscope mr-2"></i> Analyze Symptoms
                </Link>
                <Link to="/xray-detection" className={`inline-flex items-center px-6 py-3 border-2 border-white text-white rounded-lg ${isDarkMode ? 'hover:bg-blue-500' : 'hover:bg-white hover:text-blue-600'} transition-colors shadow`}>
                  <i className="fas fa-x-ray mr-2"></i> Analyze X-ray
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <img src="/ai.png" alt="Medical AI" className="w-full max-w-lg mx-auto rounded-xl shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className={`text-3xl font-bold text-center mb-12 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className={`${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:shadow-xl'} p-6 rounded-lg shadow-lg transition-all`}>
              <div className="text-blue-600 text-3xl mb-4">
                <i className="fas fa-keyboard"></i>
              </div>
              <h3 className={`text-xl font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Input Symptoms</h3>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Enter your symptoms through our intuitive interface or use voice recognition for hands-free input.
              </p>
            </div>

            <div className={`${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:shadow-xl'} p-6 rounded-lg shadow-lg transition-all`}>
              <div className="text-blue-600 text-3xl mb-4">
                <i className="fas fa-brain"></i>
              </div>
              <h3 className={`text-xl font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>AI Analysis</h3>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Our advanced machine learning algorithms analyze your symptoms to predict potential health conditions.
              </p>
            </div>

            <div className={`${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:shadow-xl'} p-6 rounded-lg shadow-lg transition-all`}>
              <div className="text-blue-600 text-3xl mb-4">
                <i className="fas fa-clipboard-list"></i>
              </div>
              <h3 className={`text-xl font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Get Recommendations</h3>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Receive personalized health recommendations, medication suggestions, and lifestyle advice.
              </p>
            </div>

            <div className={`${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:shadow-xl'} p-6 rounded-lg shadow-lg transition-all`}>
              <div className="text-blue-600 text-3xl mb-4">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3 className={`text-xl font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Track Progress</h3>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Monitor your health metrics and track improvement over time with our comprehensive dashboard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Analysis Section */}
      <section className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-blue-50'}`}>
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className={`text-2xl md:text-3xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-blue-800'}`}>X-ray Detection</h2>
            <p className={`mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Our advanced deep learning model can analyze chest X-rays to detect conditions like pneumonia, tuberculosis, and other thoracic diseases with high accuracy.
            </p>
            <ul className="mb-6 space-y-2">
              <li className={`flex items-center ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}><i className="fas fa-check-circle text-blue-600 mr-2"></i> Upload chest X-ray images securely</li>
              <li className={`flex items-center ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}><i className="fas fa-check-circle text-blue-600 mr-2"></i> Get instant AI-powered analysis</li>
              <li className={`flex items-center ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}><i className="fas fa-check-circle text-blue-600 mr-2"></i> Visualize affected areas with heatmaps</li>
              <li className={`flex items-center ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}><i className="fas fa-check-circle text-blue-600 mr-2"></i> Receive detailed reports</li>
            </ul>
            <Link to="/xray-detection" className={`inline-block px-6 py-3 ${isDarkMode ? 'bg-blue-500 hover:bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'} text-white rounded-lg transition-colors font-semibold shadow`}>
              Try X-ray Detection
            </Link>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img src="/xray.png" alt="X-ray Analysis" className="rounded-xl shadow-lg w-full max-w-md" />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className={`text-3xl font-bold text-center mb-12 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Trusted by Users</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className={`${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:shadow-xl'} p-8 rounded-lg shadow-lg flex flex-col items-center text-center transition-all`}>
              <div className="text-blue-600 text-4xl mb-4">
                <i className="fas fa-user-circle"></i>
              </div>
              <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>"This tool helped me identify my condition when I wasn't sure whether to visit a doctor. The recommendations were spot on!"</p>
              <div className={`font-bold ${isDarkMode ? 'text-white' : 'text-blue-800'}`}>Sarah Johnson</div>
              <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Patient</div>
            </div>
            <div className={`${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:shadow-xl'} p-8 rounded-lg shadow-lg flex flex-col items-center text-center transition-all`}>
              <div className="text-blue-600 text-4xl mb-4">
                <i className="fas fa-user-md"></i>
              </div>
              <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>"I recommend this system to my patients for initial assessment. It helps them understand their symptoms better before their appointment."</p>
              <div className={`font-bold ${isDarkMode ? 'text-white' : 'text-blue-800'}`}>Dr. Michael Chen</div>
              <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>General Physician</div>
            </div>
            <div className={`${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:shadow-xl'} p-8 rounded-lg shadow-lg flex flex-col items-center text-center transition-all`}>
              <div className="text-blue-600 text-4xl mb-4">
                <i className="fas fa-user-circle"></i>
              </div>
              <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>"The X-ray analysis feature is incredibly impressive. It detected signs of pneumonia in my chest X-ray that were later confirmed by my doctor."</p>
              <div className={`font-bold ${isDarkMode ? 'text-white' : 'text-blue-800'}`}>Robert Williams</div>
              <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Patient</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-900'} text-white`}>
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Get Started Today</h2>
          <p className="text-xl mb-8">
            Take control of your health with our AI-powered recommendations.
          </p>
          <Link to="/symptom-analyzer" className={`inline-flex items-center px-8 py-4 ${isDarkMode ? 'bg-blue-500 hover:bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'} text-white rounded-lg transition-colors font-semibold shadow`}>
            Analyze Your Symptoms
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home; 