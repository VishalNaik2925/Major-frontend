import React, { useState, useEffect } from 'react';
import { dashboardService } from '../services/api';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import { useTheme } from '../context/ThemeContext';

// Register Chart.js components
Chart.register(...registerables);

const Dashboard = () => {
  const [healthData, setHealthData] = useState(null);
  const [predictions, setPredictions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const { isDarkMode } = useTheme();

  // Fetch data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        
        // In a real app, these would be actual API calls
        // For demo purposes, we'll use mock data
        
        /*
        const healthData = await dashboardService.getHealthData();
        const predictions = await dashboardService.getRecentPredictions();
        setHealthData(healthData);
        setPredictions(predictions);
        */
        
        // Mock health data
        setHealthData({
          vitals: {
            bloodPressure: { systolic: 120, diastolic: 80 },
            heartRate: 72,
            oxygenLevel: 98,
            temperature: 98.6,
            bmi: 24.5,
          },
          trends: {
            bloodPressure: [
              { date: '2023-01', systolic: 122, diastolic: 82 },
              { date: '2023-02', systolic: 121, diastolic: 81 },
              { date: '2023-03', systolic: 120, diastolic: 80 },
              { date: '2023-04', systolic: 118, diastolic: 78 },
              { date: '2023-05', systolic: 119, diastolic: 79 },
              { date: '2023-06', systolic: 120, diastolic: 80 },
            ],
            heartRate: [
              { date: '2023-01', value: 74 },
              { date: '2023-02', value: 73 },
              { date: '2023-03', value: 72 },
              { date: '2023-04', value: 71 },
              { date: '2023-05', value: 72 },
              { date: '2023-06', value: 72 },
            ],
            bmi: [
              { date: '2023-01', value: 25.1 },
              { date: '2023-02', value: 24.9 },
              { date: '2023-03', value: 24.8 },
              { date: '2023-04', value: 24.7 },
              { date: '2023-05', value: 24.6 },
              { date: '2023-06', value: 24.5 },
            ],
          },
          metrics: {
            steps: [
              { date: '2023-06-01', value: 8500 },
              { date: '2023-06-02', value: 9200 },
              { date: '2023-06-03', value: 7800 },
              { date: '2023-06-04', value: 10500 },
              { date: '2023-06-05', value: 9800 },
              { date: '2023-06-06', value: 8900 },
              { date: '2023-06-07', value: 9300 },
            ],
            sleep: [
              { date: '2023-06-01', value: 7.5 },
              { date: '2023-06-02', value: 6.8 },
              { date: '2023-06-03', value: 7.2 },
              { date: '2023-06-04', value: 8.1 },
              { date: '2023-06-05', value: 7.6 },
              { date: '2023-06-06', value: 6.9 },
              { date: '2023-06-07', value: 7.4 },
            ],
            water: [
              { date: '2023-06-01', value: 2.1 },
              { date: '2023-06-02', value: 1.8 },
              { date: '2023-06-03', value: 2.5 },
              { date: '2023-06-04', value: 2.3 },
              { date: '2023-06-05', value: 2.0 },
              { date: '2023-06-06', value: 1.9 },
              { date: '2023-06-07', value: 2.2 },
            ],
          },
          riskFactors: {
            cardiovascular: 'Low',
            diabetes: 'Low',
            respiratory: 'Medium',
            musculoskeletal: 'Low',
          },
        });
        
        // Mock predictions
        setPredictions([
          {
            date: '2023-06-05',
            symptoms: ['Cough', 'Fever', 'Fatigue'],
            prediction: { 'Common Cold': 85, 'Influenza': 35, 'COVID-19': 15 },
            recommendations: {
              medications: ['Rest', 'Hydration', 'Over-the-counter pain relievers'],
              diet: ['Warm soups', 'Herbal teas', 'Vitamin C rich foods'],
              lifestyle: ['Adequate rest', 'Avoid strenuous activities', 'Stay home']
            }
          },
          {
            date: '2023-05-20',
            symptoms: ['Headache', 'Nausea', 'Light sensitivity'],
            prediction: { 'Migraine': 92, 'Tension Headache': 28, 'Sinus Infection': 12 },
            recommendations: {
              medications: ['Pain relievers', 'Anti-nausea medication'],
              diet: ['Avoid triggering foods', 'Stay hydrated'],
              lifestyle: ['Rest in a dark, quiet room', 'Apply cold compresses']
            }
          }
        ]);
        
      } catch (error) {
        setError('Failed to load dashboard data. Please try again later.');
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // Chart options with dark mode support
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: isDarkMode ? '#fff' : '#1f2937',
          font: {
            size: 12,
            weight: 'bold'
          },
          padding: 20
        }
      },
      tooltip: {
        backgroundColor: isDarkMode ? 'rgba(17, 24, 39, 0.8)' : 'rgba(255, 255, 255, 0.8)',
        titleColor: isDarkMode ? '#fff' : '#1f2937',
        bodyColor: isDarkMode ? '#fff' : '#1f2937',
        borderColor: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
        borderWidth: 1,
        padding: 12,
        displayColors: true,
        mode: 'index',
        intersect: false
      }
    },
    scales: {
      y: {
        beginAtZero: false,
        grid: {
          color: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
          drawBorder: false,
          borderDash: [5, 5]
        },
        ticks: {
          color: isDarkMode ? '#fff' : '#1f2937',
          font: {
            size: 11
          },
          padding: 8
        }
      },
      x: {
        grid: {
          color: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
          drawBorder: false,
          borderDash: [5, 5]
        },
        ticks: {
          color: isDarkMode ? '#fff' : '#1f2937',
          font: {
            size: 11
          },
          padding: 8
        }
      }
    },
    interaction: {
      mode: 'index',
      intersect: false
    },
    elements: {
      line: {
        borderWidth: 2
      },
      point: {
        radius: 4,
        hoverRadius: 6,
        borderWidth: 2,
        backgroundColor: isDarkMode ? '#374151' : '#fff'
      }
    }
  };

  // Chart data with dark mode colors
  const bpChartData = {
    labels: healthData?.trends.bloodPressure.map(bp => bp.date) || [],
    datasets: [
      {
        label: 'Systolic',
        data: healthData?.trends.bloodPressure.map(bp => bp.systolic) || [],
        borderColor: isDarkMode ? 'rgba(239, 68, 68, 0.8)' : 'rgba(239, 68, 68, 1)',
        backgroundColor: isDarkMode ? 'rgba(239, 68, 68, 0.2)' : 'rgba(239, 68, 68, 0.1)',
        tension: 0.4,
        fill: true
      },
      {
        label: 'Diastolic',
        data: healthData?.trends.bloodPressure.map(bp => bp.diastolic) || [],
        borderColor: isDarkMode ? 'rgba(59, 130, 246, 0.8)' : 'rgba(59, 130, 246, 1)',
        backgroundColor: isDarkMode ? 'rgba(59, 130, 246, 0.2)' : 'rgba(59, 130, 246, 0.1)',
        tension: 0.4,
        fill: true
      }
    ]
  };

  const hrChartData = {
    labels: healthData?.trends.heartRate.map(hr => hr.date) || [],
    datasets: [
      {
        label: 'Heart Rate (BPM)',
        data: healthData?.trends.heartRate.map(hr => hr.value) || [],
        borderColor: isDarkMode ? 'rgba(245, 158, 11, 0.8)' : 'rgba(245, 158, 11, 1)',
        backgroundColor: isDarkMode ? 'rgba(245, 158, 11, 0.2)' : 'rgba(245, 158, 11, 0.1)',
        tension: 0.4,
        fill: true
      }
    ]
  };

  const stepsChartData = {
    labels: healthData?.metrics.steps.map(step => step.date.substring(8)) || [],
    datasets: [
      {
        label: 'Steps',
        data: healthData?.metrics.steps.map(step => step.value) || [],
        backgroundColor: isDarkMode ? 'rgba(75, 192, 192, 0.7)' : 'rgba(75, 192, 192, 0.6)',
      }
    ]
  };

  const sleepChartData = {
    labels: healthData?.metrics.sleep.map(sleep => sleep.date.substring(8)) || [],
    datasets: [
      {
        label: 'Sleep (hours)',
        data: healthData?.metrics.sleep.map(sleep => sleep.value) || [],
        backgroundColor: isDarkMode ? 'rgba(153, 102, 255, 0.7)' : 'rgba(153, 102, 255, 0.6)',
      }
    ]
  };

  // Chart data for risk factors
  const riskFactorsChartData = {
    labels: healthData ? Object.keys(healthData.riskFactors) : [],
    datasets: [
      {
        label: 'Risk Level',
        data: healthData ? Object.values(healthData.riskFactors).map(level => {
          switch(level) {
            case 'Low': return 1;
            case 'Medium': return 2;
            case 'High': return 3;
            default: return 0;
          }
        }) : [],
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)',
          'rgba(255, 159, 64, 0.6)',
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
        ],
      }
    ]
  };

  if (isLoading) {
    return (
      <div className={`min-h-screen py-8 px-4 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
        <div className="container mx-auto max-w-6xl">
          <h1 className={`text-3xl font-bold mb-8 text-center ${isDarkMode ? 'text-white' : 'text-blue-800'}`}>Health Dashboard</h1>
          {/* Tabs */}
          <div className="flex justify-center mb-8">
            <button
              className={`px-6 py-2 rounded-t-lg font-semibold focus:outline-none transition-colors ${
                activeTab === 'overview' 
                  ? (isDarkMode ? 'bg-gray-800 text-white shadow' : 'bg-white shadow text-blue-700')
                  : (isDarkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-800' : 'bg-blue-100 text-blue-600 hover:bg-white')
              }`}
              onClick={() => setActiveTab('overview')}
            >
              Overview
            </button>
            <button
              className={`px-6 py-2 rounded-t-lg font-semibold focus:outline-none transition-colors ${
                activeTab === 'predictions'
                  ? (isDarkMode ? 'bg-gray-800 text-white shadow' : 'bg-white shadow text-blue-700')
                  : (isDarkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-800' : 'bg-blue-100 text-blue-600 hover:bg-white')
              }`}
              onClick={() => setActiveTab('predictions')}
            >
              Predictions
            </button>
          </div>
          {/* Content */}
          <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg p-6`}>
            <div className="flex justify-center items-center h-40">
              <span className={`font-semibold text-lg ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>Loading...</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`min-h-screen py-8 px-4 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
        <div className="container mx-auto max-w-6xl">
          <h1 className={`text-3xl font-bold mb-8 text-center ${isDarkMode ? 'text-white' : 'text-blue-800'}`}>Health Dashboard</h1>
          {/* Tabs */}
          <div className="flex justify-center mb-8">
            <button
              className={`px-6 py-2 rounded-t-lg font-semibold focus:outline-none transition-colors ${
                activeTab === 'overview'
                  ? (isDarkMode ? 'bg-gray-800 text-white shadow' : 'bg-white shadow text-blue-700')
                  : (isDarkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-800' : 'bg-blue-100 text-blue-600 hover:bg-white')
              }`}
              onClick={() => setActiveTab('overview')}
            >
              Overview
            </button>
            <button
              className={`px-6 py-2 rounded-t-lg font-semibold focus:outline-none transition-colors ${
                activeTab === 'predictions'
                  ? (isDarkMode ? 'bg-gray-800 text-white shadow' : 'bg-white shadow text-blue-700')
                  : (isDarkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-800' : 'bg-blue-100 text-blue-600 hover:bg-white')
              }`}
              onClick={() => setActiveTab('predictions')}
            >
              Predictions
            </button>
          </div>
          {/* Content */}
          <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg p-6`}>
            <div className="text-red-600 text-center font-semibold">{error}</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen py-8 px-4 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <div className="container mx-auto max-w-6xl">
        <h1 className={`text-3xl font-bold mb-8 text-center ${isDarkMode ? 'text-white' : 'text-blue-800'}`}>Health Dashboard</h1>
        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <button
            className={`px-6 py-2 rounded-t-lg font-semibold focus:outline-none transition-colors ${
              activeTab === 'overview'
                ? (isDarkMode ? 'bg-gray-800 text-white shadow' : 'bg-white shadow text-blue-700')
                : (isDarkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-800' : 'bg-blue-100 text-blue-600 hover:bg-white')
            }`}
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </button>
          <button
            className={`px-6 py-2 rounded-t-lg font-semibold focus:outline-none transition-colors ${
              activeTab === 'predictions'
                ? (isDarkMode ? 'bg-gray-800 text-white shadow' : 'bg-white shadow text-blue-700')
                : (isDarkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-800' : 'bg-blue-100 text-blue-600 hover:bg-white')
            }`}
            onClick={() => setActiveTab('predictions')}
          >
            Predictions
          </button>
        </div>
        {/* Content */}
        <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg p-6`}>
          {activeTab === 'overview' && healthData && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Vitals */}
              <div className="space-y-6">
                <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-blue-50'} rounded-lg p-4 shadow flex flex-col gap-2`}>
                  <h2 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-blue-700'} mb-2`}>Vitals</h2>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex flex-col items-center">
                      <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`}>Blood Pressure</span>
                      <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-blue-800'}`}>{healthData.vitals.bloodPressure.systolic}/{healthData.vitals.bloodPressure.diastolic} mmHg</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`}>Heart Rate</span>
                      <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-blue-800'}`}>{healthData.vitals.heartRate} bpm</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`}>Oxygen</span>
                      <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-blue-800'}`}>{healthData.vitals.oxygenLevel}%</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`}>Temperature</span>
                      <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-blue-800'}`}>{healthData.vitals.temperature}&deg;F</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`}>BMI</span>
                      <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-blue-800'}`}>{healthData.vitals.bmi}</span>
                    </div>
                  </div>
                </div>
                {/* Risk Factors */}
                <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-blue-50'} rounded-lg p-4 shadow`}>
                  <h2 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-blue-700'} mb-2`}>Risk Factors</h2>
                  <ul className="space-y-1">
                    {Object.entries(healthData.riskFactors).map(([factor, value]) => (
                      <li key={factor} className="flex justify-between">
                        <span className={`capitalize ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{factor}</span>
                        <span className={`font-semibold ${
                          value === 'High' 
                            ? 'text-red-500' 
                            : value === 'Medium' 
                              ? (isDarkMode ? 'text-yellow-400' : 'text-yellow-600')
                              : (isDarkMode ? 'text-green-400' : 'text-green-600')
                        }`}>{value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* Charts */}
              <div className="space-y-8">
                <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-white'} rounded-lg p-6 shadow-lg`}>
                  <h3 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-blue-700'} mb-4`}>Blood Pressure Trend</h3>
                  <div className="h-[300px]">
                    <Line data={bpChartData} options={chartOptions} />
                  </div>
                </div>
                <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-white'} rounded-lg p-6 shadow-lg`}>
                  <h3 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-blue-700'} mb-4`}>Heart Rate Trend</h3>
                  <div className="h-[300px]">
                    <Line data={hrChartData} options={chartOptions} />
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeTab === 'predictions' && predictions && (
            <div className="space-y-6">
              {predictions.map((pred, idx) => (
                <div key={idx} className={`${isDarkMode ? 'bg-gray-700' : 'bg-blue-50'} rounded-lg p-6 shadow flex flex-col md:flex-row gap-8`}>
                  <div className="flex-1">
                    <h3 className={`font-bold ${isDarkMode ? 'text-white' : 'text-blue-800'} mb-2`}>Prediction on {pred.date}</h3>
                    <div className={`mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      <span className="font-semibold">Symptoms:</span> {pred.symptoms.join(', ')}
                    </div>
                    <div className="mb-2">
                      <span className={`font-semibold ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Predictions:</span>
                      <ul className="ml-4 list-disc">
                        {Object.entries(pred.prediction).map(([disease, percent]) => (
                          <li key={disease} className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                            {disease}: <span className={`font-semibold ${isDarkMode ? 'text-blue-400' : 'text-blue-700'}`}>{percent}%</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mb-2">
                      <span className={`font-semibold ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Recommendations:</span>
                      <ul className="ml-4 list-disc">
                        <li className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                          <span className="font-semibold">Medications:</span> {pred.recommendations.medications.join(', ')}
                        </li>
                        <li className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                          <span className="font-semibold">Diet:</span> {pred.recommendations.diet.join(', ')}
                        </li>
                        <li className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                          <span className="font-semibold">Lifestyle:</span> {pred.recommendations.lifestyle.join(', ')}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 