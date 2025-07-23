// services/customerService.js
import api from './axios';

export const searchCustomers = async (searchText) => {
  try {
    const response = await api.get('client/my-customers/search/', {
      params: { search: searchText },
    });
    console.log('Customer search response:', response.data);
    return response.data.results; // <-- FIXED LINE
  } catch (error) {
    console.error('Error fetching customers:', error.response?.data || error.message);
    throw error;
  }
};

