// src/services/dashboardService.js
import api from './axios'; // your axios instance

export const getDashboardCounts = async () => {
  const response = await api.get('/client/counts/');
  return response.data;
};



export const getLcoDashboardCounts = async () => {
  const response = await api.get('/lcos/dashboard/count/');
  return response.data;
};