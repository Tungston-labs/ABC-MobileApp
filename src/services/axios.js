import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const BASE_URL = 'https://api.aluvabroadband.com/api';

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

// Attach token before every request
api.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem('accessToken');
  if (!token) {
    // No token yet (user not logged in), skip attaching Authorization
    return config; 
  }
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});


// Handle 401s with token refresh
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const refreshToken = await AsyncStorage.getItem('refreshToken');
      if (!refreshToken) {
        console.log('No refresh token found. Skipping token refresh.');
        return Promise.reject(error); // Don't try refresh if token doesn't exist
      }

      try {
        const res = await axios.post(`${BASE_URL}auth/token/refresh/`, {
          refresh: refreshToken,
        });

        const { access, refresh } = res.data;
        await AsyncStorage.setItem('accessToken', access);
        await AsyncStorage.setItem('refreshToken', refresh);

        originalRequest.headers.Authorization = `Bearer ${access}`;
        return api(originalRequest);
      } catch (refreshError) {
        // console.error('Token refresh failed:', refreshError);
        await AsyncStorage.removeItem('accessToken');
        await AsyncStorage.removeItem('refreshToken');
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);


export default api;
