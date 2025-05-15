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
      throw error;
    }
  },
  
  // Get recent health predictions
  getRecentPredictions: async () => {
    try {
      const response = await apiClient.get('/user/predictions');
      return response.data;
    } catch (error) {
      console.error('Error fetching recent predictions:', error);
      throw error;
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