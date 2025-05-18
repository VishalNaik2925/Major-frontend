import React, { useState, useEffect } from 'react';
import { dashboardService } from '../services/api';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import { useTheme } from '../context/ThemeContext';
import DeviceConnection from '../components/DeviceConnection';

// Register Chart.js components
Chart.register(...registerables);

const Dashboard = () => {
  const [healthData, setHealthData] = useState(null);
  const [predictions, setPredictions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [deviceId, setDeviceId] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const { isDarkMode } = useTheme();

  // Connect to device
  const connectToDevice = async (deviceId) => {
    try {
      // For now, just set the device as connected
      setDeviceId(deviceId);
      setIsConnected(true);
    } catch (error) {
      setError('Failed to connect to device. Please try again.');
      console.error(error);
      throw error;
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        
        // Get health data from dashboard service
        const healthDataResponse = await dashboardService.getHealthData();
        
        // Set the health data
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

        // Get predictions
        const predictions = await dashboardService.getRecentPredictions();
        setPredictions(predictions);
        
      } catch (error) {
        setError('Failed to load dashboard data. Please try again later.');
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [isConnected, deviceId]);

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
            <div className="flex justify-center items-center h-40">
              <span className={`font-semibold text-lg ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>{error}</span>
            </div>
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
          {activeTab === 'overview' && (
            <>
              {/* Device Connection */}
              <DeviceConnection
                onConnect={connectToDevice}
                isConnected={isConnected}
                deviceId={deviceId}
              />

              {/* Health Metrics Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {/* Blood Pressure */}
                <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-blue-50'}`}>
                  <h3 className={`text-lg font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-blue-800'}`}>Blood Pressure</h3>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Systolic</p>
                      <p className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-blue-900'}`}>
                        {healthData?.vitals.bloodPressure.systolic || '--'} mmHg
                      </p>
                    </div>
                    <div>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Diastolic</p>
                      <p className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-blue-900'}`}>
                        {healthData?.vitals.bloodPressure.diastolic || '--'} mmHg
                      </p>
                    </div>
                  </div>
                </div>

                {/* Heart Rate */}
                <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-red-50'}`}>
                  <h3 className={`text-lg font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-red-800'}`}>Heart Rate</h3>
                  <p className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-red-900'}`}>
                    {healthData?.vitals.heartRate || '--'} BPM
                  </p>
                </div>

                {/* Oxygen Level */}
                <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-green-50'}`}>
                  <h3 className={`text-lg font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-green-800'}`}>Oxygen Level</h3>
                  <p className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-green-900'}`}>
                    {healthData?.vitals.oxygenLevel || '--'}%
                  </p>
                </div>

                {/* Temperature */}
                <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-yellow-50'}`}>
                  <h3 className={`text-lg font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-yellow-800'}`}>Temperature</h3>
                  <p className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-yellow-900'}`}>
                    {healthData?.vitals.temperature || '--'}°F
                  </p>
                </div>
              </div>

              {/* Charts Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                {/* Blood Pressure Trend */}
                <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-white'} shadow`}>
                  <h3 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Blood Pressure Trend</h3>
                  <div className="h-64">
                    <Line data={bpChartData} options={chartOptions} />
                  </div>
                </div>

                {/* Heart Rate Trend */}
                <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-white'} shadow`}>
                  <h3 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Heart Rate Trend</h3>
                  <div className="h-64">
                    <Line data={hrChartData} options={chartOptions} />
                  </div>
                </div>
              </div>

              {/* Daily Metrics */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Steps */}
                <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-white'} shadow`}>
                  <h3 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Daily Steps</h3>
                  <div className="h-48">
                    <Bar data={stepsChartData} options={chartOptions} />
                  </div>
                </div>

                {/* Sleep */}
                <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-white'} shadow`}>
                  <h3 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Sleep Hours</h3>
                  <div className="h-48">
                    <Bar data={sleepChartData} options={chartOptions} />
                  </div>
                </div>

                {/* Risk Factors */}
                <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-white'} shadow`}>
                  <h3 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Risk Factors</h3>
                  <div className="h-48">
                    <Doughnut data={riskFactorsChartData} options={chartOptions} />
                  </div>
                </div>
              </div>
            </>
          )}
          {activeTab === 'predictions' && (
            <>
              {/* Rest of the predictions section */}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;