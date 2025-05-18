import axios from 'axios';

const API_URL = '/api';

// Create axios instance with default config
const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Symptom-related API calls
export const symptomService = {
  // Get all available symptoms
  getSymptoms: async () => {
    try {
      const response = await apiClient.get('/symptoms');
      return response.data;
    } catch (error) {
      console.error('Error fetching symptoms:', error);
      throw error;
    }
  },
  
  // Predict disease based on symptoms
  predictDisease: async (symptoms) => {
    try {
      const response = await apiClient.post('/predict', { symptoms });
      return response.data;
    } catch (error) {
      console.error('Error predicting disease:', error);
      throw error;
    }
  },
  
  // Get autocomplete suggestions for symptoms
  getSuggestions: async (query) => {
    try {
      const response = await apiClient.get(`/symptoms/suggest?q=${query}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching symptom suggestions:', error);
      throw error;
    }
  }
};

// X-ray related API calls
export const xrayService = {
  // Analyze X-ray image
  analyzeXray: async (image) => {
    try {
      // Create form data for file upload
      const formData = new FormData();
      formData.append('xrayImage', image);
      
      const response = await axios.post(`${API_URL}/xray_predict`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      
      return response.data;
    } catch (error) {
      console.error('Error analyzing X-ray:', error);
      throw error;
    }
  }
};

// Health dashboard related API calls
export const dashboardService = {
  // Get user health data
  getHealthData: async () => {
    try {
      const response = await apiClient.get('/user/health-data');
      return response.data;
    } catch (error) {
      console.error('Error fetching health data:', error);
      // Return mock data for development
      return {
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
      };
    }
  },
  
  // Get recent health predictions
  getRecentPredictions: async () => {
    try {
      const response = await apiClient.get('/user/predictions');
      return response.data;
    } catch (error) {
      console.error('Error fetching recent predictions:', error);
      // Return mock predictions for development
      return [
        {
          id: 1,
          date: '2023-06-07',
          prediction: 'Low risk of cardiovascular disease',
          confidence: 0.85
        },
        {
          id: 2,
          date: '2023-06-06',
          prediction: 'Normal blood pressure range',
          confidence: 0.92
        }
      ];
    }
  },
  
  // Save health metrics
  saveHealthMetrics: async (metrics) => {
    try {
      const response = await apiClient.post('/user/metrics', metrics);
      return response.data;
    } catch (error) {
      console.error('Error saving health metrics:', error);
      throw error;
    }
  }
};

// Export all services
export default {
  symptomService,
  xrayService,
  dashboardService
}; 